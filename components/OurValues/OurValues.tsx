import React from "react";
import OurValuesCard from "./OurValuesCard";
import { ISectionOurValues } from "../../types/generated/contentful";

import imagePeople from "../../public/images/values-people.jpg";
import imageGrowth from "../../public/images/values-growth.jpg";
import imageQuality from "../../public/images/values-quality.jpg";

import iconPeople from "../../public/icons/values/people.svg";
import iconGrowth from "../../public/icons/values/growth.svg";
import iconQuality from "../../public/icons/values/quality.svg";

type OurValuesProps = {
  content: ISectionOurValues;
};

function OurValues({ content }: OurValuesProps) {
  const {
    title,
    peopleTitle,
    peopleParagraph,
    peopleImageAlternativeText,
    growthTitle,
    growthParagraph,
    growthImageAlternativeText,
    qualityTitle,
    qualityParagraph,
    qualityImageAlternativeText,
  } = content.fields;

  return (
    <section
      className="mt-[calc(100vh-2rem)] min-h-screen w-full bg-yellow-100 z-20 dark:bg-neutral-900 transition"
      aria-label={title}
      id="about"
    >
      <div
        className="max-w-container w-full py-32 px-8 grid gap-11 place-items-center mx-auto
        xl:gap-24 xl:py-48"
      >
        <h2
          className="text-4xl font-bold tracking-tight text-neutral-900 transition dark:text-white text-center
            sm:text-6xl
            xl:text-7xl"
        >
          {title}
        </h2>
        <article
          className="
          grid grid-cols-1 gap-10 place-items-center
          lg:grid-cols-3 lg:gap-16"
        >
          <OurValuesCard
            title={peopleTitle}
            paragraph={peopleParagraph}
            alt={peopleImageAlternativeText}
            image={imagePeople}
            icon={iconPeople}
          />
          <OurValuesCard
            title={growthTitle}
            paragraph={growthParagraph}
            alt={growthImageAlternativeText}
            image={imageGrowth}
            icon={iconGrowth}
          />
          <OurValuesCard
            title={qualityTitle}
            paragraph={qualityParagraph}
            alt={qualityImageAlternativeText}
            image={imageQuality}
            icon={iconQuality}
          />
        </article>
      </div>
    </section>
  );
}

export default OurValues;
