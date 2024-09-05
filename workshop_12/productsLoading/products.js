const productList = document.querySelector('#product-list');
let loading = false;
let productCount = 0;
let total = null;
let lastDiv = null;

const options = {
    root: null,
    rootMargin: '1px',
    threshold: 0,
}
const observer = new IntersectionObserver(loadProducts, options);

function createProductDiv(product) {
    const div = document.createElement('div');
    div.classList.add('col');
    const card = document.createElement('div');
    card.style.height = '100%';
    card.classList.add('card');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const img = document.createElement('img');
    const placeholder = document.createElement('div');
    placeholder.classList.add('placeholder-glow');
    placeholder.innerHTML = (`
        <div class="placeholder" style="height: 100%; width: 100%"></div>
    `);

    placeholder.style.width = '100%';
    placeholder.style.height = '200px';

    img.src = product.thumbnail;
    img.height = '200';
    img.addEventListener('load', () => {
        card.replaceChild(img, placeholder);
    })

    cardBody.innerHTML = (`
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">${product.description}</p>
        <a href="#" class="btn btn-primary">Details</a>
    `);
    cardBody.style = 'display: flex;justify-content: space-between;flex-direction: column;';
    card.appendChild(placeholder);
    card.appendChild(cardBody);
    div.appendChild(card);

    return div;
}


async function loadProducts() {
    if (loading || total !== null && total <= productCount) {
        console.log('Cannot load more!');
        return;
    }
    console.log('Load More Products');
    try {
        loading = true;
        const response = await fetch(`https://dummyjson.com/products?skip=${productCount}`);
        const data = await response.json();
        console.log(data);
        if (total === null) {
            total = data.total;
        }
        if (lastDiv) {
            observer.unobserve(lastDiv);
        }

        data.products.forEach(product => {
            lastDiv = createProductDiv(product)
            productList.appendChild(lastDiv);
        });
        productCount += data.products.length;
        observer.observe(lastDiv);
    } catch (e) {
        document.body.innerText = e.message;
    } finally {
        setTimeout(() => {
            loading = false;
        }, 100);
    }
}

document.addEventListener('DOMContentLoaded', loadProducts);


// observer.observe(document.querySelector('#load-more'));