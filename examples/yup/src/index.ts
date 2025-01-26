import * as yup from "yup";
import { Examples } from "@repo/shared";
import { toResult } from "./toResult";

export const examples = {
  basicString: (i: unknown) =>
    // must be defined() because yup.string() allows undefined
    // must be strict otherwise numbers will be turned into strings
    toResult(() => yup.string().defined().validateSync(i, { strict: true })),
} satisfies Examples;
