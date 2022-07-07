class AppError extends Error { 
  constructor(message, statusCode) {
    super(message);
    this.message = message
    this.statusCode = statusCode
    this.status = `${statusCode}`.startsWith('5') ? 'fail' : 'error' //El satusCode se encierra en los backticks para convertirlo en un string
    
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = { AppError }
