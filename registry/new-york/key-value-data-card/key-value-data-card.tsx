"use client";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import React from "react";

interface KeyValueDataCardProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
  children?: ReactNode;
  isLoading?: boolean;
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

const Key = React.forwardRef<HTMLParagraphElement, KeyProps>(
  ({ children, className }, ref) => (
    <p
      ref={ref}
      className={cn("text-xs font-normal text-muted-foreground", className)}
    >
      {children}
    </p>
  )
);
Key.displayName = "Key";

const Value = React.forwardRef<HTMLParagraphElement, ValueProps>(
  ({ children, className }, ref) => (
    <p ref={ref} className={cn("font-semibold text-sm", className)}>
      {children}
    </p>
  )
);
Value.displayName = "Value";

const Action = React.forwardRef<HTMLDivElement, ActionProps>(
  ({ children, className }, ref) => (
    <div ref={ref} className={cn("flex items-center shrink-0", className)}>
      {children}
    </div>
  )
);
Action.displayName = "Action";

const Skeleton = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <div
    ref={ref}
    className="w-full flex flex-col gap-2 animate-pulse"
    {...props}
  >
    <div className="h-7 w-24 bg-muted rounded" />
    <div className="h-4 w-32 bg-muted rounded" />
  </div>
));
Skeleton.displayName = "Skeleton";

const ActionSkeleton = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <div
    ref={ref}
    className="h-8 w-8 bg-muted rounded-2xl animate-pulse"
    {...props}
  />
));
ActionSkeleton.displayName = "ActionSkeleton";

const KeyValueDataCard = React.forwardRef<
  HTMLDivElement,
  KeyValueDataCardProps
>(
  (
    { orientation = "vertical", className, children, isLoading = false },
    ref
  ) => {
    const isHorizontal = orientation === "horizontal";
    const innerPadding = "p-4";
    const rounded = "rounded-lg";
    const border = "border";

    const keyChildren = React.Children.toArray(children).filter(
      (child: ReactNode) => React.isValidElement(child) && child.type === Key
    );

    if (!isLoading) {
      if (keyChildren.length < 1) {
        throw new Error(
          "KeyValueDataCard must have at least one Key component"
        );
      }

      if (keyChildren.length > 1) {
        throw new Error("KeyValueDataCard must have only one Key component");
      }
    }

    const valueChildren = React.Children.toArray(children).filter(
      (child: ReactNode) => React.isValidElement(child) && child.type === Value
    );

    if (!isLoading) {
      if (valueChildren.length < 1) {
        throw new Error(
          "KeyValueDataCard must have at least one Value component"
        );
      }

      if (valueChildren.length > 1) {
        throw new Error("KeyValueDataCard must have only one Value component");
      }
    }

    const actionChildren = React.Children.toArray(children).filter(
      (child: ReactNode) => React.isValidElement(child) && child.type === Action
    );

    if (!isLoading && actionChildren.length > 1) {
      throw new Error("KeyValueDataCard must have only one Action component");
    }

    useEffect(() => {
      console.log("isLoading", isLoading);
    }, [isLoading]);

    return (
      <div
        ref={ref}
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
            "bg-primary shrink-0 rounded-xl",
            !isLoading ? "group-hover:bg-primary/80" : "",
            isLoading
              ? isHorizontal
                ? "animate-loading-bar-y"
                : "animate-loading-bar-x"
              : ""
          )}
          data-cy="key-value-data-card-bar"
        />
        <div
          className={cn(
            innerPadding,
            "flex flex-1 gap-1 justify-between items-center"
          )}
        >
          {isLoading ? (
            <Skeleton />
          ) : (
            <div className="flex flex-col gap-0">
              {keyChildren[0] && keyChildren[0]}
              {valueChildren[0] && valueChildren[0]}
            </div>
          )}
          {isLoading ? (
            <ActionSkeleton />
          ) : (
            <div className="flex items-center ml-auto">
              {actionChildren[0] && actionChildren[0]}
            </div>
          )}
        </div>
      </div>
    );
  }
);
KeyValueDataCard.displayName = "KeyValueDataCard";

export { KeyValueDataCard, Key, Value, Action };
