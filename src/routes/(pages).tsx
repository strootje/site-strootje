import type { ParentProps } from "solid-js";
import { Footer } from "~/components/Footer.tsx";

export default function PagesLayout(props: ParentProps) {
  return (
    <>
      <main class="flex flex-col flex-1 items-center gap-4">
        {props.children}
      </main>
      <Footer class="text-gray-700 text-sm" />
    </>
  );
}
