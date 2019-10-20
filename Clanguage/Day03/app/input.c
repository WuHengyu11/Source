/*统计和输入
*v1.0
*2019-10-15
*/
#include <stdio.h>

int main()
{
    int flag = 1;
    int i; //用于接收输入数据
    int count = 0; //统计输入个数
    int  s = 0;//统计输入的数值
/*
*用于循环输入
*/
    while(flag){
        scanf("%d",&i);
	if(0 == i) break;
	count++;
	s += i;
    } 
    printf("%d,%d",s,count); //输出结果
    return 0;
}

