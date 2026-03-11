import { ArchivePost, FeaturedPost, RecentPost } from "#/components/card.post.tsx";
import { Icon } from "#/components/icon.tsx";
import * as contentFns from "#/functions/content.functions.ts";
import { createFileRoute, Link } from "@tanstack/solid-router";
import { createSignal, Index, Show } from "solid-js";

export const Route = createFileRoute("/_site/")({
  loader: async () => ({
    featuredPosts: await contentFns.getFeatured(),
    recentPosts: await contentFns.getRecent(),
  }),

  component: () => {
    const data = Route.useLoaderData();
    const [recent] = createSignal(3);

    return (
      <>
        <section>
          <header>
            <h1 class="text-2xl">
              Bouwen, Slopen en <span class="fw-700 inline-block text-emerald-700 italic">leren</span> in het openbaar
            </h1>
            <aside>Ik schrijf over alles wat ik interesant vind.. Je doet het er maar mee!</aside>
          </header>
        </section>

        <Show when={data().featuredPosts.length > 0}>
          <section>
            <header class="flex items-baseline font-mono text-stone-400">
              <h2 class="grow">Uitgelicht</h2>

              <Link class="p-2 text-xs" to="/blog">
                <span>Alles</span>
                <Icon class="i-solar:arrow-right-outline" />
              </Link>
            </header>

            <Index each={data().featuredPosts}>
              {(post) => <FeaturedPost post={post} />}
            </Index>
          </section>
        </Show>

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
              <Index each={data().recentPosts.slice(0, recent())}>
                {(post) => <RecentPost post={post} />}
              </Index>
            </div>
          </section>
        </Show>

        <Show when={data().recentPosts.length > recent()}>
          <section>
            <header class="flex items-baseline font-mono text-stone-400">
              <h2 class="grow">Archief</h2>

              <Link class="p-2 text-xs" to="/blog">
                <span>Alles</span>
                <Icon class="i-solar:arrow-right-outline" />
              </Link>
            </header>

            <div class="b-1 b-emerald-700 grid divide-y divide-emerald-700 bg-stone-50">
              <Index each={data().recentPosts.slice(recent())}>
                {(post) => <ArchivePost post={post} />}
              </Index>
            </div>
          </section>
        </Show>
      </>
    );
  },
});
