//命令行工具   压缩的实现
const zlib = require("zlib");
const fs = require("fs");

//获取压缩的源文件和目标文件
if (process.argv()[2]){
const src = process.argv()[2];
}else{
    throw new Error("请指定源文件");
}

//获取压缩的源文件和目标文件
if (process.argv()[3]){
    const src = process.argv()[3];
}else{
    throw new Error("请指定目标文件");
}
