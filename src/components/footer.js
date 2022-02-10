import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <AppBar position="fixed" color="secondary" sx={{ top: "auto", bottom: 0 }}>
      <Typography component="h6" variant="subtitle1" align="center" padding={2}>
        La página que estas visualizando es un proyecto más de mi portafolio
      </Typography>
    </AppBar>
  );
}
