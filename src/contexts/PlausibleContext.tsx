import PlausibleClient, { type PlausibleOptions } from "plausible-tracker";
import { type ParentProps, Show, createContext, createEffect, createSignal, onCleanup, useContext } from "solid-js";
import { isServer } from "solid-js/web";

type ContextType = ReturnType<typeof PlausibleClient>;
const createClient = (opts?: PlausibleOptions) => PlausibleClient(opts);
const Plausible = createContext<ContextType>(undefined);

type PlausibleProviderProps = ParentProps &
  PlausibleOptions & {
    disable?: {
      autoPageviewTracking: boolean;
      autoOutboundTracking: boolean;
    };
  };

export const PlausibleProvider = (props: PlausibleProviderProps) => {
  const { children, disable, ...opts } = props;
  const listeners: (() => void)[] = [];

  const [client, setClient] = createSignal<ContextType>();

  createEffect(() => {
    if (isServer) {
      return;
    }

    const client = setClient(createClient(opts));

    if (!disable?.autoOutboundTracking) {
      listeners.push(client.enableAutoPageviews());
    }

    if (!disable?.autoOutboundTracking) {
      listeners.push(client.enableAutoOutboundTracking());
    }
  });

  onCleanup(() => listeners.map((cleanup) => cleanup()));

  return (
    <Show when={client()} fallback={children}>
      {(actualClient) => <Plausible.Provider value={actualClient()}>{children}</Plausible.Provider>}
    </Show>
  );
};

export const useTrackEvent = () => useContext(Plausible)?.trackEvent;
export const useTrackPageview = () => useContext(Plausible)?.trackPageview;
