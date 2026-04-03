import { Icon } from "#/components/icon.tsx";
import { tw } from "@scope/util/uno";
import { createFileRoute, Link, Outlet } from "@tanstack/solid-router";
import { cx } from "class-variance-authority";

const section = tw`col-[content]`;

const otherNavHref = tw`flex items-center gap-1 px-2 py-1`;

export const Route = createFileRoute("/admin")({
  component: () => {
    return (
      <main class="grid-layout grid min-h-dvh content-start gap-8 bg-hero-yyy-black/2 bg-mauve-200 py-4">
        <header class={cx(section, tw`b-b-2 b-emerald-700 flex items-baseline`)}>
          <Link class={cx(otherNavHref, tw`text-2xl`)} to="/">
            <span>strootje.com</span>
          </Link>

          <Link class={cx(otherNavHref, tw`text-xs`)} to="/blog">
            <span>blog</span>
          </Link>

          <a class={cx(otherNavHref, tw`grow justify-end text-xs`)} href="https://strooware.nl" target="_blank">
            <span>strooware.nl</span>
            <Icon class="i-solar:arrow-right-outline" />
          </a>
        </header>

        <div class={cx(section, tw`contents items-start gap-6 *:col-[content]`)}>
          <Outlet />
        </div>

        <footer class={section}>
          <nav>
            <ul class="flex justify-center gap-2">
              <li>
                <a class={otherNavHref} href="https://github.com/strootje/site-strootje" target="_blank">
                  <Icon class="i-solar:code-outline" />
                  <span>Source</span>
                </a>
              </li>

              <li>
                <a class={otherNavHref} href="https://stats.strooware.nl/strootje.com" target="_blank">
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
