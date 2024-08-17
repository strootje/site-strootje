import { useTranslator } from "~/contexts/I18nContext";

export default function HomePage() {
  const t = useTranslator();

  return (
    <main class="flex bg-gray-100 min-h-dvh flex-col justify-center items-center">
      <div class="grow-1 flex flex-col justify-center text-center gap-4">
        <img src="https://picsum.photos/200/200" alt="aslkdjhalksd" class="rounded-full" />

        <p>aljksdkalsjhdkjashd</p>
      </div>

      <footer class="text-sm pt-4 pb-2">
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
