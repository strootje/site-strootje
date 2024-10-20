import { Avatar } from "./Avatar";

export const Header = () => {
  return (
    <header class="grid grid-rows-5 justify-center font-title text-2xl">
      <div class="col-span-full row-span-3 row-start-1 flex flex-col items-center bg-amber text-slate-800">
        <span>Bastiaan</span>
        <span>Stroosnijder</span>
      </div>
      <Avatar class="col-span-full row-span-4 row-start-2 border-6 border-amber border-solid" />
    </header>
  );
};
