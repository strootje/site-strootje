import {} from "~/components/ArticleItems";
import { ArticleMenu } from "~/components/ArticleMenu";
import { Header } from "~/components/Header";
import { SocialMenu } from "~/components/SocialMenu";

export default function HomePage() {
  return (
    <>
      <Header />
      <SocialMenu />
      <ArticleMenu />
    </>
  );
}
