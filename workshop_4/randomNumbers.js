let x = -Infinity;
let randomNum;
let is37found = false;
let is100found = false;
for (let i = 0; i < 1000000; i++) {
    randomNum = parseInt(Math.random() * 101);
    
    if (randomNum === 37) {
        is37found = true;
        console.log("Found the number!");
    } else if (randomNum === 100) {
        is100found = true;
    }
    if (is37found && is100found) {
        console.log("both found at", i);
        break;
    }

    if (randomNum > x) {
        x = randomNum;
    }
}
console.log(x);