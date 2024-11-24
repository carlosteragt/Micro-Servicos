require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8002;

const livroRoutes = require("./routes/livroRoutes");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Serviço de Livros rodando");
});

app.use(livroRoutes);

app.listen(PORT, () => {
  console.log(`Serviço de Livros rodando na porta ${PORT}...`);
});
