const { Livro } = require("../models");

exports.cadastrarLivro = async (req, res) => {
  const dados = req.body;  
  try {
    const livro = dados
    const livroSalvo = await Livro.create(livro);
    res.status(201).send({
        mensagem: "Usuário salvo com sucesso!",
        sucesso: true,
        id: livroSalvo.id,
      });
  } catch (err) {
    res.status(400).send(err.errors || err.message);
  }
};

exports.listarLivros = async (req, res) => {
  try {
    const livros = await Livro.findAll();
    res.status(200).json(livros);
  } catch (err) {
    res.status(500).send({ erro: err.message });
  }
};

exports.buscarLivroPorId = async (req, res) => {
  try {
    const livro = await Livro.findByPk(req.params.id);
    if (!livro) return res.status(404).send({ mensagem: "Livro não encontrado." });
    res.status(200).json(livro);
  } catch (err) {
    res.status(500).send({ erro: err.message });
  }
};

exports.atualizarDisponibilidade = async (req, res) => {
  try {
    const livro = await Livro.findByPk(req.params.id);
    if (!livro) return res.status(404).send({ mensagem: "Livro não encontrado." });
    livro.disponibilidade = req.body.disponibilidade;
    await livro.save();
    res.status(200).send({ mensagem: "Disponibilidade atualizada com sucesso!", livro });
  } catch (err) {
    res.status(400).send({ erro: err.message });
  }
};
