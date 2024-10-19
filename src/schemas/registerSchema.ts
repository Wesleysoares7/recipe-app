import { z } from "zod";

export const registerSchema = z.object({
    name: z.string().min(2),
    email: z.string().email().min(1),
    password: z.string().min(6)
})

export type Register= z.infer<typeof registerSchema>