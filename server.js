// Load environment variables based on the NODE_ENV
const dotenv = require('dotenv');

// Load .env.development for development or .env.production for production
if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: '.env.development' });
} else {
  dotenv.config({ path: '.env.production' });
}

// Log the environment
console.log('NODE_ENV:', process.env.NODE_ENV);  // Log NODE_ENV to check if it's correct

const express = require('express');
const app = express();

// Use environment variables
const PORT = process.env.PORT || 3000;
const MESSAGE = process.env.MESSAGE || "Hello World! 14:20 PM";

// Basic route
app.get('/', (req, res) => {
    res.send(MESSAGE);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
