import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Logo from '../../assets/img/Logo.png';

const Navbar = () => {
  // Función para hacer scroll suave a las secciones
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between', bgcolor: 'cornflowerblue' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={Logo} alt="Logo" width="150" height="50" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: 2 }}></Typography>
        </Box>
        <Box>
          <Button color="inherit" onClick={() => scrollToSection('inicio')}>Inicio</Button>
          <Button color="inherit" onClick={() => scrollToSection('proyectos')}>Proyectos</Button>
          <Button color="inherit" onClick={() => scrollToSection('contacto')}>Contacto</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
