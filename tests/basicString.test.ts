import { describe, test, expect, beforeAll, assert } from "vitest";
import { libraries, examples } from "./examples";
import { ValidationFunc } from "@repo/shared";

const validInputs = ["hello", ""];
const invalidInputs = [0, undefined, null];

describe("basicString", () => {
  describe.each(libraries)(`%s`, (library) => {
    let validation: ValidationFunc;

    beforeAll(() => {
      validation = examples[library].basicString;
    });

    test.each(validInputs)(
      'Input: "%s" should be a valid input',
      async (input) => {
        const result = await validation(input);

        expect(result.success).toBe(true);
        assert(result.success); // type assertion to be able to access result.data
        expect(result.data).toBe(input);
      }
    );

    test.each(invalidInputs)('Input: "%s" should be invalid', async (input) => {
      const result = await validation(input);

      expect(result.success).toBe(false);
      assert(!result.success); // type assertion to be able to access result.errors
      expect(result.errors.length).toBeGreaterThan(0);
    });
  });
});
