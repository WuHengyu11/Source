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
    int a1=32;
    int a2=65;
    int maxNum=max(a1,a2);
    printf("最大数为:%d",maxNum);
}
