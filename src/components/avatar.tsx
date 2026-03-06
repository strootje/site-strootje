import { Avatar as ArkAvatar } from "@ark-ui/solid/avatar";
import { openPeeps } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import { type ComponentProps, splitProps } from "solid-js";

type AvatarProps = ComponentProps<"img"> & {
  seed: string;
};

export const Avatar = (props: AvatarProps) => {
  const [opts, attribs] = splitProps(props, ["seed"]);

  const avatar = createAvatar(openPeeps, {
    accessories: ["glasses"],
    accessoriesProbability: 100,
    backgroundColor: [],
    face: ["blank", "calm", "cheeky", "driven", "serious", "smile", "smileBig"],
    facialHairProbability: 100,
    facialHair: ["moustache6"],
    head: ["long", "longBangs"],
    headContrastColor: ["ff00ff"],
    maskProbability: 0,
    mask: [],
    seed: opts.seed,
    skinColor: ["ffdbb4"],
  });

  return (
    <ArkAvatar.Root>
      <ArkAvatar.Image {...attribs} src={avatar.toDataUri()} />
    </ArkAvatar.Root>
  );
};
