const net = require("net");

const server = net.createServer();
server.listen(9000);

const clients = [];
//当用户链接到服务器以后
server.on("connection",(client)=>{
    //将所有的客户端保存在一个数组中，当收到消息的时候将这个消息给所有的用户发送过去
    client.id = clients.length;
    clients.push(client);
    console.log("有人链接进来了");
    //接收客户端传递过来的消息
    client.on("data",(data)=>{
        //然后将这个消息发送给所有的用户
        clients.map((item)=>{
            if(item){
                item.write(data);
            }
        })
    })
    //当客户端断开链接的时候将他从数组中移除
    client.on("close",()=>{
        clients[client.id] = null;
    })
})