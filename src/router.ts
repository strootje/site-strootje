import { routeTree } from "#/route-tree.gen.ts";
import { createRouter } from "@tanstack/solid-router";

export const getRouter = () => {
  const router = createRouter({
    defaultViewTransition: true,
    scrollRestoration: true,
    routeTree,
  });

  return router;
};
