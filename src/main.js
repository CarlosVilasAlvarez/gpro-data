const { app, BrowserWindow, ipcMain, nativeImage } = require("electron");
const pie = require("puppeteer-in-electron");
const puppeteer = require("puppeteer-core");
const path = require("path");

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    icon: path.join(__dirname, "assets/icons/png/raceflag.png"),
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWindow.loadFile("index.html");
}

(async () => {
  pie.initialize(app);
  app.whenReady().then(createMainWindow);
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
})();

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
