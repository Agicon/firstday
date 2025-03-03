const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $, browser } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const pages = {
    login: LoginPage
    
}

Given(/^I am on the (\w+) page$/, async (page) => {
    // await pages[page].open()
    // await driver.get("https://www.youtube.com/");
    await LoginPage.open();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
 
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
});


// Step to switch to mobile context
When('I switch to the mobile context', async () => {
    // await pages[page].open();
    // const contexts = await driver.getContexts();
    // await browserswitchContext(contexts.find(context => context.includes('NATIVE')));
    // console.log('Switched to mobile context');
    // await browser.pause(10000);
    // const usernameField = await $('//android.widget.TextView[@resource-id="com.coach.app:id/txtGetStartedTV"]');
    // // await $('//*[@resource-id="com.threesmobile.quicktrials.app:id/sign_in_with_third_party_provider"]').click();
    // await usernameField.waitForExist({ timeout: 20000 });  // Wait for the element to exist
    // await usernameField.waitForDisplayed({ timeout: 20000 });  // Wait for the element to be visible
    
    // await usernameField.click();
    // var new52=await LoginPage.returnText();
    // await $("//input[contains(text(),'"+new52+"')]").click();
    await LoginPage.loginn();

});

// Step to switch to web context
When('I switch to the web context', async () => {

    const contexts = await browser.getContexts();
    await browser.switchContext(contexts.find(context => context.includes('WEBVIEW')));
    console.log('Switched to web context');
});

// Example of an interaction on mobile
When('I click on a button in mobile', async () => {
    await $('~button_locator').click();
});

// Example of an interaction on web
When('I click on a button in web', async () => {
    await $('#button_id').click();
});
