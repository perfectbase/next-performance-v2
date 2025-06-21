import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const spinnerVariants = cva(
  "border-primary animate-spin rounded-full border border-t-transparent",
  {
    variants: {
      size: {
        small: "h-3 w-3 border-2",
        medium: "h-9 w-9 border-4",
        large: "h-12 w-12 border-6",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
);

function Spinner({
  className,
  size,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof spinnerVariants>) {
  return (
    <div className={cn(spinnerVariants({ size }), className)} {...props} />
  );
}

export { Spinner };
