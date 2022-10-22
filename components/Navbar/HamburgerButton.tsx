import React from "react";
import Hamburger from "hamburger-react";

type HamburgerButtonProps = {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

function HamburgerButton({ opened, setOpened }: HamburgerButtonProps) {
  return (
    <i className="md:hidden">
      <Hamburger
        rounded
        color="white"
        direction="left"
        toggled={opened}
        toggle={setOpened}
        label="Show navigation menu"
        aria-expanded={opened}
      />
    </i>
  );
}

export default HamburgerButton;
