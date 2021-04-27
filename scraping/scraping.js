const puppeteer = require('puppeteer');
const scraping = async (url) => {
	try {
		// const browser = await puppeteer.launch();
		// const page = await browser.newPage();
		// await page.goto(url, { waitUntil: 'networkidle0' });
		// const title = await page.title();
		// const content = await page.evaluate('.entry-content > p', el => el.innerText)
		// const post = { title, content }
		// console.log(post);
		// await browser.close();
		// return post;
		const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url)
  // const name = await page.$eval('.hnname > a', el => el.innerText)
	const name = await page.$eval('.entry-content > p', el => el.innerText)
	console.log('hi')
	// ---------------------
	const content = await page.$$eval('.entry-content > p', (content) =>
  content.map((p) => p.textContent)
	);
	console.log(content)
  console.log(name)
  await browser.close()
	} catch(e) {
		console.log(e);
	}
	return;
}
const url = 'https://www.adamtsair.co.il/%d7%90%d7%99%d7%96%d7%94-%d7%9c%d7%99%d7%9c%d7%94-%d7%9e%d7%a9%d7%95%d7%92%d7%a2/';
scraping(url);
module.exports = scraping;

