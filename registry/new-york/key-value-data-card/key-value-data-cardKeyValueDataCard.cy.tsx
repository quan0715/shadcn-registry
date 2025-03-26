import React from "react";
import { KeyValueDataCard, Key, Value, Action } from "./key-value-data-card";
import { CalendarIcon } from "lucide-react";
import "@/app/globals.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen flex flex-col gap-4 justify-center items-center">
      {children}
    </div>
  );
};

describe("<KeyValueDataCard />", () => {
  it("應該正確渲染垂直方向的卡片", () => {
    cy.mount(
      <Layout>
        <KeyValueDataCard>
          <Key>表單建立時間</Key>
          <Value>2025 / 3 /29</Value>
        </KeyValueDataCard>
      </Layout>
    );

    cy.contains("表單建立時間").should("be.visible");
    cy.contains("2025 / 3 /29").should("be.visible");

    cy.get("[data-cy='key-value-data-card-bar']").should("exist");
    cy.get("[data-cy='key-value-data-card-bar']").should(
      "have.css",
      "height",
      "5px"
    );
  });

  it("應該正確渲染水平方向的卡片", () => {
    cy.mount(
      <Layout>
        <KeyValueDataCard orientation="horizontal">
          <Key>表單建立時間</Key>
          <Value>2025 / 3 /29</Value>
        </KeyValueDataCard>
      </Layout>
    );

    cy.get(".flex-row").should("exist");
    cy.contains("表單建立時間").should("be.visible");
    cy.contains("2025 / 3 /29").should("be.visible");

    cy.get("[data-cy='key-value-data-card-bar']").should("exist");
    cy.get("[data-cy='key-value-data-card-bar']").should(
      "have.css",
      "width",
      "5px"
    );
  });

  it("應該正確渲染帶有操作按鈕的卡片", () => {
    cy.mount(
      <Layout>
        <KeyValueDataCard>
          <Key>表單建立時間</Key>
          <Value>2025 / 3 /29</Value>
          <Action>
            <div className="p-2 rounded-full bg-primary">
              <CalendarIcon className="w-4 h-4 text-white" />
            </div>
          </Action>
        </KeyValueDataCard>
      </Layout>
    );

    cy.get(".bg-primary").should("exist");
  });

  it("應該在載入狀態時顯示骨架屏", () => {
    cy.mount(
      <Layout>
        <KeyValueDataCard isLoading>
          <Key>表單建立時間</Key>
          <Value>2025 / 3 /29</Value>
        </KeyValueDataCard>
      </Layout>
    );

    cy.contains("表單建立時間").should("not.exist");
    cy.contains("2025 / 3 /29").should("not.exist");
    cy.get(".animate-pulse").should("exist");
  });

  it("應該在水平載入時顯示正確的動畫", () => {
    cy.mount(
      <Layout>
        <KeyValueDataCard orientation="horizontal" isLoading>
          <Key>表單建立時間</Key>
          <Value>2025 / 3 /29</Value>
        </KeyValueDataCard>
      </Layout>
    );

    cy.get(".animate-loading-bar-y").should("exist");
  });

  it("應該在垂直載入時顯示正確的動畫", () => {
    cy.mount(
      <Layout>
        <KeyValueDataCard orientation="vertical" isLoading>
          <Key>表單建立時間</Key>
          <Value>2025 / 3 /29</Value>
        </KeyValueDataCard>
      </Layout>
    );

    cy.get(".animate-loading-bar-x").should("exist");
  });

  it("應該正確應用自定義類名", () => {
    cy.mount(
      <Layout>
        <KeyValueDataCard className="custom-class">
          <Key className="key-class">表單建立時間</Key>
          <Value className="value-class">2025 / 3 /29</Value>
        </KeyValueDataCard>
      </Layout>
    );

    cy.get(".custom-class").should("exist");
    cy.get(".key-class").should("exist");
    cy.get(".value-class").should("exist");
  });
});
