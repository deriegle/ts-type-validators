import { examples as typescriptExamples } from "@examples/typescript";
import { examples as zodExamples } from "@examples/zod";
import { examples as yupExamples } from "@examples/yup";
import { type Examples } from "@repo/shared";

type Libraries = "typescript" | "zod" | "yup";
export const libraries = ["typescript", "zod", "yup"] satisfies Libraries[];

export const examples = {
  typescript: typescriptExamples,
  zod: zodExamples,
  yup: yupExamples,
} satisfies Record<Libraries, Examples>;
