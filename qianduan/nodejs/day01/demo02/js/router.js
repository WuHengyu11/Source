//引入模块
let http = require("http");
let fs = require("fs");

//创建HTTP服务
http.createServer(function (req,res) {
    //req 请求
    //res 响应
    if (req.url === "/favicon.ico"){
        return false;
    }

    if (req.url === "/" || req.url === "/index.html"){
        //读取文件
        fs.readFile("../index.html",function (err,data) {
            //err 错误对象
            //data 读取文件中的数据
            res.writeHead(200,{"Content-type" : "text/html;charset=utf-8"});
            res.end(data);
        });
    }else if (req.url === "/detail.html"){
        fs.readFile("../detail.html",function (err,data) {
            //err 错误对象
            //data 读取文件中的数据
            res.writeHead(200,{"Content-type" : "text/html;charset=utf-8"});
            res.end(data);
        });
    }else if(req.url === "/img/01.jpg"){
        //读取文件
        fs.readFile("../img/01.jpg",function (err,data) {
            //err 错误对象
            //data 读取文件中的数据
            res.writeHead(200,{"Content-type" : "image/jpeg"});
            res.end(data);
        });
    }else if (req.url === "/style/style.css"){
        //读取文件
        fs.readFile("../style/style.css",function (err,data) {
            //err 错误对象
            //data 读取文件中的数据
            res.writeHead(200,{"Content-type" : "text/css"});
            res.end(data);
        });
    }else{
        //设置响应头
        res.writeHead(404,{"Content-type" : "text/html;charset=utf-8"});
        res.end("<h1>不存在</h1>");
    }
    console.log(req.url);

}).listen(3000,function () {
    console.log("HTTP Server is running on 3000")
})