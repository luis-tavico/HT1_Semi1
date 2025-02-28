const express = require('express');
const app = express();

// Endpoint 1: Verificación de estado
app.get('/check/ok', (req, res) => {
  res.status(200).send("200"); // Retorna código 200 OK
});

// Endpoint 2: Retorna un objeto JSON
app.get('/', (req, res) => {
  const data = {
    Instancia: "Maquina 1 - API 1",
    Curso: "Seminario de Sistemas 1 A",
    Grupo: "Grupo 13"
  };
  res.json(data); // Retorna el objeto JSON
});

// Servidor escuchando en el puerto 3000
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
