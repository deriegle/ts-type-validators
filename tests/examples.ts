import { examples as arktypeExamples } from "@examples/arktype";
import { examples as classValidatorExamples } from "@examples/class-validator";
import { examples as effectExamples } from "@examples/effect";
import { examples as typeboxExamples } from "@examples/typebox";
import { examples as typescriptExamples } from "@examples/typescript";
import { examples as zodExamples } from "@examples/zod";
import { examples as yupExamples } from "@examples/yup";
import { type Examples } from "@repo/shared";

type Libraries =
  | "arktype"
  | "class-validator"
  | "effect"
  | "typebox"
  | "typescript"
  | "zod"
  | "yup";

export const libraries = [
  "arktype",
  "class-validator",
  "effect",
  "typebox",
  "typescript",
  "yup",
  "zod",
] satisfies Libraries[];

export const examples = {
  arktype: arktypeExamples,
  "class-validator": classValidatorExamples,
  effect: effectExamples,
  typebox: typeboxExamples,
  typescript: typescriptExamples,
  zod: zodExamples,
  yup: yupExamples,
} satisfies Record<Libraries, Examples>;
