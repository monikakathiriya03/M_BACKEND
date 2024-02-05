#include<stdio.h>
#include<stdlib.h>
#define n 10

int Bubble_sort(int a[])
{
    for (int  i = 0; i < n; i++)
    {
        for (int j = 0; j < n-1; j++)
        {
            if (a[j] > a[j+1])
            {
            int t = a[j];
            a[j] = a[j+1];
             a[j+1] = t;
            }
        }
    }
    
}

int main()
{
    int a[n] , i;
     for(i = 0; i < n; i++)
     {
        a[i] = rand()%100;
     }

     for(i = 0; i < n; i++)
     {
        printf("%d, ",a[i]);
     }

     Bubble_sort(a);

     printf("\n SHORTED ARRAY IS : ");
     for(i = 0; i < n; i++)
     {
        printf("%d ,",a[i]);
     }
}