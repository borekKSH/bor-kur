import React, { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import ThemeSwitcher from "../ThemeSwitcher";
import LocaleSwitcher from "../LocaleSwitcher";
import HamburgerButton from "./HamburgerButton";
import { INavbar } from "../../types/generated/contentful";

type NavbarProps = {
  content: INavbar;
};

function Navbar({ content }: NavbarProps) {
  const { themeSwitcherTitle, localeSwitcherTitle } = content.fields;

  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened(false);
  };

  return (
    <header
      className="
      fixed max-w-container w-full top-0 left-1/2 -translate-x-1/2 z-40 px-8 py-6
        flex justify-between items-center dark:bg-gradient-to-b dark:from-neutral-900 to-transparent 
      md:dark:bg-none"
    >
      <Logo content={content} clickHandler={handleClick} />
      <div
        className="
        md:flex md:gap-3
        lg:gap-6"
      >
        <Nav content={content} opened={opened} clickHandler={handleClick} />
        <ThemeSwitcher className="hidden md:grid" title={themeSwitcherTitle} />
        <LocaleSwitcher className="hidden md:grid" title={localeSwitcherTitle} />
      </div>
      <HamburgerButton opened={opened} setOpened={setOpened} />
    </header>
  );
}

export default Navbar;
