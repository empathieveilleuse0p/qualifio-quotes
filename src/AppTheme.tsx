import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

interface Props {
  children: React.ReactNode;
}

function AppTheme({ children }: Props) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#fba026",
      },
      secondary: {
        main: "#12384a",
      },
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default AppTheme;
