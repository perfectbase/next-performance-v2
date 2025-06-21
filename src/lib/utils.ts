import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getBaseUrl() {
  // Use relative path if from the browser
  if (typeof window !== "undefined") return "";
  // Use production URL Vercel's production deployment
  if (process.env.VERCEL_ENV === "production") {
    return process.env.VERCEL_PROJECT_PRODUCTION_URL;
  }
  // Use the generated Vercel URL for preview deployments
  const vc = process.env.VERCEL_URL;
  if (vc) return "https://" + vc;
  // For production builds running locally
  return "http://localhost:3000";
}
