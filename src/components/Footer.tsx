import { A } from "@solidjs/router";
import type { ComponentProps } from "solid-js";
import { PageRoutes } from "~/consts.ts";
import { useTranslator } from "~/providers/LocaleProvider.tsx";

export const Footer = (props: ComponentProps<"footer">) => {
  const t = useTranslator();

  return (
    <footer {...props}>
      <nav>
        <ul class="flex gap-2 py-2">
          <li>
            <A
              class="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded"
              title={t("site.menus.footer.items.analytics.title")}
              href={PageRoutes.footer.analytics}
              target="_blank"
            >
              <i class="i-simple:plausibleanalytics" />
              <span>{t("site.menus.footer.items.analytics.text")}</span>
            </A>
          </li>

          <li>
            <A
              class="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded"
              title={t("site.menus.footer.items.source.title")}
              href={PageRoutes.footer.source}
              target="_blank"
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
