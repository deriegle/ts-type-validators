import { type Examples } from "@repo/shared";
import {
  IsOptional,
  IsString,
  isString,
  Length,
  validateSync,
} from "class-validator";

export const examples = {
  basicString: (input) =>
    /**
     * This is using the isString validation function, it's not necessary standard
     * for class-validator but it does work for these primitives
     */
    isString(input)
      ? { success: true, data: input }
      : { success: false, errors: ["Input is not a string"] },
  address: (input) => {
    class Address {
      @IsString()
      @Length(1)
      street: string;

      @IsString()
      @IsOptional()
      street2?: string;

      @IsString()
      @Length(1)
      city: string;

      @IsString()
      @Length(2, 2)
      state: string;

      @IsString()
      @Length(5, 5)
      zip: string;

      constructor(obj: any) {
        this.street = obj.street;
        this.street2 = obj.street2;
        this.city = obj.city;
        this.state = obj.state;
        this.zip = obj.zip;
      }
    }

    const address = new Address(input);
    const errors = validateSync(address);

    if (errors.length) {
      return {
        success: false,
        errors: errors.map((error) => error.toString()),
      };
    }

    return { success: true, data: input };
  },
} satisfies Examples;
