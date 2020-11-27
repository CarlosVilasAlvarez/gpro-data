// Vendor libs
const puppeteer = require("puppeteer");
// Custom libs
const { login, captureRaceAnalysis } = require("./actions");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // Set viewport to cover all gpro web
  await page.setViewport({ width: 983, height: 2606 });
  await login(page, "username", "password");
  await captureRaceAnalysis(page);
  browser.close();
})();
