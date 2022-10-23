import React from "react";
import Link from "next/link";

type NavLinkProps = {
  title: string;
  destination: string;
  clickHandler: () => void;
};

function NavLink({ title, destination, clickHandler }: NavLinkProps) {
  return (
    <li>
      <Link href={destination} passHref>
        <a
          className="
          text-2xl text-neutral-900 tracking-wide font-normal transition-colors
            hover:text-yellow-400 px-4 py-2 dark:text-white dark:hover:text-yellow-400
          md:text-base
          lg:text-lg"
          onClick={clickHandler}
        >
          {title}
        </a>
      </Link>
    </li>
  );
}

export default NavLink;
