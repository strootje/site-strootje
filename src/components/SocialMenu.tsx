import { A } from "@solidjs/router";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "~/components/SocialIcons.tsx";
import { PageRoutes } from "~/consts.ts";
import { useTranslator } from "~/providers/LocaleProvider.tsx";

export const SocialMenu = () => {
  const t = useTranslator();

  return (
    <nav>
      <ul class="flex gap-2 m-0 p-0 list-none">
        <li>
          <A
            href={PageRoutes.socials.github}
            title={t("site.menus.socials.items.github.title")}
            target="_blank"
          >
            <GithubIcon class="rounded text-2xl" />
          </A>
        </li>

        <li>
          <A
            href={PageRoutes.socials.instagram}
            title={t("site.menus.socials.items.instagram.title")}
            target="_blank"
          >
            <InstagramIcon class="rounded text-2xl" />
          </A>
        </li>

        {
          /* <li>
          <A href={PageRoutes.socials.tiktok} title={t("site.menus.socials.items.tiktok.title")} target="_blank">
            <TiktokIcon class="rounded text-2xl" />
          </A>
        </li> */
        }

        <li>
          <A
            href={PageRoutes.socials.linkedin}
            title={t("site.menus.socials.items.linkedin.title")}
            target="_blank"
          >
            <LinkedinIcon class="rounded text-2xl" />
          </A>
        </li>

        {
          /* <li>
          <A href={PageRoutes.socials.twitter} title={t("site.menus.socials.items.twitter.title")} target="_blank">
            <TwitterIcon class="rounded text-2xl" />
          </A>
        </li> */
        }

        <li>
          <A
            href={PageRoutes.socials.whatsapp}
            title={t("site.menus.socials.items.whatsapp.title")}
            target="_blank"
          >
            <WhatsappIcon class="rounded text-2xl" />
          </A>
        </li>
      </ul>
    </nav>
  );
};
