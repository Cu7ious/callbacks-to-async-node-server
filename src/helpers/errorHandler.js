const { STATUS_CODES } = require('http')

function errorHandler (code, res) {
  res.statusCode = code
  res.end(STATUS_CODES[code])
}

module.exports = errorHandler
