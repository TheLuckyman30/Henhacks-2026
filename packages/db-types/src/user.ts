import { z } from "zod";

export const UserOut = z.object({
  sus: z.int(),
});
export type UserOut = z.infer<typeof UserOut>;
