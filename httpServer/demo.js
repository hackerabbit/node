const http = require('http')
const hsotname = '127.0.0.1'
const port = 3000

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.end('你好世界\n')
})

server.listen(port,() => {
    console.log(`服务器运行在 http://${hsotname}:${port}`)
})