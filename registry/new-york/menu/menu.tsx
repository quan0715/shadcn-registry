// Menu component for the new york registry
// Menu Component
// Menu Title
// Menu Items
// Menu Item
import { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import React from "react";

interface MenuTitleProps {
  title: string;
  className?: string;
}

interface MenuItemProps {
  label: string;
  href: string;
  isActive?: boolean;
  className?: string;
  children?: ReactNode;
}

interface MenuProps {
  children: ReactNode;
  className?: string;
}

const MenuTitle = React.forwardRef<HTMLParagraphElement, MenuTitleProps>(
  ({ title, className }, ref) => (
    <p ref={ref} className={cn("text-md font-extralight", className)}>
      {title}
    </p>
  )
);
MenuTitle.displayName = "MenuTitle";

const MenuItem = React.forwardRef<HTMLAnchorElement, MenuItemProps>(
  ({ label, href, isActive, className, children }, ref) => (
    <div className="flex items-stretch gap-1 group">
      <div
        className={cn(
          "w-[1.5px] bg-primary/25",
          isActive && "bg-primary"
          //   "group-hover:bg-primary/80"
        )}
      ></div>
      <Link
        ref={ref}
        href={href}
        className={cn(
          "w-full text-sm group-hover:font-semibold transition-all px-4 py-1 group-hover:bg-gray-100 dark:group-hover:bg-gray-800 rounded-md",
          className
        )}
      >
        <p className={cn(isActive ? "font-semibold" : "font-light")}>
          {children || label}
        </p>
      </Link>
    </div>
  )
);
MenuItem.displayName = "MenuItem";

const MenuBody = React.forwardRef<HTMLDivElement, MenuProps>(
  ({ children, className }, ref) => {
    return (
      <div ref={ref} className={cn("flex flex-col gap-0", className)}>
        {children}
      </div>
    );
  }
);
MenuBody.displayName = "MenuBody";

const Menu = React.forwardRef<HTMLDivElement, MenuProps>(
  ({ children, className }, ref) => {
    // const menuTitle = Children.toArray(children).find(
    //   (child) => isValidElement(child) && child.type === MenuTitle
    // );

    // const menuItems = Children.toArray(children).filter(
    //   (child) => isValidElement(child) && child.type === MenuItem
    // );
    return (
      <div
        ref={ref}
        className={cn("w-full flex flex-col gap-3 p-2 rounded-md", className)}
      >
        {children}
      </div>
    );
  }
);
Menu.displayName = "Menu";

export { Menu, MenuTitle, MenuItem, MenuBody };
