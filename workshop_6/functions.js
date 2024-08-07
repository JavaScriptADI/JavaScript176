const x = 7;
const y = 9;

// functon definition
function greet() {
    // funtion body; code block
    console.log('Hello');
}

function sumUp(start, end) { // n
    let s = 0;

    for (let i = start; i < end; i++) {
        s += i;
    }
    return s;
}

function sum(a) {
    return ((a * (a + 1)) / 2);
}

function sumRange(a, b) {
    return sum(b - 1) - sum(a - 1); // sum(51) - sum(50)
}

function add(a, b) {
    return a + b + 1;
}

function move() {
    console.log('Moving forward');
}
// greet(); // function call

console.log(add(x, y));
console.log(add(x, y));
console.log(add(x, y));
console.log(add(x, y));
console.log(add(x, y));
console.log(add(x, y));
console.log(add(x, y));


const a = 0; 
const b = 10;

console.log(sumUp(a, b));
console.log(sumRange(0, 10));
console.log(sumUp(30, 45));
console.log(sumRange(30, 45));

console.log(sumUp(50, 52));
console.log(sumRange(50, 52));
console.log(sumRange(0, 3));

// console.log(greet());


