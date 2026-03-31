const express = require('express');
const livrosRoutes = require('./src/routes/livros.routes');
const usuariosRoutes = require('./src/routes/usuarios.routes');
const {logger, errorHandler} = require('./src/middlewares/main.middlewares');
const app = express();

app.use(express.json());

//app.use((req, res, next) => {
//    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
//    next();
//});

app.use(logger);
app.use(errorHandler);
//registro de rotas
app.use('/livros', livrosRoutes);
app.use('/usuarios', usuariosRoutes);

app.get('/', (req, res) => {
    res.json({
        sistema: 'biblioteca m4',
        status: 'online',
    });
});

const PORT = 3000;


app.listen(PORT, () => {
    console.log(`Api rodando em http://localhost:${PORT}`)
})