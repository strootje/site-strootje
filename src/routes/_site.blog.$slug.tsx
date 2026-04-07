import { Icon } from "#/components/icon.tsx";
import * as contentFns from "#/functions/content.functions.ts";
import * as statFns from "#/functions/stat.functions.ts";
import { createFileRoute, Link } from "@tanstack/solid-router";
import { formatDistanceWithOptions, formatDuration } from "date-fns/fp";
import { ErrorBoundary, Show, Suspense } from "solid-js";

export const Route = createFileRoute("/_site/blog/$slug")({
  loader: async ({ location, params }) => ({
    article: await contentFns.getForSlug({ data: params }),
    stats: await statFns.GetPageViews({ data: location }),
  }),

  component: () => {
    const data = Route.useLoaderData();
    const Content = contentFns.lazyContent(data().article.filename);

    return (
      <>
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

            <div class="flex items-center gap-1">
              <Icon class="i-solar:eye-outline" />
              <span>{data().stats.visits}</span>
              <span>reads</span>
            </div>

            <Show when={data().stats.timeOnPage}>
              {(timeOnPage) => (
                <div class="flex items-center gap-1">
                  <Icon class="i-solar:clock-circle-outline" />
                  <span>{formatDuration({ minutes: timeOnPage() })}</span>
                </div>
              )}
            </Show>

            <Link class="flex items-center gap-1" to="/admin/blog/$slug/edit" params={{ slug: data().article.slug }}>
              <Icon class="i-solar:document-add-outline" />
              <span>Edit</span>
            </Link>
          </aside>
        </header>

        <ErrorBoundary fallback={<p>error..</p>}>
          <Suspense>
            <Content />
          </Suspense>
        </ErrorBoundary>
      </>
    );
  },
});
