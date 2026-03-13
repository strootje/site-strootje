import { Env } from "#/functions/env.service.ts";
import { createListmonkClient } from "@strootje/api/listmonk";
import { createServerFn, createServerOnlyFn } from "@tanstack/solid-start";
import * as v from "valibot";

const listmonk = createServerOnlyFn(() => {
  return createListmonkClient(Env.Listmonk);
});

export const subscribeToMailingList = createServerFn()
  .inputValidator(v.object({
    email: v.string(),
  }))
  .handler(async ({ data }) => {
    const result = await listmonk().public.subscription({
      list_uuids: ["9ff3edb1-2e1b-4148-a9f2-c189907acf38"],
      email: data.email,
    });

    if (result.isErr()) {
      throw result.error;
    }

    return result.value;
  });
