//导入文件系统
const fs = require("fs");

//大型文件的复制
//创建可读流
const rs = fs.createReadStream("./files/test.txt");
//创建可写流
const ws = fs.createWriteStream("./files/test3.txt");

let buf =  Buffer.alloc(0);
rs.on("data",(chunk) => {
    //拼接从流中读取的内容
    buf = Buffer.concat([buf,chunk]);
});

rs.on("end",() => {
    ws.write(buf);
    ws.end();
});

ws.on("close",() =>{
    console.log("文件复制成功")
});