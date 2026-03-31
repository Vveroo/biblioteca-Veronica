const express = requite ('express');
const router = express.Router();
const livrosRoutes = require('./src/routes/livros.routes');
const usuariosRoutes = require('./src/routes/usuarios.routes');
const { logger } = require('./src/middlewares/main.middlewares');
const autenticar = require('./src/middlewares/auth.middleware');

router.use(autenticar);
router.use('/livros', livrosRoutes);
router.use('/usuarios', usuariosRoutes);
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
