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
} satisfies Examples;
