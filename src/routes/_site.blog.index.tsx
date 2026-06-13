import { RecentPost } from "#/components/card.post.tsx";
import * as contentFns from "#/functions/content.functions.ts";
import { createFileRoute } from "@tanstack/solid-router";
import { Index } from "solid-js";

export const Route = createFileRoute("/_site/blog/")({
  loader: async () => ({
    posts: await contentFns.getAll(),
  }),

  component: () => {
    const data = Route.useLoaderData();

    return (
      <div>
        <Index each={data().posts}>{(post) => <RecentPost post={post} />}</Index>
      </div>
    );
  },
});
