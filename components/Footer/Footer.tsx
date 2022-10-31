import React from "react";
import { ILayout } from "../../types/generated/contentful";
import { NavLink } from "../Navbar";

type FooterProps = {
  content: ILayout;
};

function Footer({ content }: FooterProps) {
  const { about, location, contact } = content.fields;

  return (
    <footer className="relative dark:bg-neutral-900 bg-yellow-100 z-20 w-full transition-colors">
      <nav
        className="
        max-w-container-padding mx-auto flex flex-col-reverse items-center gap-12 px-8 py-32
        md:justify-between md:gap-4 md:py-12 md:flex-row"
      >
        <p
          className="
          absolute text-center bottom-2 text-sm w-full
            font-medium text-neutral-900 dark:text-neutral-400 transition-colors
          md:text-base md:text-left md:static md:w-auto"
        >
          Designed and coded by{" "}
          <a
            className="
            dark:text-neutral-200 text-neutral-800 transition-colors underline
              hover:text-yellow-400 focus-visible:text-yellow-400 dark:hover:text-yellow-400 dark:focus-visible:text-yellow-400"
            href="https://karolbinkowski.me/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Karol Binkowski
          </a>
        </p>
        <ul
          className="
          flex flex-col gap-6 text-center
          md:flex-row"
        >
          <NavLink title={about} destination="#about" />
          <NavLink title={location} destination="/location" />
          <NavLink title={contact} destination="#contact" />
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
