import { Result } from "@repo/shared";
import { Type, type } from "arktype";

export function toResult<T extends Type>(schema: T, input: unknown): Result {
  const result = schema(input);

  if (result instanceof type.errors) {
    return { success: false, errors: [result.summary] };
  }

  return { success: true, data: result };
}
