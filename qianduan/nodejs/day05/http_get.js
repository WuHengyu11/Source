//导入模块
const http = require("http");
const fs = require("fs");
const {URL} = require("url");

//创建服务
http.createServer((req,res) => {
    const url = new URL(req.url,"http://"+req.headers.hostname);
    //判断路径
    switch (url.pathname) {
        case "/getform":
            fs.readFile("./get-form.html", (data) => {
                res.writeHead(200,{
                    "Conetent-type" : "text/html;charset=utf8"
                });
                res.end(data);
            });
            break;
        default:
            res.writeHead(200,{
                "Conetent-type" : "text/html;charset=utf8"
            });
    }
}).listen(8080, () =>{

});