const { Then } = require('@wdio/cucumber-framework');
const { expect, $, browser } = require('@wdio/globals')

const LoginPage = require('../pageobjects/Android/loginPage');
import iosLoginPage from "../pageobjects/iOS/loginPage";
const pages = {
    login: LoginPage
    
}

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
});

// ---------------------------------------------------iOS-------------------------------------

Then(/^For iOS, verify that user is on homepage$/, async()=>{
    await iosLoginPage.clickOnFirstChildOption();
    if(await iosLoginPage.homepageIsDisplayed() === true){
       console.log("User successfully redirected to homepage")
        }
        else{
        throw new Error("Homepage is not displayed");
        }

})
