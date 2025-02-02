const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Uncommon Error: Unexpected token in JSON response

//This error might occur if the server unexpectedly sends a JSON response that is not properly formatted. This can happen due to various reasons, such as errors in data processing or unexpected exceptions during the request handling.