import { Icon } from "#/components/icon.tsx";
import type { Post } from "#/functions/content.functions.ts";
import { tw } from "@scope/util/uno";
import { Link } from "@tanstack/solid-router";
import { cx } from "class-variance-authority";
import { formatDistanceWithOptions } from "date-fns/fp";
import type { Accessor } from "solid-js";

type PostProps = {
  post: Accessor<Post>;
};

export const RecentPost = (props: PostProps) => {
  return (
    <Link to="/blog/$slug" params={{ slug: props.post().slug }}>
      <article class="grid gap-2 bg-white p-2 hover:bg-stone-100">
        <div class={cx(tw`h-1`, props.post().tagClass ?? "bg-emerald-700")} />

        <aside class="flex gap-3 text-stone-600 text-xs">
          <span class="flex items-center gap-1">
            <Icon class="i-solar:calendar-outline" />
            <span>
              {formatDistanceWithOptions(
                { addSuffix: true },
                Date.now(),
                props.post().publishDate,
              )}
            </span>
          </span>
        </aside>

        <header>
          <h3 class="font-title">{props.post().title}</h3>
        </header>

        <div class="text-stone-500 text-xs">{props.post().description}</div>
      </article>
    </Link>
  );
};
