import { Plausible } from "#/components/plausible.tsx";
import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/solid-router";
import { HydrationScript } from "solid-js/web";
import "virtual:uno.css";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charset: "utf-8" },
      { title: "Strootje" },
      { name: "viewport", content: "width=device-width,initial-scale=1.0,viewport-fit=cover" },
    ],

    links: [
      { rel: "icon", href: "/favicon.ico" },
    ],
  }),

  component: () => (
    <html>
      <head>
        <HeadContent />
        <HydrationScript />
      </head>

      <body>
        <Outlet />
        <Scripts />
        <Plausible.Init domain="strootje.com" />
      </body>
    </html>
  ),
});
