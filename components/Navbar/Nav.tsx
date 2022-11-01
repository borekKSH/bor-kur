import React from "react";
import { ILayout } from "../../types/generated/contentful";
import NavLink from "./NavLink";

type NavProps = {
  content: ILayout;
  opened: boolean;
  clickHandler: () => void;
};

function Nav({ content, opened, clickHandler }: NavProps) {
  const { navigationLinks } = content.fields;

  return (
    <nav
      className={`
      ${opened ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}
      absolute inset-0 h-screen px-8 shadow-md grid place-items-center transition origin-right bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md md:rounded-full md:static md:h-auto md:scale-x-100 md:transform-none md:opacity-100 md:transition-none
      `}
    >
      <ul className="flex flex-col gap-6 md:flex-row md:gap-2 lg:gap-6">
        {navigationLinks.map(({ fields }) => (
          <NavLink
            title={fields.title}
            destination={fields.destination}
            clickHandler={clickHandler}
            key={fields.title}
          />
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
