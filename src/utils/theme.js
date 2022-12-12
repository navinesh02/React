import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
 
  palette: {
    primary: {
      main: "#2C3060",
      dark: "#2C3060",
      light: "#5078E1",
    },
    secondary: {
      main: "#2C3060",
      dark: "#091B29",
      light: "#4E5A6B",
    },
    background: {
      white: "#FFFFFF",
      darkBg: "#1C1C1C",
      grayTransprent: "#00001F",
      grayTransprent2: "#000014",
      gray: "#98A0AC",
    },
  },
  typography: {
    fontFamily: "Nunito Sans",

    h1: {
      fontSize: 48,
      fontWeight: 600,
      lineHeight: 1.5,
      margin: 0,
    },
    h2: {
      fontSize: 36,
      fontWeight: 600,
      lineHeight: 1.5,
      margin: 0,
    },
    h3: {
      fontSize: 14,
      fontWeight: 800,
      lineHeight: 1.5,
    },
    h4: {
      fontSize: 24,
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: 14,
      fontWeight: 700,
      lineHeight: 1.5,
    },
  },
});

// export default {theme};