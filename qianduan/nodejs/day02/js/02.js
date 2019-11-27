// 加载模块

//加载核心模块
const http = require("http");

//第三方的模块
const random = require("randomatic");
console.log(random("*",20));

//自定义的模块 require 会判断 模块名 前面有没有"./" "../" "/"
const aModule = require("./03.js");
console.log(aModule.a);