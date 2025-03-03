import { A } from "@solidjs/router";
import JodiestainsSrc from "~/assets/images/jodiestains.png?format=webp&w=200&imagetools";
import KchaircutterSrc from "~/assets/images/kchaircutter.png?format=webp&w=200&imagetools";
import MagicnonsenseSrc from "~/assets/images/magicnonsense.png?format=webp&w=200&imagetools";
import {
  ArticleSquare,
  ArticleTall,
  ArticleWide,
} from "~/components/ArticleItems.tsx";

export const ArticleMenu = () => {
  return (
    <section class="gap-2 grid grid-cols-3 grid-flow-row-dense w-64">
      <ArticleTall>
        <A href="https://jodiestains.com" target="_blank">
          <img
            class="top-0 right-0 bottom-0 left-0 absolute size-full object-cover object-t"
            src={JodiestainsSrc}
            alt="Screenshot of Jodiestains.com"
          />
        </A>
      </ArticleTall>

      <ArticleWide />

      <ArticleSquare />

      <ArticleTall>
        <A href="https://magic-nonsense.com" target="_blank">
          <img
            class="top-0 right-0 bottom-0 left-0 absolute size-full object-cover object-t"
            src={MagicnonsenseSrc}
            alt="Screenshot of Magic-Nonsense.com"
          />
        </A>
      </ArticleTall>

      <ArticleSquare />

      <ArticleTall>
        <A href="https://kc-haircutter.nl" target="_blank">
          <img
            class="top-0 right-0 bottom-0 left-0 absolute size-full object-cover object-t"
            src={KchaircutterSrc}
            alt="Screenshot of kc-haircutter.nl"
          />
        </A>
      </ArticleTall>

      <ArticleSquare />
      <ArticleSquare />
      <ArticleSquare />
      <ArticleSquare />
      <ArticleSquare />
    </section>
  );
};
