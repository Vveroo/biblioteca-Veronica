const express = require('express');
const livrosRoutes = require('./src/routes/livros.routes');
const app = express();

app.use(express.json());

//registro de notas
app.use('/livros', livrosRoutes);

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