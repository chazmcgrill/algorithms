function fibonacci(n) {
    if (n <= 1) return 0;
    if (n === 2) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(1));
console.log(fibonacci(5));
console.log(fibonacci(10));


const fibonacciSeries = Array.apply(null, {length: 20}).map((n, i) => fibonacci(i + 1));
console.log(fibonacciSeries);