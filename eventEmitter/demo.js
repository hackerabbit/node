const EventEmitter = require('events')
const eventEmitter = new EventEmitter();

eventEmitter.on('start',(start,end) => {
    console.log(`从${start}到${end}`);
})

eventEmitter.emit('start',1,100)

eventEmitter.once('start')      // 单词监听

eventEmitter.off // 移除事件
eventEmitter.removeListener // 移出事件
eventEmitter.removeAllListeners // 移除所有事件

