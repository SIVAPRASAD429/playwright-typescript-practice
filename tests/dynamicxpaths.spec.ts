/*import {test, expect, Locator} from "playwright/test";
test("DyamicElementsbyxpath", async ({page}) => 
    {
await page.goto('https://testautomationpractice.blogspot.com/');
for( let i=1; i<=5; i++)
{
    //Using Xpath

    /*let button1:Locator = page.locator('//button[text() ="START" or text()="STOP"]');
    await button1.click();
    await page.waitForTimeout(2000);
    await button1.click();*/

    //Using CSS Locator
    /*const button1:Locator = page.locator('button[name = "start"], button[name = "stop"]');
    await button1.click();
    await page.waitForTimeout(2000);
    await button1.click();
    */
   //Using Playwright built-in Locator
   /*
   const button1:Locator = page.getByRole('button',{name: /START|STOP/});
    await button1.click();
    await page.waitForTimeout(2000);
    await button1.click();

}
});

*/