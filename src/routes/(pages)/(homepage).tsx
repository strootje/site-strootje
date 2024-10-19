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
          <li class="h-20 w-20 overflow-hidden bg-red p-1">kc hair cutter</li>
          <li class="h-20 w-20 overflow-hidden bg-red p-1">jodie stains</li>
          <li class="h-20 w-20 overflow-hidden bg-red p-1">cadeau doek</li>
          <li class="h-20 w-20 overflow-hidden bg-red p-1">magic nonsense</li>
          <li class="h-20 w-20 overflow-hidden bg-red p-1">cutting edge</li>
          <li class="h-20 w-20 shrink-0 bg-green p-1" />
        </ul>
      </aside>
    </>
  );
}
