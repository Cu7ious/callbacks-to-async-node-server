const http = require('http')
const { checkJWT, sendFileSafe } = require('helpers')

const server = http.createServer()

server.on('request', (inM, sRes) => {

  if (checkJWT(inM.headers)) {
    sendFileSafe(inM.url, sRes)
  } else {
    sRes.statusCode = 403
    sRes.end(http.STATUS_CODES[403])
  }

})

server.listen(8080, 'localhost')

