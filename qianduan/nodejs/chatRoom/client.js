/*
* 项目名称:聊天室
* 版本:V1.0
* 开发者:邬恒宇
* 日期:2019-11-13
* */

//导入模块
const net = require('net');
const readline = require('readline');

//定义端口和服务端一致
const PORT = 3555;
//定义地址
const HOST = 'localhost';

let id = 1;
// 客户端
var client = net.createConnection(PORT, HOST);
//创建接口
const read = readline.createInterface({
    input: process.stdin,  //输入流
    output:process.stdout,  //输出流
});
//终端的交互工具
read.prompt();
//每读一行 line事件
client.on('connect', function(){
read.on('line',(content) => {
    //判断用户输入的聊天内容为see you next time则退出
    if(content =='bye'){
        read.close();//关闭
    }else{
        if(id == 1){
            console.log('客户端：已经与服务端建立连接');
        }
        id++;
        //显示聊天内容
        client.write(`${content}`);
    }
}).on('close',() => {
    console.log('Bye-Bye');
    process.exit(0);
});
});
client.on('data', function(data){
    //打印消息内容
    console.log( data.toString() );
});

client.on('close', function(data){
    console.log('客户端：连接断开');
});





