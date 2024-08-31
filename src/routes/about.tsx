import { useTranslator } from "~/contexts/I18nContext";

export default function HomePage() {
  const t = useTranslator();

  return (
    <main class="flex min-h-dvh flex-col items-center justify-center bg-gray-100">
      <div class="flex grow-1 flex-col justify-center gap-4 text-center">
        <img src="https://picsum.photos/200/200" alt="aslkdjhalksd" class="rounded-full" />

        <p>aljksdkalsjhdkjashd</p>
      </div>

      <footer class="pt-4 pb-2 text-sm">
        <nav>
          <ul class="flex gap-2">
            <li>
              <a href="https://stats.strooweb.nl/strootje.com">
                <i class="i-simple:plausibleanalytics" />
                <span>{t("components.page-footer.menus.main.plausible.text")}</span>
              </a>
            </li>

            <li>
              <a href="https://github.com/strootje/site-strootje">
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
