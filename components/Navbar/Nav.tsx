import React from "react";
import { ILayout } from "../../types/generated/contentful";
import NavLink from "./NavLink";

type NavProps = {
  content: ILayout;
  opened: boolean;
  clickHandler: () => void;
};

function Nav({ content, opened, clickHandler }: NavProps) {
  const { about, location, contact } = content.fields;

  return (
    <nav
      className={`
      ${opened ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}
        absolute grid place-items-center inset-0 h-screen transition origin-right
         bg-white/90 shadow-md dark:bg-neutral-900/90 backdrop-blur-md px-8
        md:rounded-full md:static md:h-auto md:scale-x-100 md:transform-none md:opacity-100 md:transition-none
      `}
    >
      <ul
        className="
        flex flex-col gap-6
        md:flex-row md:gap-3
        lg:gap-6"
      >
        <NavLink title={about} destination="#about" clickHandler={clickHandler} />
        <NavLink title={location} destination="/location" clickHandler={clickHandler} />
        <NavLink title={contact} destination="#contact" clickHandler={clickHandler} />
      </ul>
    </nav>
  );
}

export default Nav;
