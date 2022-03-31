import { ChainablePromiseElement } from 'webdriverio';

import Page from '../pages/page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get flashAlert () {
        return $('#flash');
    }
}

export default new SecurePage();