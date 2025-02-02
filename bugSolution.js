const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  try {
    //Simulate data processing that might throw an error
    const data = { message: 'Hello World!' };
    //In real application, replace with your actual data processing
    if (/*some condition causing error*/) {
      throw new Error('Data processing failed');
    }
    res.json(data);
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});