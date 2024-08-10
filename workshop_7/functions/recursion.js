function f(x) {
    if (x === 0) {
        return x;
    }
    return x - f(x - 1);
}

function fib(n) {
    if (n === 0 || n === 1){
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

function bar() {
    console.log('bar');
}

function foo() {
    console.log('foo');
    bar();

    console.log('foo end');
}

console.log(f(3)); // 3 - 2 - 1 - 0 = 
// f (3)
//  f


// foo();


console.log(fib(4));
// fib(3) - fib(2)
// fib(2) - fib(1)
// fib(1) - fib(0)
// fib(1) - fib(0)

// Non-recusive fibbonacci

let x = 0;
let y = 1;
let temp;
let n = 20;

for (let i = 0; i <= n; i++) {
    console.log(x);
    temp = x + y;
    x = y;
    y = temp;
}