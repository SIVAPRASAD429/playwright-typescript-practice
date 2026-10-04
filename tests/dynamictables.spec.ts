import {test, expect, Locator} from '@playwright/test'
test('dynamic Web Table ',async ({page}) =>{
await page.goto("https://practice.expandtesting.com/dynamic-table");
const table:Locator = page.locator(".table.table tbody");
await expect(table).toBeVisible();
const rows:Locator[] = await table.locator("tr").all();
console.log("Number of rows",rows.length);
expect(rows).toHaveLength(4);
let cpuload = '';
for(const row of rows)
{
const processname:string = await row.locator('td').nth(0).innerText();
if(processname==="Chrome"){
    //cpuload = await row.locator('td:has-text("%")').innerText(); //css syntax
    cpuload = await row.locator("td",{hasText:"%"}).innerText(); //playwright syntax
    console.log("Cpu load",cpuload);
    break;
}
}
// 2nd Condition
let chromeboxtext:string= await page.locator("#chrome-cpu").innerText();
console.log("CPU Load value from yellow box",chromeboxtext);

if(chromeboxtext.includes(cpuload)){
    console.log("Cpu Load of chrome is equal");
}
else{
    console.log("Cpu Load of chrome is not equal");
}
expect(chromeboxtext).toContain(cpuload);
await page.waitForTimeout(9000);
})