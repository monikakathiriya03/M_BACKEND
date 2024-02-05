// 50 20 30 40 10
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
    
    for (int i = 0; i < n; i++) 
    {
        if(i==0)
        {
            v=a[i];
            a[i]=a[n-1];
            a[n-1]=v;
        }
        
    }

    
    printf("\n--> || Chenge of Element Number || <-- \n");
    for (int i = 0; i < n; i++)
    {   
        
        printf("%d ", a[i]);
    }
    

    return 0;
}