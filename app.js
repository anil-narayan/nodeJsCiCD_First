// Importing required modules
const express = require('express');

// Create an Express application
const app = express();

// Define a port number
const PORT = 3000;

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello World from Express.js!');
});

// Start the server and make it listen for connections on the specified port
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

