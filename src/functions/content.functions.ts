import { basename } from "@jsr/std__path";
import type { ArticleExport } from "@scope/util/blog";
import { createMiddleware, createServerFn } from "@tanstack/solid-start";
import { lazy } from "solid-js";
import * as v from "valibot";

type ArticleFiles = Record<string, { Article: ArticleExport }>;

export type PostMeta = {
  meta: ArticleExport["frontmatter"];
  slug: string;
  modifiedDate: Date;
  filename: string;
};

const removeExt = (filename: string) => {
  return basename(filename).split(".").slice(0, -1).join(".");
};

const getAllContentMiddleware = createMiddleware({ type: "function" })
  .server(async ({ next }) => {
    const modules = Object.entries(
      import.meta.glob("../content/*.tsx", { eager: true }) as ArticleFiles,
    );

    const articleFiles = await Promise.all(
      modules.map(async ([filename, module]) => {
        return [
          removeExt(filename),
          module.Article,
          await Deno.stat(`${import.meta.dirname}/${filename}`),
        ] as const;
      }),
    );

    return await next({
      context: {
        articles: articleFiles.map(([filename, article, { mtime }]) => ({
          meta: article.frontmatter,
          slug: filename.split(".").at(-1)!,
          modifiedDate: mtime,
          filename,
        } as PostMeta)),
      },
    });
  });

export const getAll = createServerFn()
  .middleware([getAllContentMiddleware])
  .handler(({ context }) => {
    return context.articles
      .filter(({ meta }) => Date.parse(meta.publishDate.toISOString()) <= Date.now());
  });

export const getFeatured = createServerFn()
  .middleware([getAllContentMiddleware])
  .handler(({ context }) => {
    return context.articles
      .filter(({ meta }) => Date.parse(meta.publishDate.toISOString()) <= Date.now())
      .filter(({ meta }) => meta.featured);
  });

export const getRecent = createServerFn()
  .middleware([getAllContentMiddleware])
  .handler(({ context }) => {
    return context.articles
      .filter(({ meta }) => Date.parse(meta.publishDate.toISOString()) <= Date.now())
      .filter(({ meta }) => !meta.featured);
  });

export const getForSlug = createServerFn()
  .middleware([getAllContentMiddleware])
  .inputValidator(v.object({ slug: v.string() }))
  .handler(({ context, data }) => {
    const results = context.articles.filter(({ slug }) => slug === data.slug);
    if (results.length !== 1) throw "unable to find single article..";
    return results[0];
  });

export const lazyContent = (filename: string) => {
  return lazy(async () => {
    const { Article } = await import(`../content/${filename}.tsx`) as { Article: ArticleExport };
    return { default: Article.component };
  });
};
