import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Navbar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';
import './App.css';

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
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 600,
    },
    body1: {
      fontFamily: 'Inter, sans-serif',
      fontSize: 16,
    },
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

