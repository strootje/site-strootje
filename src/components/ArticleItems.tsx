import type { ParentProps } from "solid-js";

export const ArticleSquare = ({ children }: ParentProps) => (
  <article class="relative col-span-1 row-span-1 bg-amber p-1 rounded size-20 overflow-hidden">
    {children}
  </article>
);
export const ArticleWide = ({ children }: ParentProps) => (
  <article class="relative col-span-2 bg-amber p-1 rounded h-20 overflow-hidden">
    {children}
  </article>
);
export const ArticleTall = ({ children }: ParentProps) => (
  <article class="relative col-span-1 row-span-2 bg-amber p-1 rounded h-42 overflow-hidden">
    {children}
  </article>
);
