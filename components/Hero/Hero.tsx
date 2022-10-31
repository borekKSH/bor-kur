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
      className="fixed z-10 flex flex-col h-screen pt-12 bg-yellow-50 dark:bg-neutral-800 transition xl:w-full xl:pt-0 xl:flex-row xl:items-center"
      aria-label="Hero"
    >
      <div className="w-full px-8 py-24 max-w-container md:py-32 xl:py-0 xl:mx-auto">
        <div className="flex flex-col items-center mx-auto max-w-prose gap-6 lg:gap-12 xl:mx-0 xl:items-baseline">
          <h2 className="text-4xl font-bold tracking-tight text-center text-neutral-900 transition dark:text-white sm:text-6xl lg:text-7xl xl:text-8xl xl:text-left">
            {firstTitleWord}
            <span className="text-yellow-900 dark:text-yellow-400 transition-colors">
              {" "}
              {secondTitleWord}
            </span>
          </h2>
          <p className="text-center text-neutral-600 transition dark:text-neutral-200 sm:text-xl xl:text-left">
            {paragraph}
          </p>
          <Cta text={ctaContact} destination="#contact" />
        </div>
      </div>
      <div className="xl:trapezoid dark:brightness-75 transition xl:left-1/2 xl:inset-y-0 xl:absolute">
        <Image
          src={imageHero}
          alt={imageAlternativeText}
          className="object-cover object-right h-full"
          priority
        />
      </div>
    </section>
  );
}

export default Hero;
