import { useContext } from "react";
import { ColorModeContext } from "../../context/color-mode/color-mode-context";

export function useColorMode() {
  const context = useContext(ColorModeContext);

  if (context === undefined) {
    throw new Error(
      "useColorMode should be used within a ColorModeProvider"
    );
  }

  return context;
}
