import React from "react";
import Image, { StaticImageData } from "next/image";

type OurValuesCardProps = {
  icon: StaticImageData;
  image: StaticImageData;
  alt: string;
  title: string;
  paragraph: string;
};

function OurValuesCard({ icon, image, alt, title, paragraph }: OurValuesCardProps) {
  return (
    <figure className="flex items-center flex-col gap-12">
      <div className="relative">
        <Image
          style={{ borderRadius: "50%", width: "20rem", height: "auto" }}
          src={image.src}
          width={image.width < 1280 ? image.width * 2 : image.width}
          height={image.height < 1280 ? image.width * 2 : image.width}
          alt={alt}
        />
        <i className="rounded-full bg-white w-24 h-24 grid place-items-center absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4">
          <Image className="scale-[0.625]" src={icon} layout="fill" alt="" />
        </i>
      </div>
      <figcaption className="max-w-prose">
        <h3
          className="
          text-3xl font-bold text-neutral-900 transition dark:text-yellow-400 uppercase tracking-wide text-center mb-4
          md:text-4xl md:mb-6"
        >
          {title}
        </h3>
        <p
          className="
          text-neutral-600 transition dark:text-neutral-200 text-center
          sm:text-xl"
        >
          {paragraph}
        </p>
      </figcaption>
    </figure>
  );
}

export default OurValuesCard;
