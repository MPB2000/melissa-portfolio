"use client";

import { IconButton } from "@chakra-ui/react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ColorModeButton = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <IconButton
        aria-label="Toggle theme"
        variant="ghost"
        size="md"
        opacity={0}
      >
        <FiMoon />
      </IconButton>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <IconButton
      aria-label={`Toggle ${isDark ? "light" : "dark"} mode`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      variant="ghost"
      size="md"
    >
      {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
    </IconButton>
  );
};
