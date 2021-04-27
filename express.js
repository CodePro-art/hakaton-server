const express = require('express');
// const scrapeFunc = require('../scraping/scraping');

const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3001;

app.post(`/url`, async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(404).send('MUST PUT A URL');
  const urlString = scrapeFunc(url);
  res.send(urlString);
});
app.listen(port, () => {
  console.log(`we are live on ${port}`);
});
