import { z } from "zod";

export const RegistrationSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  role: z.string(),
});
