const puppeteer = require('puppeteer');
const scrapingURLs = async () => {
  const url = 'https://www.adamtsair.co.il/category/%d7%a1%d7%99%d7%a4%d7%95%d7%a8%d7%99%d7%9d-%d7%9c%d7%99%d7%9c%d7%93%d7%99%d7%9d/';
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const titles = await page.$$eval('#list-items > article > a', (el) => el.map(a => a.getAttribute('title')));
    const URLs = await page.$$eval('#list-items > article > a', (el) => el.map(a => a.getAttribute('href')));
    const images = await page.$$eval('#list-items > article > a > img', (el) => el.map(img => img.getAttribute('data-lazy-src')));
    const links = [];
    for (let i = 0; i < titles.length; i++){
      if (titles[i] && images[i] && URLs[i]){
        links.push({
          title: titles[i],
          image: images[i],
          url: URLs[i]
        });
      }
    }
    console.log(links)
    await browser.close();
    return links;
  } catch (e) {
    return e;
  }
};
scrapingURLs();
module.exports = scrapingURLs;