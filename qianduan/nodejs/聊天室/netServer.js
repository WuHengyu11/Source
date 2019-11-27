// //导入net模块
// const net =require("net");
//
// //创建server
// const server = net.createServer((socket)=>{
//     socket.write("Hello");
//     socket.on("data",(data)=>{
//         //转换格式，得到的data是buffer类型
//         console.log(data.toString());
//         // console.log(data);
//     });
//     socket.on("error",()=>{
//         console.log("socket对象发生error事件");
//     });
//     socket.on("close",()=>{
//         console.log("socket对象发生close事件");
//     })
// })
//
// //捕获server对象发生错误
// server.on("error",()=>{
//     console.log("server对象发生error事件");
// })
//
// //监听端口
// server.listen(8888,()=>{
//     console.log("socket已成功开启8888端口");
// })


var net = require('net');
var PORT = 3000;
var HOST = '127.0.0.1';

// tcp服务端
var server = net.createServer(function(socket){
    console.log('服务端：收到来自客户端的请求');

    socket.on('data', function(data){
        console.log('服务端：收到客户端数据，内容为{'+ data +'}');

        // 给客户端返回数据
        socket.write('你好，我是服务端');
    });

    socket.on('close', function(){
        console.log('服务端：客户端连接断开');
    });
});
server.listen(PORT, HOST, function() {
    console.log('服务端：开始监听来自客户端的请求');
});