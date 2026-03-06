import { tw } from "@scope/util/uno";
import { cx } from "class-variance-authority";
import { type ComponentProps, splitProps } from "solid-js";

export const Icon = (props: ComponentProps<"i">) => {
  const [opts, attribs] = splitProps(props, ["class"]);
  return <i {...attribs} class={cx(tw`v-middle inline-block`, opts.class)} />;
};
