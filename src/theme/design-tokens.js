import { darkTheme } from "./dark";
import { lightTheme } from "./light";

/**
 * @param {('light'|'dark')} mode
 */
export function getDesingTokens(mode) {
  return mode === "light" ? lightTheme : darkTheme;
}
