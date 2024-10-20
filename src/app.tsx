import "@unocss/reset/tailwind.css";
import "virtual:uno.css";

import { PlausibleProvider } from "@jsr/strootje__solid-plausible";
import { MetaProvider, Title } from "@solidjs/meta";
import { FileRoutes } from "@solidjs/start/router";
import { type ParentProps, Suspense } from "solid-js";
import { I18nProvider } from "./providers/LocaleProvider";
import { SentryRouter } from "./providers/SentryProvider";

export default function App() {
  return (
    <I18nProvider locale="en">
      <PlausibleProvider apiHost="https://stats.strooweb.nl">
        <SentryRouter root={RootWrapper}>
          <FileRoutes />
        </SentryRouter>
      </PlausibleProvider>
    </I18nProvider>
  );
}

const RootWrapper = (props: ParentProps) => (
  <MetaProvider>
    <Title>Personal Blog - Strootje</Title>
    <Suspense>{props.children}</Suspense>
  </MetaProvider>
);
