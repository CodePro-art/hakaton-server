const puppeteer = require('puppeteer');
const scraping = async (url) => {
	try {
		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		await page.goto(url);

		const title = await page.$eval('.entry-title', el => el.innerText)
		const image = await page.$eval('.entry-content img', el => el.getAttribute("src"));
		const content = await page.$$eval('.entry-content > p', (content) =>
			content.reduce((content, p) => content += (p.innerText), "") //textContent - includes imgs
		);
		const post = { title, image , content };
		console.log(post);
		await browser.close();
		return post;
	} catch(e) {
		return e;
	}

}
const url1 = 'https://www.adamtsair.co.il/%d7%90%d7%99%d7%96%d7%94-%d7%9c%d7%99%d7%9c%d7%94-%d7%9e%d7%a9%d7%95%d7%92%d7%a2/';
const url2 = 'https://www.adamtsair.co.il/%d7%94%d7%90%d7%9c%d7%95%d7%a3/';
scraping(url2);
module.exports = scraping;

