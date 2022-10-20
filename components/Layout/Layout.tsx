import React from "react";
import Meta from "../Meta";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Meta />
      <main
        className="
        flex flex-col items-center min-h-screen font-sans-serif"
      >
        {children}
      </main>
    </>
  );
}

export default Layout;
