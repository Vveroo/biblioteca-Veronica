const livrosService = require('../services/livros.services');

//get livros
const listarLivros = async (req, res, next) => {
    try {
        const livros = await livrosService.listarTodosLivros();
        res.status(200).json({ total: livros.length, livros });
    } catch (erro) {
        next(erro)
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

//post criar livro
const criarLivro = async (req, res) => {
    try {
        const { titulo, autor } = req.body;
        const livro = await livrosService.criarLivro(titulo, autor);
        res.status(201).json({ mensagem: 'Livro criado com sucesso', livro });
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};

module.exports = {listarLivros, buscarLivroPorId, criarLivro};