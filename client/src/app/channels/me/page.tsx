import Divider from "@/components/ui/divider";
import { BsPersonFill } from "react-icons/bs";
import { Page, PageContent, PageHeader } from "@/components/layout/page";

export default async function MePage() {
  return (
    <Page>
      <PageHeader>
        <div className="flex gap-4">
          <div className="flex flex-none items-center gap-2 text-sm font-semibold">
            <BsPersonFill className="text-gray-500" fontSize={22} />
            Friends
          </div>
          <Divider vertical />
        </div>
      </PageHeader>
      <PageContent className="flex-col lg:flex-row" padding="none">
        <p>Me</p>
      </PageContent>
    </Page>
  );
}
