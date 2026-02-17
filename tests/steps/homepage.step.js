
const{ Given ,When ,Then ,Before,After,setDefaultTimeout}=
require("@cucumber/cucumber");

const{chromium,expect}= require("@playwright/test");



setDefaultTimeout(60*1000);
let page,browser;
Before(async function(){
browser=await chromium.launch({headless:false});
const Context=await browser.newContext();
page = await Context.newPage();

})

         Given('browser is open', async function () {
            await page.goto('https://www.google.com/');
           
          // return 'pending';
         });
       

         Given('user is on google search page', async function () {
           
           return 'pending';
         });
       

         When('user enters a text in search box', async function () {
          
           return 'pending';
         });
       
         Then('user is navigated to search results', async function () {
         
           return 'pending';
         });