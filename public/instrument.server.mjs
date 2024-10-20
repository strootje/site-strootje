import { init as SentryInit } from "@sentry/solidstart";

SentryInit({
  dsn: "https://5727eb984bad4df49b6c374a0edbafac@tip.strooweb.nl/8",
  tracesSampleRate: 1.0,
});
