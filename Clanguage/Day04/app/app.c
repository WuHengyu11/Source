/*
 *根据用户输入数实现平均值的计算
 *V1.0
 *2019-10-15
 */
#include <stdio.h>

int main()
{
    int flag=1;
    int i; //用于接收输入数据
    int count=0; //统计输入个数
    int s=0; //统计输入的数值
    printf("请输入整数用回车分割,按0结束(例:123):\n");
/*
*用于循环输入
*/
    while(flag){
        scanf("%d",&i);
        if(0==i) break;  //当用户输入0时,跳出循环
        count++;
        s+=i;
    }
    printf("您输入的总和为:\n");
    printf("%d\n",s);
    printf("您输入的次数为:\n");
    printf("%d\n",count);

/*
*用于循环输入
*/
    float v=s/count;
    printf("平均值为:%f\n",v);
    return 0;
}
