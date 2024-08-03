
let room = '';
const x = parseInt((Math.random() * 7) + 1); // (Math.random() * (b - a)) + a
const y = parseInt((Math.random() * 7) + 1); // (Math.random() * (b - a)) + a
// const x = 8;
// const y = 8;

// console.log(x, y);


for (let i = 0; i < 10; i++) {
    if (i === 0 || i === 9) {
        room += '#'.repeat(10) + '\n';
        continue;
    }
    let row = '';
    for (let j = 0; j < 10; j++) {
        if (j === 0 || j === 9) {
            row += '#';
            continue;
        }
        if (j === x && i === y){
            row += '?';
        } else {
            row += ' ';
        }
    }
    row += '\n';
    room += row;
}


console.log(room);
