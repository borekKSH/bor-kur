import React from "react";

type LabelProps = {
  htmlFor: string;
  children: React.ReactNode;
};

function Label({ htmlFor, children }: LabelProps) {
  return (
    <label
      className="
      mb-2 block text-lg font-bold tracking-wide dark:text-white text-neutral-900 transition-colors
      md:text-xl"
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}

export default Label;
