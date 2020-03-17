const puppeteer = require('puppeteer');

async function generatePoster() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`file://${__dirname}/../../build/index.html`);
    await page.setViewport({width: 1080, height: 1350});
    await page.screenshot({path: './image3.png'});
    await browser.close();
}

generatePoster();