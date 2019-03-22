#include<stdio.h>
#include<stdlib.h>

void func() {
  int i, j, k;
  for (i = 0; i < 100; i++) {
    for (j = 0; j < 100; j++) {
      for (k = 0; k < 100; k++) {
        if (i*5+j*3+k/3 == 100 && i+j+k == 100 && k%3 == 0){
	        printf("公鸡%d只,母鸡%d只,小鸡%d只\n", i, j, k);
	      }
      }
    }
  }
}

void func1() {
  int i, j, k;
  for ( i = 0; i <= 20; i++) {
    for (j = 0; j <= 33; j++) {
      k = 100 - i - j;
      if (i*5+j*3+k/3 == 100 && k%3 == 0) {
        printf("公鸡%d只,母鸡%d只,小鸡%d只\n", i, j, k);
      }
    }
  }
}

void main(){
	func();
  func1();
	//防止黑框闪退
	system("pause");
}
