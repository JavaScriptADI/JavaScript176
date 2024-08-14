function add(a, b) {
    return a + b;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, 5, 5];

const evens = [];
const numbersDivisibleBy3 = [];

for (const num of arr) {
    if (num % 2 === 0){
        evens.push(num);
    }
}

for (const num of arr) {
    if (num % 3 === 0){
        numbersDivisibleBy3.push(num);
    }
}


function filter(arr, callbackFn) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const elem = arr[i];
        if (callbackFn(elem, i, arr)) {
            newArr.push(elem);
        }
    }
    return newArr;
}

console.log(evens);
console.log(numbersDivisibleBy3);

console.log(arr.filter(function(num) { return num % 2 === 0; }));
// Arrow function
console.log(arr.filter((num) => num % 2 === 0));
console.log(arr.filter(num => num % 2 === 0));
console.log('arr.filter((num, i) => i % 2 === 0)', arr.filter((num, i) => i % 2 === 0));
console.log('arr.filter((num, i) => { return i % 2 === 0; })', arr.filter((num, i) => {
    return i % 2 === 0;
}));



console.log(
    filter(arr, function(num) { return num % 2 === 0; })
);
function isFive(num) { 
    return num === 5; 
}

console.log(
    filter(arr, isFive)
);

console.log(add(6, 7));
console.log(6 + 7);

const fn = (x) => {
    return x ** 2;
};

console.log(fn(5));
