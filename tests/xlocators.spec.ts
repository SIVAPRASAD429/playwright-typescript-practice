import {test, expect, Locator} from '@playwright/test'
test('xpaths practice',async ({page}) =>{
await page.goto("https://demowebshop.tricentis.com/");
const absolutelogo:Locator = page.locator('//html/body/div[4]/div[1]/div[1]/div[1]/a/img');
await expect(absolutelogo).toBeVisible()
const relativelogo:Locator = page.locator("//*[@alt='Tricentis Demo Web Shop']");
await expect(relativelogo).toBeVisible();

//Xpath with contains method

const product:Locator = page.locator("//h2/a[contains(@href,'computer')]");
await product.count();
const productcount:number =  await product.count();
expect(productcount).toBeGreaterThan(0);
console.log('Count', productcount);
console.log(await product.first().textContent());
console.log(await product.last().textContent());
console.log(await product.nth(2).textContent());
let ProductTitles: String[]=await product.allTextContents();
for(let productTitle of ProductTitles){
    console.log(productTitle);
}

//Xpath with Startwith method

const buildingproduct:Locator = page.locator("//h2/a[starts-with(@href,'/build')]");
const count:number = await buildingproduct.count();
expect(count).toBeGreaterThan(0);

//Xpath with text() method

const reglink:Locator = page.locator("//a[text()='Register']");
await expect(reglink).toBeVisible();
await reglink.click()



//Xpath with last() method

const lastitem:Locator = page.locator("//div[@class='column follow-us']//li[last()]")
await expect(lastitem).toBeVisible();
console.log('Last item name',await lastitem.textContent());
//Xpath with position() method

const position:Locator = page.locator("//div[@class='column follow-us']//li[position()=2]")
await expect(position).toBeVisible();
console.log('item name based on position',await position.textContent());
})
