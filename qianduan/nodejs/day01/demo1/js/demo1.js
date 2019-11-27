// 创建一个HTTP服务,接收用户的响应

//引入模块
let http = require("http");

/*
*
*
* */
let server = http.createServer(function (req,res) {
    //req 表示 请求
    //res 表示 响应

    //设置响应头
    res.writeHead(200,{"Content-type" : "text/html;charset=utf-8"})
    /*
    * res.end–》（data，encoding，callback）也可以不传参
    * data.只能发送Buffer和string的数据
    * encodeding 类型的数据
    * 此方法向服务器发出信号，表明已发送所有响应头和主体，该服务器应该视为此消息已完成。 必须在每个响应上调用此 response.end() 方法。
    * */

    //end结束响应
    res.end("<h1>Hello Node.js 哈哈哈</h1>")
});

//监听端口
//第二个参数指定链接访问
server.listen(3000,function () {
    console.log("Http Server running on port 80");
})