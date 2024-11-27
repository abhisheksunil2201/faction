import Divider from "@/components/ui/divider";
import SideMenuWrapper from "./side-menu-wrapper";
import { cn } from "@/lib/utils";
import { BsDiscord } from "react-icons/bs";

interface SideMenuItemSkeletonProps
  extends React.HTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean;
}
const SideMenuItemSkeleton = ({
  isActive,
  className,
  ...props
}: SideMenuItemSkeletonProps) => (
  <a
    href="#"
    className={cn(
      "relative block h-12 w-12 bg-foreground bg-cover transition-all",
      "group hover:shadow-xl focus:outline-none",
      isActive ? "rounded-[15px]" : "rounded-[100%]",
      className
    )}
    {...props}
  />
);
export default function SideMenuSkeleton() {
  return (
    <SideMenuWrapper>
      <SideMenuItemSkeleton
        isActive
        className="mx-auto mb-2 flex items-center justify-center bg-primary text-white"
      >
        <BsDiscord fontSize={26} />
      </SideMenuItemSkeleton>
      <Divider className="w-8" />
      <div className="animate-pulse">
        <SideMenuItemSkeleton className="mx-auto my-2" />
        <SideMenuItemSkeleton className="mx-auto my-2" />
        <SideMenuItemSkeleton className="mx-auto my-2" />
        <SideMenuItemSkeleton className="mx-auto my-2" />
      </div>
    </SideMenuWrapper>
  );
}
