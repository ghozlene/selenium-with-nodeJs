const { By, Key, Builder, Browser, until } = require('selenium-webdriver');
require('chromedriver');

const BuildingDriver = async () => {
	const driver = await new Builder().forBrowser(Browser.CHROME).build();
	return driver;
};

const uploadFile = async () => {
	const driverUsed = await BuildingDriver();
	try {
		await driverUsed.get(' https://filebin.net/');
		let input = await driverUsed.findElement(By.className('upload'));
		await input.sendKeys(
			'C:/Users/medac/Desktop/working-with-selenium/upload.js'
		);

		setInterval(() => {
			driverUsed.quit();
		}, 20000);
	} catch (error) {
		console.log(error);
	}
};

uploadFile();
