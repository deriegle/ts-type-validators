import { Examples } from "@repo/shared";
import { Schema } from "effect";
import { isLeft } from "effect/Either";

export const examples = {
  basicString: (input) => {
    const result = Schema.decodeUnknownEither(Schema.String)(input);

    if (isLeft(result)) {
      return { success: false, errors: [result.left.message] };
    }

    return { success: true, data: result.right };
  },
} satisfies Examples;
