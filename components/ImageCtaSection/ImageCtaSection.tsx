import React from "react";
import Image, { StaticImageData } from "next/future/image";
import Cta from "../Cta";

type ImageCtaSectionProps = {
  id: string;
  title: string;
  paragraph: string;
  cta: string;
  destination: string;
  image: StaticImageData;
  alt: string;
};

function ImageCtaSection({
  id,
  title,
  paragraph,
  cta,
  destination,
  image,
  alt,
}: ImageCtaSectionProps) {
  return (
    <section
      className="z-20 w-full min-h-screen bg-yellow-200 dark:bg-neutral-900 transition-colors grid place-items-center"
      title={title}
      id={id}
    >
      <article className="flex flex-wrap items-center justify-between w-full px-8 py-24 max-w-container gap-24 lg:gap-12">
        <div className="flex flex-col items-center mx-auto max-w-prose gap-6 lg:gap-12 lg:flex-1 xl:mx-0 xl:items-baseline">
          <h2 className="text-4xl font-bold tracking-tight text-center text-neutral-900 transition dark:text-white sm:text-6xl lg:text-7xl xl:text-8xl lg:text-left">
            {title}
          </h2>
          <p className="text-center grid gap-6 sm:gap-7 text-neutral-600 transition dark:text-neutral-200 sm:text-xl xl:text-left">
            {paragraph.split("\n").map((item) => (
              <span key={item}>{item}</span>
            ))}
          </p>
          <Cta text={cta} destination={destination} />
        </div>
        <Image className="w-full h-auto m-16 rounded lg:flex-1" src={image} alt={alt} />
      </article>
    </section>
  );
}

export default ImageCtaSection;
