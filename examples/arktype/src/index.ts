import { Examples } from "@repo/shared";
import { type } from "arktype";
import { toResult } from "./toResult";

export const examples = {
  basicString: (i) => toResult(type("string"), i),
} satisfies Examples;
