import React from "react";
import Meta from "../Meta";
import Navbar from "../Navbar";
import ThemeSwitcher from "../ThemeSwitcher";
import LocaleSwitcher from "../LocaleSwitcher";
import Footer from "../Footer";
import { ILayout } from "../../types/generated/contentful";

type LayoutProps = {
  content: ILayout;
  children: React.ReactNode;
};

function Layout({ content, children }: LayoutProps) {
  const { themeSwitcherTitle, localeSwitcherTitle } = content.fields;

  return (
    <>
      <Meta />
      <Navbar content={content} />
      <div
        className="
        grid min-h-screen font-sans-serif"
        id="top"
      >
        <main className="grid w-full">{children}</main>
        <Footer content={content} />
        <div
          className="
          fixed bottom-6 right-6 grid gap-3 z-40
          md:hidden"
        >
          <ThemeSwitcher title={themeSwitcherTitle} />
          <LocaleSwitcher title={localeSwitcherTitle} />
        </div>
      </div>
    </>
  );
}

export default Layout;
