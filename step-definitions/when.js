const { When} = require('@wdio/cucumber-framework');
const { expect, $, browser } = require('@wdio/globals')

const LoginPage = require('../pageobjects/Android/loginPage');
const LoginWebPage = require('../pageobjects/Web/loginPage');
import iosLoginPage from "../pageobjects/iOS/loginPage";
const pages = {
    login: LoginPage
    
}

When(/^login to app using email (.*) and password (.*)$/, async (username, password) => {
   
    await LoginPage.login(username, password);
 
});

When(/^Open web url (.*)$/, async (url) => {
await LoginWebPage.open(url);
});

When(/^Web app login using email (.*) and password (.*)$/, async (email,password) => {
    await LoginWebPage.login(email, password);
    });


    // ------------------------------------------iOS--------------------------------------------------------

    When(/^iOS login to app using email (.*) and password (.*)$/, async (username, password) => {
        await iosLoginPage.login(username, password);
     
    });