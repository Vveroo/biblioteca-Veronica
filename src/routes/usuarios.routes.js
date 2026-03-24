const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios.controller');

router.get('/', usuariosController.listarUsuarios);
router.post('/', usuariosController.criarUsuarios);
router.post('/:id', usuariosController.buscarUsuarioPorId);

module.exports = router;