// global scope
function sub(a, b) {
    // local scope
    // a, b shadows global a, b
    const h = 8;
    console.log(h); // h only exsists in this scope
    console.log(x);
    x += 1;
    return a - b;
}

const a = 7;
const b = 8;
let x = 0;
// positional arguments
console.log(sub(b, a));
console.log(sub(a, b));
console.log(sub(5, 1));

console.log(`Sub was called ${x} times`);

// console.log(h);