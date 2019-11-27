//导入文件系统
const fs = require('fs');

//监听文件变化
fs.watchFile("./files/test1.txt",{interval:1000},(curr,prev) =>{
    console.log("当前文件的修改时间 " + curr.mtime + "当前的文件的大小:"  + curr.size);
    console.log("以前文件的修改时间 " + prev.mtime + "以前的文件的大小:"  + prev.size);

    //停止监听
    fs.unwatchFile("./files/test1.txt");
});

//使用watch监听文件变化
let watch =fs.watch("./files/test1.txt",(eventType,filename) => {
    if (eventType === "rename") return;
    //console.log(eventType,filename);
});

watch.on("change",function (eventType,filename) {
    console.log(eventType,filename);
});

//监听目录变化
fs.watch("./files",(eventType,filename) => {
    console.log(eventType,filename);
});

