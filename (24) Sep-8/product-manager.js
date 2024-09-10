const fs = require('fs').promises;
const { get } = require('http');
const path = require('path');
const { title } = require('process');

const filePath = path.join(__dirname, "products.json");

class ProductsManager {
    constructor() {
        this.products = [];
    }

    async loadProducts() {
        const products = await fs.readFile(filePath, "utf-8");
        this.products = JSON.parse(products);
    }

    async saveProducts() {
        await fs.writeFile(filePath, JSON.stringify(this.products));
    }

    async getAll() {
        await this.loadProducts();
        return this.products;
    }

    async getOne(title) {
        await this.loadProducts();
        const idx = this.products.findIndex((item) => {
            return item.title === title;
        })
        return this.products[idx];
    }
}

module.exports = ProductsManager;