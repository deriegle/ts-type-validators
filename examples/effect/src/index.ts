import { Examples } from "@repo/shared";
import { Schema } from "effect";
import { toResult } from "./toResult";

export const examples = {
  basicString: (i) => toResult(Schema.String, i),
} satisfies Examples;
