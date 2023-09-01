const express = require("express");
const helmet = require('helmet');
const app = express();
const PORT = process.env.PORT || 3030;

// your code

app.listen(PORT, () => {
  console.log(`👨‍💻 FCC InfoSec Project by NaFeuer started on port ${PORT}`);
});