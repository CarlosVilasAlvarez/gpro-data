const { app, BrowserWindow, ipcMain } = require("electron");
const pie = require("puppeteer-in-electron");
const puppeteer = require("puppeteer-core");
const { login, captureRaceAnalysis } = require("./actions");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile("index.html");
  win.webContents.openDevTools();
}

pie.initialize(app);
app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

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

// const { BrowserWindow, app } = require("electron");
// const pie = require("puppeteer-in-electron");
// const puppeteer = require("puppeteer-core");
// const { login, captureRaceAnalysis } = require("./actions");

// const main = async () => {
//   await pie.initialize(app);
//   const browser = await pie.connect(app, puppeteer);

//   const window = new BrowserWindow({
//     width: 983,
//     height: 2606,
//     show: false,
//     webPreferences: {
//       offscreen: true,
//     },
//   });
//   const page = await pie.getPage(browser, window);
//   await page.setViewport({ width: 983, height: 2606 });
//   await login(page, "", "");
//   await captureRaceAnalysis(page);
//   window.destroy();
// };

// main();
