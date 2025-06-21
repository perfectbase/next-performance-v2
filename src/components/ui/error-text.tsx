import { cn } from "@/lib/utils";

export function ErrorText({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  if (!children) return null;
  return (
    <div className={cn("text-destructive text-xs", className)} {...props}>
      {children}
    </div>
  );
}
