import React from "react";
import { Header } from "./header/header";

type DashboardLayoutProps = {
  children?: React.ReactNode;
};

export const DashboardLayout = ({
  children,
}: DashboardLayoutProps): React.ReactElement => (
  <div className="max-w-screen-xl m-auto w-full laptop:border laptop:border-white desktop:border desktop:border-white">
    <div>
      <div className=" desktop:inline-block laptop:inline-block w-full">
        <div className="w-full">
          <Header />
        </div>
      </div>
    </div>
    <main>{children}</main>
  </div>
);
