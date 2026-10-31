import { Avatar as ArkAvatar } from "@ark-ui/solid/avatar";
import openPeeps from "@dicebear/styles/open-peeps.json" with {type: 'json'};
import * as  Dicebear from "@dicebear/core";
import { type ComponentProps, splitProps } from "solid-js";

type AvatarProps = ComponentProps<"img"> & {
  seed: string;
};

export const Avatar = (props: AvatarProps) => {
  const [opts, attribs] = splitProps(props, ["seed"]);

  const styles = new Dicebear.Style(openPeeps);
  const avatar = new Dicebear.Avatar(styles, {
    accessoriesVariant: ["glasses"],
    accessoriesProbability: 100,
    backgroundColor: [],
    expressionVariant: ["blank", "calm", "cheeky", "driven", "serious", "smile", "smileBig"],
    facialHairProbability: 100,
    facialHairVariant: ["moustache6"],
    headVariant: ["long", "longBangs"],
    headContrastColor: ["ff00ff"],
    maskProbability: 0,
    maskVariant: [],
    seed: opts.seed,
    skinColor: ["ffdbb4"],
  });

  return (
    <ArkAvatar.Root>
      <ArkAvatar.Image {...attribs} src={avatar.toDataUri()} />
    </ArkAvatar.Root>
  );
};
