import { createContext } from "react";

/**
 *
 * @typedef {Object} ColorModeContextValue
 * @property {Function} toggleColorMode
 */

/**
 * @type {React.Context<ColorModeContextValue | undefined>}
 */
export const ColorModeContext = createContext(undefined);
