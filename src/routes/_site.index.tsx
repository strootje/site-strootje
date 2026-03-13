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
          <header class="grid gap-4">
            <h1 class="font-title text-3xl">
              <div>Bouwen, Slopen maar vooral</div>
              <div>
                <span class="fw-700 inline-block text-emerald-700 italic">leren</span> in het openbaar
              </div>
            </h1>
            {
              /*
            <aside>
              <span>Ik schrijf over alles wat ik interesant vind..</span>
              <span>Je doet het er maar mee!</span>
            </aside> */
            }

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

                <li>
                  <a
                    href="https://strooware.nl"
                    class="flex items-center gap-1"
                    target="_blank"
                  >
                    <Icon class="i-solar:arrow-right-outline text-sm" />
                    <span>strooware.nl</span>
                  </a>
                </li>
              </ul>
            </aside>
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
