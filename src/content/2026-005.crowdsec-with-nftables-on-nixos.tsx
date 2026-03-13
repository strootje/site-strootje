import type { ArticleExport } from "@scope/util/blog";

export const Article: ArticleExport = {
  frontmatter: {
    title: "Configuring CrowdSec with NfTables on NixOS",
    publishDate: new Date("2026-04-27"),
    description: "This is my first article written on my site",
  },

  component: () => {
    return (
      <>
        <h1>First Article</h1>

        <div>
        </div>
      </>
    );
  },
};
