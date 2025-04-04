const { $, browser } = require('@wdio/globals')
const BasePage = require('./testBase');
import TestUtils from "../testUtils";
const { remote } = require('webdriverio');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends BasePage {
    /**
     * define selectors using getter methods
     */
    get emailField() {
        return $('#email');
    }
    get paswordField() {
        return $('#password');
    }

    get signInWithGoogleButton() {
        return $('//android.widget.Button[@content-desc="Sign in with Google"]');
    }

    get loggedinGoogleAccount() {
        return $('(//android.widget.LinearLayout[@resource-id="com.google.android.gms:id/container"])[1]');
    }

    get signInButton() {
        return $('//button[@type="submit"]');
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */


    async login(userName) {
        await browser.maximizeWindow();
        await browser.pause(1000);
        var data = TestUtils.getUserCredetials(userName); //Retrive data from excel
        await browser.pause(2000);
        var username = data[0];
        var password = data[1];
        await this.emailField.waitForDisplayed({ timeout: 20000 });
        await this.emailField.click();
        await this.emailField.setValue(username);
        await this.paswordField.click();
        await this.paswordField.setValue(password);
        await this.signInButton.click();
        await browser.pause(8000);
    }

    async installBuild(app) {
        await this.signInWithGoogleButton.waitForDisplayed({ timeout: 20000 });
        await this.signInWithGoogleButton.click();
        await this.loggedinGoogleAccount.waitForDisplayed({ timeout: 20000 });
        await this.loggedinGoogleAccount.click();

        await $("//android.widget.TextView[@text='" + app + "']").waitForDisplayed({ timeout: 40000 });
        await $("//android.widget.TextView[@text='" + app + "']").click();
        await browser.pause(5);
        try {
            await $("android.widget.CheckBox").click();
            await $("android.widget.Button").waitForDisplayed({ timeout: 5000 });
            await $("android.widget.Button").click();
            await browser.pause(10);
            // await $("//android.widget.TextView[@resource-id='dev.firebase.appdistribution:id/download_label']").waitForDisplayed({timeout:50000});
            await $("//android.widget.TextView[@resource-id='dev.firebase.appdistribution:id/download_label']").click();
            await $("//android.widget.Button[@resource-id='android:id/button1']").waitForDisplayed({ timeout: 90000 });
            await $("//android.widget.Button[@resource-id='android:id/button1']").click();

        } catch (error) {

        }
        await $("//android.widget.Button[@resource-id='dev.firebase.appdistribution:id/open_button']").waitForDisplayed({ timeout: 90000 });
        await $("//android.widget.Button[@resource-id='dev.firebase.appdistribution:id/open_button']").click();
        await browser.pause(5);


    }

    /**
     * overwrite specific options to adapt it to page object
     */
    async open(url) {
        var data = TestUtils.getUserCredetials(url); //Retrive data from excel
            await browser.pause(1000);
            var url = data[0];
            console.log('LOGIN PAGE URL:' + url);
        await browser.url(url);
        await browser.pause(4000);

    }

    async returnText() {
        var actAtt = await this.search.getAttribute("label");
        return actAtt;
    }


}

module.exports = new LoginPage();
