async function captureRaceAnalysis(page) {
  await Promise.all([
    page.waitForNavigation(),
    page.click("#tlast > ul.xlastul > li.two.bg_smaller.br_smaller > a"),
  ]);
  await page.screenshot({
    path: "./race-analysis.jpg",
    quality: 80,
    clip: { x: 19, width: 944, y: 339, height: 1760 },
  });
  await Promise.all([
    page.waitForNavigation(),
    page.click("#nav > li.first > a"),
  ]);
}

module.exports = {
  captureRaceAnalysis,
};
