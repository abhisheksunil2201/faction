// import ChannelDM from "@/components/islets/dm-channel";
import { Page } from "@/components/layout/page";

// const getChannelByID = async (id: string) => {
//   if (!id) throw new Error("Invalid ID");
// };

export default async function ChannelPage({}: //   params,
{
  params: { id: string };
}) {
  //   const { channel } = await getChannelByID(params.id);
  return (
    <Page>
      <p>Channel Page</p>
    </Page>
  );
}
