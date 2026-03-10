import type { Component } from "solid-js";

export type Frontmatter = {
  title: string;
  publishDate: Date;
  highlighted?: true;
};

export type ArticleExport = {
  frontmatter: Frontmatter;
  component: Component;
};
