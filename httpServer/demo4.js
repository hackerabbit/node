// 使用axios
const axios = require('axios')

axios.post('/todos',{
    todo : '做点事情'
})
// .then(res => {
//     console.log(`状态码:${res.statusCode}`)
//     console.log(res)
// }).catch(err => {
//     console.log(err);
// })