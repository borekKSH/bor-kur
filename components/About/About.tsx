import React from "react";
import { ISectionAbout } from "../../types/generated/contentful";
import ImageCtaSection from "../ImageCtaSection";

import imageAbout from "../../public/images/about.jpg";

type AboutProps = { content: ISectionAbout };

function About({ content }: AboutProps) {
  const { title, paragraph, cta, imageAlternativeText } = content.fields;

  return (
    <ImageCtaSection
      id="about"
      title={title}
      paragraph={paragraph}
      cta={cta}
      destination="/about"
      image={imageAbout}
      alt={imageAlternativeText}
    />
  );
}

export default About;
