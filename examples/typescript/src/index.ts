import { type Examples } from "@repo/shared";

export const examples = {
  basicString: (input) =>
    typeof input === "string"
      ? { success: true, data: input }
      : { success: false, errors: ["Input is not a string"] },
  address: (input) =>
    typeof input === "object" &&
    input !== null &&
    !Array.isArray(input) &&
    "street" in input &&
    "city" in input &&
    "state" in input &&
    "zip" in input &&
    typeof input.street === "string" &&
    typeof input.city === "string" &&
    typeof input.state === "string" &&
    typeof input.zip === "string" &&
    input.street.length >= 1 &&
    input.city.length >= 1 &&
    input.state.length === 2 &&
    input.zip.length >= 5
      ? { success: true, data: input }
      : { success: false, errors: ["Input is not an address object"] },
} satisfies Examples;
