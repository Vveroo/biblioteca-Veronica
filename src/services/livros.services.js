const acervo = [
    {
        id: 1,
        titulo: '1984',
        autor: 'George Orwell',
        disponivel: true,
    },
        {
        id:2,
        titulo: 'O Hbbit',
        autor: 'J.R.R. Tolkien',
        disponivel: true,
    },
        {
        id:3,
        titulo: 'Outs',
        autor: 'Sela Almada',
        disponivel: true,
    },
];

// listar livros
const listarTodosLivros = async () => {
    return acervo;
};

//buscar livros ID
const buscarPorId = async (id) => {
    const livro = acervo.find(item => item.id=== Number(id));
    return livro || null;
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
