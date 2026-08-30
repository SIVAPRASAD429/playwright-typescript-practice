import{test, expect, Locator, } from '@playwright/test'
test('textbox', async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");

//name
const name:Locator = page.locator("input#name");
await expect(name).toBeVisible();
await expect(name).toBeEnabled();
await name.fill('test');
await page.waitForTimeout(1000);
//email
expect(page.locator("input#email")).toBeVisible();
await page.locator("input#email").fill('abc@gmail.com');
//phone
expect(page.locator("input#phone")).toBeVisible();
await page.locator("input#phone").fill('9100125688');
const inputphone:String = await page.locator("input#phone").inputValue();
console.log('input phone number', inputphone);
expect(inputphone).toBe('9100125688');
//Address
expect(page.locator("#textarea")).toBeVisible();
await page.locator("#textarea").fill('hyderabad 500008');
await page.waitForTimeout(1000);
//to get attribute value of element

const maxlength:string | null= await page.locator("input#phone").getAttribute("maxlength");
console.log(maxlength);
}
)


test('Radiobutton', async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");

//name
const radiomale:Locator = page.locator("#male");
await expect(radiomale).toBeVisible();
await expect(radiomale).toBeEnabled();
expect(await radiomale.isChecked()).toBe(false);
await radiomale.check();
expect(await radiomale.isChecked()).toBe(true);
expect(radiomale).toBeChecked();
}
)   




test.only ('Checkbox', async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");

//name

const sundaybox:Locator = page.locator("input#sunday");
await expect(sundaybox).toBeVisible();
await expect(sundaybox).toBeEnabled();
expect(await sundaybox.isChecked()).toBe(false);
await sundaybox.check();
expect(sundaybox).toBeChecked();
await page.waitForTimeout(4000);

//Select all checkboxes using loop

const weekdays:Locator = page.locator("//input[@type='checkbox'][@type='checkbox']");
for(let i=5; i<=6;i++){
    
    await weekdays.nth(i).check();
}
await page.waitForTimeout(4000);

const days:string[] = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const checkboxes:Locator[] = days.map(index => page.getByLabel(index));
expect(checkboxes.length).toBe(7);/*
for(const checkbox of checkboxes){
    await checkbox.check();
    await expect(checkbox).toBeChecked();
}

// To uncheck Last 3 Checkboxes

for(const checkbox of checkboxes.slice(-3)){
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
}
await page.waitForTimeout(4000);
*/

//toggle checkboxes if its checked uncheck or if it is unchecked check.

for(let checkbox of checkboxes)
    {
    if(await checkbox.isChecked())
        {
await checkbox.uncheck();
await expect(checkbox).not.toBeChecked();
}
else
    {
await checkbox.check();
await expect(checkbox).toBeChecked();
}
}
await page.waitForTimeout(9000);

// Randomly selecting check boxes
const indexes = [1,3,6];
for(const i of indexes){
   await checkboxes[i].check();
    await expect(checkboxes[i]).toBeChecked();
}

//Select Checkbox based on lable value


}
)