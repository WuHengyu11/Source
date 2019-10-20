/*
*用于求出水仙花数
*V1.0
*2019-10-15
*/
#include <stdio.h>

int main()
{
    int x,y,z;
    for(int i = 100;i <= 999 ;i++){
        x=i%10;
	y=i/10%10;
        z=i/100%10;
	if((x*x*x+y*y*y+z*z*z) == i)
	{
	    printf("%d\n",i);
	}

    }
}
