const env = require('.env')
const url = require('url')
const path = require('path')
const fs = require('fs')
const sendFile = require('./sendFile')
const errorHandler = require('./errorHandler')

const { ROOT } = env

function sendFileSafe (filePath, sRes) {
  // grab the pathname
  filePath = url.parse(filePath).pathname

  try {
    // try to get uri
    filePath = decodeURIComponent(filePath)
  } catch(e) {
    errorHandler(400, sRes)
  }

  // create pathmane from client url
  filePath = path.normalize(path.join(ROOT, filePath))
  // console.log(filePath)
  // console.log(filePath.indexOf(ROOT))

  if (filePath.indexOf(ROOT) != 0) {
    errorHandler(404, sRes)
    return
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      errorHandler(404, sRes)
      return
    }
  })

  sendFile(filePath, sRes)
}

module.exports = sendFileSafe
