/*
* 图片轮播主要js
* V1.0
* 2019-10-17
* 负责人:邬恒宇
* */
//获取元素
content = document.getElementById('content');
lis = content.children[0].children;
len = lis.length;
var roll; //定义轮播标志
var pointlis = document.getElementById('point');
//获取左右箭头
var left = document.getElementById("btn-prev");
var right = document.getElementById("btn-next");
var plist = pointlis.children[0].children;
index = 0;
//定义自动轮播
function autoroll() {
    //定时轮显
    roll = setInterval(function () {
        //之前显示的隐藏
        lis[index].removeAttribute("class");
        plist[index].removeAttribute("class");
        index++;
        if(index == lis.length){
            index = 0;
        }
        //当前的显示
        lis[index].setAttribute("class","active")
        plist[index].setAttribute("class","active-point")
    },3000);
}
//页面加载时开启图片轮播
autoroll();
//当鼠标移入图片时停止轮播
content.onmouseenter = function () {
    //停止轮播
    clearInterval(roll);
};
//当鼠标移出图片时再次开启轮播
content.onmouseleave = function () {
    //页面加载启动轮播
    autoroll();
};
for (var i= 0;i < plist.length;i++){
    plist[i].onmouseover = (function (i) {
        return function () {
            //之前显示的隐藏
            lis[index].removeAttribute("class");
            plist[index].removeAttribute("class");
            index = i;
            //当前的显示
            lis[i].setAttribute("class","active");
            plist[i].setAttribute("class","active-point");
        }
    })(i)
}
//左键头事件
left.onclick = function() {
    //之前显示的隐藏
    lis[index] .removeAttribute("class");
    plist[index].removeAttribute("class");
    //索引减一
    index--;
    if (index < 0){
        index = lis.length - 1;
    }
    //当前的显示
    lis[index].setAttribute("class","active");
    plist[index].setAttribute("class","active-point");
}
//右箭头事件
right.onclick = function() {
    lis[index] .removeAttribute("class");
    plist[index].removeAttribute("class");
    //索引加一
    index++;
    if (index == lis.length){
        index = 0;
    }
    lis[index].setAttribute("class","active");
    plist[index].setAttribute("class","active-point");
}