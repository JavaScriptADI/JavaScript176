let isWall = false;

while (!isWall) { // code block
    console.log("Moving forward!");
    isWall = prompt('Is there wall in front of me?').toLowerCase() === "yes";
}
console.log("End of movement!");