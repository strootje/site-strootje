import { A } from "@solidjs/router";
import { PageRoutes } from "~/consts";
import { useTranslator } from "~/providers/LocaleProvider";

export const SocialMenu = () => {
  const t = useTranslator();

  return (
    <nav>
      <ul class="flex gap-2">
        <li>
          <A
            class="inline-block flex items-center rounded bg-black px-2 py-1 text-white"
            title={t("site.menus.socials.items.github.title")}
            href={PageRoutes.socials.github}
            target="_blank"
          >
            <i class="i-brands:github-alt text-2xl" />
          </A>
        </li>

        <li>
          <A
            class="color-white inline-block flex items-center rounded px-2 py-1"
            style={{ background: "linear-gradient(150deg, #405DE6, #5B51D8, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)" }}
            title={t("site.menus.socials.items.instagram.title")}
            href={PageRoutes.socials.instagram}
            target="_blank"
          >
            <i class="i-brands:instagram text-2xl" />
          </A>
        </li>

        <li>
          <A
            class=" grid grid-cols-1 grid-rows-1 rounded bg-slate-100 px-2 py-1 text-black"
            title={t("site.menus.socials.items.tiktok.title")}
            href={PageRoutes.socials.tiktok}
            target="_blank"
          >
            <i class="i-brands:tiktok z-1 col-start-1 row-start-1 text-2xl" />
            <i class="i-brands:tiktok col-start-1 row-start-1 ml-px text-2xl text-[#FE2C55]" />
            <i class="i-brands:tiktok -ml-px -mt-px col-start-1 row-start-1 text-2xl text-[#25F4EE]" />
          </A>
        </li>

        <li>
          <A
            class="inline-block flex items-center rounded bg-[#0077B5] px-2 py-1 text-white"
            title={t("site.menus.socials.items.linkedin.title")}
            href={PageRoutes.socials.linkedin}
            target="_blank"
          >
            <i class="i-brands:linkedin-in text-2xl" />
          </A>
        </li>

        <li>
          <A
            class="inline-block flex items-center rounded bg-[#25D366] px-2 py-1 text-white"
            title={t("site.menus.socials.items.whatsapp.title")}
            href={PageRoutes.socials.whatsapp}
            target="_blank"
          >
            <i class="i-brands:whatsapp text-2xl" />
          </A>
        </li>
      </ul>
    </nav>
  );
};
