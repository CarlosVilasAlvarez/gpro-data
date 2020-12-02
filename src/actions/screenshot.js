async function captureRaceAnalysis(page) {
  //Enter to race analysis page
  await Promise.all([
    page.waitForNavigation(),
    page.click("#tlast > ul.xlastul > li.two.bg_smaller.br_smaller > a"),
  ]);
  // Take screenshot
  await page.screenshot({
    path: "./race-analysis.png",
    clip: { x: 19, width: 944, y: 339, height: 1760 },
  });
  // Return to home
  await Promise.all([
    page.waitForNavigation(),
    page.click("#nav > li.first > a"),
  ]);
}

module.exports = {
  captureRaceAnalysis,
};
