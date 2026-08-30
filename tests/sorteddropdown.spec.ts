import{test, expect, Locator, } from '@playwright/test'
test('Verify is dropdown sorted', async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
const alloptions:Locator = page.locator("#animals option");
//const alloptions:Locator = page.locator("#colors option");
const alloptioncontent:string[] =(await alloptions.allTextContents()).map(text =>text.trim());
console.log(alloptioncontent);
const originalList = [...alloptioncontent];
const sortedlist = [...alloptioncontent].sort();
console.log(originalList);
console.log(sortedlist);
expect(originalList).toEqual(sortedlist);
await page.waitForTimeout(5000);
})