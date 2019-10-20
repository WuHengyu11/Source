/*
实现通过邮箱地址得出所属机构
V1.0
邬恒宇
2019-10-17
 */
var myforms = document.getElementById("submit");
var email_address = myforms.children[1];
var checkmsg = document.getElementById("checkmsg")
//判断用户输入的电子邮箱格式是否正确
function checkEmail(){
    //拼接出时间
    var d=new Date();
    var year=d.getFullYear();
    var month=d.getMonth()+1;
    var day=d.getDate();
    var hour=d.getHours();
    var minute=d.getMinutes();
    var second=d.getSeconds();

    var time=year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' +second;
    //获取邮箱地址
    var myemail = email_address.value;
    //定义邮箱的格式的正则表达式
    var myReg=/^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
    //求出@的下标
    var pos = myemail.indexOf('@');
    //求出@以后的字符
    var test = myemail.substr(pos+1,myemail.length);
    //求@以前的字符
    var test1 = myemail.substr(0,pos);
    //判断邮箱隶属于
    if (test == "163.com"){
        checkmsg.innerText="欢迎网易用户!"+ " " + parseInt(test1) + " "+ time.toString();
    }else if(test == "qq.com"){
        checkmsg.innerText="欢迎腾讯用户!"+ " " + parseInt(test1) + " "+ time.toString();
    }else{
        checkmsg.innerText="欢迎其他用户!"+ " " + parseInt(test1) + " "+ time.toString();
    }
    //验证邮箱格式是否正确
    if(myReg.test(myemail)){
        return true;
    }else{
        checkmsg.innerText="邮箱格式不对!";
        return false;
    }
}