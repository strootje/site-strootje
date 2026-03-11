import type { ArticleExport } from "@scope/util/blog";
import { tw } from "@scope/util/uno";

export const Article: ArticleExport = {
  frontmatter: {
    title: "Hoe ik met keel mijn cluster deploy versimplde",
    publishDate: new Date("2026-03-06"),
    description: "another artible written with care..",
    tag: {
      color: tw`bg-cyan-300`,
      text: "kubernetes",
    },
  },

  component: () => {
    return (
      <>
        <h1>Second Article</h1>
      </>
    );
  },
};
