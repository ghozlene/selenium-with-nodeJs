const { By, Key, Builder, Browser, until } = require('selenium-webdriver');
require('chromedriver');

const BuildingDriver = async () => {
	const driver = await new Builder().forBrowser(Browser.CHROME).build();
	return driver;
};

const scrapingWeb = async () => {
	const driver = await BuildingDriver();
	let tableContent = [];

	try {
		await driver.get('https://www.w3schools.com/html/html_tables.asp');
		const beforeXpath = `/*[@id='customers']/tbody/tr[`;
		const afterXpath = ']/td[1]';

		for (let i = 2; i <= 7; i++) {
			const actualPath = '/' + beforeXpath + i + afterXpath;
			const element = await driver.findElement(By.xpath(actualPath));
			const text = await element.getText();
			console.log(text);
		}

		setInterval(() => {
			driver.quit();
		}, 20000);
	} catch (err) {
		console.log(err);
	}
};

scrapingWeb();
