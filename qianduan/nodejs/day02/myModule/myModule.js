//自定义模块
let username = "Jim";
let userInfo = {age:100,name:"张飞"};

//导出或者暴露 内容
exports.username = username;
exports.userInfo = userInfo;

module.exports.address = "北京";
//module.exports === exports