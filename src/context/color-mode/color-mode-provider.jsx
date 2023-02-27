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
    localStorage.setItem(
      "mode",
      colorMode === "light" ? "dark" : "light"
    );
    setColorMode((prevColorMode) =>
      prevColorMode === "light" ? "dark" : "light"
    );
  }, []);

  const theme = useMemo(() => {
    createTheme(getDesingTokens(colorMode));
  }, [colorMode]);

  return (
    <ColorModeContext.Provider value={{ toggleColorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
