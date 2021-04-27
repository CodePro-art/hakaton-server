require('./db/mongoDB');
const express = require('express');
const cors = require('cors');
const route = require('./route/route');
const app = express();
const endpoint = require('./paths/path');
// ! use's

app.use(cors());
app.use(express.json());
app.use(route);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`we are live on ${port}`);
});
