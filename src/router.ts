import { routeTree } from "#/route-tree.gen.ts";
import { createRouter } from "@tanstack/solid-router";

export const getRouter = () => {
  const router = createRouter({
    defaultViewTransition: true,
    scrollRestoration: true,
    routeTree,

    rewrite: {
      input: ({ url }) => {
        const subdomain = url.hostname.split(".")[0];

        if (subdomain === "links") {
          url.pathname = "/links" + url.pathname;
        }

        return url;
      },

      output: ({ url }) => {
        if (url.pathname.startsWith("/links")) {
          url.pathname = url.pathname.replace(/^\/links/, "") || "/";
        }

        return url;
      },
    },
  });

  return router;
};
