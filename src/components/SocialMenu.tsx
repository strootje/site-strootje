import { A } from "@solidjs/router";
import { useTranslator } from "~/providers/LocaleProvider";

export const SocialMenu = () => {
  const t = useTranslator();

  return (
    <nav>
      <ul class="flex gap-2">
        <li>
          <A
            class="inline-block flex items-center rounded border-2 border-amber border-solid px-2 py-1"
            title={t("site.menus.socials.items.github.title")}
            href="https://github.com/strootje"
          >
            <i class="i-brands:github-alt text-2xl" />
          </A>
        </li>

        <li>
          <A
            class="inline-block flex items-center rounded border-2 border-amber border-solid px-2 py-1"
            title={t("site.menus.socials.items.instagram.title")}
            href="https://instagram.com/basstroosnijder"
          >
            <i class="i-brands:instagram text-2xl" />
          </A>
        </li>

        <li>
          <A
            class="inline-block flex items-center rounded border-2 border-amber border-solid px-2 py-1"
            title={t("site.menus.socials.items.tiktok.title")}
            href="https://tiktok.com/strooware"
          >
            <i class="i-brands:tiktok text-2xl" />
          </A>
        </li>

        <li>
          <A
            class="inline-block flex items-center rounded border-2 border-amber border-solid px-2 py-1"
            title={t("site.menus.socials.items.linkedin.title")}
            href="https://github.com/strootje"
          >
            <i class="i-brands:linkedin text-2xl" />
          </A>
        </li>
      </ul>
    </nav>
  );
};
