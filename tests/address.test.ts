import { describe, test, expect, beforeAll, assert } from "vitest";
import { libraries, examples } from "./examples";
import { ValidationFunc } from "@repo/shared";

const validInputs = [
  {
    street: "123 Main St",
    city: "San Francisco",
    state: "CA",
    zip: "94105",
  },
  {
    street: "123 Main St",
    street2: "Apt 1",
    city: "San Francisco",
    state: "CA",
    zip: "94105",
  },
  {
    street: "123 Main St",
    street2: "Apt 1",
    city: "Columbus",
    state: "OH",
    zip: "43202",
  },
];

const invalidInputs = [
  // 0,
  // undefined,
  // null,
  { street: "123 Main St" },
  {
    street: 10,
    city: "Columbus",
    state: "OH",
    zip: "43202",
  },
  {
    street: "",
    city: "Columbus",
    state: "OH",
    zip: "43202",
  },
  {
    street: "123 Main St",
    city: "San Francisco",
    state: "Banana",
    zip: "94105",
  },
  {
    street: "123 Main St",
    city: "San Francisco",
    state: "Banana",
    zip: "1",
  },
];

describe("address", () => {
  describe.each(libraries)(`%s`, (library) => {
    let validation: ValidationFunc;

    beforeAll(() => {
      validation = examples[library].address;
    });

    test.each(validInputs)(
      'Input: "%s" should be a valid input',
      async (input) => {
        const result = await validation(input);

        expect(result).toMatchObject({
          success: true,
          data: input,
        });
      }
    );

    test.each(invalidInputs)('Input: "%s" should be invalid', async (input) => {
      const result = await validation(input);

      expect(result).toMatchObject({
        success: false,
        errors: expect.any(Array),
      });

      assert(!result.success); // type assertion to be able to access result.errors
      expect(result.errors.length).toBeGreaterThan(0);
    });
  });
});
