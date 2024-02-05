//20 30 40 50 10
#include <stdio.h>

int main() {
    int a[100],n,v;
    int b = a[0];

    printf("Enter the Array Size :- \n");
    scanf("%d",&n);

    printf("--> || Enter Array Value || <-- \n");
    for ( int i = 0; i < n; i++)
    {
        printf("Enter The Value %d = -> ",i);
        scanf("%d",&a[i]);
    }
    v=a[0];
    for (int i = 0; i < n; i++) 
    {
        a[i] = a[i+1];
    }

    a[n-1]=v;
    printf("\n--> || Chenge of Element Number || <-- \n");
    for (int i = 0; i < n; i++)
    {   
        printf("%d ", a[i]);
    }
     return 0;
}