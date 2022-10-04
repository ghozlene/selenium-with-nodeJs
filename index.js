const { By, Key, Builder, Browser } = require('selenium-webdriver');
require('chromedriver');

const testWeb = async () => {
	let driver = await new Builder().forBrowser(Browser.CHROME).build();
	try {
		await driver.get('https://www.google.com');

		await driver
			.findElement(By.name('q'))
			.sendKeys('ghozlene achref Github', Key.RETURN);

		setInterval(() => {
			driver.quit();
		}, 20000);
	} catch (err) {
		console.log(err);
	}
};

testWeb();
