//导入文件系统
const fs = require("fs");

//创建目录
/*
fs.mkdir("./a",err =>{
    if (err) throw err;
    console.log("创建成功");
});
 */

//创建多级目录

const createDir = (dirPath,callback) =>{

    //判断目录是否已经存在
    fs.access(dirPath,callback => {
        if (err){
            //递归调用本方法
            createDir(path.dirname(dirPath),() =>{
                fs.mkdir(dirPath,callback);
            });
        }else{
            callback(new Error(`${dirPath}`));
        }
    });
};

createDir("./a/b/c/e/d",(err) =>{
    if (err) throw  err;
    console.log("目录创建成功");
});