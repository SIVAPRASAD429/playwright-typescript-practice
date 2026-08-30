import{test, expect, Locator, } from '@playwright/test'
test('Multi select dropdown', async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");

//Select option from dropdown

const colors:Locator = page.locator("#colors");
/*
await colors.selectOption(['Red','Blue','Green']);//By visible text
await colors.selectOption(['red','blue','green']);//By Value
await colors.selectOption([{label:'Red'},{label:'Blue'},{label:'Green'}]);//By Label
await colors.selectOption([{index:1},{index:2},{index:3}]);//By Index
expect(colors).toHaveCount(7);
await page.waitForTimeout(3000);
*/

// Check available options in the dropdown. Map Method & Trim content
const coloroptions:Locator = page.locator("#colors>option");
const coloroptionarray:string[] = (await coloroptions.allTextContents()).map(text =>text.trim());
console.log(coloroptionarray);
expect(coloroptionarray).toContain('Red');
await page.waitForTimeout(5000);
// printing options from the array

for(let i=0;i<=9;i++){
console.log(coloroptionarray[i]);
}

// or
/*
for(const option of coloroptionarray){
console.log(coloroptionarray);
}*/
})