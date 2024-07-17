import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between', bgcolor: 'cornflowerblue' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={Logo} alt="Logo" width="150" height="50" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: 2 }}>
          </Typography>
        </Box>
        <Box>
          <Button color="inherit" component={Link} to="/">Inicio</Button>
          <Button color="inherit" component={Link} to="/about-us">Nosotros</Button>
          <Button color="inherit" component={Link} to="/projects">Proyectos</Button>
          <Button color="inherit" component={Link} to="/contact">Contacto</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
