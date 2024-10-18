import { A } from "@solidjs/router";
import { useTranslator } from "~/providers/LocaleProvider";

export const MainMenu = () => {
  const t = useTranslator();

  return (
    <nav>
      <ul class="flex flex-col items-center gap-2">
        <li>
          <A
            class="inline-block flex items-center rounded border-2 border-amber border-solid px-2 py-1"
            title={t("site.menus.main.items.resume.title")}
            href="/resume"
          >
            <i class="i-solid:file-lines text-2xl" />
            <span>{t("site.menus.main.items.resume.text")}</span>
          </A>
        </li>

        {/* <li>
          <A
            class="inline-block flex items-center rounded border-2 border-amber border-solid px-2 py-1"
            title={t("site.menus.main.items.articles.title")}
            href="/articles"
          >
            <i class="i-solid:newspaper text-2xl" />
            <span>{t("site.menus.main.items.articles.text")}</span>
          </A>
        </li> */}
      </ul>
    </nav>
  );
};
