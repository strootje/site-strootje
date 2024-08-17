import { sentryBeforeResponseMiddleware } from "@sentry/solidstart/middleware";
import { createMiddleware } from "@solidjs/start/middleware";

export default createMiddleware({
  onBeforeResponse: [
    sentryBeforeResponseMiddleware(),
    // Add your other middleware handlers after `sentryBeforeResponseMiddleware`
  ],
});
