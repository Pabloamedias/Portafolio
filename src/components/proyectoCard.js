import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ProyectoCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="280"
        image="/preview_Agendapp.png"
        alt="Agendapp"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Agendapp
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Una aplicación tipo agenda que almacena los datos ingresados por el
          usuario de formal local en el navegador.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://agendapp-zeta.vercel.app/">
          Ir al proyecto
        </Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
