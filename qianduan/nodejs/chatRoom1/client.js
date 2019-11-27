const net = require("net");
//创建文件的读写流
const readline = require("readline");
const client = new net.Socket();

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

//将buffer文件转换为字符串
client.setEncoding("utf8")


//参数1：端口号  参数2 IP
client.connect(9000,"127.0.0.1",()=>{
    //接收服务端传递过来的消息
    client.on("data",(data)=>{
        console.log(data)
    })
});

//可以让我们在终端上进行文件的读写
rl.on("line",(text)=>{
    //发送消息
    client.write(text);
})