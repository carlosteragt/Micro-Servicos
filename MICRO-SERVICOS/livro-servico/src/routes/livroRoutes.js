const router = require("express").Router();
const livroController = require("../controllers/livroController");

router.post('/livros', livroController.cadastrarLivro);
router.get('/livros', livroController.listarLivros);
router.get('/livros/:id', livroController.buscarLivroPorId);
router.patch('/livros/:id', livroController.atualizarDisponibilidade);

module.exports = router;
