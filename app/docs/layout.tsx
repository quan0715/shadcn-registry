// add menu items to the left
"use client";
import {
  Menu,
  MenuItem,
  MenuTitle,
  MenuBody,
} from "@/registry/new-york/menu/menu";
import { usePathname } from "next/navigation";
const menuItems = [
  {
    label: "開始使用",
    href: "/docs/start",
  },
  {
    label: "資料卡片",
    href: "/docs/data-card",
  },
  {
    label: "選單",
    href: "/docs/menu",
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="flex flex-row h-svh">
      <aside className="flex flex-col p-2 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 border-r-2">
        <Menu className="w-full">
          <MenuTitle title="Component 列表" />
          <MenuBody>
            {menuItems.map((item) => (
              <MenuItem
                key={item.href}
                label={item.label}
                href={item.href}
                isActive={pathname === item.href}
              />
            ))}
          </MenuBody>
        </Menu>
      </aside>
      <main className="flex-1 relative p-8 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px] mx-auto">
        {children}
      </main>
    </div>
  );
}
