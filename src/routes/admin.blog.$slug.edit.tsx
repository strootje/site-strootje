import { Editor } from "#/components/editor.tsx";
import { Icon } from "#/components/icon.tsx";
import * as contentFns from "#/functions/content.functions.ts";
import { createFileRoute, Link } from "@tanstack/solid-router";
import { formatDistanceWithOptions } from "date-fns/fp";
import { Show } from "solid-js";

export const Route = createFileRoute("/admin/blog/$slug/edit")({
  loader: async ({ params }) => ({
    article: await contentFns.getForSlug({ data: params }),
  }),

  component: () => {
    const data = Route.useLoaderData();

    return (
      <form class="grid min-h-dvh content-start gap-4">
        <header class="grid gap-4 font-mono">
          <h1 class="fw-700 text-xl">{data().article.meta.title}</h1>

          <aside class="flex flex-wrap justify-around gap-4 text-xs">
            <Show when={data().article.meta.publishDate}>
              {(publishDate) => (
                <div class="flex items-center gap-1">
                  <Icon class="i-solar:calendar-outline" />
                  <span>{formatDistanceWithOptions({ addSuffix: true }, Date.now(), publishDate())}</span>
                </div>
              )}
            </Show>

            <Link class="flex items-center gap-1" to="/blog/$slug" params={{ slug: data().article.slug }}>
              <Icon class="i-solar:card-send-outline" />
              <span>View</span>
            </Link>
          </aside>
        </header>

        <Editor />
      </form>
    );
  },
});
