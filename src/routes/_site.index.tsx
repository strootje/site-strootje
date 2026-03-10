import { Icon } from "#/components/icon.tsx";
import * as contentFns from "#/functions/content.functions.ts";
import { createFileRoute, Link } from "@tanstack/solid-router";
import { Index, Show } from "solid-js";

export const Route = createFileRoute("/_site/")({
  loader: async () => ({
    highlightedPosts: await contentFns.getHighlighted(),
    recentPosts: await contentFns.getRecent(),
  }),

  component: () => {
    const data = Route.useLoaderData();

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

        <Show when={data().highlightedPosts.length > 0}>
          <section>
            <header class="flex items-baseline font-mono text-stone-400">
              <h2 class="grow">Uitgelicht</h2>

              <Link class="p-2 text-xs" to="/blog">
                <span>Alles</span>
                <Icon class="i-solar:arrow-right-outline" />
              </Link>
            </header>

            <Index each={data().highlightedPosts}>
              {(post) => (
                <article class="bg-stone-100">
                  <Link params={{ slug: post().slug }} to="/blog/$slug">
                    <header class="">
                      <div class="flex h-40 items-center justify-center bg-emerald-700 bg-hero-wiggle-black/5">
                        <Icon class="i-brand:kubernetes scale-400 text-sky-300 text-xl" />
                      </div>
                    </header>

                    <div class="p-4">
                      <h3 class="text-2xl">{post().meta.title}</h3>
                      <span>{post().meta.publishDate.toString()}</span>
                    </div>
                  </Link>
                </article>
              )}
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
              <Index each={data().recentPosts}>
                {(post) => (
                  <Link to="/blog/$slug" params={{ slug: post().slug }}>
                    <article class="grid gap-2 bg-white p-2">
                      <div class="rounded bg-lime-400 px-3 py-0">nixos</div>

                      <header>
                        <h3 class="fw-700">{post().meta.title}</h3>
                      </header>

                      <div>{crypto.randomUUID()}</div>
                    </article>
                  </Link>
                )}
              </Index>
            </div>
          </section>
        </Show>

        <Show when={data().recentPosts.length > 5}>
          <section>
            <header class="flex items-baseline font-mono text-stone-400">
              <h2 class="grow">Archief</h2>

              <Link class="p-2 text-xs" to="/blog">
                <span>Alles</span>
                <Icon class="i-solar:arrow-right-outline" />
              </Link>
            </header>

            <div class="b-1 b-emerald-700 grid divide-y divide-emerald-700 bg-stone-50">
              <Index each={Array(5).fill(0)}>
                {() => (
                  <Link params={{ slug: crypto.randomUUID() }} to="/blog/$slug">
                    <article class="flex items-center gap-2 p-4">
                      <h3 class="grow">{crypto.randomUUID()}</h3>

                      <Icon class="i-solar:arrow-right-outline" />
                    </article>
                  </Link>
                )}
              </Index>
            </div>
          </section>
        </Show>
      </>
    );
  },
});
