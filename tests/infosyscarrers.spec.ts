import{test, expect, Locator, } from '@playwright/test'
test('Multi select dropdown', async({page})=>{
await page.goto("https://career.infosys.com/joblist");
const skill:Locator = page.locator('#exampleFormControlInput1');
await skill.fill('Manual Testing');
const location:Locator = page.locator('#dropdownMenuButton');
//await location.click();
const search:Locator = page.locator('.searchBtn');
await search.click();
await page.waitForTimeout(9000);
})