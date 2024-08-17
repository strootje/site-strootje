import { init as SentryInit } from "@sentry/solidstart";

SentryInit({
  dsn: "https://a369c1c54ea94bb7a6ac340d2139931d@tip.strooweb.nl/3",
  tracesSampleRate: 1.0,
});
