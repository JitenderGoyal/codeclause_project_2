const express = require('express');
const app = express();
const port = 3000;

// Serve static files from 'public' directory
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Resume app listening at http://localhost:${port}`);
});
