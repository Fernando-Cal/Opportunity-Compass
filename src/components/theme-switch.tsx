import React from "react";
import { useTheme } from "@heroui/use-theme";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      isIconOnly
      variant="flat"
      onPress={toggleTheme}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
        key={theme}
      >
        {theme === "light" ? (
          <Icon icon="lucide:moon" className="text-lg" />
        ) : (
          <Icon icon="lucide:sun" className="text-lg" />
        )}
      </motion.div>
    </Button>
  );
}