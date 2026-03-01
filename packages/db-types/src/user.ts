import { z } from "zod";

export const UserOut = z.object({
  id: z.cuid(),
  name: z.string(),
});
export type UserOut = z.infer<typeof UserOut>;

export const CreateUser = z.object({
  name: z.string(),
});
export type CreateUser = z.infer<typeof CreateUser>;

export const DeleteUser = z.object({
  id: z.cuid(),
});
export type DeleteUser = z.infer<typeof DeleteUser>;
