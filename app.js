const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Endpoint to compute word length
app.post('/compute-length', (req, res) => {
  const { word } = req.body;

  if (!word) {
    return res.status(400).json({ error: 'Please provide a "word" in the request body.' });
  }

  const length = word.length;

  res.json({ length });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

