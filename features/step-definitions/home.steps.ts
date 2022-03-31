import { Given, When, Then } from '@wdio/cucumber-framework';
import homepage from '../pageobjects/home.page'

Given(/^I open the browser and load the url (.+)$/, async (homepageurl:string) => {
    await browser.url(homepageurl)
    await browser.maximizeWindow()
});

Then(/^I should see a header with text (.+)$/, async (headertext:string) => {
    homepage.verifyHeader(headertext)
});