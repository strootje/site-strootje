import type { ParentProps } from "solid-js";
import { Footer } from "~/components/Footer";

export default function PagesLayout(props: ParentProps) {
  return (
    <>
      <main class="flex flex-1 flex-col items-center justify-center gap-4">{props.children}</main>
      <Footer class="text-gray-700 text-sm" />
    </>
  );
}
