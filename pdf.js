const puppeteer = require('puppeteer')

async function printPDF() {
	const browser = await puppeteer.launch({ headless: true });
	const page = await browser.newPage();
	await page.goto('http://localhost:5500/cv.md', { waitUntil: 'networkidle0' });
	const pdf = await page.pdf({ format: 'A4' });

	await browser.close();
	return pdf;
};

printPDF().then((pdf) => {
	// save the pdf file to the same directory
	const fs = require('fs');
	fs.writeFileSync('output.pdf', pdf);
	console.log('PDF saved');
});
