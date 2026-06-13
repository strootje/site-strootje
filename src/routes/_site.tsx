import { useAppForm } from "#/components/hooks.form.ts";
import { Icon } from "#/components/icon.tsx";
import * as mailingFns from "#/functions/mailing.functions.ts";
import { tw } from "@scope/util/uno";
import { createFileRoute, Link, Outlet } from "@tanstack/solid-router";
import { cx } from "class-variance-authority";
import * as v from "valibot";
// @ts-types="solid-js"

const section = tw`col-[content]`;

const otherNavHref = tw`flex items-center gap-1 px-2 py-1`;
const input = tw`w-full px-4 py-2`;

export const Route = createFileRoute("/_site")({
  component: () => {
    const subscribe = useAppForm(() => ({
      defaultValues: {
        email: "",
      },

      validators: {
        onChange: v.object({
          email: v.pipe(v.string(), v.email()),
        }),
      },

      onSubmit: async ({ value }) => {
        const subscriber = await mailingFns.subscribeToMailingList({
          data: {
            email: value.email,
          },
        });
        console.log("result", subscriber);
      },
    }));

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

        <section class={cx(section, tw`grid gap-4 bg-emerald-700 bg-hero-wiggle-black/5 p-8 text-stone-100`)}>
          <header>
            <h2 class="font-mono text-xl">Never miss a thing?</h2>
          </header>

          <subscribe.AppForm>
            <form
              onsubmit={async (e) => {
                e.preventDefault();
                e.stopPropagation();
                await subscribe.handleSubmit();
              }}
            >
              <subscribe.AppField name="email">
                {(field) => (
                  <field.TextField
                    class={cx(input, tw`bg-white/20`)}
                    placeholder="Enter your email"
                    type="email"
                  />
                )}
              </subscribe.AppField>
              <subscribe.SubmitButton class={cx(input, tw`bg-stone-100 text-emerald-700`)}>
                Subscribe
              </subscribe.SubmitButton>
            </form>
          </subscribe.AppForm>
        </section>

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
