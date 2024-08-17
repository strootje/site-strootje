import "@unocss/reset/tailwind.css";
import "virtual:uno.css";

import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { I18nProvider } from "./contexts/I18nContext";
import { PlausibleProvider } from "./contexts/PlausibleContext";
import { SentryRouter } from "./contexts/SentryContext";

export default function App() {
  return (
    <I18nProvider locale="en">
      <PlausibleProvider apiHost="https://stats.strooweb.nl" domain="strootje.com" trackLocalhost={false}>
        <SentryRouter root={(props) => <Suspense>{props.children}</Suspense>}>
          <FileRoutes />
        </SentryRouter>
      </PlausibleProvider>
    </I18nProvider>
  );
}
