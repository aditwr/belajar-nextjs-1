import React from "react";
import { Fragment } from "react";
import Navbar from "../Navbar";
import { useRouter } from "next/router";

type AppShellProps = {
  children: React.ReactNode;
};

const disableNavbar = ["/auth/login", "/auth/register", "/404"];

export default function AppShell({ children }: AppShellProps) {
  const { pathname } = useRouter();
  return (
    <>
      <main>
        {!disableNavbar.includes(pathname) && <Navbar />}
        <main>{children}</main>
      </main>
    </>
  );
}
