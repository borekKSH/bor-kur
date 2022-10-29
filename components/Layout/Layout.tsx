import React from "react";
import Meta from "../Meta";
import Navbar from "../Navbar";
import ThemeSwitcher from "../ThemeSwitcher";
import LocaleSwitcher from "../LocaleSwitcher";
import Footer from "../Footer";
import { ILayout } from "../../types/generated/contentful";

type LayoutProps = {
  content: ILayout;
  noindex?: boolean;
  nofollow?: boolean;
  children: React.ReactNode;
};

function Layout({ content, noindex = false, nofollow = false, children }: LayoutProps) {
  const { themeSwitcherTitle, localeSwitcherTitle } = content.fields;

  return (
    <>
      <Meta noindex={noindex} nofollow={nofollow} />
      <Navbar content={content} />
      <div
        className="
        grid min-h-screen font-sans-serif bg-yellow-50 dark:bg-neutral-800 transition-colors"
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

Layout.defaultProps = {
  noindex: false,
  nofollow: false,
};

export default Layout;
