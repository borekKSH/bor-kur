import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg";

type LogoProps = {
  clickHandler: () => void;
};

function Logo({ clickHandler }: LogoProps) {
  return (
    <Link href="/#hero" passHref>
      <a className="inline-flex gap-6 items-center" onClick={clickHandler}>
        <Image
          src={logo}
          width={48}
          height={48}
          alt="Logo of the company, which is a yellow chicken."
        />
        <h1
          className="
          text-xl font-bold text-neutral-900 select-none
            dark:text-white transition-colors hover:text-yellow-400 dark:hover:text-yellow-400
          md:text-2xl
          lg:text-3xl"
        >
          BOR-KUR
        </h1>
      </a>
    </Link>
  );
}

export default Logo;
