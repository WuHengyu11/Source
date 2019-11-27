//导入文件系统
const fs = require("fs");

//读取文件
fs.readFile("./files/test.txt","utf-8",(err,data)=>  {
    if (err) throw err;
    console.log(data);
});

//写入文件
fs.writeFile("./files/test1.txt","山上有个老和尚和小和尚\n",(err) =>{
    if (err) throw err;
    console.log("写入成功");
});

//追加文件
for (let i=0; i < 10; i++){
    fs.appendFile("./files/test1.txt","他们在学PHP\n",err =>{
        if (err) throw err;
    } );
}

//拷贝文件
fs.copyFile("./files/test1.txt","./files/test2.txt",(err) =>{
    if (err) throw err;
    console.log("拷贝成功");
});

//截断文件
fs.truncate("./files/test1.txt",6,(err) =>{
    if (err) throw err;
    console.log("文件截断成功");
});