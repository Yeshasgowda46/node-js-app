const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Yashas the change is fixed');
});

app.listen(3000, () => {
  console.log('Server running');
});