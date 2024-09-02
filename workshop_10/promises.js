const getData = new Promise((res, rej) => {
    // Produce
    setTimeout(
        () => {
            const num = Math.random() * 100;

            if (num < 50){
                rej(num);
            } else {
                res(num);
            }
        }, 
        1000
    );
});


// Consumer
getData
    .then(
        (data) => console.log('success', data),
        // (error) => console.log('error', error)
    )
    .catch((error) => console.log('error', error));
