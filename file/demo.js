const fs = require('fs')

// fs.open('test.txt', 'r', (err, fd) => {
//     console.log(fd)
// })

// fs.stat('./test.txt', (err, stats) => {
//     if(err) {
//         console.error(err)
//         return 
//     }

//     console.log(stats.isFile())
//     console.log(stats.isDirectory())
//     console.log(stats.isSymbolicLink())
//     console.log(stats.size)
// })

// 异步读取文件
fs.readFile('./test.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return;
    }
    console.log('async--->', data);
})

try {
    const data = fs.readFileSync('./test.txt', 'utf-8');
    console.log(data);
} catch (err) {
    console.log(error);
}


// fs.readFile() 和 fs.readFileSync() 都会在返回数据之前将文件的全部内容读取到内存中。

// 这意味着大文件会对内存的消耗和程序执行的速度产生重大的影响。

// 在这种情况下，更好的选择是使用流来读取文件的内容。


const content = '一些内容'
const content1 = '很多内容'

fs.writeFile('./test1.txt', content, { flag: 'a' }, err => {
    if (err) {
        console.error(err)
        return;
    }
    // 文件写入成功
    console.log('文件写入成功')
})

fs.appendFile('file.log', content1, err => {
    if (err) {
        console.error(err)
        return
    }
    //完成！
})