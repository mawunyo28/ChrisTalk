import { Surface } from "@heroui/react";
import MAvatar from "./avatar";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-10 w-full h-full justify-around items-center px-8 ">
      <div className="flex flex-col gap-10 w-full items-center">
        <MAvatar size="2xl" />

        {tabs.map((link, i) => (
          <Tab key={i} href={link.href} name={link.name}></Tab>
        ))}
      </div>

      <DailyBible />
    </div>
  );
};

const DailyBible = () => {
  return <div className="rounded-4xl min-w-full bg-cyan-400 min-h-48"></div>;
};

interface PageLink {
  name: string;
  href: string;
}

const tabs: PageLink[] = [
  { name: "Feed", href: "#" },
  { name: "Bible", href: "#" },
  { name: "Messaging", href: "#" },
  { name: "Live", href: "#" },
];

const Tab = ({ name, href }: PageLink) => {
  return (
    <Surface
      className="text-xl rounded-full flex justify-center items-center w-full h-12"
      variant="secondary"
    >
      <Link href={href}>
        <span>{name}</span>
      </Link>
    </Surface>
  );
};

export default Sidebar;
