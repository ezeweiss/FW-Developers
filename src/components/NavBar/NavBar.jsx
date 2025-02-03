import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/img/Logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Función para abrir/cerrar el menú en móviles
  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  // Función para hacer scroll suave a las secciones
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    console.log(section)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false); // Cierra el menú en móviles después de hacer click
    }
  };

  // Opciones del menú
  const menuItems = [
    { label: "Inicio", id: "inicio" },
    { label: "Nosotros", id: "nosotros"},
    { label: "Proyectos", id: "proyectos" },
    { label: "Contacto", id: "contacto" },
  ];

  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: "cornflowerblue" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={Logo} alt="Logo" width="150" height="50" />
          </Box>

          {/* Menú en Desktop */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {menuItems.map((item) => (
              <Button key={item.id} color="inherit" onClick={() => scrollToSection(item.id)}>
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Botón Hamburguesa en Móviles */}
          <IconButton
            edge="end"
            color="inherit"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Menú Lateral (Drawer) en Móviles */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <List sx={{ width: 200 }}>
          {menuItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton onClick={() => scrollToSection(item.id)}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Espaciador para evitar que el contenido quede tapado */}
      <Box sx={{ height: "64px" }} />
    </>
  );
};

export default Navbar;
