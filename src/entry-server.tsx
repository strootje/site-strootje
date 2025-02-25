// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html class="h-full" lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          {assets}
        </head>
        <body class="flex flex-col items-center gap-8 bg-hero-wiggle-amber-100 min-h-dvh font-other">
          {children}
          {scripts}
        </body>
      </html>
    )}
  />
));
