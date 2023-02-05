import * as React from "react";
import {
  defaultTheme,
  Layout,
  AppBar,
  ToggleThemeButton,
  AppBarProps,
  LayoutProps,
} from "react-admin";
import { createTheme, Box, Typography } from "@mui/material";

const darkTheme = createTheme({
  palette: { mode: "dark" },
});

const CustomAppBar = (props: AppBarProps) => (
  <AppBar {...props}>
    <Box flex="1">
      <Typography variant="h6" id="react-admin-title"></Typography>
    </Box>
    <ToggleThemeButton lightTheme={defaultTheme} darkTheme={darkTheme} />
  </AppBar>
);

export const CustomLayout = (props: LayoutProps) => (
  <Layout {...props} appBar={CustomAppBar} />
);
