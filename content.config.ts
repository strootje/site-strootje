import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMarkdown } from "@content-collections/markdown";
import * as v from "valibot";

const posts = defineCollection({
  directory: "./src/content",
  name: "posts",
  include: "**/*.md",
  schema: v.object({
    title: v.string(),
    description: v.string(),
    publishDate: v.pipe(v.string(), v.toDate()),
    featured: v.optional(v.boolean(), false),
    content: v.string(),
  }),

  transform: async (document, context) => {
    const html = await compileMarkdown(context, document);

    return {
      ...document,
      slug: document._meta.path.split(".").at(-1),
      modifiedDate: new Date(),
      tagClass: undefined as undefined | string,
      html,
    };
  },
});

export default defineConfig({
  content: [posts],
});
