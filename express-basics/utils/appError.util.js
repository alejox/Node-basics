class AppError { 
  constructor(message, statusCode) {
    this.message = message
    this.statusCode = statusCode
    this.status = statusCode ? 'fail' : 'error'
  }
}

'500'.startsWith('5') // Metodo de Javascript

module.exports = { AppError }