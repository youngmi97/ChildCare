import { Box, MuiThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import React from "react";

import VidAnnotator from "../components/VidAnnotator";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#9E58EE",
      main: "#7610EB",
      dark: "#2F0459",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#F2E205",
      contrastText: "#000000",
    },
    tertiary: {
      main: "#D98E04",
      contrastText: "#FFFFFF",
    },
    grey: {},
  },
  background: {
    default: "#FAFAFA",
    two: "#F9F9F9",
    three: "#F7F7F7",
    four: "#E9E9EA",
  },
  typography: {
    fontFamily: [
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
  breakpoints: {
    values: {
      iphone: 375,
      tablet: 640,
      laptop: 1024,
      desktop: 1440,
    },
  },
});

export default function Demo() {
  return (
    <MuiThemeProvider theme={theme}>
      <VidAnnotator />
    </MuiThemeProvider>
  );
}
