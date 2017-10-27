const fs = require('fs')
const mime = require('mime')

module.exports = (filePath, res) => {
  const fileStream = fs.createReadStream(filePath)

  fileStream.on('open', () => {
    console.log('Start reading file as stream')
  })

  fileStream.on('readable', () => {
    const data = fileStream.read()
    if (data) {
      console.log(data.toString())
    }
  })

  fileStream.on('end', () => {
    console.log('File stream ended')
  })

}
