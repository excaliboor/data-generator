#include <iostream>


template <typename fType, typename... args>
void test (
           std::function<fType> function,
           int times,
           args const... parameters
           );


int randomBetween (int min, int max);
char mod10 (const std::string number);


int main (int argc, const char * argv[])
{
    // generate some lotto numbers
    test <int (int, int)> ( randomBetween, 6, 1, 49 );

    // generate check digit for my neighbour's CreditCard number
    std::string ccn = "543778054231787";
    test <char (std::string)> ( mod10, 1, ccn );
    
    return 0;
}


int randomBetween (int min, int max)
{
    static bool set = false;
    if (!set)
    {
        srand( (unsigned int) time( NULL ) );
        rand(); rand(); // the first two values after srand(time) aren't that random...
        set = true;
    }

    return (rand()%(max-min+1)) + min;
}

char mod10 (const std::string n)
{
    if (n.length() == 0)
        return 'X';

    int checksum = 0;
    short temp;
    int i = 0;
    auto number = std::string(n);
    for (auto it = number.rbegin(); it != number.rend(); ++it, ++i)
    {
        temp = *it - '0';
        if (i%2 == 0)
        {
            temp <<= 1;
            if (10 <= temp)
                temp -= 9;
        }

        checksum += temp;
    }

    return (checksum*9)%10+'0';
}

template <typename fType, typename ... args>
void test (
           std::function<fType> function,
           int times,
           args const... parameters
           )
{
    if (!times)
        times = 10000;

    for (auto i = 0; i < times; ++i)
    {
        std::cout <<"Test run "<< (i+1) <<": "
            << function( parameters... )
            << std::endl;
    }
}
