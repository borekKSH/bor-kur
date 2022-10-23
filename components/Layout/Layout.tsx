import React from "react";
import Meta from "../Meta";
import Navbar from "../Navbar";
import DarkThemeSwitcher from "../DarkThemeSwitcher";
import LocaleSwitcher from "../LocaleSwitcher";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Meta />
      <Navbar />
      <main
        className="
        flex flex-col items-center min-h-screen font-sans-serif scroll-smooth"
      >
        {children}
        <div
          className="
          fixed bottom-6 right-6 grid gap-3 z-40
          md:hidden"
        >
          <DarkThemeSwitcher />
          <LocaleSwitcher />
        </div>
      </main>
    </>
  );
}

export default Layout;
