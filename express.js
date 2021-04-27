const express = require('express');
const scrapeFunc = require('./scrape/scraping.js');
const { addSite } = require('./utils/utils');
require('./db/mongoDB');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3001;

app.post(`/url`, async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) return res.status(404).send('MUST PUT A URL');
    const urlString = await scrapeFunc(url);
    const response = await addSite(urlString);
    console.log('check');
    console.log(`our story${response}`);
    res.send(response);
  } catch (e) {
    res.status(400).send("didn't manage save");
  }
});
app.listen(port, () => {
  console.log(`we are live on ${port}`);
});
