ipcMain.handle("capturaRaceAnalysis", async () => {
  const browser = await pie.connect(app, puppeteer);

  const window = new BrowserWindow({
    width: 983,
    height: 2606,
    show: false,
    webPreferences: {
      offscreen: true,
    },
  });
  const page = await pie.getPage(browser, window);
  await page.setViewport({ width: 983, height: 2606 });
  await login(page, "", "");
  await captureRaceAnalysis(page);
  window.destroy();
});
