import React from "react";
import Link from "next/link";

type CtaProps = {
  text: string;
  destination: string;
};

function Cta({ text, destination }: CtaProps) {
  const ctaClassNames = `
        bg-yellow-400 w-max border-yellow-600 border-2 font-bold text-neutral-800 transition-colors px-12 py-3
        hover:bg-transparent focus-visible:bg-transparent dark:focus-visible:text-yellow-400 dark:hover:text-yellow-400
        md:px-16 md:py-4 md:text-lg`;

  return destination.charAt(0) === "#" ? (
    <a href={destination} className={ctaClassNames}>
      {text}
    </a>
  ) : (
    <Link href={destination} passHref>
      <a className={ctaClassNames}>{text}</a>
    </Link>
  );
}

export default Cta;
