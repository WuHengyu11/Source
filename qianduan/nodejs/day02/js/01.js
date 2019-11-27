//在Node中使用var声明的全局变量 等同于 全局对象的属性

var username = "jack";

console.log(username);
console.log(global.username);