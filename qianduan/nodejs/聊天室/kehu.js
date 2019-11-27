//导入net模块
const net = require('net');
const readline = require('readline');
var PORT = 3000;
var HOST = '127.0.0.1';
let id = 1;
// tcp客户端
var client = net.createConnection(PORT, HOST);
//创建接口
const rl = readline.createInterface({
    input: process.stdin,  //输入流
    output:process.stdout,  //输出流
});
//终端的交互工具
rl.prompt();
//每读一行 line事件
client.on('connect', function(){
rl.on('line',(content) => {
    if(content =='.exit'){
        rl.close();//关闭
    }else{
        if(id == 1){
            console.log('客户端：已经与服务端建立连接');
        }
        id++;
        client.write(`${content}`);
    }
}).on('close',() => {
    console.log('bye');
    process.exit(0);
});
});
client.on('data', function(data){
    console.log( data.toString() );
});

client.on('close', function(data){
    console.log('客户端：连接断开');
});





