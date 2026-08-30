import{test, expect, Locator, } from '@playwright/test'
test('Verify Autosuggest dropdowns working', async({page})=>{
await page.goto("https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_7hz2t19t5c_e&adgrpid=155259815513&hvpone=&hvptwo=&hvadid=815461303151&hvpos=&hvnetw=g&hvrand=2689350797514010878&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9184631&hvtargid=kwd-10573980&hydadcr=14453_2462831&mcid=4c22dcdee2bf3a71b0b832c5c4ba9c17&hvocijid=2689350797514010878--&hvexpln=nav&gad_source=1");

const Search:Locator = page.locator("#twotabsearchtextbox");

await Search.fill("Phone");

// system trying find elements which is auto suggested so system need extra wait.

await page.waitForTimeout(10000);

//Get all the suggested options --->ctrl+shift+p
//Execute/Run Emulate focused page

const options:Locator = page.locator(".s-suggestion.s-suggestion-ellipsis-direction");
await page.waitForTimeout(7000);
//expect(dropdownoptions).toHaveCount(7);
const   count = await options.count();
console.log('Suggested based on input',count);
/*
for(let i=1;i<count;i++){
    console.log(await dropdownoptions.nth(i).innerText());
}
*/
//Click on specific option from dropdown
for(let i=0;i<count;i++)
    {
    const text = await options.nth(i).innerText();
    if (text==='phone under 15k')
        {
       await options.nth(i).click();
        break;
    }
}
await page.waitForTimeout(4000);
})