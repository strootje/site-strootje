import { withSentryErrorBoundary } from "@sentry/solidstart";
import { withSentryRouterRouting } from "@sentry/solidstart/solidrouter";
import { Router } from "@solidjs/router";
import { ErrorBoundary } from "solid-js";

export const SentryRouter = withSentryRouterRouting(Router);
export const SentryErrorBoundry = withSentryErrorBoundary(ErrorBoundary);
