import * as contentFns from "#/functions/content.functions.ts";
import * as statFns from "#/functions/stat.functions.ts";
import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/_site/blog/$slug")({
  loader: async ({ location, params }) => ({
    article: await contentFns.getForSlug({ data: params }),
    stats: await statFns.GetPageViews({ data: location }),
  }),

  component: () => {
    const data = Route.useLoaderData();
    const params = Route.useParams();

    const Content = contentFns.lazyContent(data().article.filename);

    return (
      <>
        <h1>slug: {params().slug}</h1>
        <p>views: {data().stats.visits}</p>
        <p>readTime: {data().stats.timeOnPage}</p>
        <Content />
      </>
    );
  },
});
