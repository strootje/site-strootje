import { Avatar } from "~/components/Avatar.tsx";

export const Header = () => {
  return (
    <header class="justify-center grid grid-rows-5 font-title text-2xl">
      <div class="flex flex-col items-center col-span-full row-span-3 row-start-1 bg-amber text-slate-800">
        <span>Bastiaan</span>
        <span>Stroosnijder</span>
      </div>
      <Avatar class="col-span-full row-span-4 row-start-2 border-6 border-amber border-solid" />
    </header>
  );
};
