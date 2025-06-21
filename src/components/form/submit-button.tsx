import { Button } from "@/components/ui/button";
import { useFormContext } from "./hooks/form-context";

export function SubmitButton({
  label,
  allowDefaultValues = false,
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
          loading={state.isSubmitting}
          disabled={allowDefaultValues ? undefined : state.isDefaultValue}
          {...props}
        >
          {label}
        </Button>
      )}
    </form.Subscribe>
  );
}
