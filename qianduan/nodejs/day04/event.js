//导入 event模块
const eventEmitter = require("events");
console.log("每个事件可注册的监听器最大数量:" + eventEmitter.defaultMaxListeners);
//实例化
const emitter = new eventEmitter();

//监听事件
emitter.on("aa",() => {
    console.log("aa 触发了");
});


//自动触发aa事件
emitter.emit("aa");

