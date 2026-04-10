import axios from "axios";
import { API_URL } from "@/shared/config";
import { IApiError } from "../model";

export const BASE_URL = API_URL;

export const BASE_DOMAIN = BASE_URL.startsWith("http")
  ? new URL(BASE_URL).origin
  : "";

export const _axios = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const getDeviceId = () => {
  if (typeof window === "undefined") {
    return "server-device-id";
  }

  let deviceId = localStorage.getItem("deviceId");
  if (!deviceId) {
    deviceId =
      "dev-" +
      Math.random().toString(36).substring(2, 10) +
      Date.now().toString(36);
    localStorage.setItem("deviceId", deviceId);
  }
  return deviceId;
};

_axios.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    config.headers["X-Device-ID"] = getDeviceId();

    return config;
  },
  (error) => Promise.reject(error),
);

_axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const apiError: IApiError = {
      message:
        error.response?.data?.message ||
        error.message ||
        "Хатогии номаълум рух дод",
      status: error.response?.status,
      code: error.response?.data?.code,
      data: error.response?.data,
      headers: error.response?.headers,
    };

    if (error.response?.status === 401 && typeof window !== "undefined") {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      window.dispatchEvent(new Event("unauthorized"));
    }

    console.error("API Error:", apiError);
    return Promise.reject(apiError);
  },
);
