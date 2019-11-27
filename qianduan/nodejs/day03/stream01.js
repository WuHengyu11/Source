//引入模块
const fs = require("fs");

//可读流 读取流
//创建可读流
const rs = fs.createReadStream("./files/test.txt",{encoding:"utf-8"});

rs.on("open", () =>{
    console.log("可读流开启");
});

rs.on("data", (chunk) =>{
    console.log(chunk);
});

rs.on("end", () =>{
    console.log("可读流读取完毕");
});


rs.on("close", () =>{
    console.log("可读流关闭");
});
