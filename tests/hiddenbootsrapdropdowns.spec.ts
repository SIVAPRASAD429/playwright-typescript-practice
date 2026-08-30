import{test, expect, Locator, } from '@playwright/test'
test('Bootstrap hidden dropdown', async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//Login
const Username:Locator = page.locator('.oxd-input.oxd-input--focus');
await Username.fill('Admin');
const pwd:Locator = page.locator("input[placeholder='Password']");
await pwd.fill('admin123');
const Login:Locator = page.locator('.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button');
await Login.click();

//Tab Selection
const pimtab:Locator = page.getByText('PIM');
await pimtab.click();
await page.waitForTimeout(4000);

/*const tile:Locator =*/ page.locator('form i').nth(2).click();
await page.waitForTimeout(8000);
const dpoptions:Locator = page.locator('.oxd-select-option');
const count = await dpoptions.count();
console.log('Number of Dropdown options', count);
//print options

for(let i=0;i<count;i++)
    {
   console.log(await dpoptions.nth(i).textContent());
}

//select or clicking on element
for(let i=0;i<count;i++)
    {
    const text = await dpoptions.nth(i).innerText();
    if (text === 'Account Assistant'){
        await dpoptions.nth(i).click();
        break;
    }
}
await page.waitForTimeout(3000);
})