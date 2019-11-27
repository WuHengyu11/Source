/*
* 监听文件变化动态合并文件
* */


//导入文件系统
const fs = require('fs');

//合并文件
const concatFile = (callback) => {
//读取第一个文件
fs.readFile("./style/reset.css",(err, buf1) => {
    if (err) throw err;
    //读取第二个文件
    fs.readFile("./style/sidebar.css",(err,buf2) => {
        if (err) throw err;
        //合并两次读取的内容
        let buf = Buffer.concat([buf1,buf2]);
        //把读取的内容写入目标问件
        fs.writeFile("./dis/style.css",buf,(err) =>{
            if (err) throw err;
           callback();
        });
    });
});
}

concatFile(() => {
    console.log("build dis/style.css");
});

//监听文件变化
fs.watch("./style",(eventType,filename) =>{
    if (eventType === "change" && (filename === "reset.css" || filename ==="sidebar.css")){
        concatFile(() =>{
            console.log("build dis/style.css");
        });
    }
    return;
});