const fs = require('fs')
const path = require('path')



const folderName = '/test'


try{
    if(!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
    }
}catch(err) {
    console.error(err)
}

