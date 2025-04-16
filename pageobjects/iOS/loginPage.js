const { $, browser } = require('@wdio/globals')
const BasePage = require('./testBase');
const { remote } = require('webdriverio');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends BasePage {
    /**
     * define selectors using getter methods
     */

    get emailField() {
        return $('//XCUIElementTypeTextField');
    }
    get paswordField() {
        return $('//XCUIElementTypeSecureTextField');
    }

    get signInButton() {
        return $('//XCUIElementTypeStaticText[@name="Login"]');
    }

    get firstChild() {
        return $('(//XCUIElementTypeButton[@name="ic radioBtn deselect"])[1]');
    }

    get verifyHomepage() {
        return $('//XCUIElementTypeImage[@name="boxCard_blue"]');
    }

    get keyboardDoneButton() {
        return $('(//XCUIElementTypeButton)[5]');
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */


    async login(username, password) {
        try {
            await browser.dismissAlert();
        } catch (error) {

        }

        await this.emailField.waitForDisplayed({ timeout: 20000 });
        await this.emailField.click();
        await this.emailField.setValue(username);
        await this.paswordField.click();
        await this.paswordField.setValue(password);
        await this.clickOnKeyboardDoneButton();
        await this.signInButton.click();
    }


    async clickOnFirstChildOption() {
        await this.firstChild.waitForDisplayed({ timeout: 25000 });
        await this.firstChild.click();
    }

    async homepageIsDisplayed() {
        await this.verifyHomepage.waitForDisplayed({ timeout: 25000 });
        return this.verifyHomepage.isDisplayed();
    }

    async clickOnKeyboardDoneButton() {
        await this.keyboardDoneButton.waitForDisplayed({ timeout: 25000 });
        await this.keyboardDoneButton.click();
    }

}

module.exports = new LoginPage();
