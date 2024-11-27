const express = require('express');
const mongoose = require('mongoose');

const app = express();

const port = 3000;

mongoose.connect('mongodb+srv://depiReactUser:depiReactPassword@cluster0.7c7oahl.mongodb.net/')
.then(() => {
    console.log(`Connected to Mongodb`);
    app.listen(port, () => {
        console.log(`App is running on port ${port}`);
    });
}).catch(err => {
    console.log('Error connecting to MongoDB:', err);
});


app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname });
})

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });
})

app.get('/contact', (req, res) => {
    res.sendFile('./views/contact.html', { root: __dirname });
})

app.get('/products', (req, res) => {
    const products = [
        { name: 'Apple', price: 100 },
        { name: 'Banana', price: 50 },
        { name: 'Orange', price: 80 },
    ];
    res.send(products);
})

app.use((req, res) => {
    res.sendFile('./views/404.html', { root: __dirname });
    console.log('in middleaware');
})

