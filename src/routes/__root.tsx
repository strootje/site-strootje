import { createLocale, I18nProvider } from "#/components/context.i18n.ts";
import { init } from "@plausible-analytics/tracker";
import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/solid-router";
import { onMount } from "solid-js";
import { HydrationScript, isServer } from "solid-js/web";
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

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "strootje.com",
          url: "https://strootje.com",
          publisher: {
            "@type": "Organization",
            name: "strootje.com",
            url: "https://strootje.com",
            logo: "https://strootje.com/logo.png",
            sameAs: [
              "https://twitter.com/mycompany",
              "https://github.com/mycompany",
            ],
          },
        }),
      },
    ],
  }),

  component: () => {
    const [locale] = createLocale();

    onMount(() => {
      if (isServer) {
        return;
      }

      init({
        domain: "strootje.com",
        endpoint: "https://stats.strooware.nl/api/event",
      });
    });

    return (
      <I18nProvider value={locale}>
        <html lang={locale()}>
          <head>
            <HeadContent />
            <HydrationScript />
          </head>

          <body>
            <Outlet />
            <Scripts />
          </body>
        </html>
      </I18nProvider>
    );
  },

  notFoundComponent: ({ routeId }) => (
    <div>
      <h1>Error: NOT FOUND</h1>
      <pre>{routeId}</pre>
    </div>
  ),

  errorComponent: ({ error }) => {
    console.error("ERROR", error);
    return (
      <div>
        <h1>Error: {error.name}</h1>
        <pre>{error.stack}</pre>
      </div>
    );
  },
});
