/*
1. Write a function that accesses and modifies a global variable.
2. Write a function that uses a locally scoped variable.
3. Write code that demonstrates block scope using let and const.
4. Compare function scope with block scope.
    - Define a function named functionScopeExample.
    - Inside the function, define a variable using var, and another using let or const inside an if block.
    - Log the variables inside the block and outside the block, but still inside the function.
5. Write functions that demonstrate nested scopes
    - Define a global variable named outerVar.
    - Define a function named outerFunction that defines a local variable innerVar and logs both outerVar and innerVar.
    - Inside outerFunction, define another function named innerFunction that logs both outerVar and innerVar.
    - Call outerFunction and innerFunction to demonstrate access to variables in nested scopes.
*/

let x = 0;

function fn() {
    x += 1;
}

fn();
console.log(x);

function fc(y) {
    let x = 7;
    console.log(x, y);
}
fc(6);

function fm() {
    let x = 7;
    if (true) {
        let x = 29;
        {
            let x = 9;
            console.log(x); // 9
        }
        console.log(x); // 29
    }
    console.log(x); // 7
}
fm();