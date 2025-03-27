"use client";
import * as React from "react";
import { OpenInV0Button } from "@/components/open-in-v0-button";
import {
  KeyValueDataCard,
  Key,
  Value,
  Action,
} from "@/registry/new-york/key-value-data-card/key-value-data-card";
import { CalendarIcon } from "lucide-react";
import { ComponentHeader } from "@/components/document/ComponentPage";
export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <ComponentHeader
        title="Data Card"
        description="A data card component for the new york registry"
      />
      <main className="flex flex-col flex-1 gap-8">
        <ComponentDisplayCard
          title="Key Value Data Card - Vertical"
          description="A key value data card"
          name="key-value-data-card"
        >
          <KeyValueDataCard orientation="vertical">
            <Key>表單建立時間</Key>
            <Value>2025 / 3 /29</Value>
            <Action>
              <div className="p-2 rounded-full bg-primary">
                <CalendarIcon className="w-4 h-4 text-white" />
              </div>
            </Action>
          </KeyValueDataCard>
          <KeyValueDataCard orientation="horizontal">
            <Key>表單建立時間</Key>
            <Value>2025 / 3 /29</Value>
            <Action>
              <div className="p-2 rounded-full bg-primary">
                <CalendarIcon className="w-4 h-4 text-white" />
              </div>
            </Action>
          </KeyValueDataCard>
          <KeyValueDataCard orientation="vertical" isLoading={true}>
            <Key>表單建立時間</Key>
            <Value>2025 / 3 /29</Value>
            <Action>
              <div className="p-2 rounded-full bg-primary">
                <CalendarIcon className="w-4 h-4 text-white" />
              </div>
            </Action>
          </KeyValueDataCard>
          <KeyValueDataCard orientation="horizontal" isLoading={true}>
            <Key>表單建立時間</Key>
            <Value>2025 / 3 /29</Value>
            <Action>
              <div className="p-2 rounded-full bg-primary">
                <CalendarIcon className="w-4 h-4 text-white" />
              </div>
            </Action>
          </KeyValueDataCard>
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
