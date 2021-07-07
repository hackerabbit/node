// 链式promise的示例
const status = response => {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    }
    return Promise.reject(new Error(response.statusText))
}

const json = response => response.json()

fetch('../file/todos.json').then(status).then(response => response.json()).then(data => {
    console.log(data);
}).catch(err => console.log(err))