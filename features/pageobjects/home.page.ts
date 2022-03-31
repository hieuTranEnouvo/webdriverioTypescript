import HomePageUI from '../interfaces/homePageUI'

class HomePage{

    public async verifyHeader(headertext: string) {
        expect(await HomePageUI.header.getText()).toEqual(headertext)
    }

}

export default new HomePage();
