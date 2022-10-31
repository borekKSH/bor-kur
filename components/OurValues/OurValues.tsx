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
      className="z-20 w-full min-h-screen bg-yellow-100 mt-[calc(100vh-2rem)] dark:bg-neutral-900 transition"
      aria-label={title}
      id="about"
    >
      <div className="w-full px-8 py-24 mx-auto max-w-container grid gap-11 place-items-center xl:gap-24">
        <h2 className="text-4xl font-bold tracking-tight text-center text-neutral-900 transition dark:text-white sm:text-6xl xl:text-7xl">
          {title}
        </h2>
        <article className="grid grid-cols-1 gap-10 max-w-[20rem] place-items-center lg:grid-cols-3 lg:gap-16 lg:max-w-none">
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
