import { A } from "@solidjs/router";
import JodiestainsSrc from "~/assets/images/jodiestains.png?format=webp&w=200&imagetools";
import MagicnonsenseSrc from "~/assets/images/magicnonsense.png?format=webp&w=200&imagetools";
import { ArticleSquare, ArticleTall, ArticleWide } from "./ArticleItems";

export const ArticleMenu = () => {
  return (
    <section class="grid w-64 grid-flow-row-dense grid-cols-3 gap-2">
      <ArticleTall>
        <A href="https://jodiestains.com" target="_blank">
          <img class="absolute top-0 right-0 bottom-0 left-0 size-full object-cover object-t" src={JodiestainsSrc} alt="Screenshot of Jodiestains.com" />
        </A>
      </ArticleTall>

      <ArticleWide />

      <ArticleTall>
        <A href="https://magic-nonsense.com" target="_blank">
          <img class="absolute top-0 right-0 bottom-0 left-0 size-full object-cover object-t" src={MagicnonsenseSrc} alt="Screenshot of Magic-Nonsense.com" />
        </A>
      </ArticleTall>

      <ArticleSquare />
      <ArticleSquare />
      <ArticleSquare />
      <ArticleSquare />
      <ArticleSquare />
      <ArticleSquare />
    </section>
  );
};
