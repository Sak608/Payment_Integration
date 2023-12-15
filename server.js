require('dotenv').config();


const express = require('express');
//const stripe = require('stripe')('sk_test_51NqhZ1SIQx6nf6ZyNhZA3VRpYw6I2q4Q4hxL2DP16mz0buOyWubXTFRKaIcOFjGOt0mjZlQ6wUzwSWEk3GKVwLog00l9FDr02c');
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

// Use stripeSecretKey in your application

const app = express();
const port = 3000;

// Your server code goes here

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
