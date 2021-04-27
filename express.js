const express = require('express');
const scrapeFunc = require('../scraping/scraping');
const { addSite } = require('./utils/utils');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3001;

app.post(`/url`, async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) return res.status(404).send('MUST PUT A URL');
    const urlString = scrapeFunc(url);
    const response = addSite(JSON.parse(urlString));
    res.send(response);
  } catch (e) {
    res.status(400).send("didn't manage save");
  }
});
app.listen(port, () => {
  console.log(`we are live on ${port}`);
});
