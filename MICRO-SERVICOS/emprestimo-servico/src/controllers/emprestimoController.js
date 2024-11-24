const { Emprestimo } = require("../models");
const livroService = require("../services/livroService");
const usuarioService = require("../services/usuarioService");

exports.registrarEmprestimo = async (req, res) => {
  const { usuarioId, livroId } = req.body;

  try {
    const livroDisponivel = await livroService.verificarDisponibilidade(livroId);
    if (!livroDisponivel) return res.status(400).send({ mensagem: "Livro indisponível." });

    await usuarioService.verificarUsuario(usuarioId);

    const emprestimo = await Emprestimo.create({ usuarioId, livroId });
    await livroService.atualizarDisponibilidade(livroId, false);

    res.status(201).send({ mensagem: "Empréstimo registrado com sucesso!", emprestimo });
  } catch (err) {
    res.status(400).send({ erro: err.message });
  }
};

exports.listarEmprestimos = async (req, res) => {
  try {
    const emprestimos = await Emprestimo.findAll();
    res.status(200).json(emprestimos);
  } catch (err) {
    res.status(500).send({ erro: err.message });
  }
};

exports.registrarDevolucao = async (req, res) => {
  const { id } = req.params;

  try {
    const emprestimo = await Emprestimo.findByPk(id);
    if (!emprestimo) return res.status(404).send({ mensagem: "Empréstimo não encontrado." });

    emprestimo.status = "concluído";
    await emprestimo.save();

    await livroService.atualizarDisponibilidade(emprestimo.livroId, true);

    res.status(200).send({ mensagem: "Devolução registrada com sucesso!", emprestimo });
  } catch (err) {
    res.status(400).send({ erro: err.message });
  }
};
