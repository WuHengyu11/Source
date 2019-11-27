//导入模块
const fs = require("fs");
// fs.mkdir("./files",function (err) {
//     if (err) throw err;
//     console.log("目录创建成功");
// })
//判断文件/目录是否存在
fs.access("./files",err => {
    if (err){
        console.log("文件或目录不存在")
    }else{
        console.log("文件或目录存在")
    }
});

//重名名 删除

//查看文件或目录状态
fs.stat("./files/test.txt",(err, stat) => {
    console.log(stat);
});