require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8003;

const emprestimoRoutes = require("./routes/emprestimoRoutes");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Serviço de Empréstimos rodando");
});

app.use(emprestimoRoutes);

app.listen(PORT, () => {
  console.log(`Serviço de Empréstimos rodando na porta ${PORT}...`);
});
