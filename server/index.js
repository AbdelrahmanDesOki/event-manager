const express = require('express');
const app = express();
require('dotenv').config()


app.request(express.json())

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const storedItems = new Map([
    [1, {priceInCents: 10000, name:"bag"}]
    [2, {priceInCents: 20000, name:"clothes"}]
])

app.get('/api', (req, res) => {
    res.send("Hello from server");
});

app.listen(8000);