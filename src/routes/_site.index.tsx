import { RecentPost } from "#/components/card.post.tsx";
import { Icon } from "#/components/icon.tsx";
import * as contentFns from "#/functions/content.functions.ts";
import { createFileRoute, Link } from "@tanstack/solid-router";
import { Index, Show } from "solid-js";

export const Route = createFileRoute("/_site/")({
  loader: async () => ({
    recentPosts: await contentFns.getRecent(),
  }),

  component: () => {
    const data = Route.useLoaderData();

    return (
      <>
        <section>
          <header class="grid gap-4">
            <h1 class="font-title text-3xl">
              <span>Bouwen, Slopen en</span>
              <span class="fw-700 text-emerald-700 italic">&nbsp;leren</span>
            </h1>

            <aside>
              <div>Bas Stroosnijder</div>
              <div class="-mt-1 text-sm text-stone-600">Senior .NET engineer @ RABOBANK</div>
              <ul class="flex gap-3 text-stone-800">
                <li>
                  <a
                    href="https://linkedin.com/in/bas-stroosnijder"
                    class="flex items-center gap-1"
                    target="_blank"
                  >
                    <Icon class="i-solar:arrow-right-outline text-sm" />
                    <span>Linkedin</span>
                  </a>
                </li>
              </ul>
            </aside>
          </header>
        </section>

        <Show when={data().recentPosts.length > 0}>
          <section>
            <header class="flex items-baseline font-mono text-stone-400">
              <h2 class="grow">Recent</h2>

              <Link class="p-2 text-xs" to="/blog">
                <span>Alles</span>
                <Icon class="i-solar:arrow-right-outline" />
              </Link>
            </header>

            <div class="b-1 b-stone-200 grid divide-y divide-stone-200">
              <Index each={data().recentPosts}>
                {(post) => <RecentPost post={post} />}
              </Index>
            </div>
          </section>
        </Show>
      </>
    );
  },
});
