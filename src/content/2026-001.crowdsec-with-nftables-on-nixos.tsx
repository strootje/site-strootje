import type { ArticleExport } from "@scope/util/blog";
import { tw } from "@scope/util/uno";

export const Article: ArticleExport = {
  frontmatter: {
    title: "Crowdsec met Nftables op Nixos",
    publishDate: new Date("2026-02-27"),
    description: "This is my first article written on my site",
    featured: true,
    tag: {
      color: tw`bg-amber-300`,
      text: "nixos",
    },
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
