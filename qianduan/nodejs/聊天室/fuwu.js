var net = require('net');
var PORT = 3000;
var HOST = '127.0.0.1';
let socketArr = [];
let userName = [];
// tcp服务端
var server = net.createServer();
server.on("connection",(socket) =>{
    socket.write('~~~~~欢迎来到吐槽聊天室(请输入你的用户名,并按回车结束)~~~~~\n\n');
    let name = '';
    socketArr.push(socket);
    socket.on('data', (data) => {
        if(name == ''){
            name = data.toString();
            if(userName.includes(name)){
                socket.write('你的用户名已被注册');
                name = '';
            }else{
                userName.push(name);
                socketArr.forEach((val) => {
                    val.write(`欢迎${name}加入聊天室\n`);
                })
            }
        }else{
            let data1 = new Date();
            let shi = data1.getHours();
            let fen = data1.getMinutes();
            let miao = data1.getSeconds();
            let time = '('+shi + '时' + fen + '分' + miao +'秒)';
            socketArr.forEach((val) => {
                val.write(time + `${name}:${data}`);
            })
        }
    });
    socket.on('close', (data) => {
        userName.splice(userName.indexOf(name),1);
        socketArr.splice(socketArr.indexOf(socket),1);
        socketArr.forEach((val) => {
            val.write(`用户${name}以退出登陆`);
        })
    });
});
server.listen(PORT, HOST, () => {
    console.log('服务端：开始监听来自客户端的请求');
});
