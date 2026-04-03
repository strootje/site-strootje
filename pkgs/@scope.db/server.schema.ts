import * as v from "valibot";

export const content$ = v.object({
  id: v.string(),
  slug: v.string(),
  featured: v.number(),
  title: v.string(),
  description: v.string(),
  content: v.string(),
  publishDate: v.string(),
  createdDate: v.string(),
  modifiedDate: v.string(),
});

export type Content = v.InferOutput<typeof content$>;

export type ServerDatabase = {
  content: Content;
};
