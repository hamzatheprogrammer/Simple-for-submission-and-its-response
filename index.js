// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize Express app
const app = express();

// Use CORS to allow requests from your frontend domain
app.use(cors({ origin: 'https://your-frontend-domain.com' }));

// Body parser middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// POST endpoint to handle form submissions
app.post('/submitForm', (req, res) => {
    const formData = req.body;
    // Process formData (e.g., save to database, send emails, etc.)
    console.log('Form data received:', formData);
    res.status(200).json({ message: 'Form submission successful!', formData });
});

app.listen(3000);
