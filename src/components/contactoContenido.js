import { Typography } from "@mui/material";
export default function ContactoContenido() {
  return (
    <>
      <Typography
        variant="h5"
        component="h5"
        color="secondary"
        fontWeight="bold"
      >
        Correo:
      </Typography>
      <Typography variant="h6" component="h6" gutterBottom>
        P.olmedosaez@gmail.com
      </Typography>

      <Typography
        variant="h5"
        component="h5"
        color="secondary"
        fontWeight="bold"
      >
        Número de telefono:
      </Typography>
      <Typography variant="h6" component="h6" gutterBottom>
        +569-57116030
      </Typography>

      <Typography
        variant="h5"
        component="h5"
        color="secondary"
        fontWeight="bold"
      >
        LinkedIn:
      </Typography>
      <Typography variant="h6" component="h6" gutterBottom>
        https://www.linkedin.com/in/pablo-olmedo-7655a5218/
      </Typography>

      <Typography
        variant="h5"
        component="h5"
        color="secondary"
        fontWeight="bold"
      >
        GitHub:
      </Typography>
      <Typography variant="h6" component="h6" gutterBottom>
        https://github.com/Pabloamedias
      </Typography>
    </>
  );
}
