// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const stripe = require('stripe')('sk_test_51NqhZ1SIQx6nf6ZyNhZA3VRpYw6I2q4Q4hxL2DP16mz0buOyWubXTFRKaIcOFjGOt0mjZlQ6wUzwSWEk3GKVwLog00l9FDr02c');
// const sendgrid = require('@sendgrid/mail');
// const path = require('path');

// // Configure SendGrid with your API 
// sendgrid.setApiKey('YOUR_SENDGRID_API_KEY');

// // Serve static files (HTML, CSS, and JS)
// app.use(express.static(path.join(__dirname, 'public')));

// // Parse form data
// app.use(bodyParser.urlencoded({ extended: true }));

// // Handle payment form submission
// app.post('/processPayment', async (req, res) => {
//     const { amount, paymentType } = req.body;

//     try {
//         // Handle payment processing (e.g., with Stripe)
//         // Create a payment intent, charge the user, etc.

//         // Send an email with the invoice
//         const msg = {
//             to: 'sakshiraj708@gmail.com', // Recipient's email
//             from: 'sender@example.com',   // Your email
//             subject: 'Donation Invoice',
//             text: `Thank you for your donation of $${amount}.`,
//         };

//         await sendgrid.send(msg);

//         res.send('Payment successful! An invoice has been sent to your email.');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Payment failed');
//     }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

const express = require('express');
const stripe = require('stripe')('sk_test_51NqhZ1SIQx6nf6ZyNhZA3VRpYw6I2q4Q4hxL2DP16mz0buOyWubXTFRKaIcOFjGOt0mjZlQ6wUzwSWEk3GKVwLog00l9FDr02c');

const app = express();
app.use(express.static('public'));
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
    const { amount } = req.body;

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card', 'paypal'],
        line_items: [{
            price_data: {
                currency: 'usd',
                product_data: {
                    name: 'Donation',
                },
                unit_amount: amount,
            },
            quantity: 1,
        }],
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel',
    });

    res.json({ id: session.id });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
