const seconds = new Date().getTime() / 1000;

setTimeout(() => {
    document.body.style.background = 'red';
    console.log(`Ran after ${new Date().getTime() / 1000 - seconds} seconds`);
}, 1000);


while (new Date().getTime() / 1000 - seconds < 2) {
    console.log('hi');
}

