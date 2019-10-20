#include <stdio.h>

//定义两个全局变量
int x = 1;
int y = 2;
int addt();
int main(void)
{
    int result;
    result = addt();
    printf("result为:%d\n",result);
    return 0;
}
