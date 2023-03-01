//@TODO USE COMMONG THEME PROPERTIES HERE

import { createTheme } from "@mui/material";

/** @type {import('@mui/material').Theme} */
export const baseTheme = createTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    h1: {
      fontSize: "6rem",
      fontWeight: "revert",
    },
    h2: {
      fontSize: "5rem",
      fontWeight: "revert",
    },
    h3: {
      fontSize: "4rem",
      fontWeight: "bold",
    },
  },
});
