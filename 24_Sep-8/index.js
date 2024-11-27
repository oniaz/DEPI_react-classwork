const ProductsManager = require("./product-manager");

const manager = new ProductsManager();

async function getAllProducts() {
    try {
        const products = await manager.getAll()
        console.log(products);
    } catch (e) {
        console.error(e);
    } finally {
        console.log('continued from getAllProducts... ');
    }

}

async function getOneProduct() {
    try {
        const product = await manager.getOne('fan')
        console.log(product);
    } catch (e) {
        console.error(e);
    } finally {
        console.log('continued from getOneProduct... ');
    }

}

getAllProducts();
getOneProduct();