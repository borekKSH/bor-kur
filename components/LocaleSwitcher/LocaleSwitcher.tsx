import React from "react";
import { IconWorld } from "@tabler/icons";
import { CircleButton } from "../Buttons";

type LocaleSwitcherProps = {
  className?: string;
};

function LocaleSwitcher({ className }: LocaleSwitcherProps) {
  const handleClick = () => {};

  return (
    <CircleButton
      className={className}
      title="Change language"
      icon={<IconWorld />}
      clickHandler={handleClick}
    />
  );
}

LocaleSwitcher.defaultProps = {
  className: "",
};

export default LocaleSwitcher;
