const router = require("express").Router();
const usuarioController = require("../controllers/usuarioController");

router.post('/cadastro', usuarioController.cadastrarUsuario);
router.get('/usuarios', usuarioController.listarUsuarios);
router.get('/usuarios/:id', usuarioController.buscarUsuarioPorId);

module.exports = router;
