import { A } from "@solidjs/router";
import { useTranslator } from "~/providers/LocaleProvider";

export const Footer = () => {
  const t = useTranslator();

  return (
    <footer>
      <nav>
        <ul class="flex gap-2">
          <li>
            <A
              class="flex items-baseline gap-1 px-2 py-1 underline"
              title={t("site.menus.footer.items.analytics.title")}
              href="https://stats.strooweb.nl/strootje.com"
            >
              <i class="i-simple:plausibleanalytics" />
              <span>{t("site.menus.footer.items.analytics.text")}</span>
            </A>
          </li>

          <li>
            <A
              class="flex items-baseline gap-1 px-2 py-1 underline"
              title={t("site.menus.footer.items.source.title")}
              href="https://github.com/strootje/site-strootje"
            >
              <i class="i-brands:github" />
              <span>{t("site.menus.footer.items.source.text")}</span>
            </A>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
