import React from "react";
import { ISectionOurLocation } from "../../types/generated/contentful";

type AddressFooterProps = {
  content: ISectionOurLocation;
};

function AddressFooter({ content }: AddressFooterProps) {
  const { title, companyName, city, zipCode, street, streetNumber, nip, regon, email } =
    content.fields;

  return (
    <section
      className="
      mt-96 min-h-[24rem] w-full bg-yellow-200 z-20 dark:bg-neutral-800 transition px-8 py-32
      sm:mt-[30rem]
      md:mt-[36rem]
      xl:py-12"
      aria-label="address"
      id="address"
    >
      <div
        className="
        mx-auto max-w-container flex flex-col items-center justify-between h-full gap-12
        lg:flex-row"
      >
        <h2
          className="
        text-4xl font-bold tracking-tight text-neutral-900 transition dark:text-white text-center
        sm:text-6xl
        lg:text-7xl
        xl:text-8xl"
        >
          {title}
        </h2>
        <address
          className="
          not-italic text-neutral-600 transition dark:text-neutral-200 text-center text-lg leading-relaxed grid gap-2
          sm:text-xl
          md:text-left"
        >
          <div className="grid">
            <strong className="text-yellow-400 text-2xl sm:text-3xl mb-2">
              {companyName}
            </strong>
            <strong>
              {city}, {zipCode}
            </strong>
            <strong>
              {street} {streetNumber}
            </strong>
          </div>
          <div className="grid">
            <span>
              <span className="font-bold">NIP: </span>
              {nip}
            </span>
            <span>
              <span className="font-bold">REGON: </span>
              {regon}
            </span>
          </div>
          <div>
            <span className="font-bold">E-mail: </span>
            <a
              className="
              font-bold dark:text-neutral-200 text-neutral-800 transition-colors underline
            hover:text-yellow-400 focus-visible:text-yellow-400 dark:hover:text-yellow-400 dark:focus-visible:text-yellow-400"
              href={`mailto:${email}`}
            >
              {email}
            </a>
          </div>
        </address>
      </div>
    </section>
  );
}

export default AddressFooter;
