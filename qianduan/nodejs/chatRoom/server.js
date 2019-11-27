/*
* 项目名称:聊天室
* 版本:V1.0
* 开发者:邬恒宇
* 日期:2019-11-13
* */
//导入模块
var net = require('net');

//定义接口
const PORT = 3555;
//定义地址
const HOST = 'localhost';

let socketArr = [];
let userName = [];
// tcp服务端
var server = net.createServer();
server.on("connection",(socket) =>{
    socket.write('欢迎来的聊天室(请输入用户名按回车进入下一步)\n');
    let name = '';
    socketArr.push(socket);
    socket.on('data', (data) => {
        if(name == ''){
            name = data.toString();
            //检测是否重名
            if(userName.includes(name)){
                socket.write('你的用户名已被注册^_^');
                name = '';
            }else{
                userName.push(name);
                socketArr.forEach((val) => {
                    val.write(`欢迎${name}加入聊天室^_^\n`);
                })
            }
        }else{
            //获取时间
            let date = new Date();
            //获取小时
            let hour = date.getHours();
            //获取分钟
            let min = date.getMinutes();
            //获取秒
            let sec = date.getSeconds();
            //将时间拼接为时分秒的形式
            let time = '('+ hour + '时' + min  + '分' + sec +'秒)';
            socketArr.forEach((val) => {
                val.write(time + `${name}说:${data}`);
            })
        }
    });
    //给socket添加关闭事件
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
