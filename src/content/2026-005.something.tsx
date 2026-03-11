import type { ArticleExport } from "@scope/util/blog";
import { tw } from "@scope/util/uno";

export const Article: ArticleExport = {
  frontmatter: {
    title: "Mijn ervaring met de overstap van scale-up naar corporate",
    publishDate: new Date("2026-03-27"),
    description: "another artible written with care..",
    tag: {
      color: tw`bg-cyan-300`,
      text: "kubernetes",
    },
  },

  component: () => {
    return (
      <>
        <h1>Mijn ervaring met de overstap van scale-up naar corporate</h1>
      </>
    );
  },
};
