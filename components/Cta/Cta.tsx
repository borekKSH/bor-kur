import React from "react";
import Link from "next/link";

type CtaProps = {
  text: string;
  destination: string;
};

function Cta({ text, destination }: CtaProps) {
  return destination.charAt(0) === "#" ? (
    <a
      href={destination}
      className="px-12 py-3 font-bold bg-yellow-400 border-2 border-yellow-600 w-max text-neutral-800 transition-colors hover:bg-transparent focus-visible:bg-transparent dark:focus-visible:text-yellow-400 dark:hover:text-yellow-400 md:px-16 md:py-4 md:text-lg"
    >
      {text}
    </a>
  ) : (
    <Link href={destination} passHref>
      <a className="px-12 py-3 font-bold bg-yellow-400 border-2 border-yellow-600 w-max text-neutral-800 transition-colors hover:bg-transparent focus-visible:bg-transparent dark:focus-visible:text-yellow-400 dark:hover:text-yellow-400 md:px-16 md:py-4 md:text-lg">
        {text}
      </a>
    </Link>
  );
}

export default Cta;
