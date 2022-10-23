import React from "react";
import { IconWorld } from "@tabler/icons";
import { CircleButton } from "../Buttons";

type LocaleSwitcherProps = {
  title: string;
  className?: string;
};

function LocaleSwitcher({ title, className }: LocaleSwitcherProps) {
  const handleClick = () => {};

  return (
    <CircleButton
      className={className}
      title={title}
      icon={<IconWorld />}
      clickHandler={handleClick}
    />
  );
}

LocaleSwitcher.defaultProps = {
  className: "",
};

export default LocaleSwitcher;
