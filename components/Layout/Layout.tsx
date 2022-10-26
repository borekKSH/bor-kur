import React from "react";
import Meta from "../Meta";
import Navbar from "../Navbar";
import ThemeSwitcher from "../ThemeSwitcher";
import LocaleSwitcher from "../LocaleSwitcher";
import { INavbar } from "../../types/generated/contentful";

type LayoutProps = {
  navbarContent: INavbar;
  children: React.ReactNode;
};

function Layout({ navbarContent, children }: LayoutProps) {
  const { themeSwitcherTitle, localeSwitcherTitle } = navbarContent.fields;

  return (
    <>
      <Meta />
      <Navbar content={navbarContent} />
      <main
        className="
        flex flex-col items-center min-h-screen font-sans-serif"
        id="top"
      >
        {children}
        <div
          className="
          fixed bottom-6 right-6 grid gap-3 z-40
          md:hidden"
        >
          <ThemeSwitcher title={themeSwitcherTitle} />
          <LocaleSwitcher title={localeSwitcherTitle} />
        </div>
      </main>
    </>
  );
}

export default Layout;
