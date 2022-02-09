import { Grid, Box, Typography } from "@mui/material";

import ModelCard from "./modelCard.tsx";

const cardsArray = [
  {
    image: "/preview_Agendapp.png",
    title: "Agendapp",
    description:
      "Una aplicación tipo agenda que almacena tareas de formal local en el navegador",
    url: "https://agendapp-zeta.vercel.app/",
  },
  {
    image: "/preview_Formulario_PetShop.png",
    title: "Formulario PetShop",
    description: "Un formulario sencillo pero con distintas validaciones",
    url: "https://pet-shop-validacion-de-formulario.vercel.app/",
  },
  {
    image: "/preview_barberia.png",
    title: "Barbería Alura",
    description:
      "Una pagina sencilla sobre una barbería, se muestra datos como ubicación, servicios, precio, contacto, etc.",
    url: "https://barberiaalura.vercel.app/",
  },
];

export default function ListaCards() {
  return (
    <Box padding={5}>
      <Typography
        gutterBottom
        variant="h4"
        component="h4"
        align="center"
        padding={1}
      >
        Mis trabajos
      </Typography>
      <Grid container spacing={5} justifyContent="center" padding="normal">
        {cardsArray.map((mediaCard, i) => {
          return (
            <Grid key={i} item>
              <ModelCard {...mediaCard} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
