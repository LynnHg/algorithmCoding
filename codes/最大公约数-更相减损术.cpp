#include<stdio.h>
#include<stdlib.h>

int func(int a, int b) {
  while(a != b){
    if(a > b)
      a -= b;
    else 
      b -= a;
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

