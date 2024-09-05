const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
console.log(productId);


document.addEventListener('DOMContentLoaded', async () => {
    const productImageTagWrapper = document.querySelector('#product-image');
    const placeholder = productImageTagWrapper.querySelector('.placeholder-wave');

    try {
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        const product = await response.json();

        console.log(productImageTagWrapper);
        console.log(product);
        const img = document.createElement('img');
        // throw Error('Something Gone wrong');

        img.src = product.thumbnail;
        img.addEventListener('load', () => {
            placeholder.remove();
        })
        productImageTagWrapper.appendChild(img);
    } catch (e) {
        console.log(e);
        productImageTagWrapper.classList.add('text-danger');
        productImageTagWrapper.innerText = e.message;
        placeholder.remove();
    } finally {
        console.log('Fetching complete');
    }
});
