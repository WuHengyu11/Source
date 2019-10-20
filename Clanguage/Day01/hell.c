#include <stdio.h>

int max(int a,int b)
{
    if(a>b){
        return a;
    }else{
        return b;
    }
}

int main()
{
    int a=33;
    int a1=44;
    int maxNum=max(a,a1);
    printf("最大数为: %d",maxNum);
    return 0;
}
