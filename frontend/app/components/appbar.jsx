"use client";
import { useTheme } from "next-themes";
import { Separator } from "@heroui/react";
import { Button } from "@heroui/react";
import Sun from "@/app/icons/Sun";
import Moon from "@/app/icons/Moon";

const Appbar = () => {
  return (
    <div className="w-full sticky left-0">
      <div className=" flex flex-row justify-around items-center">
        <h1 className="text-4xl font-bold">ChrisTalk</h1>
        <div id="links">
          <ul className="flex gap-8 text-lg justify-between cursor-pointer">
            <li className="hover:underline">Home</li>
            <li className="hover:underline">Discover</li>
            <li className="hover:underline">Create</li>
            <li className="hover:underline">Live</li>
          </ul>
        </div>
        <ThemeToggle></ThemeToggle>
      </div>

      <Separator className="my-4" variant="secondary" />
    </div>
  );
};

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="">
      <Button
        variant="tertiary"
        size="sm"
        onPress={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        {theme === "dark" ? <Sun /> : <Moon />}
      </Button>
    </div>
  );
};

export default Appbar;
