import React, { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import DarkThemeSwitcher from "../DarkThemeSwitcher";
import LocaleSwitcher from "../LocaleSwitcher";
import HamburgerButton from "./HamburgerButton";

function Navbar() {
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened(false);
  };

  return (
    <header className="fixed max-w-container w-full top-0 left-1/2 -translate-x-1/2 z-40 flex justify-between items-center px-8 py-6">
      <Logo clickHandler={handleClick} />
      <div
        className="
        md:flex md:gap-3
        lg:gap-6"
      >
        <Nav opened={opened} clickHandler={handleClick} />
        <DarkThemeSwitcher className="hidden md:grid" />
        <LocaleSwitcher className="hidden md:grid" />
      </div>
      <HamburgerButton opened={opened} setOpened={setOpened} />
    </header>
  );
}

export default Navbar;
