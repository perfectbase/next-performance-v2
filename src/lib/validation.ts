import { type ZodIssue } from "zod";

export function parseValidationError(error: unknown): string {
  if (typeof error === "string") {
    return error;
  }
  if (isZodIssue(error)) {
    return error.message;
  }
  return "Invalid value";
}

function isZodIssue(error: unknown): error is ZodIssue {
  return !!(
    typeof error === "object" &&
    error &&
    "message" in error &&
    "code" in error
  );
}
