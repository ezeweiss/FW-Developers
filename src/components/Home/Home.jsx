import React from 'react';
import { Container, Typography, Box, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h3" gutterBottom>Bienvenidos a FW Developers</Typography>
        <Typography variant="h5" gutterBottom>
          Somos un grupo dedicado a la creación de soluciones tecnológicas innovadoras.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="primary" component={Link} to="/about-us">Conoce Más</Button>
        </Box>
      </Box>
      
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" gutterBottom>Servicios Ofrecidos</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
                <CardMedia
                    component="img"
                    alt="Desarrollo Web"
                    height="140"
                    image="https://img.freepik.com/foto-gratis/hombre-sentado-silla-escribiendo-portatil_23-2148113980.jpg?t=st=1721233482~exp=1721237082~hmac=a212e2ba9fd06539938d34db03b7846ad641d1ef8246ac3a57230cb12c3fc765&w=1380"
                />
              <CardContent>
                <Typography variant="h5" gutterBottom>Desarrollo Web</Typography>
                <Typography variant="body1">Creamos aplicaciones web robustas y escalables.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
                <CardMedia
                    component="img"
                    alt="Desarrollo móvil"
                    height="140"
                    image="https://img.freepik.com/foto-gratis/mujer-smartphone-playa_23-2148801482.jpg?t=st=1721233894~exp=1721237494~hmac=c4d1e7693a2fdd09acaa28038b6eee64bd6db429523a957f3619233b903c7084&w=826"
                />
              <CardContent>
                <Typography variant="h5" gutterBottom>Desarrollo Móvil</Typography>
                <Typography variant="body1">Desarrollamos aplicaciones móviles para Android y iOS.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
                <CardMedia
                    component="img"
                    alt="Desarrollo móvil"
                    height="140"
                    image="https://img.freepik.com/foto-gratis/gente-negocios-dandose-mano_53876-13391.jpg?t=st=1721233632~exp=1721237232~hmac=0e4435316a101b532c10c0ed4d26e4c5725c7e1cba8a9dcba5ee389895dd5244&w=1380"
                />
              <CardContent>
                <Typography variant="h5" gutterBottom>Consultoría</Typography>
                <Typography variant="body1">Ofrecemos consultoría tecnológica para optimizar tus procesos.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" gutterBottom>Proyectos Destacados</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
                <CardMedia
                    component="img"
                    alt="Desarrollo móvil"
                    height="140"
                    image="https://img.freepik.com/foto-gratis/camara-fotos-vintage-vista-superior-fondo-colorido_23-2148300550.jpg?t=st=1721234020~exp=1721237620~hmac=9ec72672ed455a1ccbd12477e2278f1bbf06a3dff7a4438452f9e62bf067ebca&w=1380"
                />
              <CardContent>
                <Typography variant="h5" gutterBottom>Proyecto 1</Typography>
                <Typography variant="body1">Descripción breve del proyecto 1.</Typography>
                <Button variant="outlined" color="primary" component={Link} to="/projects">Ver Más</Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
                <CardMedia
                    component="img"
                    alt="Desarrollo móvil"
                    height="140"
                    image="https://img.freepik.com/foto-gratis/camara-fotos-vintage-vista-superior-fondo-colorido_23-2148300550.jpg?t=st=1721234020~exp=1721237620~hmac=9ec72672ed455a1ccbd12477e2278f1bbf06a3dff7a4438452f9e62bf067ebca&w=1380"
                />
              <CardContent>
                <Typography variant="h5" gutterBottom>Proyecto 2</Typography>
                <Typography variant="body1">Descripción breve del proyecto 2.</Typography>
                <Button variant="outlined" color="primary" component={Link} to="/projects">Ver Más</Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
                <CardMedia
                    component="img"
                    alt="Desarrollo móvil"
                    height="140"
                    image="https://img.freepik.com/foto-gratis/camara-fotos-vintage-vista-superior-fondo-colorido_23-2148300550.jpg?t=st=1721234020~exp=1721237620~hmac=9ec72672ed455a1ccbd12477e2278f1bbf06a3dff7a4438452f9e62bf067ebca&w=1380"
                />
              <CardContent>
                <Typography variant="h5" gutterBottom>Proyecto 3</Typography>
                <Typography variant="body1">Descripción breve del proyecto 3.</Typography>
                <Button variant="outlined" color="primary" component={Link} to="/projects">Ver Más</Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      
      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>Testimonios</Typography>
        <Typography variant="body1" gutterBottom>
          "Trabajar con Mi Grupo de Desarrollo ha sido una experiencia increíble. Sus soluciones han mejorado significativamente nuestro negocio."
        </Typography>
        <Typography variant="body1" gutterBottom>- Cliente Satisfecho</Typography>
      </Box>
      
      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Button variant="contained" color="primary" component={Link} to="/contact">Contáctanos</Button>
      </Box>
    </Container>
  );
}

export default Home;
