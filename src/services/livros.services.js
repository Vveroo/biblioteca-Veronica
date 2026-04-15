const pool = require('../database/connection');
// listar livros
const listarTodosLivros = async () => {
    try{
        const query = 'SELECT livros.id, livros.titulo, livros.autor, livros.isbn, livros.ano_publicacao, categorias.nome AS categoria_nome FROM livros JOIN categorias ON livros.categoria_id = categorias.id ORDER BY livros.id';
        const resultado = await pool.query(query);
        return resultado.rows;
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

const criarLivro = async (titulo, autor, isbn, ano_publicacao, categoria_id) => {
    try {
        const query = 'INSERT INTO livros (titulo, autor, isbn, ano_publicacao, categoria_id) VALUES ($1, $2, $3, $4, $5) RETURNING *';
        const resultado = await pool.query(query, [titulo, autor, isbn, ano_publicacao, categoria_id]);
        return resultado.rows[0];
    } catch (error) {
        if (error.code === '23505') { 
            const error = new Error('ISBN já existe');
            error.status = 400;
            throw error;
        }
    }
};

module.exports = {
    listarTodosLivros, buscarPorId, criarLivro
};
