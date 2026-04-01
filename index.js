const express = require('express');
const routes = require('./src/routes/index.routes');
const {logger, errorHandler} = require('./src/middlewares/main.middlewares');
const app = express();

app.use(express.json());

//app.use((req, res, next) => {
//    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
//    next();
//});

app.use(logger);
app.use(routes);
app.use(errorHandler);
//registro de rotas

//app.get('/', (req, res) => {
//    res.json({
//        sistema: 'biblioteca m4',
//        status: 'online',
//    });
//});

const PORT = 3000;


app.listen(PORT, () => {
    console.log(`Api rodando em http://localhost:${PORT}`)
})