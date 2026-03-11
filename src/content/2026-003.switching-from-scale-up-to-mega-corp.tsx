import type { ArticleExport } from "@scope/util/blog";

export const Article: ArticleExport = {
  frontmatter: {
    title: "Switching from scale-up to mega-corp",
    publishDate: new Date("2026-03-13"),
    description: "another artible written with care..",
    featured: true,
  },

  component: () => {
    return (
      <>
        <h1>Mijn ervaring met de overstap van scale-up naar corporate</h1>
      </>
    );
  },
};
