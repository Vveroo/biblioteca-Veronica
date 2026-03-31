const errorHandler = (err, req, res, next) => {
  console.log(`[ERROR]: ${req.method} ${req.url}, err: ${err.message}`);

  const status = err.status || 500;

  res.status(status).json({
    erro: err.message || "Erro interno do servidor",
    caminho: req.url,
  });
};

module.exports = errorHandler;
