import { Icon } from "#/components/icon.tsx";
import type { PostMeta } from "#/functions/content.functions.ts";
import { tw } from "@scope/util/uno";
import { Link } from "@tanstack/solid-router";
import { cx } from "class-variance-authority";
import { formatDistanceWithOptions } from "date-fns/fp";
import type { Accessor } from "solid-js";

type PostProps = {
  post: Accessor<PostMeta>;
};

export const FeaturedPost = (props: PostProps) => {
  return (
    <Link to="/blog/$slug" params={{ slug: props.post().slug }}>
      <article class="bg-white hover:bg-stone-100">
        <header>
          <div class="flex h-30 items-center justify-center bg-emerald-700 bg-hero-wiggle-black/5">
            <Icon class="i-brand:kubernetes scale-400 text-sky-300 text-xl" />
          </div>
        </header>

        <div class="p-4">
          <aside class="flex gap-3 text-stone-600 text-xs">
            <span class="flex items-center gap-1">
              <Icon class="i-solar:calendar-outline" />
              <span>
                {formatDistanceWithOptions(
                  { addSuffix: true },
                  Date.now(),
                  props.post().meta.publishDate,
                )}
              </span>
            </span>
          </aside>
          <h3 class="font-title text-2xl">{props.post().meta.title}</h3>
          <span class="text-sm text-stone-500">{props.post().meta.description}</span>
        </div>
      </article>
    </Link>
  );
};

export const RecentPost = (props: PostProps) => {
  return (
    <Link to="/blog/$slug" params={{ slug: props.post().slug }}>
      <article class="grid gap-2 bg-white p-2 hover:bg-stone-100">
        <div class={cx(tw`h-1`, props.post().meta.tagClass ?? "bg-emerald-400")} />

        <aside class="flex gap-3 text-stone-600 text-xs">
          <span class="flex items-center gap-1">
            <Icon class="i-solar:calendar-outline" />
            <span>
              {formatDistanceWithOptions(
                { addSuffix: true },
                Date.now(),
                props.post().meta.publishDate,
              )}
            </span>
          </span>
        </aside>

        <header>
          <h3 class="font-title">{props.post().meta.title}</h3>
        </header>

        <div class="text-stone-500 text-xs">{props.post().meta.description}</div>
      </article>
    </Link>
  );
};

export const ArchivePost = (props: PostProps) => {
  return (
    <Link to="/blog/$slug" params={{ slug: props.post().slug }}>
      <article class="group flex items-center gap-2 bg-white p-4 hover:bg-stone-100">
        <h3 class="grow font-title">{props.post().meta.title}</h3>
        <Icon class="i-solar:arrow-right-outline transition group-hover:translate-x-1" />
      </article>
    </Link>
  );
};
