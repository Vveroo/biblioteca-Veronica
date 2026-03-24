const usuariosService = require('../services/usuarios.service');

//get usuarios
const listarUsuarios = async (req, res) => {
    try {
        const usuarios = await usuariosService.listarTodosUsuarios();
        res.status(200).json({ total: usuarios.length, usuarios });
    } catch (error) {
        res.status(500).json({ erro: 'Erro interno ao buscar usuarios' });
    }
};

const buscarUsuarioPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await usuariosService.buscarPorId(id);
        if (usuario) {
            res.status(200).json(usuario);
        } else {
            res.status(404).json({ erro: 'Usuario não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ erro: 'Erro interno ao buscar usuario' });
    }
};

//post usuario
const criarUsuarios = async (req, res) => {
    try {
        const { nome, email } = req.body;
        const novoUsuario = await usuariosService.criarUsuario(nome, email);
        res.status(201).json(novoUsuario);
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};

module.exports = { listarUsuarios, criarUsuarios, buscarUsuarioPorId };