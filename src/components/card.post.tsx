import { Icon } from "#/components/icon.tsx";
import type { PostMeta } from "#/functions/content.functions.ts";
import { tw } from "@scope/util/uno";
import { Link } from "@tanstack/solid-router";
import { cx } from "class-variance-authority";
import type { Accessor } from "solid-js";

type PostProps = {
  post: Accessor<PostMeta>;
};

export const FeaturedPost = (props: PostProps) => {
  return (
    <Link to="/blog/$slug" params={{ slug: props.post().slug }}>
      <article class="bg-white hover:bg-stone-100">
        <header class="">
          <div class="flex h-30 items-center justify-center bg-emerald-700 bg-hero-wiggle-black/5">
            <Icon class="i-brand:kubernetes scale-400 text-sky-300 text-xl" />
          </div>
        </header>

        <div class="p-4">
          <h3 class="text-2xl">{props.post().meta.title}</h3>
          <span>{props.post().meta.publishDate.toString()}</span>
        </div>
      </article>
    </Link>
  );
};

export const RecentPost = (props: PostProps) => {
  return (
    <Link to="/blog/$slug" params={{ slug: props.post().slug }}>
      <article class="grid gap-2 bg-white p-2 hover:bg-stone-100">
        <div class={cx(tw`rounded bg-hero-wiggle-black/5 px-3 py-0`, props.post().meta.tag.color)}>
          {props.post().meta.tag.text}
        </div>

        <header>
          <h3 class="fw-700">{props.post().meta.title}</h3>
        </header>

        <div>{props.post().meta.description}</div>
      </article>
    </Link>
  );
};

export const ArchivePost = (props: PostProps) => {
  return (
    <Link to="/blog/$slug" params={{ slug: props.post().slug }}>
      <article class="group flex items-center gap-2 bg-white p-4 hover:bg-stone-100">
        <h3 class="grow">{props.post().meta.title}</h3>
        <Icon class="i-solar:arrow-right-outline transition group-hover:translate-x-1" />
      </article>
    </Link>
  );
};
