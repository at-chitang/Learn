#include <iostream>

using namespace std;

long a[100], m= 0, k= 0, i= 0;
string T= "aaabaaaaaabaaaaaaab";
string S= "aab";

void xuatA()
{
    for(long j= 0; j < m; j++)  cout << a[j] << " ";
    cout << endl;
}

int main()
{
//    cin >> S;
    a[0]= 0;
    m= S.length();
    cout << S << endl;
    for(long i= 1; i < m; i++)
    {
        k= a[i-1];
        while( k > 0 && S[k] != S[i] )
            k= a[k-1];
        if( S[k] != S[i] )
            a[i]= 0;
        else
            a[i]= k+1;
        xuatA();
    }
}
