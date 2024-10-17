
const errorHandler = (error, req, res, next) => {

    // Set default status code dan message
    let statusCode = error.status || 500;
    let message = error.message || 'Internal Server Error';

    // Jika error adalah Sequelize ValidationError
    console.log(error.name);
    if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
        statusCode = 400; // Bad Request
        message = error.errors.map(err => err.message); // Ambil semua pesan error
    }

    // Mengirim respons JSON
    res.status(statusCode).json({
        statusCode: statusCode,
        message: Array.isArray(message) ? message : [message] // Pastikan message dalam array
    });
};

module.exports = errorHandler;
