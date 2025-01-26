import { type Examples } from "@repo/shared";
import { Type } from "@sinclair/typebox";
import { Value } from "@sinclair/typebox/value";

export const examples = {
  basicString: (input) => {
    const schema = Type.String({});

    try {
      const result = Value.Parse(
        // these are required to be able to omit the "Convert" step in the pipeline
        // so that integers are not converted to strings, etc. A more strict format of parsing
        ["Clone", "Clean", "Default", "Assert", "Decode"],
        schema,
        input
      );

      return { success: true, data: result };
    } catch (error) {
      return {
        success: false,
        errors: [typeof error === "string" ? error : `${error}`],
      };
    }
  },
} satisfies Examples;
