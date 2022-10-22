import React from "react";
import NavLink from "./NavItem";

type NavProps = {
  opened: boolean;
  clickHandler: () => void;
};

function Nav({ opened, clickHandler }: NavProps) {
  return (
    <nav
      className={`
      ${opened ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}
        absolute grid place-items-center inset-0 h-screen transition origin-right
         bg-white/90 shadow-md dark:bg-slate-800/90 backdrop-blur-md px-8
        md:rounded-full md:static md:h-auto md:scale-x-100 md:transform-none md:opacity-100 md:transition-none
      `}
    >
      <ul
        className="
        flex flex-col gap-8
        md:flex-row md:gap-3
        lg:gap-8"
      >
        <NavLink title="O nas." destination="#" clickHandler={clickHandler} />
        <NavLink title="Galeria." destination="#" clickHandler={clickHandler} />
        <NavLink title="Kontakt." destination="#" clickHandler={clickHandler} />
      </ul>
    </nav>
  );
}

export default Nav;
