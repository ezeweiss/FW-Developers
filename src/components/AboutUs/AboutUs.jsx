import { Container, Typography, Box, Grid, Paper } from "@mui/material";
import NosotrosImg from "/equipo-desarrollo.jpg"


const AboutUs = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>
        ¿Quiénes Somos?
      </Typography>

      <Grid container spacing={4} alignItems="center">
        {/* Imagen */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ overflow: "hidden", borderRadius: 2 }}>
             <img src={NosotrosImg} alt="Nosotros" width="100%" /> 
          </Paper>
        </Grid>

        {/* Texto */}
        <Grid item xs={12} md={6}>
          <Typography variant="body1" sx={{ color: "#bbbbbb" }}>
            Somos un equipo apasionado por el desarrollo web, creando sitios y aplicaciones modernas, 
            eficientes y visualmente atractivas. Nuestro enfoque está en la calidad, el diseño y la 
            funcionalidad, utilizando tecnologías como React y Material-UI para brindar experiencias digitales únicas.
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, color: "#bbbbbb" }}>
            Trabajamos de manera colaborativa con nuestros clientes, desde la idea inicial hasta el producto final, 
            asegurando soluciones a medida y resultados excepcionales.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
