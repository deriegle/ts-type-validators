import * as yup from "yup";
import { Examples } from "@repo/shared";
import { toResult } from "./toResult";

export const examples = {
  basicString: (i: unknown) => toResult(() => yup.string().validateSync(i)),
} satisfies Examples;
