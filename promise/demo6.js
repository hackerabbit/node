// Promise.race
// 同时发送多个请求，返回最快的那个结果
// 注意与Promise.all的区别

const first = new Promise((resolve,reject) => {
    setTimeout(resolve,500,'第一个');
})

const second = new Promise((resolve,reject) => {
    setTimeout(resolve,100,'第二个')
})

Promise.race([first,second]).then(result => {
    console.log(result);
})