import { A } from "@solidjs/router";
import { useTranslator } from "~/contexts/I18nContext";

export default function HomePage() {
  const t = useTranslator();

  return (
    <main class="flex min-h-dvh flex-col items-center justify-center bg-gray-100">
      <div class="flex grow-1 flex-col justify-center gap-4 text-center">
        <nav>
          <ul class="flex flex-col gap-2">
            <li>
              <A class="b-amber b-1 flex items-center rounded px-2 py-1" href="/about">
                <i class="i-brands:github-alt" />
                <span class="grow-1">{t("pages.home.menus.main.about.text")}</span>
              </A>
            </li>

            <li>
              <a class="b-amber b-1 flex items-center rounded px-2 py-1" href="https://github.com/strootje" target="_blank" rel="noreferrer">
                <i class="i-brands:github-alt" />
                <span class="grow-1">{t("pages.home.menus.main.github.text")}</span>
              </a>
            </li>

            <li>
              <a class="b-amber b-1 flex items-center rounded px-2 py-1" href="https://linkedin.com/in/basstroosnijder" target="_blank" rel="noreferrer">
                <i class="i-brands:linkedin" />
                <span class="grow-1">{t("pages.home.menus.main.linkedin.text")}</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <footer class="pt-4 pb-2 text-sm">
        <nav>
          <ul class="flex gap-2">
            <li>
              <a class="flex items-baseline gap-1 underline" href="https://stats.strooweb.nl/strootje.com">
                <i class="i-simple:plausibleanalytics" />
                <span>{t("components.page-footer.menus.main.plausible.text")}</span>
              </a>
            </li>

            <li>
              <a class="flex items-baseline gap-1 underline" href="https://github.com/strootje/site-strootje">
                <i class="i-brands:github" />
                <span>{t("components.page-footer.menus.main.sources.text")}</span>
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </main>
  );
}
