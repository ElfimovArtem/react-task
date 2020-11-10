const express = require('express');
const path = require('path');
const backend = express();
const PORT = 3000;
const CORS = require('cors');

backend.use(CORS());
backend.use('/static', express.static(path.join(__dirname, 'backend-data')));

backend.listen(PORT, (err) => {
  if (err) {
    console.log('something bad happened', err);
  }
  console.log(`server is listening on ${PORT}`);
});