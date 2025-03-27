// import { Button } from "@/components/ui/button";
"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import { FaGithub } from "react-icons/fa";
// Nav bar component
// 1. Logo
// 2. Nav items
//    1. Home
//    2. Docs
//    3. About
// 3. Theme toggle
// 4. Github Link Icon

export default function Navbar() {
  const pathname = usePathname();
  const actionList = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs/start",
    },
  ];
  return (
    <div className="flex justify-between items-center py-2 px-4 border-b-2">
      <h1 className="text-md font-bold">Quan/UI</h1>
      <div className="flex items-center gap-2">
        {actionList.map((action) => (
          <Link
            key={action.href}
            href={action.href}
            className={cn(
              "px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800",
              pathname === action.href && "font-semibold text-primary"
            )}
          >
            {action.label}
          </Link>
        ))}
        <Link href="https://github.com/quan0715/shadcn-registry">
          <div className="flex items-center p-2 rounded-full bg-gray-100 dark:bg-gray-800">
            <FaGithub className="w-6 h-6" />
          </div>
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
}
