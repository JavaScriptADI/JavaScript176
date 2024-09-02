import getProducts, { getProducts as gp } from "./fetchTest.js";

// const getProducts = () => null;

gp()
    .then(products => console.log(`Wow I received products from another js file`, products));