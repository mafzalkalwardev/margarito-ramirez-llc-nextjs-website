const { chromium } = require("playwright");

(async () => {
  const base = "https://mafzalkalwardev.github.io/margarito-ramirez-llc-nextjs-website";
  const pages = [
    { path: "/", name: "home" },
    { path: "/services/", name: "services" },
    { path: "/about/", name: "about" },
    { path: "/sms-consent/", name: "sms-consent" },
    { path: "/support/", name: "support" },
  ];

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();

  for (const item of pages) {
    const url = base + item.path;
    console.log("Capturing", url);
    await page.goto(url, { waitUntil: "networkidle", timeout: 90000 });
    await page.waitForTimeout(1800);
    await page.screenshot({
      path: `docs/screenshots/${item.name}-desktop.png`,
      fullPage: false,
    });
  }

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base + "/", { waitUntil: "networkidle", timeout: 90000 });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: "docs/screenshots/home-mobile.png", fullPage: false });

  await browser.close();
  console.log("Screenshots saved");
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
