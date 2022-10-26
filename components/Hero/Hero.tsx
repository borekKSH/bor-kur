import React from "react";
import Image from "next/future/image";
import Cta from "../Cta";

import imageHero from "../../public/images/baby-chicks-landscape.jpg";
import { ISectionHero } from "../../types/generated/contentful";

type HeroProps = {
  content: ISectionHero;
};

function Hero({ content }: HeroProps) {
  const { title, paragraph, ctaContact, imageAlternativeText } = content.fields;

  const [firstTitleWord, secondTitleWord] = title.split(" ");

  return (
    <section
      className="
      bg-yellow-50 dark:bg-neutral-800 transition
      pt-12 relative flex flex-col
      xl:w-full xl:pt-0 xl:flex-row xl:items-center xl:min-h-screen"
      aria-label="Hero"
      id="hero"
    >
      <div
        className="
        max-w-container w-full py-24 px-8
        md:py-32
        xl:bg-none xl:py-0 xl:mx-auto"
      >
        <div
          className="
          max-w-prose flex flex-col gap-6 items-center mx-auto
          xl:mx-0 xl:items-baseline"
        >
          <h2
            className="
            text-4xl font-bold tracking-tight text-neutral-900 transition dark:text-white text-center
            sm:text-6xl
            xl:text-7xl xl:text-left"
          >
            {firstTitleWord}
            <span className="text-yellow-900 dark:text-yellow-400 transition-colors">
              {" "}
              {secondTitleWord}
            </span>
          </h2>
          <p
            className="
            text-neutral-600 transition dark:text-neutral-200 text-center
            sm:text-xl
            xl:text-left"
          >
            {paragraph}
          </p>
          <Cta text={ctaContact} destination="#contact" />
        </div>
      </div>
      <div
        className="
        xl:trapezoid
        dark:brightness-75 transition
        xl:left-1/2 xl:inset-y-0 xl:absolute"
      >
        <Image
          src={imageHero}
          alt={imageAlternativeText}
          className="h-full object-cover object-right"
          priority
        />
      </div>
    </section>
  );
}

export default Hero;
