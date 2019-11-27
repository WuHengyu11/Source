//引入Path模块 核心模块
const path = require("path");

//处理路径信息
let relativePath = "../package.json";

console.log("basename : " + path.basename(relativePath));
console.log("basename : " + path.basename(relativePath,".json"));
console.log("basename : " + path.dirname(relativePath));
console.log("basename : " + path.extname(relativePath));
//不论操作系统,统一按照posix的方式来
console.log(path.posix.normalize(relativePath));