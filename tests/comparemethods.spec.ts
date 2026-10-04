import{test, expect, Locator} from '@playwright/test'
test('', async({page})=>{
await page.goto('https://demowebshop.tricentis.com/');
const products:Locator = page.locator('.item-box');

// innerText vs textContent
console.log(await products.nth(1).innerText());
console.log(await products.nth(1).textContent());
await page.waitForTimeout(10000);
const count = await products.count();
console.log("count of products", count);

for(let i=0;i<count;i++){
const productname = await products.nth(i).textContent();
console.log("products Names:",productname?.trim());
}
// allinnerText vs alltextContent
const Productnames:String[] =await products.allInnerTexts()
console.log("products name captured by allInnerText():",Productnames)
const Productnames1:String[] =await products.allTextContents()
console.log("products name captured by allTextContents():",Productnames1);
const  productsnamestrimmed:string[] = Productnames.map(text => text.trim());
console.log("Productnames after trimmed",productsnamestrimmed)


// All method - All method will give Locator names present in Mentioned Locator.

const ProductLocators:Locator[] = await products.all();
console.log(ProductLocators);

//console.log(await ProductLocators[1].innerText());
// Locators are in array format now so can use loop to print all textcontents using locators.

//For of Loop
for(let productloc of ProductLocators){
    console.log(await productloc.innerText())
}
//For in Loop
for(let i in ProductLocators){
    console.log(await ProductLocators[i].innerText())
}
})