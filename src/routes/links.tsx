import { Avatar } from "#/components/avatar.tsx";
import { useI18n } from "#/components/context.i18n.ts";
import { Icon } from "#/components/icon.tsx";
import * as contentFns from "#/functions/content.functions.ts";
import { tw } from "@scope/util/uno";
import { createFileRoute, Link } from "@tanstack/solid-router";
import { cx } from "class-variance-authority";
import { Show } from "solid-js";

const section = tw`col-[content]`;

const sectionHeader = tw`text-sm text-stone-600`;
const sectionNav = tw`b-1 b-stone-500 grid rounded bg-gray-50 shadow-stone-500 shadow-[2px_2px_0_2px]`;
const sectionNavUl = tw`divide-y divide-stone-800`;
const sectionNavLi = tw`hover:bg-stone-200`;
const sectionHref = tw`flex items-center gap-4 p-4`;

const imgFavicon = tw`aspect-square h-full`;
const iconWrapper = tw`corner-squircle aspect-square h-[40px] rounded-full p-2`;
const subText = tw`-mt-1 text-stone-500 text-xs`;

const footerNavLi = tw`b-1 b-transparent corner-squircle hover:b-rose-300 rounded-full hover:bg-rose-200/60`;
const footerHref = tw`flex gap-1 px-3 py-2`;

export const Route = createFileRoute("/links")({
  loader: async () => ({
    recentArticle: (await contentFns.getRecent()).at(-1),
  }),

  component: () => {
    const t = useI18n();
    const data = Route.useLoaderData();

    return (
      <main class="grid-layout grid min-h-dvh content-start gap-8 bg-hero-yyy-black/5 bg-mauve-200 p-y-4 font-mono text-stone-800">
        <header class={cx(section, "grid justify-items-center")}>
          <Avatar
            class="b-4 b-mauve-600 corner-squircle h-32 rounded-full bg-rose-200/60"
            seed={crypto.randomUUID()}
          />

          <h1 class="text-2xl">{t("bio.fullName")}</h1>
          <aside class={cx(subText, "text-center grid")}>
            <span>{t("bio.jobTitle")}</span>
            <span>{t("bio.area")}</span>
          </aside>
        </header>

        <section class={section}>
          <header class={sectionHeader}>
            <h2>Blog</h2>
          </header>

          <nav class={sectionNav}>
            <ul class={sectionNavUl}>
              <li class={sectionNavLi}>
                <Link class={sectionHref} to="/">
                  <div class={cx(iconWrapper, "bg-rose-800/20 text-rose-800")}>
                    <img class={imgFavicon} src="https://strootje.com/favicon.ico" />
                  </div>

                  <div class="grid grow">
                    <span>strootje.com</span>
                    <span class={subText}>Blog about development and more..</span>
                  </div>

                  <Icon class="i-solar:arrow-right-outline" />
                </Link>
              </li>

              <Show when={data().recentArticle}>
                {(latestPost) => (
                  <li class={sectionNavLi}>
                    <Link class={sectionHref} to="/blog/$slug" params={{ slug: latestPost().slug }}>
                      <div class={cx(iconWrapper, "bg-rose-800/20 text-rose-800")}>
                        <Icon class="i-solar:document-outline text-2xl" />
                      </div>

                      <div class="grid grow">
                        <span>{latestPost().title}</span>
                        <span class={subText}>
                          {(latestPost().modifiedDate ?? latestPost().publishDate).toDateString()}
                        </span>
                      </div>

                      <span class="b-1 b-emerald-400 rounded bg-emerald-200 px-1 text-sm shadow shadow-emerald">
                        new
                      </span>
                    </Link>
                  </li>
                )}
              </Show>
            </ul>
          </nav>
        </section>

        <section class={section}>
          <header class={sectionHeader}>
            <h2>Socials</h2>
          </header>

          <nav class={sectionNav}>
            <ul class={sectionNavUl}>
              <li class={sectionNavLi}>
                <a class={sectionHref} href="https://bsky.app/profile/strootje.com" target="_blank">
                  <div class={cx(iconWrapper, "bg-[#0085FF]/20 text-[#0085FF]")}>
                    <Icon class="i-brand:bluesky text-2xl" />
                  </div>

                  <div class="grid grow">
                    <span>Bluesky</span>
                    <span class={subText}>@strootje.com</span>
                  </div>

                  <Icon class="i-solar:arrow-right-outline" />
                </a>
              </li>

              <li class={sectionNavLi}>
                <a class={sectionHref} href="https://www.instagram.com/basstroosnijder" target="_blank">
                  <div class={cx(iconWrapper, "bg-[#E1306C]/20 text-[#E1306C]")}>
                    <Icon class="i-brand:instagram text-2xl" />
                  </div>

                  <div class="grid grow">
                    <span>Instagram</span>
                    <span class={subText}>@basstroosnijder</span>
                  </div>

                  <Icon class="i-solar:arrow-right-outline" />
                </a>
              </li>

              <li class={sectionNavLi}>
                <a class={sectionHref} href="https://www.linkedin.com/in/bas-stroosnijder" target="_blank">
                  <div class={cx(iconWrapper, "bg-[#0A66C2]/20 text-[#0A66C2]")}>
                    <Icon class="i-brand:linkedin-in text-2xl" />
                  </div>

                  <div class="grid grow">
                    <span>LinkedIn</span>
                    <span class={subText}>bas-stroosnijder</span>
                  </div>

                  <Icon class="i-solar:arrow-right-outline" />
                </a>
              </li>
            </ul>
          </nav>
        </section>

        <footer class={section}>
          <nav>
            <ul class="flex justify-center gap-3 text-xs">
              <li class={footerNavLi}>
                <a class={footerHref} href="https://github.com/strootje/site-strootje" target="_blank">
                  <Icon class="i-solar:code-square-outline" />
                  <span>Source</span>
                </a>
              </li>

              <li class={footerNavLi}>
                <a class={footerHref} href="https://stats.strooware.nl/strootje.com" target="_blank">
                  <Icon class="i-solar:graph-up-outline" />
                  <span>Analytics</span>
                </a>
              </li>
            </ul>
          </nav>
        </footer>
      </main>
    );
  },
});
