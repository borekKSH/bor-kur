import React from "react";

type SubmitProps = {
  children: React.ReactNode;
};

function Submit({ children }: SubmitProps) {
  return (
    <button
      type="submit"
      className="
      bg-yellow-400 w-full border-yellow-600 border-2 font-bold text-neutral-800 transition-colors px-12 py-3
        hover:bg-transparent focus-visible:bg-transparent dark:focus-visible:text-yellow-400 dark:hover:text-yellow-400"
    >
      {children}
    </button>
  );
}

export default Submit;
