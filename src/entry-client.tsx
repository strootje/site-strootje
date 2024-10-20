// @refresh reload

import { init as SentryInit } from "@sentry/solidstart";
import { solidRouterBrowserTracingIntegration } from "@sentry/solidstart/solidrouter";
import { StartClient, mount } from "@solidjs/start/client";

SentryInit({
  environment: "localdev",
  dsn: "https://5727eb984bad4df49b6c374a0edbafac@tip.strooweb.nl/8",
  integrations: [solidRouterBrowserTracingIntegration({})],
  tracesSampleRate: 1.0,
});

mount(() => <StartClient />, document.body);
