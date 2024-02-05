#include <stdio.h>
#define n 5
int a[n], top = -1, ch, data;

int End_insert()
{

    printf("Enter Value Is Insert :- \n");
    scanf("%d", &data);
    if (top >= n - 1)
    {
        printf("==> || Stack Is Full || <== \n");
    }
    else
    {
        top++;
        a[top] = data;
    }
}
int End_delete()
{
    if (top < 0)
    {
        printf("==> || Arry Position Over || <== \n");
    }
    else
    {
        top--;
    }
}

int frist_insert()
{

    printf("Enter Value Is Insert :- \n");
    scanf("%d", &data);
    if (top >= n - 1)
    {
        printf("==> || Stack Is Full || <== \n");
    }
    else if (top < 0)
    {
        top++;
        a[top] = data;
    }
    else
    {
        top++;
        for (int i = top; i >= 0; i--)
        {
            a[i] = a[i - 1];
        }
        a[0] = data;
    }
}
int frist_delete()
{
    if (top < 0)
    {
        printf("==> || Arry Position Over || <== \n");
    }
    else if (top < 0)
    {
        top--;
        a[top] = data;
    }
    else

    {
        for (int i = 0; i <= top; i++)
        {
            a[i] = a[i + 1];
        }
        top--;
    }
}

int display()
{
    for (int i = 0; i <= top; i++)
    {
        printf("%d\t", a[i]);
    }
}

int main()
{
    do
    {
        printf("\n ===> || Menu || <===\n");
        printf("press 1 for ===> End_Insert Array \n");
        printf("press 2 for ===> End_Delete Array \n");
        printf("press 3 for ===> Frist_Insert Array \n");
        printf("press 4 for ===> Frist_Delete Array \n");
        printf("press 5 for ===> Display Array \n");
        printf("press 0 for ===> Exit \n");
        printf("==> || Enter Your Choice ===> 1 2 3 4 5 0 || <== \n");
        scanf("%d", &ch);

        switch (ch)
        {
        case 1:
            End_insert();
            break;

        case 2:
            End_delete();
            break;

        case 3:
            frist_insert();
            break;

        case 4:
            frist_delete();
            break;

        case 5:
            display();
            break;

        case 0:
            printf("Exit\n");
            return 0;

        default:
            printf("Plese Enter The Valide Choice ===>. 1  2  3 4 5 0 ");
            break;
        }

    } while (ch != 0);
}