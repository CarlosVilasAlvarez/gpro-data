// Vendor libs
const puppeteer = require("puppeteer");

// Custom libs
const { login } = require("./actions");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  /** Set viewport to screenshot race analysis */
  await page.setViewport({ width: 983, height: 2606 });
  await login(page, "username", "password");
  browser.close();
})();
