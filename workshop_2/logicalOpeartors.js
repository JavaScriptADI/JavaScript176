let age = 7; // prompt!

// AND operator
// both operands should be true to get true
let isTeen = 13 <= age && age <= 19;
// let isTeen = 12 < age && age < 20;

console.log(`isTenn = ${isTeen}`);

// We promised a friend to go to moives and eat popcorn
let wentToMovie = false;
let atePopcorn = false;
console.log(`wentToMovie = ${wentToMovie}; atePopcorn = ${atePopcorn}`);
let didWeLie = !(wentToMovie && atePopcorn);

// we should not go anywhere and eat thing
let didWeLieLasha = !wentToMovie && !atePopcorn;
let didWeLieLashaCorrect = !wentToMovie || !atePopcorn;



console.log(`Did we lie? ${didWeLie} ${didWeLieLashaCorrect}`);
console.log(didWeLie, didWeLieLasha, didWeLieLashaCorrect);
console.log(didWeLie == didWeLieLasha);

// We promised another friend to go to park or eat icecream
let wentToPark = false;
let ateIcecream = false;
// || - OR 
// ! - NOT - (reverses boolean) true -> false; false -> true
didWeLie = !(wentToPark || ateIcecream);
console.log(`wentToPark = ${wentToPark}; ateIcecream = ${ateIcecream}`);
console.log(`Did we lie? ${didWeLie}`);
