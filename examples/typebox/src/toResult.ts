import { Result } from "@repo/shared";
import { TSchema } from "@sinclair/typebox";
import { Value } from "@sinclair/typebox/value";

export function toResult(schema: TSchema, value: unknown): Result {
  try {
    const result = Value.Parse(
      // these are required to be able to omit the "Convert" step in the pipeline
      // so that integers are not converted to strings, etc. A more strict format of parsing
      ["Clone", "Clean", "Default", "Assert", "Decode"],
      schema,
      value
    );
    return { success: true, data: result };
  } catch (error) {
    return { success: false, errors: [error] };
  }
}
