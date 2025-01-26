import { Examples } from "@repo/shared";

export const examples = {
  basicString: (i) =>
    typeof i === "string"
      ? { success: true, data: i }
      : { success: false, errors: ["Input is not a string"] },
} satisfies Examples;
