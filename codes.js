#########################################
     ######最大公约数最小公倍数######
#########################################
----问题描述
----求两数的最大公约数和最小公倍数
----
----更相减损术----
----
     int a, b, n1, n2;
	scanf("%d%d", &a, &b);
	n1 = a;
	n2 = b;
	while (a != b) {
		if (a > b)
			a -= b;
		else
			b -= a;
	}
	printf("最大公约数为：%d,最小公倍数为:%d", a,n1*n2/a);
----
----辗转相除法,循环----
----
     int a, b,r;
	scanf("%d%d", &a, &b);
	if (a < b) {
		a = a ^ b;
		b = a ^ b;
		a = a ^ b;
	}
	while (b) {
		r = a % b;
		a = b;
		b = r;
	}
	printf("最大公约数为：%d", a);
----
----辗转相除法,递归----
----
void main() {
	int mcd(int, int);
	int a, b;
	scanf("%d%d", &a, &b);
	if (a < b) {
		a = a ^ b;
		b = a ^ b;
		a = a ^ b;
	}
	printf("最大公约数为：%d", mcd(a, b));

}

int mcd(int a, int b)
{
	if (b)
		return mcd(b, a%b);
	else
		return a;
}
#########################################
     ###########百钱买百鸡###########
#########################################
----问题描述
----公鸡一只5元，母鸡一只3元，小鸡3只1元，求100元买100只鸡中，公鸡/母鸡/小鸡各多少
----
----三次循环----
----
     int i, j, k;
	for ( i = 0; i <= 100; i++)
	{
		for (j = 0; j <= 100; j++)
		{
            for(k = 0; k <= 100; k++)
		 if (i*5+j*3+k/3 == 100 && i+j+k == 100 && k%3 == 0) 
            printf("%d,%d,%d\n", i, j, k);
		}
	}
----
----两次循环----
----
     int i, j, k;
	for ( i = 0; i <= 20; i++)
	{
		for (j = 0; j <= 33; j++)
		{
			k = 100 - i - j;
		 if (i*5+j*3+k/3 == 100 && k%3 == 0) 
            printf("%d,%d,%d\n", i, j, k);
		}
	}
#########################################
     ########数组中n个数反序#########
#########################################
#define N 10
void main() {
	void swap(int[], int);
	int a[N] = { 1,2,3,4,5,6,7,8,9,10 };
	swap(a, 5);
}

void swap(int a[], int n) {
	for (int i = 0; i < n / 2; i++)
	{
		a[i] = a[i] ^ a[n - i - 1];
		a[n - i - 1] = a[i] ^ a[n - i - 1];
		a[i] = a[i] ^ a[n - i - 1];
	}
	int *p = a;
	while (p < a + N) printf("%d ", *p++);
}
#########################################
     ############排序算法###########
#########################################
----
----冒泡排序----算法平均时间复杂度O(n^2)，稳定排序算法
----
const int N = 10;
void main() {
	int arr[N] = { 2,3,1,7,8,5,6,10,9,4 };
	int i, j;

	for (i = 0; i < N-1; i++)
	{
		for (j = 0; j < N - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				arr[j] = arr[j] ^ arr[j + 1];
				arr[j + 1] = arr[j] ^ arr[j + 1];
				arr[j] = arr[j] ^ arr[j + 1];
			}
		}
	}

	int *p = arr;
	while (p < arr + N) printf("%3d", *p++);
}
----
----选择排序----算法平均时间复杂度O(n^2)，不稳定排序算法
----
const int N = 10;
void main() {
	int arr[N] = { 2,3,1,7,8,5,6,10,9,4 };
	int i, j, k;

	for (i = 0; i < N-1; i++)
	{
		k = i;
		for (j = i+1; j  < N; j++)
		{
			if (arr[j] < arr[k]) k = j;
		}
		if (k != i) {
			arr[k] = arr[i] ^ arr[k];
			arr[i] = arr[i] ^ arr[k];
			arr[k] = arr[i] ^ arr[k];
		}
	}

	int *p = arr;
	while (p < arr + N) printf("%3d", *p++);
}
###########################################################
     ############计算总平均分和第n个学生成绩###########
