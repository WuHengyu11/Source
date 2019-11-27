//导入第三方模块
const randomatic = require("randomatic");

//导入自定义模块 --文件模块
/*
* 文件不指定后缀,优先加载,myModule2,没有加载 myModule2.js,还没有加载myModule2.json,还没有 加载myModule2.node
*
* */
const myModule2 =  require("../myModule/myModule2");
console.log(myModule2);

//导入自定义模块, -- 目录作为模块
/*
*   如果目录中有package.json,并指定main,  ---指定文件为模块入口
*   没有指定或者没有package.json,默认加载index.js
*   没有index.js,尝试加载index.node
* */
const testModule = require("../testmodule");

testModule();