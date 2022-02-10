import "./App.css";
import Footer from "./components/footer";
import ListaCards from "./components/listaCards";
import Navbar from "./components/navBar";

import { ThemeProvider } from "@emotion/react";
import { createMuiTheme } from "@mui/material";

const themeCv = createMuiTheme({
  palette: {
    secondary: {
      main: "#963ac1",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={themeCv}>
        <Navbar />
        <ListaCards />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
