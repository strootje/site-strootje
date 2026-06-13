import { init, type PlausibleConfig, type PlausibleEventOptions, track } from "@plausible-analytics/tracker";
import { ClientOnly } from "@tanstack/solid-router";
import { mergeProps, onMount } from "solid-js";

type PlausibleTrackProps = {
  eventName: string;
  opts?: PlausibleEventOptions;
};

export const Plausible = {
  Init: (props: PlausibleConfig) => (
    <ClientOnly>
      <PlausibleInit {...mergeProps(props, { endpoint: "https://stats.strooware.nl/api/event" })} />
    </ClientOnly>
  ),

  Track: (props: PlausibleTrackProps) => (
    <ClientOnly>
      <PlausibleTrack {...props} />
    </ClientOnly>
  ),
} as const;

const PlausibleInit = (props: PlausibleConfig) => {
  onMount(() => init(props));
  return null;
};

const PlausibleTrack = (props: PlausibleTrackProps) => {
  onMount(() => track(props.eventName, props.opts ?? {}));
  return null;
};
