//使用第三方下 包 操作目录
const makedir = require("make-dir");

//创建目录
makedir("./b",() => {});
console.log("创建成功");

