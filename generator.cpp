#include <iostream>

typedef void* (*FUNC_PTR)(...);


template <typename returnType, typename... args>
void test (
           FUNC_PTR function,
           int times,
           args const... parameters
           );


int randomBetween (int min, int max);
char mod10 (char* number);

int main (int argc, const char * argv[])
{
    // generate some lotto numbers
    test<intptr_t> ( (FUNC_PTR) randomBetween, 6, 1, 49 );
    // generate check digit for my neighbour's CreditCard number
    test<intptr_t> ( (FUNC_PTR) mod10, 1, "128471924169832" );

    return 0;
}

int randomBetween (int min, int max)
{
    static bool set = false;
    if (!set)
    {
        srand( (unsigned int) time( NULL ) );
        set = true;
    }
    
    return (rand()%(max-min+1)) + min;
}

char mod10 (char* n)
{
    if (strlen(n) == 0)
        return -1;

    int checksum = 0;
    short temp;
    int i = 0;
    auto number = std::string(n);
    for (auto it = number.rbegin(); it != number.rend(); ++it, ++i)
    {
        temp = *it;
        if (temp)
            temp -= '0';

        if (i%2 == 0)
        {
            temp <<= 1;
            if (10 <= temp)
                temp -= 9;
        }

        checksum += temp;
    }

    return (checksum*9)%10;
}

template <typename returnType, typename ... args>
void test (
           FUNC_PTR function,
           int times,
           args const... parameters
           )
{
    if (!times)
        times = 10000;

    for (auto i = 0; i < times; ++i)
    {
        std::cout <<"Test run "<< (i+1) <<": "
            << (returnType) function( parameters... )
            << std::endl;
    }
}
