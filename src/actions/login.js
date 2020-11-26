async function logIn(page, username, password) {
  await page.goto("https://www.gpro.net/gb/gpro.asp");
  await page.click("#Text1");
  await page.keyboard.type(username);
  await page.click("#Password2");
  await page.keyboard.type(password);

  await Promise.all([page.waitForNavigation(), page.click("#Submit2")]);
}

module.exports = logIn;
