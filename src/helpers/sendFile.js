const fs = require('fs')
const mime = require('mime')

module.exports = (filePath, res) => {
  fs.readFile(filePath, (err, content) => {
    if (err) throw err

    const mimeType = mime.getType(filePath)

    res.setHeader('Content-Type', `${mimeType}; charset=utf-8`)
    res.end(content)
  })
}
