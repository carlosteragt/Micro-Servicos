const axios = require("axios");
const LIVRO_API = process.env.LIVRO_API || "http://localhost:8002";

exports.verificarDisponibilidade = async (livroId) => {
  try {
    const response = await axios.get(`${LIVRO_API}/livros/${livroId}`);
    return response.data.disponibilidade;
  } catch (err) {
    throw new Error("Erro ao verificar a disponibilidade do livro.");
  }
};

exports.atualizarDisponibilidade = async (livroId, disponibilidade) => {
  try {
    await axios.patch(`${LIVRO_API}/livros/${livroId}`, { disponibilidade });
  } catch (err) {
    throw new Error("Erro ao atualizar a disponibilidade do livro.");
  }
};
