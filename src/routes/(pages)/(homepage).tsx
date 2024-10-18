import { For } from "solid-js";
import { Avatar } from "~/components/Avatar";
import { SocialMenu } from "~/components/SocialMenu";
import { useTranslator } from "~/providers/LocaleProvider";

export default function HomePage() {
  const t = useTranslator();

  return (
    <>
      <Avatar />
      <SocialMenu />
      {/* <MainMenu /> */}

      <aside class="flex flex-col">
        <ul class="grid grid-cols-3 gap-2">
          <For each={Array(5)}>{() => <li class="h-20 w-auto shrink-0 bg-red" />}</For>
          <li class="h-20 w-20 shrink-0 bg-green" />
        </ul>
      </aside>
    </>
  );
}
