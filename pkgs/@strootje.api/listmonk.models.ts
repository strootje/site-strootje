import { err, ok } from "neverthrow";
import * as v from "valibot";

const response = <
  TSchema extends v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>,
>(data: TSchema) => {
  return v.pipe(
    v.union([
      v.object({ message: v.string() }),
      v.object({ data }),
    ]),
    v.transform((dataOrError) => {
      if ("message" in dataOrError) {
        return err(dataOrError.message);
      }

      return ok(dataOrError.data);
    }),
  );
};

const paged = <TEntries extends v.ObjectEntries>(result: v.ObjectSchema<TEntries, undefined>) => {
  return v.object({
    results: v.array(result),
    per_page: v.number(),
    total: v.number(),
    page: v.number(),
  });
};

const subscriberStatus = v.union([
  v.literal("enabled"),
  v.literal("blocklisted"),
]);

const list = v.object({
  id: v.number(),
  created_at: v.string(),
  updated_at: v.string(),
  uuid: v.string(),
  name: v.string(),
  type: v.string(),
  optin: v.string(),
  tags: v.array(v.string()),
  subscriber_count: v.optional(v.number()),
  description: v.string(),
});

const subscriber = v.object({
  id: v.number(),
  created_at: v.string(),
  updated_at: v.string(),
  uuid: v.string(),
  email: v.string(),
  name: v.string(),
  attribs: v.record(v.string(), v.any()),
  status: subscriberStatus,
  lists: v.array(list),
});

const newSubscriber = v.object({
  attribs: v.optional(v.record(v.string(), v.any())),
  preconfirm_subscriptions: v.optional(v.boolean()),
  status: v.optional(subscriberStatus, "enabled"),
  list_uuids: v.optional(v.array(v.string())),
  lists: v.optional(v.array(v.number())),
  email: v.string(),
  name: v.string(),
});

export const ListmonkOpts = v.pipe(
  v.object({
    baseUri: v.string(),
    login: v.string(),
    token: v.string(),
  }),
  v.transform(({
    baseUri,
    login,
    token,
  }) => ({
    authorization: `token ${login}:${token}`,
    baseUri,
  })),
);

export const GetList = {
  req: v.object({
    listId: v.number(),
  }),
  res: response(list),
};

export const GetLists = {
  req: v.pipe(
    v.object({
      tags: v.array(v.string()),
    }),
    v.transform((input) => ({
      query: new URLSearchParams({
        tag: input.tags.join(","),
      }).toString(),
    })),
  ),
  res: response(paged(list)),
};

export const PublicSubscription = {
  req: v.object({
    email: v.string(),
    name: v.optional(v.string()),
    list_uuids: v.array(v.string()),
  }),
  res: response(v.union([
    v.literal(true),
    v.object({ has_optin: v.boolean() }),
  ])),
};

export const FindSubscribers = {
  req: v.pipe(
    v.object({
      lists: v.optional(v.array(v.number())),
      query: v.optional(v.string()),
    }),
    v.transform(({ lists, query }) => ({
      query: new URLSearchParams([
        ...(lists?.map((listId) => ["list_id", `${listId}`]) ?? []),
        ...(query ? [["query", query]] : []),
      ]).toString(),
    })),
  ),
  res: response(paged(subscriber)),
};

export const GetSubscriber = {
  req: v.object({}),
  res: response(subscriber),
};

export const NewSubscriber = {
  req: newSubscriber,
  res: response(subscriber),
};

export const UpdateSubscriber = {
  req: newSubscriber,
  res: response(subscriber),
};
