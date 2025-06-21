import * as React from "react";
import { cn } from "@/lib/utils";
import { parseValidationError } from "@/lib/validation";
import { ErrorText } from "@/components/ui/error-text";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useFieldContext } from "./hooks/form-context";

type TextFieldProps = React.ComponentProps<typeof Input> & {
  label: string;
  containerClassName?: string;
  labelClassName?: string;
};

export function TextField({
  label,
  containerClassName,
  labelClassName,
  ...props
}: TextFieldProps) {
  const field = useFieldContext<string>();

  return (
    <div className={cn("space-y-2", containerClassName)}>
      <Label htmlFor={props.id} className={labelClassName}>
        {label}
      </Label>
      <Input
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        {...props}
      />
      {!field.state.meta.isValid && (
        <ErrorText>
          {parseValidationError(field.state.meta.errors[0])}
        </ErrorText>
      )}
    </div>
  );
}
