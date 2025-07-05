import { SiteHeaderNav } from "~/components/site/header-nav.tsx";
import { SiteHero } from "~/components/site/hero.tsx";

export default function PagesLayout() {
  return (
    <>
      <SiteHeaderNav />
      <SiteHero />

      <section class="flex flex-row sm:justify-between gap-2 sm:mx-auto p-2 sm:*:min-w-unset *:min-w-full sm:max-w-[960px] overflow-x-scroll *:scroll-mx-2 snap-mandatory snap-x *:snap-start sm:*:grow">
        <article class="bg-white shadow p-2 rounded h-40">article 1</article>
        <article class="bg-white shadow p-2 rounded h-40">article 2</article>
        <article class="bg-white shadow p-2 rounded h-40">article 3</article>
      </section>

      <div class="bg-white">
        <section class="mx-auto p-2 max-w-[960px] flex-">
          newsletter..
        </section>
      </div>

      <section class="mx-auto p-2 max-w-[960px]">
        <div class="flex flex-col gap-2">
          <div class="bg-white shadow rounded h-80" />
          <div class="bg-white shadow rounded h-80" />
          <div class="bg-white shadow rounded h-80" />
          <div class="flex flex-row gap-2 w-full">
            <div class="bg-white shadow rounded h-80 grow" />
            <div class="bg-white shadow rounded h-80 grow" />
          </div>
        </div>
      </section>
    </>
  );
}
