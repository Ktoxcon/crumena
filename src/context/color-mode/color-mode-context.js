import { createContext } from "react";

/**
 *
 * @typedef {Object} ColorModeContextValue
 * @property {Function} toggleColorMode
 * @property {string} colorMode
 */

/**
 * @type {React.Context<ColorModeContextValue | undefined>}
 */
export const ColorModeContext = createContext(undefined);
