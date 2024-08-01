"use server";

import * as z from "zod";

import { LoginSchema } from "@/schemas";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validationFields = LoginSchema.safeParse(values);

  if (!validationFields.success) {
    return { error: "Inavlid feilds!" };
  }

  return { success: "Email sent!" };
};
