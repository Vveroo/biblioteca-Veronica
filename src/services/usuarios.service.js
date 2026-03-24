const usuarios = [
    {
        id: 1,
        nome: 'Ana Silva',
        email: 'ana.silva@email.com',
    },
    {
        id: 2,
        nome: 'Carlos Souza',
        email: 'carlos.souza@email.com',
    },
    {
        id: 3,
        nome: 'Mariana Oliveira',
        email: 'mariana.oliveira@email.com',
    },
];

const listarTodosUsuarios = async () => {
    return usuarios;
};

const buscarUsuarioPorId = async (id) => {
    const usuario = usuarios.find(item => item.id === Number(id));
    return usuario || null;
};

const criarUsuario = async (nome, email) => {
    if (!nome || !email) {
        throw new Error('Nome e email são obrigatórios');
    }
    const novoUsuario = {
        id: usuarios.length + 1,    
        nome,
        email,
    };
    usuarios.push(novoUsuario);
    return novoUsuario;
};

module.exports = {
    listarTodosUsuarios, buscarUsuarioPorId, criarUsuario
};
