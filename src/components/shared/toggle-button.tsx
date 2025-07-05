import { Show, Signal } from "solid-js";
import { IconButton } from "~/components/shared/icon-button.tsx";

type ToggleButtonProps = { icons: [string, string]; signal: Signal<boolean> };
export const ToggleButton = ({ icons, signal }: ToggleButtonProps) => {
  const [open, setOpen] = signal;

  return (
    <Show when={open()} fallback={<IconButton icon={icons[0]} action={() => setOpen(true)} />}>
      <IconButton icon={icons[1]} action={() => setOpen(false)} />
    </Show>
  );
};
