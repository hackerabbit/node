// 编排promise
// promise.all的使用

// promise.all()接收一个promise组成的数组
// 用于同时发送多个请求

const f1 = fetch('../file/something.json')
const f2 = fetch('../file/something2.json')

Promise.all([f1, f2]).then(([res1,res2]) => {
    // console.log('结果数组', res)
    console.log(res1,res2)
}).catch(err => {
    console.error(err)
})

// Promise.all([f1, f2])
//     .then((res) => res.map(item => item.json())
//     ).then(data => {
//         data[0].then(data1 => {
//             console.log(data1);
//         })
//         data[1].then(data2 => {
//             console.log(data2);
//         })
//     }).catch(err => {
//         console.error(err);
//     })



// Promise.all([f1, f2])
//     .then((res) => res.map(item => item.json())
//     ).then(data => {
//         console.log(data);
//     }).catch(err => {
//         console.error(err);
//     })



// const p1 = new Promise((resolve, reject) => {
//     resolve('hello');
// })
//     .then(result => result);

// const p2 = new Promise((resolve, reject) => {
//     throw new Error('报错了');
// })
//     .then(result => result);

// Promise.all([p1, p2])
//     .then(result => console.log(result[0]))
//     .catch(e => console.log(e));
 