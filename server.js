const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Sample E-Commerce Products Data
const products = [
    { id: 1, name: "Premium T-Shirt", price: 25.99, stock: 50 },
    { id: 2, name: "Wireless Headphones", price: 89.99, stock: 15 },
    { id: 3, name: "Smart Watch", price: 149.99, stock: 8 }
];

// Home Page Route
app.get('/', (req, res) => {
    res.send('<h1>Welcome to E-Commerce API Hosting Environment V1</h1>');
});

// Get All Products API
app.get('/api/products', (req, res) => {
    res.json(products);
});

app.listen(PORT, () => {
    console.log(`E-commerce backend running successfully on port ${PORT}`);
});