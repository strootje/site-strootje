import JodiestainsSrc from "~/assets/images/jodiestains.png?format=webp&w=100&imagetools";
import MagicnonsenseSrc from "~/assets/images/magicnonsense.png?format=webp&w=100&imagetools";
import { Avatar } from "~/components/Avatar";
import { SocialMenu } from "~/components/SocialMenu";

export default function HomePage() {
  return (
    <>
      <Avatar />
      <SocialMenu />

      <aside class="grid w-64 grid-flow-dense grid-cols-3 gap-2">
        <article class="relative aspect-ratio-square w-full overflow-hidden rounded border-2 border-amber border-solid bg-red p-2">
          <img class="absolute top-0 right-0 bottom-0 left-0" src={JodiestainsSrc} alt="Screenshot of Jodiestains.com" />
        </article>

        <article class="relative aspect-ratio-square w-full overflow-hidden rounded border-2 border-amber border-solid bg-red p-2">
          <img class="absolute top-0 right-0 bottom-0 left-0" src={MagicnonsenseSrc} alt="Screenshot of Magic-Nonsense.com" />
        </article>

        <article class="relative aspect-ratio-square w-full overflow-hidden rounded border-2 border-amber border-solid bg-red p-2">
          <div class="absolute top-0 right-0 bottom-0 left-0 bg-hero-wiggle-slate-700" />
        </article>
        <article class="relative aspect-ratio-square w-full overflow-hidden rounded border-2 border-amber border-solid bg-red p-2">
          <div class="absolute top-0 right-0 bottom-0 left-0 bg-hero-wiggle-slate-700" />
        </article>

        <article class="relative aspect-ratio-square w-full overflow-hidden rounded border-2 border-amber border-solid bg-red p-2">
          <div class="absolute top-0 right-0 bottom-0 left-0 bg-hero-wiggle-slate-700" />
        </article>

        <article class="relative aspect-ratio-square w-full overflow-hidden rounded border-2 border-amber border-solid bg-green p-2">
          <div class="absolute top-0 right-0 bottom-0 left-0 bg-hero-wiggle-slate-700" />
        </article>
      </aside>
    </>
  );
}
