// 导入 readline 模块
const readline = require("readline");

//创建接口
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "请输入"
});

//终端的交互工具
rl.prompt();

//每读一行Line事件
rl.on("line",(content) =>{
    console.log(`您输入的内容是:  ${content}`);
    rl.prompt();
}).on("close",() =>{
    console.log("bye");
    process.exit(0);
});

