require('./db/mongoDB');
const express = require('express');
const cors = require('cors');
const router = require('./route/route');

const app = express();

// ! use's
app.use(router);
app.use(express.json());
app.use(cors());
app.use(router);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`we are live on ${port}`);
});