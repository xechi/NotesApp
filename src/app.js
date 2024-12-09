const express = require('express');
const dotenv = require('dotenv')
const noteRoute = require('./routes/noteRoute');
const db = require('./config/db')

dotenv.config();

const app = express();
const PORT = process.env.APP_PORT;

app.use(express.json());
app.use(noteRoute);

app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
});