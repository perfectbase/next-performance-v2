import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import { SubmitButton } from "../submit-button";
import { TextField } from "../text-field";

export const { fieldContext, useFieldContext, formContext, useFormContext } =
  createFormHookContexts();

export const { useAppForm, withForm } = createFormHook({
  fieldComponents: {
    TextField,
  },
  formComponents: {
    SubmitButton,
  },
  fieldContext,
  formContext,
});
