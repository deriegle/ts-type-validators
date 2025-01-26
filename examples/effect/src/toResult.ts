import { Result } from "@repo/shared";
import { Schema } from "effect";
import { isLeft } from "effect/Either";

export function toResult(schema: Schema.Schema<any>, input: unknown): Result {
  const result = Schema.decodeUnknownEither(schema)(input);

  if (isLeft(result)) {
    return { success: false, errors: [result.left.message] };
  }

  return { success: true, data: result.right };
}
