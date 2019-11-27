//导入模块
const circle = require("../myModule/circle.js");
const sauareClass = require("../myModule/sauare.js");
const sauare = new sauareClass(10);
//计算圆的面积和周长
console.log("圆的面积:" + circle.area(4));
console.log("圆的周长:" + circle.circumference(4));

//计算正方形的面积和周长
console.log("正方形的面积:" + sauare.area(4));
console.log("正方形的周长:" + sauare.zhouchang(4));