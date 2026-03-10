import { TextField } from "#/components/form.fields.text.tsx";
import { SubmitButton } from "#/components/form.submit-button.tsx";
import { createFormHook, createFormHookContexts } from "@tanstack/solid-form";

const {
  fieldContext,
  formContext,
  useFieldContext,
  useFormContext,
} = createFormHookContexts();
export { useFieldContext, useFormContext };

export const { useAppForm, withFieldGroup, withForm } = createFormHook({
  fieldComponents: {
    TextField,
  },
  fieldContext,
  formComponents: {
    SubmitButton,
  },
  formContext,
});
