import { type Examples } from "@repo/shared";
import { isString } from "class-validator";

export const examples = {
  basicString: (input) =>
    /**
     * This is using the isString validation function, it's not necessary standard
     * for class-validator but it does work for these primitives
     */
    isString(input)
      ? { success: true, data: input }
      : { success: false, errors: ["Input is not a string"] },
} satisfies Examples;
