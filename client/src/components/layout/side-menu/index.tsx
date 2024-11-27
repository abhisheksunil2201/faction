import SideMenuTrack from "./side-menu-track";
import SideMenuWrapper from "./side-menu-wrapper";

// export const getData = async (): Promise<{ servers: ListedServer[] }> => {
//   return { servers };
// };

export default async function SideMenu() {
  //   const { servers } = await getData();
  return (
    <SideMenuWrapper>
      <SideMenuTrack servers={[]} />
    </SideMenuWrapper>
  );
}
