import { Button } from "@/components/ui/button";
import { useFormContext } from "./hooks/form-context";

export function SubmitButton({
  label,
  allowDefaultValues = false,
  disabled,
  ...props
}: Omit<React.ComponentProps<typeof Button>, "type"> & {
  label: string;
  allowDefaultValues?: boolean;
}) {
  const form = useFormContext();

  return (
    <form.Subscribe
      selector={(state) => ({
        isSubmitting: state.isSubmitting,
        isDefaultValue: state.isDefaultValue,
      })}
    >
      {(state) => (
        <Button
          type="submit"
          disabled={
            (allowDefaultValues ? undefined : state.isDefaultValue) ||
            state.isSubmitting ||
            disabled
          }
          {...props}
        >
          {label}
        </Button>
      )}
    </form.Subscribe>
  );
}
