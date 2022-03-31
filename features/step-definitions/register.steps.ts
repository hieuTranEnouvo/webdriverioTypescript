import { Given, When, Then } from '@cucumber/cucumber'
import registerPage from '../pageobjects/register.page'
import assertions from '../common/assertions';
import { addLog } from '../common/commands';

Given(/^I am on practice page \"([^\"]*)\"$/, async (appurl: string) => {
    await browser.maximizeWindow()
    addLog('Maximizing window')
    await browser.url(appurl)
    addLog('loading URL: ' + appurl)
});

Then(/^I validat page header \"([^\"]*)\"$/, async (header: string) => {
    await assertions.toHaveText(registerPage.getHeader(), header)
});

When(/^I enter firstname (.+) and lastname (.+)$/, async (fname: string, lname: string) => {
    await registerPage.enterFirstName(fname)
    await registerPage.enterLastName(lname)
});

When(/^I select gender (.+) years (.+) favorite chai (.+) and reason (.+)$/, async (gender: string, yrs: string, favchai: string, reason: string) => {
    await registerPage.selectGender(gender)
    await registerPage.selectExperience(yrs)
    await registerPage.selectFavChai(favchai)
    await registerPage.selectReason(reason)
});

When(/^I select continent (.+) and commands (.+)$/, async (continent: string, command: string) => {
    await registerPage.selectContinent(continent)
    await registerPage.selectSeleniumCommand(command)
});

When(/^I click on submit button$/, async () => {
    await registerPage.clickOnSubmitBtn()
});