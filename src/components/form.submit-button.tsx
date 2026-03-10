import { type ComponentProps, splitProps } from "solid-js";
import { useFormContext } from "./hooks.form.ts";

export const SubmitButton = (props: ComponentProps<"button">) => {
  const [opts, attribs] = splitProps(props, ["disabled", "type"]);
  const form = useFormContext();

  return (
    <form.Subscribe selector={(state) => state.isSubmitted}>
      {(isSubmitted) => (
        <button
          {...attribs}
          type={opts.type ?? "submit"}
          disabled={opts.disabled ?? isSubmitted()}
        />
      )}
    </form.Subscribe>
  );
};
