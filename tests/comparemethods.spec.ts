import{test, expect, Locator} from '@playwright/test'
test('', async({page})=>{
await page.goto('https://demowebshop.tricentis.com/');
const products:Locator = page.locator('.item-box');
//console.log(await products.nth(1).innerText());
console.log(await products.nth(1).textContent());
await page.waitForTimeout(10000);
const count = await products.count();
console.log("count of products", count);

for(let i=0;i<count;i++){
const productname = await products.nth(i).textContent();
console.log("products Names:",productname?.trim());
}
})