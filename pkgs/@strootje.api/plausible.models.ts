import * as v from "valibot";

export const PlausibleOpts = v.pipe(
  v.object({
    baseUri: v.string(),
    token: v.string(),
  }),
  v.transform(({
    baseUri,
    token,
  }) => ({
    authorization: `Bearer ${token}`,
    baseUri,
  })),
);

const metric = v.union([
  v.literal("visitors"),
  v.literal("visits"),
  v.literal("pageviews"),
  v.literal("views_per_visit"),
  v.literal("bounce_rate"),
  v.literal("visit_duration"),
  v.literal("events"),
  v.literal("scroll_depth"),
  v.literal("percentage"),
  v.literal("conversion_rate"),
  v.literal("group_conversion_rate"),
  v.literal("average_revenue"),
  v.literal("total_revenue"),
  v.literal("time_on_page"),
]);

const dimention = v.union([
  v.literal("event:goal"),
  v.literal("event:page"),
  v.literal("event:hostname"),
  v.literal("visit:entry_page"),
  v.literal("visit:exit_page"),
  v.literal("visit:source"),
  v.literal("visit:referrer"),
  v.literal("visit:channel"),
  v.literal("visit:utm_medium"),
  v.literal("visit:utm_source"),
  v.literal("visit:utm_campaign"),
  v.literal("visit:utm_content"),
  v.literal("visit:utm_term"),
  v.literal("visit:device"),
  v.literal("visit:browser"),
  v.literal("visit:browser_version"),
  v.literal("visit:os"),
  v.literal("visit:os_version"),
  v.literal("visit:country"),
  v.literal("visit:region"),
  v.literal("visit:city"),
  v.literal("visit:country_name"),
  v.literal("visit:region_name"),
  v.literal("visit:city_name"),
  v.literal("time"),
  v.literal("time:hour"),
  v.literal("time:day"),
  v.literal("time:week"),
  v.literal("time:month"),
]);

const operator = v.union([
  v.literal("is"),
  v.literal("is_not"),
  v.literal("contains"),
  v.literal("contains_not"),
  v.literal("matches"),
  v.literal("matches_not"),
]);

const query = v.object({
  site_id: v.string(),
  date_range: v.string(),
  metrics: v.array(metric),
  dimentions: v.optional(v.array(dimention)),
  filters: v.optional(v.array(v.tuple([operator, dimention, v.array(v.string())]))),
});

const response = <TEntries extends v.ObjectEntries>(data: v.ObjectSchema<TEntries, undefined>) => {
  return v.pipe(v.object({
    results: v.array(data),
    meta: v.any(),
    query: v.any(),
  }));
};

export const GetStats = {
  req: v.object({
    site_id: v.string(),
    date_range: v.string(),
    metrics: v.array(metric),
    dimentions: v.optional(v.array(dimention)),
    filters: v.optional(v.array(v.tuple([operator, dimention, v.array(v.string())]))),
  }),
  res: response(v.object({
    metrics: v.array(v.union([v.number(), v.null()])),
    dimensions: v.array(v.union([v.string(), v.null()])),
  })),
};
