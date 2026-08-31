import { RecentPost } from "#/components/card.post.tsx";
import * as contentFns from "#/functions/content.functions.ts";
import { createFileRoute } from "@tanstack/solid-router";
import { Index } from "solid-js";

export const Route = createFileRoute("/_site/blog/")({
  loader: async () => ({
    posts: await contentFns.getRecent(),
  }),

  component: () => {
    const data = Route.useLoaderData();

    return (
      <section>
        <header class="flex items-baseline font-mono text-stone-400">
          <h1 class="grow">Archive</h1>
        </header>

        <Index each={data().posts}>{(post) => <RecentPost post={post} />}</Index>
      </section>
    );
  },
});
