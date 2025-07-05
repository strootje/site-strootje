import { For } from "solid-js";

export default function KleinPage() {
  return (
    <div class="*:flex *:justify-center justify-items-center items-center *:items-center grid *:bg-stone-300 *:shadow *:backdrop-blur *:rounded *:w-20 h-dvh *:aspect-1 cols-3">
      <For each={[1, 2, 3, 4, 5, 6, 7, 8, 9]}>{(app) => <article>{`app${app}`}</article>}</For>
    </div>
  );
}
