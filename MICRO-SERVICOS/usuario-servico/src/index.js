require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8001;

const usuarioRoutes = require("./routes/usuarioRoutes");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Serviço de Usuários rodando");
});

app.use(usuarioRoutes);

app.listen(PORT, () => {
  console.log(`Serviço de Usuários rodando na porta ${PORT}...`);
});
