#include<stdio.h>
#include<string.h>
#include<stdlib.h>
#include<math.h>

int func(int a, int b) {
  int r = 0;
  while(a < b) {
    //交换a和b
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
  }
  
  while(b) {
    r = a % b;
    a = b;
    b = r;
  }
  return a;
}

void main(){
	int a,b;

	printf("please input a b:\n");
	scanf("%d%d", &a, &b);
	printf("%d和%d的最大公约数为:%d\n", a, b, func(a,b));

	//防止黑框闪退
	system("pause");
}
