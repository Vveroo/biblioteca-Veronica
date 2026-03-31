const CHAVE_ACESSO = 'biblioteca2024';

const autenticar = (req, res, next) => {
    const authHEADER = req.headers['authorization'];

    if (!authHEADER) {
        return res.status(401).json({ erro: 'Acesso negado: token ausente' });
    }

    const token = authHEADER.split(' ')[1];

    if (token !== CHAVE_ACESSO) {
        return res.status(401).json({ erro: 'Acesso negado: token inválido' });
    }

    next();
};