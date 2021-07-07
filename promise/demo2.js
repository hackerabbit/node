const fs = require('fs')

const getFile = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (err, data) => {
            if (err) {
                reject(err)
                return;
            }
            resolve(data);
        })
    })
}

getFile('./file/1.txt').then(data => console.log(data)).catch(err => console.log(err));