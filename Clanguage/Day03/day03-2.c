#include <stdio.h>

int main()
{
    int a = 21;
    int b = 20;
    int c;

    if(a == b)
    {
        printf("Line1-a等于b\n");
    }else{
        printf("Line1-a不等于b\n");
    }
    if(a > b)
    {
        printf("Line2-a大于b\n");
    }else{
        printf("Line2-a小于b\n");
    }
    if(a < b)
    {
        printf("Line3-a小于b\n");
    }else{
        printf("Line3-a不小于b\n");
    }
    //改变a和b的值
    a = 5;
    b = 20;
    if(a <= b)
    {
        printf("Line4-a小于或等于b\n");
    }
    if(b >= a)
    {
        printf("Line5-b大于或等于a");
    }
}
