import { A } from "@solidjs/router";
import { useTranslator } from "~/providers/LocaleProvider.tsx";

export const MainMenu = () => {
  const t = useTranslator();

  return (
    <nav>
      <ul class="flex flex-col items-center gap-2">
        <li>
          <A
            class="inline-block flex items-center px-2 py-1 border-2 border-amber border-solid rounded"
            title={t("site.menus.main.items.resume.title")}
            href="/resume"
          >
            <i class="text-2xl i-solid:file-lines" />
            <span>{t("site.menus.main.items.resume.text")}</span>
          </A>
        </li>

        {
          /* <li>
          <A
            class="inline-block flex items-center px-2 py-1 border-2 border-amber border-solid rounded"
            title={t("site.menus.main.items.articles.title")}
            href="/articles"
          >
            <i class="text-2xl i-solid:newspaper" />
            <span>{t("site.menus.main.items.articles.text")}</span>
          </A>
        </li> */
        }
      </ul>
    </nav>
  );
};
