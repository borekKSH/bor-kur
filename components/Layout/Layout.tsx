import React from "react";
import { IconArrowUp } from "@tabler/icons";
import ScrollToTop from "react-scroll-to-top";
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
        <ScrollToTop
          className="
          dark:!bg-neutral-900/90 dark:!text-white dark:hover:!text-yellow-400 hover:!text-yellow-400 !invisible !z-50
            !right-6 !bottom-6 !p-2 !shadow-md !text-neutral-900 !w-11 !h-11
              !bg-white/90 !backdrop-blur-md !rounded-full !transition-colors
          md:!visible"
          smooth
          component={<IconArrowUp className="w-full h-auto" />}
        />
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
