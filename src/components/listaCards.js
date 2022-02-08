import { Grid, Box } from "@mui/material";
import ProyectoCard from "./proyectoCard";

export default function ListaCards() {
  return (
    <Box padding={5}>
      <Grid container spacing={12} justifyContent="center" padding="normal">
        <Grid item xs={3}>
          <ProyectoCard />
        </Grid>
        <Grid item xs={3}>
          <ProyectoCard />
        </Grid>
        <Grid item xs={3}>
          <ProyectoCard />
        </Grid>
      </Grid>
    </Box>
  );
}
