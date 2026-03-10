import { map, reqres } from "./api.ts";
import * as s from "./plausible.models.ts";

export const createPlausibleClient = map(s.PlausibleOpts, ({ baseUri, authorization }) => {
  const headers = {
    "content-type": "application/json",
    authorization,
  };
  return {
    stats: {
      query: reqres(s.GetStats, (opts) => {
        return fetch(`${baseUri}/api/v2/query`, {
          body: JSON.stringify(opts),
          method: "POST",
          headers,
        });
      }),
    },
  };
});
