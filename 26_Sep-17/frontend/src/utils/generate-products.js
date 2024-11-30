import { faker } from '@faker-js/faker'

function generateProducts(count) {
    const products = [];

    for (let i = 0; i < count; i++) {
        const product = {
            _id: faker.database.mongodbObjectId(),
            title: faker.commerce.productName(),
            price: faker.commerce.price(),
            description: faker.commerce.productDescription(),
            image: faker.image.urlLoremFlickr({
                height: 400,
                width: 600,
                category: "cars",
            }),
            discount: faker.number.int({ min: 0, max: 100 }),
        };
        products.push(product);
    }
    return products;
}

export default generateProducts;
