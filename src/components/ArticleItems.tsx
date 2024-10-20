import type { ParentProps } from "solid-js";

export const ArticleSquare = ({ children }: ParentProps) => (
  <article class="relative col-span-1 row-span-1 size-20 overflow-hidden rounded bg-amber p-1">{children}</article>
);
export const ArticleWide = ({ children }: ParentProps) => <article class="relative col-span-2 h-20 overflow-hidden rounded bg-amber p-1">{children}</article>;
export const ArticleTall = ({ children }: ParentProps) => (
  <article class="relative col-span-1 row-span-2 h-42 overflow-hidden rounded bg-amber p-1">{children}</article>
);
