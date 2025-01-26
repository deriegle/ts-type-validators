import * as yup from "yup";
import { type Examples } from "@repo/shared";

export const examples = {
  basicString: (input) => {
    try {
      // must use defined() because yup.string() allows undefined
      // must be strict otherwise numbers will be turned into strings
      const data = yup.string().defined().validateSync(input, { strict: true });
      return { success: true, data };
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        return { success: false, errors: [error.message] };
      }

      return { success: false, errors: [`${error}`] };
    }
  },
} satisfies Examples;
