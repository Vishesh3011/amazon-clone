const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    'sk_test_51LTVdaSBbkwoYVA6AnggC8KXmTgIIlwEfXiVtQj3NKGkRo0va5T68Eu0ATCBtoiKVLRbbzFPigisg15zwqjaPtpw00r7PWLUw1'
);

// App configuration
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API Routes
app.get('/', (request, response) => response.status(200).send('hello world'));

// Error was due to a period
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received and the amount is ', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // sub-units of the currency
        currency: "inr"
    });

    // OKE - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

//Listen 
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-fac7c/us-central1/api

