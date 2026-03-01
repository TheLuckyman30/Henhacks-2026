import { z } from "zod";
import { UserOut } from "./user";

export const PostingOut = z.object({
  id: z.cuid(),
  user: UserOut,
  title: z.string(),
  description: z.string(),
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
});
export type PostingOut = z.infer<typeof PostingOut>;

export const CreatePosting = z.object({
  userId: z.cuid(),
  title: z.string(),
  description: z.string(),
});
export type CreatePosting = z.infer<typeof CreatePosting>;

export const DeletePosting = z.object({
  id: z.cuid(),
});
export type DeletePosting = z.infer<typeof DeletePosting>;

export const UpdatePosting = z.object({
  id: z.cuid(),
  title: z.string().optional(),
  description: z.string().optional(),
});
export type UpdatePosting = z.infer<typeof UpdatePosting>;
