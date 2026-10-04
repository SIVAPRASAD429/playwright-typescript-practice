import {test, expect, Locator} from "playwright/test";
test("DyamicElementsbyxpath", async ({page}) => 
    {
await page.goto('https://testautomationpractice.blogspot.com/');
for( let i=1; i<=5; i++)
{
    //Using Xpath

    let button1:Locator = page.locator('//button[text() ="START" or text()="STOP"]');
    await button1.click();
    await page.waitForTimeout(2000);
    await button1.click();

    //Using CSS Locator
<<<<<<< HEAD
    const button1:Locator = page.locator('button[name = "start"], button[name = "stop"]');
    await button1.click();
    await page.waitForTimeout(2000);
    await button1.click();
    
   //Using Playwright built-in Locator
   
   const button1:Locator = page.getByRole('button',{name: /START|STOP/});
    await button1.click();
    await page.waitForTimeout(2000);
    await button1.click();

}
});
=======
    const button2:Locator = page.locator('button[name = "start"], button[name = "stop"]');
    await button2.click();
    await page.waitForTimeout(2000);
    await button2.click();

   //Using Playwright built-in Locator

   const button3:Locator = page.getByRole('button',{name: /START|STOP/});
    await button3.click();
    await page.waitForTimeout(2000);
    await button3.click();}
})
>>>>>>> c66481b (Updated Playwright test cases)
