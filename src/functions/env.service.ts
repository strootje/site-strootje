import { createServerOnlyFn } from "@tanstack/solid-start";

const getOr = createServerOnlyFn((key: string, defval?: string) => {
  const val = Deno.env.get(key);

  if (!val && !defval) {
    throw `missing key '${key}'`;
  }

  return val?.toString() ?? defval!;
});

export const Env = {
  Listmonk: {
    baseUri: getOr("LISTMONK_BASEURI", "https://lists.strooware.nl"),
    login: getOr("LISTMONK_LOGIN"),
    token: getOr("LISTMONK_TOKEN"),
  },

  Plausible: {
    baseUri: getOr("PLAUSIBLE_BASEURI", "https://stats.strooware.nl"),
    token: getOr("PLAUSIBLE_TOKEN"),
  },

  PersonalInfo: {
    whatsapp: getOr("PERSONALINFO_WHATSAPP"),
  },
} as const;
