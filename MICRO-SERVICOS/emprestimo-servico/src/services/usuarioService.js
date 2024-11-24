const axios = require("axios");
const USUARIO_API = process.env.USUARIO_API || "http://localhost:8001";

exports.verificarUsuario = async (usuarioId) => {
  try {
    const response = await axios.get(`${USUARIO_API}/usuarios/${usuarioId}`);
    return response.data;
  } catch (err) {
    throw new Error("Erro ao verificar o usuário.");
  }
};
