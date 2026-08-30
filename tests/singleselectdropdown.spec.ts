import{test, expect, Locator, } from '@playwright/test'
test('Single select dropdown', async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");

//Select option from dropdown

const country:Locator = page.locator(".form-control[id='country']");
await expect(country).toBeEnabled();

await country.selectOption('India'); // By visible text
await country.selectOption({value:'uk'}); // By Value of element
await country.selectOption({label:'India'}); // By Label of element
await country.selectOption({index:3}); // By Index of element
await page.waitForTimeout(5000);


//Check number of options in the dropdown

const dropdownvalues:Locator= page.locator('#country option');
await expect(dropdownvalues).toHaveCount(10);

// Check available options in the dropdown. Map Method & Trim content
const dpoptions:string[] = (await dropdownvalues.allTextContents()).map(text =>text.trim());
console.log(dpoptions);
expect(dpoptions).toContain('France');
await page.waitForTimeout(5000);


// printing options from the array

for(let i=0;i<=9;i++){
console.log(dpoptions[i]);
}

// or

for(const option of dpoptions){
console.log(dpoptions);
}
})