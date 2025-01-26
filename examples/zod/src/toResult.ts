import { z } from "zod";
import { Result } from "@repo/shared";

export function toResult<A, B>(result: z.SafeParseReturnType<A, B>): Result {
  if (result.success) {
    return result;
  }

  return {
    success: false,
    errors: result.error.errors.map((error) => error.message),
  };
}
