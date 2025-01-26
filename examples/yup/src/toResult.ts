import * as yup from "yup";
import { Result } from "@repo/shared";

/**
 * Takes a callback function that should call the validateSync method
 * of a yup schema and returns a Result object.
 */
export function toResult<T>(validateSync: () => T): Result {
  try {
    const data = validateSync();
    return { success: true, data };
  } catch (e) {
    if (e instanceof yup.ValidationError) {
      return { success: false, errors: [e.message] };
    }

    return { success: false, errors: [e.toString()] };
  }
}
