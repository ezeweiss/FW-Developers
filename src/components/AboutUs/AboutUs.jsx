// src/components/AboutUs.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const AboutUs = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>Nosotros</Typography>
      <Typography variant="body1">Aquí puedes encontrar información sobre nuestro grupo de desarrollo.</Typography>
    </Container>
  );
}

export default AboutUs;
