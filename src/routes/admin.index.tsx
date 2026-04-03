import { Icon } from "#/components/icon.tsx";
import * as contentFns from "#/functions/content.functions.ts";
import { createFileRoute, Link } from "@tanstack/solid-router";
import { Index } from "solid-js";
import { ArchivePost } from "../components/card.post.tsx";

export const Route = createFileRoute("/admin/")({
  loader: async () => ({
    articles: await contentFns.getAll(),
  }),

  component: () => {
    const data = Route.useLoaderData();

    return (
      <>
        <section class="grid gap-2">
          <header>
            <Link
              to="/admin/article/edit/{-$postId}"
              class="b-1 b-emerald-500 flex items-center gap-1 rounded bg-emerald-700 px-4 py-2 text-white"
            >
              <Icon class="i-solar:add-square-outline" />
              <span>add new content</span>
            </Link>
          </header>

          <Index each={data().articles}>
            {(post) => (
              <Link to="/admin/article/edit/{-$postId}" params={{ postId: post().id }}>
                <ArchivePost post={post} />
              </Link>
            )}
          </Index>
        </section>
      </>
    );
  },
});
