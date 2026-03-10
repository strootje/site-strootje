import type { ArticleExport } from "@scope/util/blog";

export const Article: ArticleExport = {
  frontmatter: {
    title: "Crowdsec met Nftables op Nixos",
    publishDate: new Date("2026-03-01"),
    highlighted: true,
  },

  component: () => {
    return (
      <>
        <h1>First Article</h1>
      </>
    );
  },
};
