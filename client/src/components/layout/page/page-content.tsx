import { cn } from "@/lib/utils";

interface PageContentProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: "none" | "md" | "lg";
}
export default function PageContent({
  padding = "md",
  className,
  children,
  ...props
}: PageContentProps) {
  return (
    <div
      className={cn(
        "flex flex-1 lg:overflow-hidden",
        padding === "md" && "px-6 pt-4",
        padding === "lg" && "px-8 pt-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
