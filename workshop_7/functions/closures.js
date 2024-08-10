// Example 1
function outerFunction(outerVar) {
    return function innerFunction(innerVar) {
        return outerVar + innerVar;
    };
}

const closureFunction = outerFunction('Hello, ');
console.log(closureFunction('World!')); // Logs: Hello, World!


// Example 2
function multiplier(factor) {
    return function(x) { // annonymus function
        return x * factor;
    };
}

const double = multiplier(2);
const triple = multiplier(3);
const fourTimes = multiplier(4);

console.log(double(5)); // Logs: 10
console.log(triple(5)); // Logs: 15
console.log(fourTimes(7));
