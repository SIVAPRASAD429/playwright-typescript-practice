import{test, expect, Locator, } from '@playwright/test'
test('Verify is dropdown duplicates', async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");


//const alloptions:Locator = page.locator("#animals option");
const alloptions:Locator = page.locator("#colors option");
const alloptioncontent:string[] =(await alloptions.allTextContents()).map(text =>text.trim());

//console.log(alloptioncontent);
const myset =new Set<string>();
const duplicates:string[] =[];


for(const text of alloptioncontent){    
    if(myset.has(text)){
        duplicates.push(text);
    }
    else{
        myset.add(text);
    }
}
console.log("Duplicates options",duplicates);
if(duplicates.length>0){
    console.log("Duplicate elements fount:",duplicates)
}
else{
    console.log("Duplicate elements not fount:")
}
expect(duplicates.length).toBe(0);
await page.waitForTimeout(5000);
})