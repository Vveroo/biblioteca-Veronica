const pool = require('../database/connection');
// listar livros
const listarTodosLivros = async () => {
    try{
        const result = await pool.query('SELECT * FROM livros ORDER BY id');
        return result.rows;
    } catch (error) {
        console.error('Erro ao listar livros:', error);
        throw error;
    }
};

//buscar livros ID
const buscarPorId = async (id) => {
    const resultado = await pool.query('SELECT * FROM livros WHERE id = $1', [id]);
    return resultado.rows[0];
};

const criarLivro = async (titulo, autor) => {
    if (!titulo || !autor) {
        throw new Error('Título e autor são obrigatórios');
    }
    const novoLivro = {
        id: acervo.length + 1,
        titulo,
        autor,
        disponivel: true,
    };
    acervo.push(novoLivro);
    return novoLivro;
};

module.exports = {
    listarTodosLivros, buscarPorId, criarLivro
};
