const puppeteer = require('puppeteer');
const scraping = async (url) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    console.log('im in');
    const title = await page.$eval('.entry-title', (el) => el.innerText);
    console.log('title');
    console.log(title);
    const image = await page.$eval('.entry-content img', (el) =>
      el.getAttribute('src')
    );
    console.log('image');
    console.log(image);
    const content = await page.$$eval(
      '.entry-content > p',
      (content) => content.map((p) => p.innerText) //textContent - includes imgs
    );
    console.log(content)
    const post = { title, image, content };
    await browser.close();

    return post;
  } catch (e) {
    console.log(e);
    return e;
  }
};

// scraping('https://www.adamtsair.co.il/%d7%90%d7%99%d7%96%d7%94-%d7%9c%d7%99%d7%9c%d7%94-%d7%9e%d7%a9%d7%95%d7%92%d7%a2/');

module.exports = scraping;
