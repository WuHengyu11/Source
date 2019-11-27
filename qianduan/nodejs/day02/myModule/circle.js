// 计算圆的周长和圆的面积 模块

//导出方法 计算圆的面积
exports.area = function (r) {
    return Math.PI * (r**2);
}

//导出方法 计算圆的周长
exports.circumference = function (r) {
    return Math.PI * r;
}