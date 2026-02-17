
import {test,expect} from '@playwright/test'

//get by role
// test('getByRole locator demo', async({page}) => {
//     await page.goto('https://parabank.parasoft.com/parabank/index.htm')
// await page.getByRole("link",{name:"Forgot login info?"}).click()
// }
// )

// //get by text
// test('getByText locator demo', async ({page}) => {
//     await page.goto('https://parabank.parasoft.com/parabank/index.htm')
//     await page.getByText('Forgot login info?').click()
// }
// )

//get by label
// test('getByLabel locator demo',async ({page}) => {
//     await page.goto('https://login.salesforce.com/')
//     await page.getByLabel('username').fill('venna')
// })

//get by placeholder
test('getByPlaceHolder demo',async ({page})  => {
    await page.goto('https://www.flipkart.com/')
    await page.getByPlaceholder('Search for Products, Brands and More').fill('perfume')
})

//get by alt text
test('getByAlttext locator demo', async ({page})  => {
    await page.goto('https://www.bookswagon.com/')
    await page.getByPlaceholder('Search by Title, Author, Publisher or ISBN').fill('fiction')
    await page.locator("xpath=//*[@name='btnTopSearch']").click()
    await page.getByAltText('Sacred Waters').click()
})

//get by title
test('getByTitle',async ({page}) => {
    await page.goto('https://parabank.parasoft.com/')
    await page.getByTitle('ParaBank')
     await page.getByAltText('ParaBank').click()
})
