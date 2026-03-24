const livrosService = require('../services/livros.services');

//get livros
const listarLivros = async (req, res) => {
    try {
        const livros = await livrosService.listarTodosLivros();
        res.status(200).json({ total: livros.length, livros });
    } catch (error) {
        res.status(500).json({ erro: 'Erro interno ao buscar livros'});
    }
};

//get livro por id
const buscarLivroPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const livro = await livrosService.buscarPorId(id);
        if (livro) {
            res.status(200).json(livro);
        } else {
            res.status(404).json({ erro: 'Livro não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ erro: 'Erro interno ao buscar livro' });
    }
};

module.exports = {listarLivros, buscarLivroPorId};