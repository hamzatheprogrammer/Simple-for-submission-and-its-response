const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Example POST endpoint
app.post('/api/submitForm', (req, res) => {
    const formData = req.body;
    console.log('Form data received:', formData);
    res.status(200).json({ message: 'Form submission successful!' });
});

// Export the Express app
module.exports = app;
