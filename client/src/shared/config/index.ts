const requireEnv = (
  name: string,
  value?: string,
  defaultValue?: string,
): string => {
  if (value === undefined) {
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    throw new Error(`Env variable ${name} is required`);
  }
  return value || "";
};

export const API_URL = requireEnv(
  "NEXT_PUBLIC_API_URL",
  process.env.NEXT_PUBLIC_API_URL,
  "http://localhost:3000/api/v1",
);
