const express = require('express');

const app = express();
const port = 3000;

// Function to generate a random number within a specified range
const generateRandomNumber = (start, end) => {
  if (start !== undefined && end !== undefined) {
    start = parseInt(start);
    end = parseInt(end);
    return Math.floor(Math.random() * (end - start + 1)) + start;
  } else {
    return Math.floor(Math.random() * 100); // Default range if parameters are not provided
  }
};

// Middleware to add custom headers
app.use((req, res, next) => {
  res.setHeader('X-Powered-By', 'Express');
  res.setHeader('X-Node-Version', process.version);
  next();
});

// Endpoint to generate a random number
app.get('/random', (req, res) => {
  const { start, end } = req.query;

  const randomNumber = generateRandomNumber(start, end);

  res.json({ randomNumber });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

