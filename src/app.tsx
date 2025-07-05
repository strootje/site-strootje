import "@unocss/reset/tailwind.css";
import "virtual:uno.css";

import { Plausible } from "@jsr/strootje__solid-plausible";
import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { type ParentProps, Suspense } from "solid-js";

export default function App() {
  return (
    <Plausible.Provider value={{ apiHost: "https://stats.strooware.nl" }}>
      <Plausible.AutoPageviewTracking />
      <Router root={RootWrapper}>
        <FileRoutes />
      </Router>
    </Plausible.Provider>
  );
}

const RootWrapper = (props: ParentProps) => (
  <MetaProvider>
    <Title>Personal Blog - Strootje</Title>
    <Suspense>{props.children}</Suspense>
  </MetaProvider>
);
