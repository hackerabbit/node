const express = require('express')
const app = express();
const port = 3000;

app.get('/',(req,res) => {
    res.send('你好');
})

const server = app.listen(port,() => console.log('服务器已准备就绪'))

// process.kill(process.pid, 'SIGTERM')

process.on('SIGABRT',() => {
    server.close(() => {
        console.log('进程已终止');
    })
})

console.log(process.env.NODE_ENV = "development")

console.log(process.argv)

console.log(process.argv instanceof Array);

process.argv.forEach((val,index) => {
    console.log(`${index} : ${val}`)
})

const x = 'x'
const y = 'y'
console.log(x,y);

console.log('我的%s已经%d岁','猫',2)

console.log('%O',Number);

const a = 1;
const b = 2;
const c = 3;
console.count(
    'x的值为' + x + '且检查了几次'
)

console.count(
    'x的值为' + x + '且检查了几次'
)

const oranges = ['橙子','橙子'];
const apples = ['苹果']
oranges.forEach((val,index) => {
    console.count(val);
})
apples.forEach(fruit => {
    console.count(fruit);
})

const function2 = () => console.trace();
const function1 = () => function2();

function1();


const doSomething = () => console.log('测试');
const measureDoingSomething = () => {
    console.time('doSomething()')
    doSomething();
    console.timeEnd('doSomething()');
} 

measureDoingSomething();
console.log('\x1b[33m%s\x1b[0m','你好')

const chalk = require('chalk')
console.log(chalk.red('你好'))

const ProgressBar = require('progress')
const bar = new ProgressBar(':bar',{total : 10})
const timer = setInterval(() => {
    bar.tick()
    if(bar.complete) {
        clearInterval(timer)
    }
},1000)