import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

export function getBaseUrl() {
  // Use relative path if from the browser
  if (typeof window !== "undefined") return "";
  // Use production URL for Vercel's production deployment
  if (process.env.VERCEL_ENV === "production") {
    return "https://" + process.env.VERCEL_PROJECT_PRODUCTION_URL;
  }
  // Use the generated Vercel URL for preview deployments
  if (process.env.VERCEL_URL) return "https://" + process.env.VERCEL_URL;
  // For production builds running locally
  return "http://localhost:3000";
}
