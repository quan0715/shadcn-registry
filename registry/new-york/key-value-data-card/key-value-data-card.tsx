import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import React from "react";

interface KeyValueDataCardProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
  children?: ReactNode;
}

interface KeyProps {
  children: ReactNode;
  className?: string;
}

interface ValueProps {
  children: ReactNode;
  className?: string;
}

interface ActionProps {
  children: ReactNode;
  className?: string;
}

function Key({ children, className }: KeyProps) {
  return (
    <p className={cn("text-sm font-normal text-muted-foreground", className)}>
      {children}
    </p>
  );
}

function Value({ children, className }: ValueProps) {
  return <p className={cn("font-semibold text-sm", className)}>{children}</p>;
}

function Action({ children, className }: ActionProps) {
  return (
    <div className={cn("flex items-center shrink-0", className)}>
      {children}
    </div>
  );
}

export function KeyValueDataCard({
  orientation = "vertical",
  className,
  children,
}: KeyValueDataCardProps) {
  const isHorizontal = orientation === "horizontal";
  const innerPadding = "p-4";
  const rounded = "rounded-lg";
  const border = "border";

  // accept only one Key and one Value
  const keyChildren = React.Children.toArray(children).filter(
    (child: ReactNode) => React.isValidElement(child) && child.type === Key
  );

  if (keyChildren.length < 1) {
    throw new Error("KeyValueDataCard must have at least one Key component");
  }

  if (keyChildren.length > 1) {
    throw new Error("KeyValueDataCard must have only one Key component");
  }

  const valueChildren = React.Children.toArray(children).filter(
    (child: ReactNode) => React.isValidElement(child) && child.type === Value
  );

  if (valueChildren.length < 1) {
    throw new Error("KeyValueDataCard must have at least one Value component");
  }

  if (valueChildren.length > 1) {
    throw new Error("KeyValueDataCard must have only one Value component");
  }

  const actionChildren = React.Children.toArray(children).filter(
    (child: ReactNode) => React.isValidElement(child) && child.type === Action
  );
  // action is optional
  if (actionChildren.length && actionChildren.length > 1) {
    throw new Error("KeyValueDataCard must have only one Action component");
  }

  return (
    <div
      className={cn(
        border,
        rounded,
        "min-w-[250px]",
        "flex gap-0 overflow-hidden group relative",
        isHorizontal ? "flex-row items-stretch" : "flex-col",
        className
      )}
    >
      <div
        className={cn(
          isHorizontal ? "w-[5px]" : "h-[5px] w-full",
          "bg-primary shrink-0",
          "origin-center",
          "animate-expand-bar",
          "transition-all duration-500",
          "group-hover:bg-primary/80",
          isHorizontal ? "group-hover:w-[8px]" : "group-hover:h-[8px]"
        )}
      />
      <div className={cn(innerPadding, "flex flex-1")}>
        <div className="flex flex-col gap-1">
          {keyChildren[0]}
          {valueChildren[0]}
        </div>
        {actionChildren.length > 0 && (
          <div className="flex items-center ml-auto">
            {actionChildren.map((child, index) => (
              <React.Fragment key={index}>{child}</React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

KeyValueDataCard.Key = Key;
KeyValueDataCard.Value = Value;
KeyValueDataCard.Action = Action;

export { Key, Value, Action };
