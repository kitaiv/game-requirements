import { createTheme } from "@mui/material";

const overrides = {
  palette: {
    mode: "dark",
    primary: {
        main: "#000"
    },
    text: {
        primary: "#fff",
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)"
    },
    action:{
        active: "#fff",
        hover: "rgba(255, 255, 255, 0.08)",
        selected: "rgba(255, 255, 255, 0.16)",
        disabled: "rgba(255, 255, 255, 0.3)",
        disabledBackground: "rgba(255, 255, 255, 0.12)"
    },
    background: {
        default: "#121212",
        paper: "#121212"
    },
    divider: "rgba(255, 255, 255, 0.12)"
  }
};

const theme = createTheme(overrides);

export default theme;
