const express = require('express');
const router = new express.Router();
const { addSite } = require('../utils/utils');
const scrapeFunc = require('../scrape/scraping.js');

router.post(`/url`, async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) return res.status(404).send('MUST PUT A URL');
    const urlString = await scrapeFunc(url);
    const response = await addSite(urlString);
    res.send(response);
  } catch (e) {
    res.status(400).send("didn't manage save");
  }
});
module.exports = router;
