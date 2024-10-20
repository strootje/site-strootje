import type { ComponentProps } from "solid-js";
import AvatarSrc from "~/assets/images/portret.jpeg?w=300&format=webp&imagetools";

export const Avatar = ({ class: className }: Omit<ComponentProps<"img">, "src">) => {
  return <img class={`${className} size-64 object-cover object-t`} style={{ "border-radius": "25% 75% 35% 65% / 50% 50% 50% 50%" }} src={AvatarSrc} alt="" />;
};
