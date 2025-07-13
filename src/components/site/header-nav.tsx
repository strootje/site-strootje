import { createSignal } from "solid-js";
import { ToggleButton } from "~/components/shared/toggle-button.tsx";

export const SiteHeaderNav = () => {
  const [open, setOpen] = createSignal(false);

  return (
    <nav
      classList={{ "open": open() }}
      class="group max-sm:[&.open]:fixed sticky inset-0 mx-auto p-2 max-sm:[&.open]:p-0 max-w-[1280px]"
    >
      <div class="flex max-sm:group-[.open]:flex-col gap-2 bg-stone-300/90 shadow backdrop-blur p-4 rounded h-full text-xl">
        <ul class="flex max-sm:group-[.open]:flex-col gap-8 grow">
          <li>Strootje</li>
          <li class="max-sm:group-not-[.open]:hidden">Life</li>
          <li class="max-sm:group-not-[.open]:hidden">Work</li>
          <li class="max-sm:group-not-[.open]:hidden">Speaking</li>
        </ul>

        <ul class="group-not-[.open]:hidden sm:flex gap-2">
          <li>Get in Touch</li>
        </ul>

        <ul class="flex gap-2 align-end">
          <li>
            <ToggleButton icons={["i-solid:sun", "i-solid:moon"]} signal={createSignal(false)} />
          </li>

          <li class="sm:hidden">
            <ToggleButton icons={["i-solid:bars", "i-solid:x"]} signal={[open, setOpen]} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

/**
 * states:
 * - large
 * - small/closed
 * - small/open
 */
