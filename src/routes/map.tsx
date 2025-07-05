import { KomootApi } from "@scope/komoot";
import { createAsync } from "@solidjs/router";
import * as maplibre from "maplibre-gl";
import * as protocols from "maplibre-gl-vector-text-protocol";
import "maplibre-gl/dist/maplibre-gl.css";
import { createSignal, For, onMount } from "solid-js";
import { isServer } from "solid-js/web";
import MapGL, { Layer, Source, Viewport } from "solid-map-gl";

const data = async () => {
  "use server";

  const komoot = KomootApi({
    email: "hfh654vc001cvjj@jibber.xyz",
    password: "7?dn?YvpyTrLqEV%9HvMqFnMcRmht86ZA!U7Atq%ow?",
  });

  const tours = await komoot.user().tours();
  return await Promise.all(tours.map(({ id }) => komoot.tour(id).downloadToGpx()));
};

export default function MapPage() {
  const gpxs = createAsync(() => data());
  const [viewport, setViewport] = createSignal<Viewport>({ center: [4.4582838, 51.91902], zoom: 5 });

  onMount(() => {
    if (isServer) return;
    protocols.addProtocols(maplibre);
  });

  return (
    <MapGL
      class="w-dvw h-dvh"
      mapLib={maplibre}
      options={{
        style: "https://tiles.openfreemap.org/styles/liberty",
        attributionControl: false,
      }}
      viewport={viewport()}
      onViewportChange={setViewport}
    >
      <For each={gpxs()}>
        {(gpx, i) => (
          <Source
            id={`gpx-${i()}`}
            source={{
              type: "geojson",
              data: `gpx://./${gpx}`,
            }}
          >
            <Layer
              sourceId={`gpx-${i()}`}
              style={{
                type: "line",
                paint: {
                  "line-width": 2,
                  "line-color": "hsla(0, 100.00%, 50.00%, 0.50)",
                },
              }}
            />
          </Source>
        )}
      </For>
    </MapGL>
  );
}
