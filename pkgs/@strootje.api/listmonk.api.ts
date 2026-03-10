import { map, reqres } from "./api.ts";
import * as s from "./listmonk.models.ts";

export const createListmonkClient = map(s.ListmonkOpts, ({ authorization, baseUri }) => {
  const headers = {
    "content-type": "application/json",
    authorization,
  };

  return ({
    list: {
      get: reqres(s.GetList, (opts) => {
        return fetch(`${baseUri}/api/lists/${opts.listId}`, {
          headers,
        });
      }),
    },

    lists: {
      get: reqres(s.GetLists, ({ query }) => {
        return fetch(`${baseUri}/api/lists?${query}`, {
          headers,
        });
      }),
    },

    public: {
      subscription: reqres(s.PublicSubscription, (opts) => {
        console.log("body?", JSON.stringify(opts));
        return fetch(`${baseUri}/api/public/subscription`, {
          body: JSON.stringify(opts),
          method: "POST",
          headers,
        });
      }),
    },

    subscriber: (subscriberId: number) => ({
      get: reqres(s.GetSubscriber, () => {
        return fetch(`${baseUri}/api/subscribers/${subscriberId}`, {
          headers,
        });
      }),

      update: reqres(s.UpdateSubscriber, (opts) => {
        return fetch(`${baseUri}/api/subscribers/${subscriberId}`, {
          body: JSON.stringify(opts),
          method: "PUT",
          headers,
        });
      }),
    }),

    subscribers: {
      find: reqres(s.FindSubscribers, ({ query }) => {
        return fetch(`${baseUri}/api/subscribers?${query}`, {
          headers,
        });
      }),

      new: reqres(s.NewSubscriber, (input) => {
        return fetch(`${baseUri}/api/subscribers`, {
          body: JSON.stringify(input),
          method: "POST",
          headers,
        });
      }),
    },
  });
});
