const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('../index.html'); 
  
  // Test: Check if title is 'PyTricks Archive'
  const title = await page.title();
  console.assert(title === 'PyTricks Archive', 'Title is incorrect');

  // Test: Check if h1 element with class 'headline' exists
  const headline = await page.$('h1.headline');
  console.assert(headline !== null, 'Headline is missing');

  // Test: Check if h2 element with id 'bytecodecurtain' exists and link navigates correctly
  const bytecodecurtain = await page.$('h2#bytecodecurtain');
  console.assert(bytecodecurtain !== null, 'Bytecodecurtain section is missing');
  await page.click('a[href="#bytecodecurtain"]');
  console.assert(page.url().endsWith('#bytecodecurtain'), 'Bytecodecurtain link navigation failed');

  // Test: Check if h2 element with id 'checkifallequal' exists and link navigates correctly
  const checkifallequal = await page.$('h2#checkifallequal');
  console.assert(checkifallequal !== null, 'Checkifallequal section is missing');
  await page.click('a[href="#checkifallequal"]');
  console.assert(page.url().endsWith('#checkifallequal'), 'Checkifallequal link navigation failed');

  await browser.close();
})();