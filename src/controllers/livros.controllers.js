const livrosService = require('../services/livros.services');

//get livros
const listarLivros = async (req, res) => {
    try {
    const livros = await livrosService.listarTodosLivros();
    res.status(200).json({ total: livros.length, livros});
    } catch (error) {
        res.status(500).json({ erro: 'Erro interno ao buscar livros'});
    }
};

module.exports = {listarLivros};