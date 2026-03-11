import { ArchivePost, RecentPost } from "#/components/card.post.tsx";
import { Icon } from "#/components/icon.tsx";
import * as contentFns from "#/functions/content.functions.ts";
import { createFileRoute, Link } from "@tanstack/solid-router";
import { Index } from "solid-js";

export const Route = createFileRoute("/_site/blog/page-{$page}")({
  loader: async () => ({
    allPosts: await contentFns.getAll(),
  }),

  component: () => {
    const data = Route.useLoaderData();

    return (
      <>
        <header class="bg-emerald-700 bg-hero-wiggle-black/5 p-8 text-stone-200">
          <h1 class="text-2xl">alles wat ik te zeggen heb..</h1>
        </header>

        <div class="b-1 b-stone-200 grid divide-y divide-stone-200">
          <Index each={data().allPosts}>
            {(post, i) => i < 3 ? <RecentPost post={post} /> : <ArchivePost post={post} />}
          </Index>
        </div>

        <nav class="grid justify-center">
          <ul class="flex">
            <li>
              <button type="button">
                <Icon class="i-solar:arrow-left-outline" />
              </button>
            </li>

            <li>
              <Link to="/blog/page-{$page}" params={{ page: "1" }} disabled>
                <span>1</span>
              </Link>
            </li>

            <li>
              <button type="button">
                <Icon class="i-solar:arrow-right-outline" />
              </button>
            </li>
          </ul>
        </nav>
      </>
    );
  },
});
