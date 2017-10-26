const env = require('.env')
const { TOKEN_SECRET } = env

function checkJWT (headers) {
  if (headers['x-secret']) {
   if (headers['x-secret'] === TOKEN_SECRET)
    return true
  }
  return false
}

module.exports = checkJWT
