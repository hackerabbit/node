const fs = require('fs')
const path = require('path')

const folderPath = '/Users/joe'

fs.readdirSync(folderPath)

fs.readdirSync(folderPath).map(fileName => {
    return path.join(folderPath, fileName)
})