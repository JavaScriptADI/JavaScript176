const productListTag = document.querySelector('#product-list');
let products = [];
let cart = JSON.parse(sessionStorage.getItem('cart'));
let theme = localStorage.getItem('theme') || 'light';
document.body.classList.add(theme);
console.log(document.cookie);
let now = new Date();
now.setMinutes(39);
now.setSeconds(1);
document.cookie = `test=7; expires=${now.toUTCString()}`;
// console.log(document.cookie);

// if (!theme) {
//     theme = 'light';
// }
const themeBtn = document.querySelector('#theme-btn');



themeBtn.addEventListener('click', () => {
    document.body.classList.remove(theme);
    if (theme === 'dark') {
        theme = 'light';
    } else {
        theme = 'dark';
    }
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
})

console.log('Cart', cart);

fetch('https://dummyjson.com/products')
    .then((response) => response.json())
    .then((data) => {
        console.log('Products Loaded');
        // console.log(data.products);
        // products = products.concat(data.products);
        products = [
            ...products, // spread
            ...data.products,
        ];
        products.forEach(product => {
            const div = document.createElement('div');
            // div.innerText = product.title;
            div.innerHTML = (`
                <h4>${product.title}</h4>
                <img src=${product.thumbnail} alt=${product.title} />    
            `)
            productListTag.appendChild(div);
        });
    })
    .catch((error) => {
        console.log(error);
        document.body.innerText = "Something terrible has happened!";
    });


if (cart === null) {
    console.log('We need to get cart from API');
    fetch('https://dummyjson.com/carts/1')
        .then((response) => response.json())
        .then((data) => {
            console.log('Cart Loaded');
            sessionStorage.setItem('cart', JSON.stringify(data));

            console.log(data);
        });
}
