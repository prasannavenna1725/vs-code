import {test,expect} from '@playwright/test'

test('working with checkboxes',async ({page}) => {

    await page.goto('https://the-internet.herokuapp.com/checkboxes')

    await expect(page.locator('#checkboxes')).toBeVisible()

    expect(await page.isChecked('input[type=checkbox]:nth-child(1)')).toBeFalsy()

    expect(await page.isChecked('input[type=checkbox]:nth-child(3)')).toBeTruthy()

    await page.uncheck('input[type=checkbox]:nth-child(1)')
   await page.check('input[type=checkbox]:nth-child(3)') 
})