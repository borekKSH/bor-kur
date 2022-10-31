import React from "react";
import Image, { StaticImageData } from "next/future/image";

type OurValuesCardProps = {
  icon: StaticImageData;
  image: StaticImageData;
  alt: string;
  title: string;
  paragraph: string;
};

function OurValuesCard({ icon, image, alt, title, paragraph }: OurValuesCardProps) {
  return (
    <figure className="flex flex-col items-center gap-12">
      <div className="relative w-80 h-80">
        <Image style={{ borderRadius: "50%" }} src={image} alt={alt} fill />
        <i className="absolute bottom-0 w-24 h-24 bg-white rounded-full grid place-items-center left-1/2 -translate-x-1/2 translate-y-1/4">
          <Image className="scale-[0.625]" src={icon} alt="" fill />
        </i>
      </div>
      <figcaption className="max-w-prose">
        <h3 className="mb-4 text-3xl font-bold tracking-wide text-center uppercase text-neutral-900 transition dark:text-yellow-400 md:text-4xl md:mb-6">
          {title}
        </h3>
        <p className="text-center text-neutral-600 transition dark:text-neutral-200 sm:text-xl">
          {paragraph}
        </p>
      </figcaption>
    </figure>
  );
}

export default OurValuesCard;
