import Sidebar from "@/app/components/sidebar";

const Page = () => {
  return (
    <div className="flex w-full h-full bg-accent">
      <div className="flex-3 w-full h-full"></div>
      <div className="w-full h-full flex-1">
        <RightPanel />
      </div>
    </div>
  );
};

const RightPanel = () => {
  return <div className="w-full h-full bg-amber-500"></div>;
};

export default Page;
