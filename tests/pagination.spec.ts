import{test,expect,Locator} from '@playwright/test'
test('Read Data from all the table pages', async({page})=>{
await page.goto("https://datatables.net/examples/core/basic_init/zero_configuration.html");
let hasmorepages=true;
let nextpage:Locator = page.locator('.dt-paging-button.disabled.next');
while(hasmorepages){
const rows = await page.locator('#example tbody tr').all();
for(let row of rows){
    console.log(await row.innerText())
}
const nextpage:Locator = page.locator("button[aria-label='Next']");
const isDisabled = await nextpage.getAttribute('class');
if(isDisabled?.includes('disabled'))
{
    hasmorepages = false;
}
else{
    await nextpage.click();
}
await page.waitForTimeout(4000);
}
})


test('Filter the rows and check the rows count', async({page})=>{
await page.goto("https://datatables.net/examples/core/basic_init/zero_configuration.html");
const filterdropdown:Locator = page.locator('#dt-length-0');
await filterdropdown.selectOption({label:'25'});
//Approach 1
const rows = await page.locator('#example tbody tr').all();
expect(rows.length).toBe(25);
//Approach 2
const rows2 = page.locator('#example tbody tr');
expect(rows2).toHaveCount(25);
})



test.only('Searching value using search box', async({page})=>{
await page.goto("https://datatables.net/examples/core/basic_init/zero_configuration.html");
const searchvalue:Locator = page.locator('#dt-search-0');
await searchvalue.fill('Bruno Nash');
const rows3 = await page.locator('#example tbody tr').all();
if(rows3.length>=1){
    let matchfound = false;
    for(let row of rows3){
    const text = await row.innerText();
    if(text.includes('Bruno Nash')){
        console.log("Record Found")
        matchfound=true;
        break;
    }
}
expect(matchfound).toBeTruthy();
console.log(rows3.length)
}
else{
    console.log('No rows found with input')
}
})