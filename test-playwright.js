const { chromium } = require('playwright');

async function main() {
  console.log('Launching browser...');
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('file:///d:/Backup/桌面/综合实训/index.html');
  console.log('Browser opened successfully!');
  // 保持浏览器打开
  // await browser.close();
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});