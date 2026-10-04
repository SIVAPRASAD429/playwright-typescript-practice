import {test, expect, Locator} from '@playwright/test'
test('Static Web Table ',async ({page}) =>{
await page.goto("https://testautomationpractice.blogspot.com/");
const table:Locator = page.locator("table[name='BookTable']");
await expect(table).toBeVisible();

// 1.No.of Rows in a table
const rows:Locator = table.locator('tr'); // Locator chaining
//instead of chaining we can use ---> //page.locator("table[name='BookTable'] tr");

await expect(rows).toHaveCount(7);
const count = await rows.count();
console.log("No.of Rows in a table:",count);
expect(count).toBe(7);

// 2.No.of Coloumns/Headers in a table

const Headers:Locator = table.locator('th');
await expect(Headers).toHaveCount(4);
const Headercount = await Headers.count();
console.log("No.of Headers in a table:",Headercount);
expect(Headercount).toBe(4);

//3.print Data on a specific row
const nthrow:Locator = rows.nth(2).locator('td');
const nthrowtext:string[] = await nthrow.allInnerTexts();
console.log("2nd Row data:",nthrowtext);
expect(nthrow).toHaveText([ 'Learn Java', 'Mukesh', 'Java', '500' ]);
console.log('Printing 2nd row data....')
for(let text of nthrowtext){
console.log(text)
} 
//4.Printing all the table data
const allrowdata = await rows.all()
for(let row of allrowdata.slice(1))
{ // slice will skip the particualr index either row,col any
const cols = await row.locator('td').allInnerTexts();
// console.log(cols.join('\t')); // .join(\t) will print string elements in normal format with tab space
//5.Print book names where author is specific name
const mukeshbooks:string[] = [];
for(let row of allrowdata.slice(1))
{
const cells = await row.locator('td').allInnerTexts();
const Author =cells[1];
const Book =cells[0];
if(Author === 'Mukesh')
    {
    console.log(Author,Book)
    mukeshbooks.push(Book);
    }
}
 console.log(mukeshbooks)
 expect(mukeshbooks).toHaveLength(2);
}
//5.Calculate Total priice of all books
let total:number = 0;
for(let row of allrowdata.slice(1))
{
const cells = await row.locator('td').allInnerTexts();
const price =cells[3];
total = total+parseInt(price);
}
console.log("Total Price of all books",total);
expect(total).toBe(7100);
})