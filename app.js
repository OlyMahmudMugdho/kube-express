// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`Hello World! Environment variable: ${process.env.MY_SECRET}`);
});

// Add health check endpoint
app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
