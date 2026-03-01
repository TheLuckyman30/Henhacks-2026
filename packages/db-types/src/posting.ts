import { z } from "zod";
import { UserOut } from "./user";

export const FindPostings = z.object({
  location: z.array(z.int()),
  range: z.int(),
});
export type FindPostings = z.infer<typeof FindPostings>;

export const MyPostingOut = z.object({
  id: z.cuid(),
  title: z.string(),
  description: z.string(),
  claimed: z.boolean(),
  createdAt: z.iso.datetime(),
});
export type MyPostingOut = z.infer<typeof MyPostingOut>;

export const PostingOut = z.object({
  id: z.cuid(),
  user: UserOut,
  title: z.string(),
  description: z.string(),
  distance: z.int(),
  claimed: z.boolean(),
  createdAt: z.iso.datetime(),
});
export type PostingOut = z.infer<typeof PostingOut>;

export const CreatePosting = z.object({
  userId: z.cuid(),
  title: z.string(),
  description: z.string(),
  location: z.array(z.float64()),
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
  claimed: z.boolean().optional(),
});
export type UpdatePosting = z.infer<typeof UpdatePosting>;