###########################################################

	void main() {
		void avg(float *, int);
		void search(float (*p)[4], int);
		float score[3][4] = 
		{
			{1,2,3,4},
			{5,6,7,8},
			{9,10,11,12}
		};
		int num;
		int len = (sizeof score) / (sizeof score[0][0]);
		avg(*score, len);
		printf("查询第几个学生的成绩:\n");
		scanf("%d", &num);
		search(score, num);
		system("pause");
	}

	void avg(float *p, int n) {
		float avg = 0,sum = 0;
		float *temp = p;
		while (p < temp + n) {
			sum += *p;
			p++;
		}
		avg = sum / n;
		printf("3位学生的总平均成绩为：%5.1f\n",avg);
	}

	void search(float (*p)[4], int n) {
		int i = 0;
		printf("第%d个学生各科的成绩分别为：\n", n);
		while (i < 4) {
			printf("%5.1f",*(*(p + n) + i));	
			i++;
		}
		putchar(10);
	}
############################################
     ############约瑟夫环问题###########
############################################
----问题描述
----编号为 1，2，3，…，n 的 n 个人围坐一圈，任选一个正整数 m 作为报数上限值，
----从第一个人开始按顺时针方向报数，报数到 m 时停止，报数为 m 的人出列。
----从出列人的顺时针方向的下一个人开始又从 1 重新报数，如此下去，直到所有人都全部出列为止。

int n, m, i, s = 0;
	printf("input number of person and the flag:");
	scanf("%d%d", &n, &m);
	for (i = 2; i <= n; i++)
	{
		s = (s + m) % i;//数学思路
	}
	printf("\nThe winner is %d\n", s + 1);
############################################
     ##########三天打渔两天晒网#########
############################################
----问题描述
----如果一个渔夫从2011年1月1日开始每三天打一次渔，两天晒一次网，
----编程实现当输入2011年1月 1日以后的任意一天，输出该渔夫是在打渔还是在晒网。

const int LEAP = 366;
const int NONLEAP = 365;
const int initalYear = 2011;//初始年份

int isLeap(int year) {
	if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) return 1;
	else return 0;
}

int totalDays(int year, int month, int day) {
	int days=0, i, j;
	int leap[12] = { 31,29,31,30,31,30,31,31,30,31,30,31 };//闰年月份
	int nonleap[12] = { 31,28,31,30,31,30,31,31,30,31,30,31 };//平年月份

	if (isLeap(year)) {
		for ( i = initalYear; i < year; i++)
		{
			days += LEAP;
		}
		for (j = 0; j < month - 1; j++)
		{
			days += leap[j];
		}

		days += day;
	}
	else {
		for (i = initalYear; i < year; i++)
		{
			days += NONLEAP;
		}
		for (j = 0; j < month - 1; j++)
		{
			days += leap[j];
		}

		days += day;
	}

	return days;
}

void main() {
	int year, month, day,days;
	printf("please input year,month,day:\n");
	scanf("%d%d%d", &year, &month, &day);

	days = totalDays(year, month, day);

	//余数为1、2、3打渔否则晒网
	if (days % 5 > 0 && days % 5 < 4) printf("%d年%d月%d日打渔\n",year, month, day);
	else printf("%d年%d月%d日晒网\n", year, month, day);
}

####################################
     ##########判别素数#########
####################################
----问题描述
----素数又称质数。所谓素数是指除了 1 和它本身以外，不能被任何整数整除的数。
----输入一个整数判断它是否是素数
----思路分析
----思路1)：因此判断一个整数m是否是素数，只需把 m 被 2 ~ m-1 之间的每一个整数去除，如果都不能被整除，那么 m 就是一个素数。
----思路2)：m 不必被 2 ~ m-1 之间的每一个整数去除，只需被 2 ~ 根号m 之间的每一个整数去除就可以了。
----如果 m 不能被 2 ~ 根号m  间任一整数整除，m 必定是素数。（循环次数更少，执行更快）
----
----思路一，最基础的方法----
----
int isPrime(int num) {
	int i = 2;
	while (i < num) {
		if (num%i == 0) return 0;
		i++;	
	}
	return 1;
}

void main() {
	int num,temp;
	printf("please input a integer:\n");
	scanf("%d", &num);
	temp = isPrime(num);
	if (temp) printf("%d是素数。\n", num);
	else printf("%d不是素数。\n", num);

}
----
----思路二，循环次数更少，更快----
----
int isPrime(int num) {
	int i = 2,temp;
	//sqrt需接收double类型参数，强行转换num的类型
	temp = (int)sqrt((double)num);
	while (i < temp) {
		if (num%i == 0) return 0;
		i++;	
	}
	return 1;
}