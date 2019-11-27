//导入fs模块
const fs = require("fs");

//创建可写流
const ws = fs.createWriteStream("./files/test.txt");

//写入
ws.write("嘿嘿嘿");
//手工结束
ws.end();

ws.on("open",(fd) => {
    console.log("文件已经打开,可写流开始");
});

ws.on("end",() => {
    console.log("写入结束");
});

ws.on("close",() => {
    console.log("可写流关闭");
});