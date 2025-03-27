"use client";
import * as React from "react";
import { OpenInV0Button } from "@/components/open-in-v0-button";

import { ComponentHeader } from "@/components/document/ComponentPage";
import {
  Menu,
  MenuTitle,
  MenuBody,
  MenuItem,
} from "@/registry/new-york/menu/menu";
export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <ComponentHeader
        title="Menu"
        description="A menu component for the new york registry"
      />
      <main className="flex flex-col flex-1 gap-8">
        <ComponentDisplayCard
          title="Key Value Data Card - Vertical"
          description="A key value data card"
          name="key-value-data-card"
        >
          <Menu className="max-w-sm">
            <MenuTitle title="Menu Component 範例" />
            <MenuBody>
              <MenuItem label="Start" href="/docs/data-card" />
              <MenuItem label="Data Card" href="/docs/data-card" />
              <MenuItem label="Menu" href="/docs/menu" isActive={true} />
            </MenuBody>
          </Menu>
        </ComponentDisplayCard>
      </main>
    </div>
  );
}

function ComponentDisplayCard({
  title,
  // description,
  children,
  name,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  name: string;
}) {
  return (
    <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
      <div className="flex items-center justify-between">
        <h2 className="text-sm text-muted-foreground sm:pl-3">{title}</h2>
        <OpenInV0Button name={name} className="w-fit" />
      </div>
      <div className="flex flex-col items-center justify-center min-h-[300px] relative gap-4">
        {children}
      </div>
    </div>
  );
}
