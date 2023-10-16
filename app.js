const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());
// Serve static files (HTML, CSS, etc.)
app.use(express.static('public'));

// Default route for the root URL
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

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

