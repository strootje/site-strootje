import { ComponentProps } from "solid-js";

export const Img = ({ src, ...props }: ComponentProps<"img">) => {
  return <img src={src} {...props} />;
};
