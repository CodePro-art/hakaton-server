const puppeteer = require('puppeteer');
const scraping = async (url) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const title = await page.$eval('.entry-title', (el) => el.innerText);
    const image = await page.$eval('.entry-content img', (el) =>
      el.getAttribute('src')
    );
    const content = await page.$$eval(
      '.entry-content > p',
      (content) => content.map((p) => p.innerText) //textContent - includes imgs
    );
    const post = { title, image, content };
    await browser.close();
    console.log(post);
    return post;
  } catch (e) {
    return e;
  }
};

module.exports = scraping;
