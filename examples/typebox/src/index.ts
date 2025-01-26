import { Examples } from "@repo/shared";
import { Type } from "@sinclair/typebox";
import { toResult } from "./toResult";

export const examples = {
  basicString: (i) => toResult(Type.String({}), i),
} satisfies Examples;
