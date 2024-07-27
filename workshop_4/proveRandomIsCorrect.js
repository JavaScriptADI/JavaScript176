let randomNum;
let i = 0;

while (randomNum !== 100) {
    randomNum = parseInt(Math.random() * 101);
    i++;
    console.log(randomNum);
}

console.log(randomNum, i);