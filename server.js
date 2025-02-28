const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.status(200).send("OK");
});

app.get("/check", (req, res) => {
  res.status(200).send("OK");
});

app.get("/info", (req, res) => {
  res.json({
    Instancia: "Maquina 1 - API 1",
    Curso: "Seminario de Sistemas 1 A",
    Grupo: "Grupo 13"
  });
});

app.listen(port, () => {
  console.log(`API 1 corriendo en http://localhost:${port}`);
});
