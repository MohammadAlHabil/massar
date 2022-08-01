import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  direction: "rtl",
  breakpoints: {
    values: {
      xxs: 100,
      xs: 320,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1440,
      xxl: 1600,
    },
  },
  palette: {
    primary: {
      main: "#3457d5",
      light: "#4969D9",
      dark: "#294BC7",
      contrastText: "#fff",
    },
    secondary: {
      main: "#EEBF48",
      light: "#F0C860",
      dark: "#ECB732",
      contrastText: "#fff",
    },
    background: {
      main: "#f2f2f2",
      blue: "#F1F3FC",
      orange: "#E5E9F2",
    },
    black: {
      main: "#000000",
    },
    placeholders: {
      main: "#c4c4c4",
    },
    border: {
      main: "#D1D9E0",
    },
    divider: {
      dark: "#c4c4c4",
      light: "#e5e5e5",
    },
    gray: {
      main: "#959595",
    },
  },
  typography: {
    variantMapping: {
      h1: "h2",
      h2: "h2",
      h3: "h2",
      h4: "h2",
      h5: "h2",
      h6: "h2",
      subtitle1: "h2",
      subtitle2: "h2",
      body1: "span",
      body2: "span",
    },
    fontFamily: [
      "Al-Jazeera-Arabic-Regular",
      "Montserrat",
      "Cairo",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
export default theme;
