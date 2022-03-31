import { clickElement, selectDropdown, selectVisibleText, setText } from '../common/commands';
import Page from './page'
import registerPageUI from '../interfaces/registerPageUI'

class RegisterPage extends Page {

    getHeader() {
        return registerPageUI.header
    }

    async enterFirstName(firstname:string) {
        await setText(registerPageUI.fname, firstname)
    }

    async enterLastName(lastname:string) {
        await setText(registerPageUI.lname, lastname)
    }

    async selectGender(gender: string) {
        await selectDropdown(registerPageUI.gender_radio, gender)
    }

    async selectExperience(years: string) {
        await selectDropdown(registerPageUI.experience_radio, years)
    }

    async selectFavChai(chaiType: string) {
        await selectDropdown(registerPageUI.favchai_checkbox, chaiType)
    }

    async selectReason(reason:string) {
        await selectDropdown(registerPageUI.whychai_checkbox, reason)
    }

    async selectContinent(continent:string) {
        await selectVisibleText(registerPageUI.continent_dropdown, continent)
    }

    async selectSeleniumCommand(command:string) {
        await selectVisibleText(registerPageUI.selCommands_multiselect, command)
    }

    async clickOnSubmitBtn() {
        await clickElement(registerPageUI.submit_btn)
    }

}
export default new RegisterPage()