import React from "react";
import Link from "next/link";

type NavLinkProps = {
  title: string;
  destination: string;
  clickHandler: () => void;
};

function NavLink({ title, destination, clickHandler }: NavLinkProps) {
  const linkClassNames = `
  text-2xl text-neutral-900 tracking-wide transition-colors
  hover:text-yellow-400 px-4 py-2 dark:text-white dark:hover:text-yellow-400
  md:text-base
  lg:text-lg`;

  return (
    <li>
      {destination.charAt(0) === "#" ? (
        <a href={destination} className={linkClassNames} onClick={clickHandler}>
          {title}
        </a>
      ) : (
        <Link href={destination} passHref>
          <a className={linkClassNames} onClick={clickHandler}>
            {title}
          </a>
        </Link>
      )}
    </li>
  );
}

export default NavLink;
