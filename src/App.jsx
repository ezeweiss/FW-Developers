import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Navbar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';

// Define tu tema personalizado aquí
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Azul estándar de Material UI
    },
    secondary: {
      main: '#ff4081', // Rosa intenso
    },
    background: {
      default: '#000000', // Fondo negro
      paper: '#1c1c1c', // Color de papel (si usas componentes como `Card`)
    },
    text: {
      primary: '#ffffff', // Texto blanco por defecto
      secondary: '#bbbbbb', // Texto secundario gris
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline resetea estilos básicos */}
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

