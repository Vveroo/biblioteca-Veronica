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

const criarLivro = async (titulo, autor, isbn, ano_publicacao) => {
    try {
        const query = 'INSERT INTO livros (titulo, autor, isbn, ano_publicacao) VALUES ($1, $2, $3, $4) RETURNING *';
        const resultado = await pool.query(query, [titulo, autor, isbn, ano_publicacao]);
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
