const router = require("express").Router();
const emprestimoController = require("../controllers/emprestimoController");

router.post('/emprestimos', emprestimoController.registrarEmprestimo);
router.get('/emprestimos', emprestimoController.listarEmprestimos);
router.post('/emprestimos/:id/devolucao', emprestimoController.registrarDevolucao);

module.exports = router;
