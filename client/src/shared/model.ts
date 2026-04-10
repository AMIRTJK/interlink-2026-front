export interface IApiError {
  message: string;
  code?: string;
  status?: number;
  data?: unknown;
  headers?: unknown;
}

export const USER_ROLE = {
  ADMIN: "admin",
  CANDIDATE: "candidate",
  UI: "ui",
} as const;

export type TUserRole = (typeof USER_ROLE)[keyof typeof USER_ROLE];

export type TMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
