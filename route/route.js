const express = require('express');
const router = new express.Router();
const scarpingUrls = require('../scrape/scrapingURLs');
const { addSite } = require('../utils/utils');
const scrapeFunc = require('../scrape/scraping.js');
const endpoint = require('../paths/path');

router.post(`${endpoint}/url`, async (req, res) => {
  try {
    const { url } = req.body;
    console.log(url);
    if (!url) return res.status(404).send('MUST PUT A URL');
    const urlString = await scrapeFunc(url);
    const response = await addSite(urlString);
    res.send(response);
  } catch (e) {
    res.status(400).send("didn't manage save");
  }
});
router.get(endpoint, async (req, res) => {
  try {
    const arrOfUrl = await scarpingUrls();
    res.send(arrOfUrl);
  } catch (e) {
    res.status(400).send('bad request');
  }
});
module.exports = router;
