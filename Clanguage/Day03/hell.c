#include <stdio.h>
#include "max.h"
#include "min.h"

int main(){
    int a1=15;
    int a2=16;
    int maxNum=max(a1,a2);
    int minNum=min(a1,a2);
    printf("the max value is %d\n",maxNum);
    printf("the max value is %d\n",minNum);
}
