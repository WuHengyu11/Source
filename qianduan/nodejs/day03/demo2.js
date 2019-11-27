/*
 * 输入输出综合案例
 * */
// process.stdout.write("ok");
//
// process.stdin.on('data',function (a) {
//     console.log("用户输入: " + a)
// })

let a;
let b;
process.stdout.write("请输入a的值:")
process.stdin.on('data',function (chat) {
    if(!a){
        a = Number(chat);
        process.stdout.write("请输入b的值: ");
    }else{
        b = Number(chat);
        process.stdout.write("请a和b的和是: " + (a+b));
    }
})