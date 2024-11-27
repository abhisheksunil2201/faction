import { Suspense } from "react";
import SideMenu from "./side-menu";
import SideMenuSkeleton from "./side-menu/side-menu-skeleton";

export default function CommonLayout() {
  return (
    <>
      <Suspense fallback={<SideMenuSkeleton />}>
        <SideMenu />
      </Suspense>
    </>
  );
}
