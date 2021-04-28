const express = require('express');
const route = new express.Router();
const scarpingUrls = require('../scrape/scrapingURLs');
const { addSite } = require('../utils/utils');
const scrapeFunc = require('../scrape/scraping.js');
route.post(`/url`, async (req, res) => {
  try {
    const { url, language } = req.body;
    if (!url) return res.status(404).send('MUST PUT A URL');
    const urlString = await scrapeFunc(url);
    console.log(urlString);
    const response = await addSite(urlString, language);
    res.send(response);
  } catch (e) {
    res.status(400).send("didn't manage save");
  }
});

route.get('/', async (req, res) => {

  try {
    const arrOfUrl = await scarpingUrls();
    res.send(arrOfUrl);
  } catch (e) {
    res.status(400).send('bad request');
  }
});

module.exports = route;
