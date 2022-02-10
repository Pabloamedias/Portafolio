import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import BotonContacto from "./contacto";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Portafolio
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/13ArjvhrwcC4QgvsSoK7THNbzejhp6bPM/view?usp=sharing"
              );
            }}
          >
            Curriculo
          </Button>
          <BotonContacto />
        </Toolbar>
      </AppBar>
    </Box>
  );
}