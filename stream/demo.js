const http = require('http')
const fs = require('fs')


// 普通文件读取方式
// const server = http.createServer((req,res) => {
//     console.log(__dirname)
//     fs.readFile(__dirname + '/data.txt',(err,data) => {
//         console.log(data);
//         res.end(data);
//     })
// })

// 文件太大时，采用流的方式
const server = http.createServer((req,res) => {
    const stream = fs.createReadStream(__dirname + '/data.txt')
    stream.pipe(res);
})

server.listen(3000);