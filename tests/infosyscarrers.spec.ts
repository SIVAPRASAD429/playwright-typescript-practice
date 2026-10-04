import{test, expect, Locator, } from '@playwright/test'
test

('Multi select dropdown', async({page})=>{
await page.goto("https://career.infosys.com/joblist");
const popup:Locator = page.locator('.mat-icon.notranslate.close-icon.material-icons.mat-ligature-font.mat-icon-no-color');
await popup.click();
const QAjobs:Locator = page.locator('div:nth-child(7) mat-card:nth-child(1) div:nth-child(1) div:nth-child(1) mat-card-header:nth-child(1) div:nth-child(1) mat-card-title:nth-child(1)');
await QAjobs.click();
//const location:Locator = page.locator('#dropdownMenuButton');
//await location.click();

const findjobs:Locator = page.locator('.searchBtn');
await findjobs.click();
await page.waitForTimeout(9000);
})