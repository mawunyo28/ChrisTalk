"use client";
import { useTheme } from "next-themes";
import { Separator } from "@heroui/react";
import { Button } from "@heroui/react";
import Sun from "@/app/icons/Sun";
import Moon from "@/app/icons/Moon";

const Appbar = () => {
  return (
    <div className="w-full">
      <div className=" flex flex-row">
        <span className="text-3xl font-bold">App</span>
        <ThemeToggle></ThemeToggle>
      </div>

      <Separator className="my-4" variant="secondary" />
    </div>
  );
};

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="ml-auto">
      <Button
        variant="tertiary"
        size="sm"
        onPress={() => {
          setTheme(theme === "dark" ? "light" : "dark");
          console.log("Hei");
        }}
      >
        {theme === "dark" ? <Sun /> : <Moon />}
      </Button>
    </div>
  );
};

export default Appbar;
