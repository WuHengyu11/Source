//导入模块
const crypto = require("crypto");

//md5的hash加密

const hash = crypto.createHash("md5");

hash.update("123456");
//console.log(hash.digest("hex"));

let hashCode = hash.digest();

console.log(hashCode);