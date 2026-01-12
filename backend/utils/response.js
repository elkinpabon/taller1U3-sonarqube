// Helper para respuestas JSON consistentes
const sendSuccess = (res, data, message = '', statusCode = 200) => {
  res.status(statusCode).json({
    success: true,
    message,
    ...(data && { data })
  });
};

const sendError = (err, res) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Error interno del servidor';
  res.status(statusCode).json({
    success: false,
    message
  });
};

module.exports = {
  sendSuccess,
  sendError
};
