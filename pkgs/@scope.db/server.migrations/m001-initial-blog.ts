import type { Migration } from "kysely";

export const m001_initial_blog: Migration = {
  up: async ({ schema }) => {
    await schema.createTable("content")
      .addColumn("id", "text", (col) => col.primaryKey())
      .addColumn("slug", "text", (col) => col.notNull())
      .addColumn("featured", "boolean", (col) => col.notNull())
      .addColumn("title", "text", (col) => col.notNull())
      .addColumn("description", "text", (col) => col.notNull())
      .addColumn("content", "text", (col) => col.notNull())
      .addColumn("publishDate", "date", (col) => col.notNull())
      .addColumn("createdDate", "text", (col) => col.notNull())
      .addColumn("modifiedDate", "date", (col) => col.notNull())
      .execute();
  },
};
