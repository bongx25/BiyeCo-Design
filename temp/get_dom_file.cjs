const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
  
  const html = await page.content();
  fs.writeFileSync('dom_dump.html', html);
  
  await browser.close();
})();
