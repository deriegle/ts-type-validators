import { type Examples } from "@repo/shared";
import { type } from "arktype";

export const examples = {
  basicString: (input) => {
    const result = type("string")(input);

    if (result instanceof type.errors) {
      return { success: false, errors: [result.summary] };
    }

    return { success: true, data: result };
  },
  address: (input) => {
    const schema = type({
      street: type("string").atLeastLength(2),
      street2: type("string").optional(),
      city: type("string").atLeastLength(2),
      state: type("string").exactlyLength(2),
      zip: type("string").exactlyLength(5),
    });

    const result = schema(input);

    if (result instanceof type.errors) {
      return { success: false, errors: [result.summary] };
    }

    return { success: true, data: result };
  },
} satisfies Examples;
