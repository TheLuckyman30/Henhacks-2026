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
  category: z.string(),
  tags: z.array(z.string()),
  createdAt: z.iso.datetime(),
});
export type MyPostingOut = z.infer<typeof MyPostingOut>;

export const PostingOut = z.object({
  id: z.cuid(),
  user: UserOut,
  title: z.string(),
  description: z.string(),
  distance: z.int(),
  address: z.string(),
  claimed: z.boolean(),
  category: z.string(),
  tags: z.array(z.string()),
  createdAt: z.iso.datetime(),
});
export type PostingOut = z.infer<typeof PostingOut>;

export const CreatePosting = z.object({
  userId: z.cuid(),
  title: z.string(),
  description: z.string(),
  category: z.string(),
  tags: z.array(z.string()),
  address: z.string(),
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
  address: z.string().optional(),
  location: z.array(z.float64()).optional(),
  category: z.string().optional(),
  tags: z.array(z.string()).optional(),
});
export type UpdatePosting = z.infer<typeof UpdatePosting>;
