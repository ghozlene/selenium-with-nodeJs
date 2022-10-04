const { By, Key, Builder, Browser, until } = require('selenium-webdriver');
require('chromedriver');

const BuildingDriver = async () => {
	const driver = await new Builder().forBrowser(Browser.CHROME).build();
	return driver;
};

const checkContent = async (text) => {
	(await driver.getTitle()) === text;
};

const testWeb = async () => {
	const driver = await BuildingDriver();
	try {
		await driver.get('https://github.com');

		await driver.findElement(By.partialLinkText('Sign in')).click();

		console.log(await driver.getTitle());

		if (checkContent) {
			console.log('Success test');
		} else {
			console.log('test failed');
			return;
		}
		await driver.findElement(By.name('login')).sendKeys('streamCode');
		await driver
			.findElement(By.name('password'))
			.sendKeys('********', Key.RETURN);

		const checkElement = await driver.wait(
			until.elementIsVisible(
				driver.findElement(By.className('flash-close js-flash-close')),
				5000
			)
		);

		if (checkElement) {
			console.log('test 2 passed with success');
		} else {
			console.log('test 2 failed');
		}

		setInterval(() => {
			driver.quit();
		}, 20000);
	} catch (err) {
		console.log(err);
	}
};

testWeb();
