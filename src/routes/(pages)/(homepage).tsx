import { ParentProps } from "solid-js";
import { ArticleMenu } from "~/components/ArticleMenu.tsx";
import { Header } from "~/components/Header.tsx";
import { SocialMenu } from "~/components/SocialMenu.tsx";

export default function HomePage({ children }: ParentProps) {
  return (
    <>
      <Header />
      <SocialMenu />
      <ArticleMenu />

      <h3>Content:</h3>
      <div>{children}</div>
    </>
  );
}
