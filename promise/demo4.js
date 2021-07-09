// 处理错误
new Promise((resolve,reject) => {
    throw new Error('错误')
}).catch(err => {
    console.log(err)
})

new Promise((resolve,reject) => {
    reject('错误')
}).catch(err => {
    console.error(err);
})