import{test, expect,Locator} from "@playwright/test"
test("CSS Locators concept",async ({page}) =>{
await page.goto("https://demowebshop.tricentis.com/");
// tag#id
const searchbox:Locator=page.locator("input#small-searchterms");
await searchbox.fill("science");
const magnifier:Locator = page.locator("input[class='button-1 search-box-button']");
await magnifier.click();
const science:Locator = page.locator("h2[class='product-title']")
expect(science).toHaveText('Science');
await page.waitForTimeout(7000);
await science.click();
await page.waitForTimeout(7000);
// Tag.class
const price:Locator = page.locator("span.price-value-27");
await expect(price).toHaveText('51.00');
// Tag[attribute=value]
const image:Locator = page.locator("img[alt$='Tricentis Demo Web Shop']");
await expect(image).toBeVisible();
//tag.class[attribute=value]
const search:Locator = page.locator("input.search-box-text[id='small-searchterms']");
await expect(search).toBeEditable();
await search.fill("book");
await page.waitForTimeout(7000);
}) 
