/*************************************************************************
    > File Name: data2Json.c
    > Author: 柴诗雨
    > Mail: chaishiyu0421@163.com 
    > Created Time: 2016年05月13日 星期五 10时31分21秒
 ************************************************************************/

#include<stdio.h>
#include<string.h>
#include<stdlib.h>
#include<time.h>

int getRandom(){
	return rand()%100;
}

int main(){
	char key[50];
	int started=0;
	puts("[");
	srand(time(0));
	while(scanf("%s",key)==1){
		if(started){
			printf(",\n");
		}else{
			started=1;
		}
		int value=getRandom();
		printf("{\"key\":\"%s\",\"value\":%i}",key,value);
	}
	puts("\n]");
	return 0;
}
