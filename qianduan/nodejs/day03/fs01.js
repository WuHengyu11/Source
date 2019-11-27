//导入fs模块
const fs = require("fs");

//同步和异步

//重命名文件 rename()异步
fs.rename("./test.txt","hello.txt",function (err) {
    if (err) throw  err;
    console.log("重命名成功");
});

//重命名文件 renameSync()同步
fs.renameSync("./hello.txt","test.txt");
console.log("重命名成功");

//异步链操作
//新建目录,把目录改名
fs.mkdir("./test",function (err) {
    if(err) throw err;
    //重命名操作
    fs.rename("./test","./new",function (err) {
        if (err) throw err;
        console.log("重命名成功")
    });
});
// fs.rename("./test","./new",function (err) {
//     if (err) throw err;
//     console.log("重命名成功")
// });