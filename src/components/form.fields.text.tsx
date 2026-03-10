import { useFieldContext } from "#/components/hooks.form.ts";
import { Field } from "@ark-ui/solid/field";
import { type ComponentProps, Show, splitProps } from "solid-js";

type TextFieldProps = ComponentProps<"input"> & {
  label?: string;
};

export const TextField = (props: TextFieldProps) => {
  const [opts, attribs] = splitProps(props, ["label"]);
  const field = useFieldContext<string>();

  return (
    <Field.Root invalid={!field().state.meta.isValid}>
      <Show when={opts.label}>
        {(label) => <Field.Label>{label()}</Field.Label>}
      </Show>

      <Field.Input
        {...attribs}
        name={field().name}
        value={field().state.value}
        onblur={field().handleBlur}
        oninput={(e) => field().handleChange(e.target.value)}
      />

      <Field.ErrorText>
        {field().state.meta.errors.join("\n")}
      </Field.ErrorText>
    </Field.Root>
  );
};
