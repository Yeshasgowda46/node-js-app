const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Hello Yashas - PR Learning pr learning");
});

app.listen(3000, () => {
  console.log('Server running');
});