import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { IconLoader, IconSun, IconMoon } from "@tabler/icons";
import { CircleButton } from "../Buttons";

enum Themes {
  SYSTEM = "system",
  DARK = "dark",
  LIGHT = "light",
}

type DarkThemeSwitcherProps = {
  className?: string;
};

function DarkThemeSwitcher({ className }: DarkThemeSwitcherProps) {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const getIconBasedOnTheme = () => {
    if (!mounted) return <IconLoader className="animate-spin" />;

    const currentTheme = theme === Themes.SYSTEM ? systemTheme : theme;

    if (currentTheme === Themes.DARK) {
      return <IconSun />;
    }
    return <IconMoon />;
  };

  const handleClick = () => {
    if (theme === Themes.DARK) {
      setTheme(Themes.LIGHT);
    } else {
      setTheme(Themes.DARK);
    }
  };

  return (
    <CircleButton
      className={className}
      title="Toggle dark mode"
      icon={getIconBasedOnTheme()}
      clickHandler={handleClick}
    />
  );
}

DarkThemeSwitcher.defaultProps = {
  className: "",
};

export default DarkThemeSwitcher;
