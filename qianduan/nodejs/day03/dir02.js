//导入文件系统
const fs = require("fs");
const http = require("http");

//读取目录
/*
fs.readdir("../node_modules",(err,files) => {
    console.log(files);
});*/

http.createServer((req,res)=> {
    res.writeHead(200,{"content-type" : "text/html;charset=utf-8"});
    res.write("<ul>");
    fs.readdir("./",(err,files) => {
        files.forEach((file) => {
            let state = fs.statSync(file);
            let type = state.isFile() ? "file" : "directory";
            res.write(`<li>${file} : ${type}</li>`)
        });
        res.write("</ul>");
        res.end("OK");
    });
}).listen(8080,() =>{
    console.log("Running")
});
