import { z } from "zod";
import { type Examples } from "@repo/shared";

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
  address: (input) => {
    const result = z
      .object({
        street: z.string().min(1),
        street2: z.string().optional(),
        city: z.string().min(1),
        state: z.string().length(2),
        zip: z.string().min(5),
      })
      .safeParse(input);

    if (result.success) {
      return result;
    }

    return {
      success: false,
      errors: result.error.errors.map((error) => error.message),
    };
  },
} satisfies Examples;
