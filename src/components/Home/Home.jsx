import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import Typewriter from 'typewriter-effect';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Home = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Detectar el scroll para mostrar u ocultar el botón
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Limpiar el evento al desmontar el componente
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        minHeight: '100vh',
        overflowX: 'hidden',
        scrollBehavior: 'smooth',
      }}
    >
      {/* Sección de Bienvenida */}
      <Box
        id="inicio"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: 4,
          backgroundColor: '#212121', // Fondo oscuro para la sección de bienvenida
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ animation: 'fadeIn 2s' }}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("¡Bienvenidos a FW Developers!")
                .start();
            }}
          />
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            maxWidth: '600px',
            animation: 'fadeIn 3s',
            opacity: 0.9,
          }}
        >
          Somos un grupo dedicado a la creación de soluciones tecnológicas innovadoras.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => scrollToSection('proyectos')}
            sx={{
              animation: 'fadeInUp 2s',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            Ver Proyectos
          </Button>
        </Box>
      </Box>

      {/* Sección de Proyectos */}
      <Box
        id="proyectos"
        sx={{
          minHeight: '100vh',
          padding: 4,
          backgroundColor: '#f4f4f4', // Fondo claro para la sección de proyectos
          color: 'black',
        }}
      >
        <Typography variant="h3" gutterBottom align="center">
          Mis Proyectos
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 3 }}>
          Estos son algunos de los proyectos más destacados en los que hemos trabajado:
        </Typography>
        <Projects />
      </Box>

      {/* Sección de Contacto */}
      <Box
        id="contacto"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',  // Fondo oscuro con opacidad
          color: 'white',
          textAlign: 'center',
          padding: 4,
        }}
      >
        <Typography variant="h3" gutterBottom>
          Contáctanos
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: '600px',
            marginBottom: 3,
            opacity: 0.8,
          }}
        >
          Si tienes alguna idea o proyecto en mente, no dudes en escribirnos. ¡Estamos aquí para ayudarte!
        </Typography>
        <Contact />
      </Box>

      {/* Flecha hacia arriba (solo se muestra si se ha desplazado hacia abajo) */}
      {showScrollButton && (
        <Box
          sx={{
            position: 'fixed',
            bottom: 30,
            right: 30,
            backgroundColor: 'cornflowerblue',
            borderRadius: '50%',
            padding: 2,
            cursor: 'pointer',
            zIndex: 100,
            '&:hover': {
              backgroundColor: '#0056b3',
            },
          }}
          onClick={scrollToTop}
        >
          <ArrowUpwardIcon sx={{ color: 'white' }} />
        </Box>
      )}
    </Box>
  );
};

export default Home;
