import { Env } from "#/functions/env.service.ts";
import { createPlausibleClient } from "@strootje/api/plausible";
import { createServerFn, createServerOnlyFn } from "@tanstack/solid-start";
import * as v from "valibot";

const plausible = createServerOnlyFn(() => {
  return createPlausibleClient(Env.Plausible);
});

export const GetPageViews = createServerFn()
  .inputValidator(v.object({ pathname: v.string() }))
  .handler(async ({ data }) => {
    const result = await plausible().stats.query({
      site_id: "strootje.com",
      date_range: "all",
      metrics: ["visits", "time_on_page"],
      filters: [
        ["contains", "event:page", [data.pathname]],
      ],
    });

    return {
      visits: result.results[0].metrics[0] ?? 0,
      timeOnPage: result.results[0].metrics[1] ?? 0,
    };
  });
