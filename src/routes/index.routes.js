const express = require('express');
const router = express.Router();
const livrosRoutes = require('./livros.routes');
const usuariosRoutes = require('./usuarios.routes');
const { logger } = require('../middlewares/main.middlewares');
const { autenticar } = require('../middlewares/auth.middleware');
const { validarContentType } = require('../middlewares/contentType.middleware');

router.use('/livros', validarContentType, autenticar, livrosRoutes);
router.use('/usuarios', validarContentType, autenticar, usuariosRoutes);
router.use(logger);

router.get('/', (req, res) => {
    res.json({
        sistema: 'biblioteca m4',
        status: 'online',
    });
});

router.use((req, res) => {
    res.status(404).json({ erro: 'Rota não encontrada' });
});

module.exports = router;
