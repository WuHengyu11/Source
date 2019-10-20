//变量的练习
#include <stdio.h>
//函数外定义全局变量
    int x;
    int y;
int addt()
{
    //函数内声明变量x和y为外部变量
    extern int x;
    extern int y;
    //给全局变量x和y赋值
    x = 1;
    y = 2;
    return x+y;
}

int main()
{
    int result;
    result = addt();

    printf("result为:%d",result);
    return 0;
}
