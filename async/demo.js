const doSomethingAsync = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve('做一些事情'), 3000)
    })
}

// doSomethingAsync().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })



const doSomething = async () => {
    console.log(await doSomethingAsync())
}
console.log('之前')
doSomething()
console.log('之后')




// ---------------

const aFunction = async () => {
    return '测试'
}

const bFunction = () => {
    return Promise.resolve('测试')
}

bFunction().then(data => {
    console.log('bFunction' + data)
})

aFunction().then(data => console.log(data))



