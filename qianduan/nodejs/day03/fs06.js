//导入模块
const fis = require("fs");

//打开文件,并读取
fis.open("./files/test.txt","r",(err,fd) =>{
    if (err) throw err;

    //读取文件
    let size = fis.statSync("./files/test.txt").size;
    let buf = Buffer.alloc(size);//穿件Buffer
    fis.read(fd,buf,0,size,0,(err,bytesRead,buffer) =>{
        console.log("读取了" + bytesRead + "字节");
        console.log(buffer);
        console.log(buffer.length);
        console.log(buffer.toString());
    });
    //
    // //打开文件 并写入
     fis.open("./files/test1.txt", "w", (err,fd) => {
    //     if (err) throw err;
    //
    //     //写入 buffer形式
    //     let buf = Buffer.from("嘿嘿嘿");
    //     fis.write(fd,buf,0,buf.length,0,(err,bytesWritten,buffer) => {
    //         if (err) throw err;
    //         console.log(`写入了${bytesWritten}字节`);
    //         console.log(buffer);
    //     });
         //写入 字符串形式
         fis.write(fd,"锄禾嘿嘿嘿",0,(err,bytesWritten,string) =>{
             if (err) throw err;
             console.log(`写入了${bytesWritten}字节`);
             console.log(string);
         });
     });
});

//打开并截断字符串
fis.open("./files/test2.txt","w+",(err,fd) => {
    if (err) throw err;
    fis.ftruncate(fd,6,err =>{
        if (err) throw err;
        console.log("文件截断成功");
    });
});

//追加内容
fis.open("./files/test2.txt","a",(err,fd) => {
    if (err) throw err;
    fis.appendFile(fd,"从前又从前",(err) => {

        fis.close(fd,(err) =>{
            if (err) throw err;
            console.log("追加成功");
        });
    });
});