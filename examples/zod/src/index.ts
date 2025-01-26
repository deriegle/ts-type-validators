import { z } from "zod";
import { Examples } from "@repo/shared";

export const examples = {
  basicString: (input) => {
    const result = z.string().safeParse(input);

    if (result.success) {
      return result;
    }

    return {
      success: false,
      errors: result.error.errors.map((error) => error.message),
    };
  },
} satisfies Examples;
