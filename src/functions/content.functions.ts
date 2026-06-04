import { createServerFn } from "@tanstack/solid-start";
import { allPosts } from "content-collections";
import { isBefore } from "date-fns/fp";
import * as v from "valibot";

export type Post = typeof allPosts[number];

export const getAll = createServerFn()
  .handler(() => {
    return allPosts
      .filter((post) => isBefore(new Date(), post.publishDate));
  });

export const getFeatured = createServerFn()
  .handler(() => {
    return allPosts
      .filter((post) => post.featured)
      .filter((post) => isBefore(new Date(), post.publishDate));
  });

export const getRecent = createServerFn()
  .handler(() => {
    return allPosts
      .filter((post) => !post.featured)
      .filter((post) => isBefore(new Date(), post.publishDate));
  });

export const getForSlug = createServerFn()
  .inputValidator(v.object({ slug: v.string() }))
  .handler(({ data }) => {
    const result = allPosts
      .find((post) => post.slug === data.slug);
    if (!result) throw "unable to find single article..";
    return result;
  });
