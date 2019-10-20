#include <stdio.h>

int main()
{
    int a = 21;
    int b = 10;
    int c;

    c = a+b;
    printf("Line1-c的值是%d\n",c);
    c = a-b;
    printf("Line2-c的值是%d\n",c);
    c = a*b;
    printf("Line3-c的值是%d\n",c);
    c = a/b;
    printf("Line4-c的值是%d\n",c);
    c = a%b;
    printf("Line5-c的值是%d\n",c);
    c = a++;
    printf("Line6-c的值是%d\n",c);
    c = a--;
    printf("Line7-c的值是%d\n",c);
}
