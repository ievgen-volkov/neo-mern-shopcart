import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#3d2f09",
      light: "#5f7fd5",
      dark: "#162752",
      contrastText: "#eef1f1",
    },
    secondary: {
      main: "#4A5FC1",
      light: "#758aee",
      dark: "#192354",
      contrastText: "#010207",
    },
    success: {
      main: "#9cf6fb",
      light: "#b7f2f6",
      dark: "#396a6c",
      contrastText: "#0b3234",
    },
    warning: {
      main: "#e1fcfd",
      light: "#ecf9fa",
      dark: "#60d3d7",
      contrastText: "#042a2a",
    },
    background: {
      paper: "#f6f5f5",
      default: "#FFF",
    },
  },
});
