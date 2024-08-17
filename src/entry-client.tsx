// @refresh reload

import { init as SentryInit } from "@sentry/solidstart";
import { solidRouterBrowserTracingIntegration } from "@sentry/solidstart/solidrouter";
import { StartClient, mount } from "@solidjs/start/client";

SentryInit({
  environment: "localdev",
  dsn: "https://a369c1c54ea94bb7a6ac340d2139931d@tip.strooweb.nl/3",
  integrations: [solidRouterBrowserTracingIntegration({})],
  tracesSampleRate: 1.0,
});

mount(() => <StartClient />, document.body);
