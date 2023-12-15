/*document.getElementById('donateButton').addEventListener('click', function() {
    window.location.href = 'payment.html';
});

document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Handle payment processing here (e.g., with Stripe API).
    // Generate an invoice, send an email, and confirm payment.

    alert('Payment successful! An invoice has been sent to your email.');
    window.location.href = 'index.html'; // Redirect back to homepage
});*/

// document.addEventListener('DOMContentLoaded', function () {
//     var stripe = Stripe('pk_test_51NqhZ1SIQx6nf6ZyAqlLtcXUxlnbxk05xp7dWwI98wNjzkNsrxBZoHvwAuoU0IcVrdJRoFuAnJDKfO84AoKQGKeO00sstdCHjy');

//     var donateButton = document.getElementById('donate-button');

//     donateButton.addEventListener('click', function () {
//         // This is a placeholder amount for donation, you can modify it as needed
//         var amount = 1000;

//         // Call the payment gateway's API to create a payment session
//         fetch('/create-checkout-session', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 amount: amount,
//             })
//         })
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (session) {
//             // Redirect the user to the payment gateway's checkout page
//             return stripe.redirectToCheckout({ sessionId: session.id });
//         })
//         .then(function (result) {
//             if (result.error) {
//                 alert(result.error.message);
//             }
//         })
//         .catch(function (error) {
//             console.error('Error:', error);
//         });
//     });
// });


document.addEventListener('DOMContentLoaded', function () {
    var donateButton = document.getElementById('donate-button');

    donateButton.addEventListener('click', function () {
        var amount = 1000; // Placeholder amount for donation

        fetch('/create-checkout-session', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount: amount,
            })
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (session) {
            // Redirect the user to the payment gateway's checkout page
            return stripe.redirectToCheckout({ sessionId: session.id });
        })
        .then(function (result) {
            if (result.error) {
                alert(result.error.message);
            }
        })
        .catch(function (error) {
            console.error('Error:', error);
        });
    });
});
