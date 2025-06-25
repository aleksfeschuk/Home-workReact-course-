function getNthFibonacci(n, memo = {}) {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    if (memo[n]) return memo[n];

    memo[n] = getNthFibonacci(n - 1, memo) + getNthFibonacci(n - 2, memo);
    return memo[n];
}