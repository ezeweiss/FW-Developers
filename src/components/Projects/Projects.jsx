import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, Button, Grid, Box, Modal } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "@mui/icons-material";

const proyectosData = [
  {
    id: 1,
    titulo: "MG Pinos",
    descripcion: "Tienda en línea construida con React y Firebase.",
    imagen: "/img/mgpinos.jpg",
    enlace: "https://www.mgpinos.com.ar/",
  },
  {
    id: 2,
    titulo: "Vidrios CHB",
    descripcion: "Blog personal con Next.js y contenido dinámico.",
    imagen: "/img/chb.png",
    enlace: "https://www.vidrioschb.com.ar/",
  },
  {
    id: 3,
    titulo: "Portafolio Personal",
    descripcion: "Mi portafolio hecho con React y Material-UI.",
    imagen: "/img/pc.jpg",
    enlace: "https://www.vidrioschb.com.ar/",
  },
  {
    id: 4,
    titulo: "Portafolio Personal",
    descripcion: "Mi portafolio hecho con React y Material-UI.",
    imagen: "/img/pc.jpg",
    enlace: "https://www.vidrioschb.com.ar/",
  }
];

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <Box sx={{ p: 4, backgroundColor: "#f4f4f4", minHeight: "100vh" }}>
      <Grid container spacing={4} sx={{ justifyContent: "center" }}>
        {/* Primera columna */}
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Grid container spacing={4}>
            {proyectosData.slice(0, 2).map((proyecto) => (
              <Grid item xs={12} sm={6} key={proyecto.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <Card
                    sx={{
                      maxWidth: 345,
                      margin: "auto",
                      boxShadow: 3,
                      borderRadius: 2,
                      backgroundColor: "#333",
                      "&:hover": {
                        boxShadow: 10,
                        transform: "scale(1.05)",
                        transition: "all 0.3s ease-in-out",
                      },
                    }}
                    onClick={() => handleOpen(proyecto)}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={proyecto.imagen}
                      alt={proyecto.titulo}
                    />
                    <CardContent>
                      <Typography variant="h6" color="primary" gutterBottom>
                        {proyecto.titulo}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {proyecto.descripcion}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Segunda columna */}
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Grid container spacing={4}>
            {proyectosData.slice(2, 4).map((proyecto) => (
              <Grid item xs={12} sm={6} key={proyecto.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <Card
                    sx={{
                      maxWidth: 345,
                      margin: "auto",
                      boxShadow: 3,
                      borderRadius: 2,
                      backgroundColor: "#333",
                      "&:hover": {
                        boxShadow: 10,
                        transform: "scale(1.05)",
                        transition: "all 0.3s ease-in-out",
                      },
                    }}
                    onClick={() => handleOpen(proyecto)}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={proyecto.imagen}
                      alt={proyecto.titulo}
                    />
                    <CardContent>
                      <Typography variant="h6" color="primary" gutterBottom>
                        {proyecto.titulo}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {proyecto.descripcion}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Modal para mostrar detalles del proyecto */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            width: "90%",
            maxWidth: 500,
            backgroundColor: "#fff",
            padding: 4,
            borderRadius: 3,
            boxShadow: 24,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          {selectedProject && (
            <>
              <CardMedia
                component="img"
                height="200"
                image={selectedProject.imagen}
                alt={selectedProject.titulo}
                sx={{ borderRadius: 2 }}
              />
              <Typography variant="h5" color="black" sx={{ mt: 2 }}>
                {selectedProject.titulo}
              </Typography>
              <Typography variant="body1" color="black" sx={{ mt: 2 }}>
                {selectedProject.descripcion}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                href={selectedProject.enlace}
                target="_blank"
                startIcon={<Link />}
                sx={{ mt: 2 }}
              >
                Ver Proyecto
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default Projects;
