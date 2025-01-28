// src/components/Contact.js
import React, { useState } from 'react';
import { Box, Container, TextField, Typography, Button, Alert } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar campos
    if (!formData.name || !formData.email || !formData.message) {
      setError(true);
      return;
    }

    setError(false);
    setSubmitted(true);

    // Aquí puedes agregar la lógica para enviar los datos (por ejemplo, usar un backend o un servicio como EmailJS)
    console.log('Formulario enviado:', formData);

    // Reinicia el formulario
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="body1" gutterBottom align="center" sx={{ color: 'white', marginBottom: 3 }}>
        Si tienes alguna duda o propuesta, ¡escríbenos!
      </Typography>

      {/* Mensajes de éxito o error */}
      {submitted && <Alert severity="success">¡Gracias por contactarnos! Te responderemos pronto.</Alert>}
      {error && <Alert severity="error">Por favor, llena todos los campos.</Alert>}

      {/* Formulario */}
      <Box
        component="form"
        sx={{
          mt: 3,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          padding: 3,
          backgroundColor: 'white',  // Fondo blanco para mayor contraste
          borderRadius: 2,
          boxShadow: 3,  // Añade una sombra para resaltar el formulario
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          label="Nombre"
          variant="outlined"
          fullWidth
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Correo Electrónico"
          variant="outlined"
          fullWidth
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          required
        />
        <TextField
          label="Mensaje"
          variant="outlined"
          fullWidth
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={4}
          required
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Enviar
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
