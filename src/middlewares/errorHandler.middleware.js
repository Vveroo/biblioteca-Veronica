const errorHandler = (req, res, next) => {
console.log(`[ERR0R]: ${req.method} ${req.url}, err: ${err.message}`);

const status = err.status || 500;

res.response(status).json({
    erro: err.mensage || "erro interno do servidor",
    caminho: req.url,
});
};

module.exports = errorHandler;