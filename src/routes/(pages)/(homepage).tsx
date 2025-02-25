import { ArticleMenu } from "~/components/ArticleMenu.tsx";
import { Header } from "~/components/Header.tsx";
import { SocialMenu } from "~/components/SocialMenu.tsx";

export default function HomePage() {
  return (
    <>
      <Header />
      <SocialMenu />
      <ArticleMenu />
    </>
  );
}
