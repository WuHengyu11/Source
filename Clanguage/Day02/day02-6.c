//static存储类实例
#include <stdio.h>

//函数声明
void func1(void);

static int count = 10; //全局变量static是默认的

int main()
{
    while(count--){
        func1();
    }
    return 0;
}

void func1(void)
{
/*'thingy'是'func1'的局部变量只初始化一次
 *每次调用函数'func''thingy'值不会被重置
 */
static int thingy = 5;
thingy++;
printf("thingy为%d,count为%d\n",thingy,count);
}
