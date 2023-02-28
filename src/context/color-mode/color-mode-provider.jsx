import { createTheme, ThemeProvider } from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";
import { getDesingTokens } from "../../theme/design-tokens";
import { ColorModeContext } from "./color-mode-context";

/**
 * @param {import("react").PropsWithChildren}
 */
export function ColorModeProvider({ children }) {
  const [colorMode, setColorMode] = useState("light");

  useEffect(() => {
    const previousSetColorMode = localStorage.getItem("mode");

    if (previousSetColorMode) {
      setColorMode(previousSetColorMode);
      return () => {};
    }

    localStorage.setItem("mode", colorMode);
    return () => {};
  }, []);

  const toggleColorMode = useCallback(() => {
    setColorMode((prevColorMode) => {
      const newMode = prevColorMode === "light" ? "dark" : "light";

      localStorage.setItem("mode", newMode);
      return newMode;
    });
  }, []);

  const theme = useMemo(() => {
    //@TODO IMPLEMENT COLORS
    const modeDesignTokens = getDesingTokens(colorMode);
    return createTheme();
  }, [colorMode]);

  return (
    <ColorModeContext.Provider value={{ toggleColorMode, colorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
