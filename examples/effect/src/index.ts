import { type Examples } from "@repo/shared";
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
  address: (input) => {
    const schema = Schema.Struct({
      street: Schema.NonEmptyString,
      street2: Schema.optional(Schema.String),
      city: Schema.NonEmptyString,
      state: Schema.NonEmptyString.pipe(Schema.length(2)),
      zip: Schema.NonEmptyString.pipe(Schema.length(5)),
    });

    const result = Schema.decodeUnknownEither(schema)(input);

    if (isLeft(result)) {
      return { success: false, errors: [result.left.message] };
    }

    return { success: true, data: result.right };
  },
} satisfies Examples;
