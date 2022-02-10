import { Grid, Box, Typography } from "@mui/material";
import previewAgendapp from "../assets/img/preview_Agendapp.png";
import previewBarberia from "../assets/img/preview_barberia.png";
import previewFormulario from "../assets/img/preview_Formulario.png";
import ModelCard from "./modelCard.tsx";

const cardsArray = [
  {
    image: previewAgendapp,
    title: "Agendapp",
    description:
      "Una aplicación tipo agenda que almacena tareas de formal local en el navegador",
    url: "https://agendapp-zeta.vercel.app/",
    alt: "Agendapp",
  },
  {
    image: previewFormulario,

    title: "Formulario PetShop",
    description: "Un formulario sencillo pero con distintas validaciones",
    url: "https://pet-shop-validacion-de-formulario.vercel.app/",
    alt: "Formulario PetShop",
  },
  {
    image: previewBarberia,
    title: "Barbería Alura",
    description:
      "Una pagina sencilla sobre una barbería, se muestra datos como ubicación, servicios, precio, contacto, etc.",
    url: "https://barberiaalura.vercel.app/",
    alt: "Barbería Alura",
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
