const { $, browser } = require('@wdio/globals')
const BasePage = require('../testBase');
const { remote } = require('webdriverio');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class CustomerPage extends BasePage {
    /**
     * define selectors using getter methods
     */

    get customerLink() {
        return $('(//a[@title="customers"])[2]');
    }

    get newCustomerButton() {
        return $('button[data-target="#myModal"]');
    }
    get newCustomerForm() {
        return $('form[id="newCustomer"]');
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */


    async clickOnCustomerLink() {
        await this.customerLink.waitForDisplayed({ timeout: 20000 });
        await this.customerLink.click();

    }

    async newCustomerButtonIsDisplayed() {
        if (await this.newCustomerButton.isDisplayed() === true) {
            console.log("successfully redirect on cuctomer page")
        } else {
            throw new Error("Failed to redirect on customer page");

        }
    }

    async clickOnNewCustomerButton() {
        if (await this.newCustomerButton.isDisplayed() === true) {
            await this.newCustomerButton.click();
            console.log("successfully redirect on cuctomer page");

        } else {
            throw new Error("Failed to redirect on customer page");

        }
    }

    async newCustomerFormIsDisplayed() {
        if (await this.newCustomerForm.isDisplayed() === true) {
            console.log("successfully redirect on cuctomer form")
        } else {
            throw new Error("Failed to redirect on customer form");

        }
    }

    async clickOnButtonWithText(text) {
        const buttonText = await $("//button[contains(text(),'" + text + "')]");
        await buttonText.waitForDisplayed({ timeout: 20000 });
        if (await buttonText.isDisplayed() === true) {
            await buttonText.click(); // No need for `this.buttonText`
        } else {
            throw new Error("Button is not displaying: " + text);
        }
    }
    async verifyValidationMessage(text) {
        const messageText = await $("//span[contains(text(),'" + text + "')]");
        await messageText.waitForDisplayed({ timeout: 20000 });
        if (await messageText.isDisplayed() === true) {
            console.log("validation message displaying successfully");
        } else {
            throw new Error("Validation message is not displaying: " + text);
        }
    }
    async verifyClosedCustomerForm() {
        await this.newCustomerForm.waitForDisplayed({ reverse: true, timeout: 20000 });
        if (await this.newCustomerForm.isDisplayed() === false) {
            console.log("cuctomer form successfully close")
        } else {
            throw new Error("Failed to close customer form after clicking on close button");

        }
    }

}

module.exports = new CustomerPage();
