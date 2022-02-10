import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BotonContacto from "./contacto";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
            fontWeight="bold"
          >
            Portafolio
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/13heOf7qKBkfzTBGiDD_6ycZIG2JSwFTj/view?usp=sharing"
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
