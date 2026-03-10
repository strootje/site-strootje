import type { ArticleExport } from "@scope/util/blog";

export const Article: ArticleExport = {
  frontmatter: {
    title: "Hoe ik met keel mijn cluster deploy versimplde",
    publishDate: new Date("2026-03-08"),
  },

  component: () => {
    return (
      <>
        <h1>Second Article</h1>
      </>
    );
  },
};
