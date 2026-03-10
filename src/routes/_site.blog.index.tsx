import * as contentFns from "#/functions/content.functions.ts";
import { createFileRoute, Link } from "@tanstack/solid-router";
import { Index } from "solid-js";

export const Route = createFileRoute("/_site/blog/")({
  loader: async () => ({
    recentArticles: await contentFns.getRecent(),
  }),

  component: () => {
    const data = Route.useLoaderData();

    return (
      <>
        <h1>Hello /blog/</h1>

        <Index each={data().recentArticles}>
          {(article) => (
            <div>
              <Link to="/blog/$slug" params={{ slug: article().slug }}>
                {article().meta.title}
              </Link>
            </div>
          )}
        </Index>
      </>
    );
  },
});
