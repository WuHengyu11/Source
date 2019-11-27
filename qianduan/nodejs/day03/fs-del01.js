//导入文件系统
const fs = require("fs");
const path = require("path");

//删除 空目录
/*fs.rmdir("./a",err => {
    if (err) throw err;
    console.log("删除成功");
});*/

//删除目录或文件 目录中所有删除
const removeDir = (dirPath,callback) => {
    //判断类型
    fs.stat(dirPath,(err, state) => {
        if (err) return callback(err);

        //判断是否是目录
        if (state.isDirectory()){
            //读取目录
            fs.readdir(dirPath,(err,files) => {
                if (err) return callback(err);
                //如果是空目录
                if (files.length < 1){
                    fs.rmdir(dirPath,callback);
                    return;
                }
                //变量
                let count = 0;
                files.forEach((file) => {
                    removeDir(path.join(dirPath,file),() => {
                        if (++ count === files.length){
                            fs.rmdir(dirPath,callback);
                        }
                    });
                });
            });
        }else {
            fs.unlink(dirPath,callback);
        }
    });
}

removeDir("./a",function (err) {
    if (err) throw err;
    console.log("目录删除成功");
});
