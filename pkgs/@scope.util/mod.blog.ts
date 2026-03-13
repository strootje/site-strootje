import type { Component } from "solid-js";

export type Frontmatter = {
  title: string;
  publishDate: Date;
  featured?: true;
  description: string;
  tagClass?: string;
};

export type ArticleExport = {
  frontmatter: Frontmatter;
  featuredComponent?: Component;
  component: Component;
};
