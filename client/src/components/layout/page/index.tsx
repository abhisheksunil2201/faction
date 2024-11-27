import PageContent from "./page-content";
import PageHeader from "./page-header";

const Page = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="absolute bottom-0 left-[310px] right-0 top-0 flex flex-col bg-foreground shadow-lg shadow-background/5">
      {children}
    </div>
  );
};
export { Page, PageHeader, PageContent };
