async function logIn(page, username, password) {
  await page.goto("https://www.gpro.net/gb/gpro.asp");
  // Click and fill username input box
  await page.click("#Text1");
  await page.keyboard.type(username);
  // Click and fill password input box
  await page.click("#Password2");
  await page.keyboard.type(password);
  // Submit login
  await Promise.all([page.waitForNavigation(), page.click("#Submit2")]);
}

module.exports = logIn;
