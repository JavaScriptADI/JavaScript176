let age = 23;  // Number(prompt("What's your age?"));
let weather = "sunny";

if (age < 18) { // code block 
    console.log("You are minor!");
} else {
    console.log("You are an adult!");
}

// console.log(age % 2);
// console.log(!(age % 2));

// if (!(age % 2)) {
if (age % 2 === 0) {
    console.log(`${age} is even!`);
}

if (weather === "rainy") {
    console.log("Take umbrella");
    console.log("Take rain coat");
} else if (weather === "sunny") {
    console.log("Take sunglasses");
} else if (weather === "windy") {
    console.log("Take warm clothes");
} else {
    console.log("This kind of weather is not supported");
}