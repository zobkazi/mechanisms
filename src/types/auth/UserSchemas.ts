import { z } from "zod";

export const RegistrationSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  role: z.string().default("user"),
});

export const RegistrationHistorySchema = z.object({
  email: z.string(),
  ipAddress: z.string(),
  userAgent: z.string(),
  timestamp: z.date(),
});

export type UserDTO = z.infer<typeof RegistrationSchema>;

export const LoginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export const LoginHistorySchema = z.object({
  email: z.string(),
  action: z.string(),
  timestamp: z.date(),
});

export type LoginDTO = z.infer<typeof LoginSchema>;
