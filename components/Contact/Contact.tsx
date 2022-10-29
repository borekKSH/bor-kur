import React from "react";
import { ISectionContact } from "../../types/generated/contentful";
import Form from "../Form";

type ContactProps = {
  content: ISectionContact;
};

function Contact({ content }: ContactProps) {
  const { title } = content.fields;

  return (
    <section
      className="min-h-screen w-full bg-yellow-50 z-20 dark:bg-neutral-800 transition-colors"
      id="contact"
    >
      <div
        className="
        max-w-container w-full py-24 px-8 grid gap-12 place-items-center mx-auto
        xl:gap-24"
      >
        <h2
          className="
          text-4xl font-bold tracking-tight text-neutral-900 transition dark:text-white text-center
          sm:text-6xl
          xl:text-7xl"
        >
          {title}
        </h2>
        <Form content={content} />
      </div>
    </section>
  );
}

export default Contact;
