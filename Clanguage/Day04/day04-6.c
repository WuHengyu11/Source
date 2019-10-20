/*
*打印九九乘法表
*V1.0
*2019-10-15
*/
#include <stdio.h>

int main()
{
    int result;//
    printf("\n");
    for(int i = 1;i <= 9;i++)
    {
        for(int j = 1; j <=i;j++)
	{
	    result=i*j;
	    printf("%d*%d=%-3d",i,j,result);//-3d表示左对齐,占3位
	}
	printf("\n");
    }
}
