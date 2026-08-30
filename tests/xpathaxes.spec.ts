import {test, expect, Locator} from "playwright/test";
test("xpathaxes", async ({page}) =>{
await page.goto("https://www.w3schools.com/html/html_tables.asp");

// self node

const selfexp:Locator = page.locator("//td[text()='Mexico']/self::td");
await expect(selfexp).toHaveText('Mexico');
console.log(await selfexp.textContent());

//Parent Node

const Parentrow:Locator = page.locator("//td[text()='Francisco Chang']/parent::tr");
await expect(Parentrow).toContainText('Centro comercial Moctezuma');
console.log(await Parentrow.textContent());

//Child node

const childnode:Locator = page.locator("//table[@id='customers']//tr[5]/child::td");
await expect(childnode).toHaveCount(3);
for(let i=0; i<=2;i++){
    console.log(await childnode.nth(i).textContent());
}

//ancestor nodes

const ancestornode:Locator = page.locator("//td[text()='Magazzini Alimentari Riuniti']/ancestor::table");
await expect(ancestornode).toHaveCount(1);
console.log(await ancestornode.textContent());

//decendent elements

const decendentnode:Locator = page.locator("//table[@id='customers']//descendant::td")
await expect(decendentnode).toHaveCount(18);
for(let j=0; j<=17;j++){
console.log(await decendentnode.nth(j).textContent());

//following elements

const followingnodes:Locator = page.locator("//td[text()= 'Centro comercial Moctezuma']/following::td")
await expect(followingnodes).toHaveCount(34);
console.log(await followingnodes.first().textContent());
console.log(await followingnodes.allTextContents());

//following-sibling elements

const followingsiblings:Locator = page.locator("//td[text()= 'Centro comercial Moctezuma']/following-sibling::td");
await expect(followingsiblings).toHaveCount(2);
console.log(await followingsiblings.allTextContents());

//preceding elements

const preceding:Locator = page.locator("//td[text()='Helen Bennett']/preceding::td");
await expect(preceding).toHaveCount(10);
console.log(await preceding.allTextContents());
const precedingheader:Locator = page.locator("//td[text()='Helen Bennett']/preceding::th");
await expect(precedingheader).toHaveCount(3);
console.log(await precedingheader.allTextContents());


//preceding-sibling elements
const precedingsiblings:Locator = page.locator("//td[text()='Canada']/preceding-sibling::td");
await expect(precedingsiblings).toHaveCount(2);
console.log(await precedingsiblings.allTextContents());
}
})