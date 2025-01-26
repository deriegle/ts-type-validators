import { z } from "zod";
import { Examples } from "@repo/shared";
import { toResult } from "./toResult";

export const examples = {
  basicString: (i) => toResult(z.string().safeParse(i)),
} satisfies Examples;
