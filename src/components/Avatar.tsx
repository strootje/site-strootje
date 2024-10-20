import AvatarSrc from "~/assets/images/portret.jpeg?w=200&format=webp&imagetools";

export const Avatar = () => {
  return <img class="h-40 w-40 rounded-full border-2 border-amber border-solid object-cover" src={AvatarSrc} alt="" />;
};
