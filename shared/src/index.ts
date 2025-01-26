type Success<T = unknown> = { success: true; data?: T };
type Failure = { success: false; errors: string[] };

export type Result = Success | Failure;

export type ValidationFunc = <Input>(input: Input) => Promise<Result> | Result;

export type Examples = {
  /**
   * This should just validate that the input is a string.
   * It does not need to do any minimum length validation, etc.
   */
  basicString: ValidationFunc;
  /**
   * This should validate that the input is an address object:
   * {
   *  street: string;
   *  street2?: string;
   *  city: string;
   *  state: "CA" | "NY" | "TX" | "FL" | etc...;
   *  zip: string;
   * }
   */
  address: ValidationFunc;
};
