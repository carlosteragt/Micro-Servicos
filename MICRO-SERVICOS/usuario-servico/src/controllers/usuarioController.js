const usuarioSchema = require("../schemas/usuario");
const encriptador = require("../services/EncriptadorDeSenhas");
const { Usuario } = require("../models");

exports.cadastrarUsuario = async (req, res) => {
  const dados = req.body;
  try {
    const usuario = usuarioSchema.parse(dados);
    usuario.senha = await encriptador.encriptar(usuario.senha);
    const usuarioSalvo = await Usuario.create(usuario);

    res.status(201).send({
      mensagem: "Usuário salvo com sucesso!",
      sucesso: true,
      id: usuarioSalvo.id,
    });
  } catch (err) {
    res.status(400).send(err.errors || err.message);
  }
};

exports.listarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

exports.buscarUsuarioPorId = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).send({ message: 'Usuário não encontrado.' });
    res.json(usuario);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
