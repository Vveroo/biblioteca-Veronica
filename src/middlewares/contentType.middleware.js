const validarContentType = (req, res, next) => {
    const metodosComBody = ['POST', 'PUT'];

    if (metodosComBody.includes(req.method)) {
        const contentType = req.headers['content-type'];
        
        if (!contentType || contentType !== 'application/json') {
            return res.status(415).json({ erro: 'Tipo de conteúdo inválido. Esperado: application/json' });
        }
    }
    next();
};

module.exports = { validarContentType };