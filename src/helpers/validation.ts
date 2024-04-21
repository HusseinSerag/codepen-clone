import * as z from "zod";

export const signupValidation = z.object({
  email: z.string().email({ message: "Email is invalid" }),
  password: z
    .string()
    .min(8, { message: "Password should be atleast 8 characters long!" }),
});

export type ValidationSignUp = z.infer<typeof signupValidation>;
