import { createFileRoute, redirect } from "@tanstack/solid-router";

export const Route = createFileRoute("/_site/blog/")({
  beforeLoad: () => {
    throw redirect({ to: "/blog/page-{$page}", params: { page: "1" } });
  },
});
