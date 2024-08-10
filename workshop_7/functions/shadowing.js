// Example 1
let globalVar = "Global Variable";

function exampleFunction() {
    let globalVar = "Local Var";
    let localVar = "Local Variable";
    console.log(globalVar);
    console.log(localVar); // Should log: "Local Variable"
}

exampleFunction();

console.log(globalVar); // Should log: "Global Variable"


// Example 2
function outerFunction() {
    let a = 5;
    console.log("Outer function", a);

    function innerFunction() {
        let a = 6;
        console.log("Inner function", a);
    }
    console.log(a);
    innerFunction(); // Should log: "Inner function"
}

outerFunction();

// Example 3
function createCounter() {
    let count = 0;

    function fn() {
        let count = 10; // Shadows outer count
        console.log(count); // Should log: 10
        count++;
    };

    fn();
}

createCounter();

