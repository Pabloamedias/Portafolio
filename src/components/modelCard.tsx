import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SearchIcon from '@mui/icons-material/Search';

interface Props{
    image: string;
    title: string;
    description: string;
    url: string
    alt: string
}

export default function ModelCard({image, title, description, url, alt}: Props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="280"
        image ={image}
        alt={alt}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium" 
        variant="contained"
        color="secondary"
        startIcon={<SearchIcon />}
        
        
        onClick={() => {
          window.open(url);
        }}>
          Ir al proyecto
        </Button>
        
      </CardActions>
    </Card>
  );
}
