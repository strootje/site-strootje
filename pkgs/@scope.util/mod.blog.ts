import type { Component } from "solid-js";

export type Frontmatter = {
  title: string;
  publishDate: Date;
  featured?: true;
  description: string;
  tag: { color: string; text: string };
};

export type ArticleExport = {
  frontmatter: Frontmatter;
  component: Component;
};
