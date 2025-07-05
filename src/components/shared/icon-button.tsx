import { JSX } from "solid-js";

type IconButtonProps = {
  icon: string;
  action: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent>;
};
export const IconButton = ({ icon, action }: IconButtonProps) => (
  <button type="button" onmousedown={action}>
    <i class={icon} />
  </button>
);
