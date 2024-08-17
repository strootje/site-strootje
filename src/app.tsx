import "@unocss/reset/tailwind.css";
import "virtual:uno.css";

import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { PlausibleProvider } from "./contexts/PlausibleContext";
import { SentryRouter } from "./contexts/SentryContext";

export default function App() {
	return (
		<PlausibleProvider
			apiHost="https://stats.strooweb.nl"
			domain="strootje.com"
			trackLocalhost={false}
		>
			<SentryRouter root={(props) => <Suspense>{props.children}</Suspense>}>
				<FileRoutes />
			</SentryRouter>
		</PlausibleProvider>
	);
}
