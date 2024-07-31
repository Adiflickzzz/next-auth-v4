"use server";
import * as z from "zod";
import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcrypt";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validationFields = RegisterSchema.safeParse(values);

  if (!validationFields.success) {
    return { error: "Invalid fields !" };
  }

  const { email, name, password } = validationFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use !" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // TODO: Send varification token 

  return { success: "User created successfully !" };
};
