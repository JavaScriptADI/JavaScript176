let products = [];


export async function getProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        return data.products;
    } catch (e) {
        console.log('Something Hapened');
    }
    return [];

    // fetch('https://dummyjson.com/products')
    //     .then(
    //         response => response.json(),
    //         // error => console.log('Error during request')
    //     )
    //     .then(
    //         data => {
    //             console.log(data);
    //             products = products.concat(data.products);
    //             // products = [
    //             //     ...products,
    //             //     ...data.products,
    //             // ]
    //         }
    //         // error => console.log('Error during parsing')
    //     )
    //     .catch(error => console.log('something Happened'));
}

// products = getProducts()
//     .then(data => products = data);

// console.log(products);

export default getProducts;