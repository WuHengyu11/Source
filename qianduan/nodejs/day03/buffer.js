//创建Buffer

//为buffer对象分配十个长度 每个元素自填充0
//buffer的每个元素都是一个字节Byte(8bit)
const bug1 =Buffer.alloc(10);

bug1[0] = 10;
console.log(bug1);
console.log(bug1.length);


//快速创建
const buf2 = Buffer.from([1,2,260,4]);
console.log(buf2.length);
console.log(buf2);

//utf-8编码
const buf3 = Buffer.from('hello');
console.log(buf3);

const buf4 = Buffer.from('你好');
console.log(buf4);

//直接从内存开辟空间,10个字节,没有初始化(可能会包含旧的数据) 速度比较快
const buf5 = Buffer.allocUnsafe(10);
buf5.fill('a');
console.log(buf5.length);
console.log(buf5);

//拼接buffer
const buf6 = Buffer.concat([bug1,buf2]);
console.log(buf6);

//buffer 输出字符串
console.log(bug1.toString('hex'))
