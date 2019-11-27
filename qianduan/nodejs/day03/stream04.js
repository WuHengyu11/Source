//大型文件复制
//导入 fs 模块
const fs = require("fs");

const rs = fs.createReadStream("./files/test1.txt");
const ws = fs.createWriteStream("./files/test5.txt");

//使用管道,把内容从可读流中进入可写流
rs.pipe(ws);

ws.on("close",() => {
    console.log("文件复制完成");
});