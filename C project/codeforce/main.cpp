#include <iostream>
#include <queue>
#include <string>
#include <vector>
#include <cmath>
#include <algorithm>
#include <queue>
#include <stack>
#include <fstream>
#include <string.h>
#include <map>

using namespace std;

#define mod 10000009ll
#define fori(n) for(ll i= 0; i < n; i++)
#define forj(m) for(ll j= 0; j < n; j++)
#define in(n) scanf("%I64d", &n)
#define out(n) printf("%I64d", n)
#define outS(s) printf("%s", s)
#define setA(a,n) for(ll i= 0; i < sizeof(a); i++) a[i]= n;

typedef long long ll;
typedef priority_queue<ll> pqmax;
typedef priority_queue<ll, vector<ll>, greater<ll> > pqmin;


ll t, m, sp, junger, mid, top, bot, x, y;
ll n= 0, k= 0;
ll test;

string s1, s2;

int dp[100][1<<10][10];

int main()
{
}
