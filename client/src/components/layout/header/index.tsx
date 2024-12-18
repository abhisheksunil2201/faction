import { cn } from "@/lib/utils";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  verticalPadding?: string;
}

export default function Header({
  verticalPadding = "4",
  className,
  ...props
}: HeaderProps) {
  return (
    <div
      className={cn(
        `px-${verticalPadding} flex h-12 items-center shadow-md`,
        className
      )}
      {...props}
    />
  );
}
