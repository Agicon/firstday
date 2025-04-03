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

When(/^Web app login using (.*)$/, async (userName) => {
    await LoginWebPage.login(userName);
    });

When(/^Verfiy all modules of Firstday-HC app on homepage$/, async()=>{
 await LoginPage.patientVitalSigns();
 await LoginPage.patientsMedicalRecord();
 await LoginPage.patientsProviders();
 await LoginPage.needHelp();
 await LoginPage.patientsVideoCamera();
 await LoginPage.settings();
})

When(/^User clicks on vital signs module$/,async()=>{
 await LoginPage.clickOnPatientsVitalSigns();
})

When(/^User clicks on medical report module$/,async()=>{
 await LoginPage.clickOnModuleBackButton();
 await LoginPage.clickOnMedicalReport();
})

When(/^User clicks on providers module on homepage$/, async()=>{
    await LoginPage.clickOnModuleBackButton();
    await LoginPage.clickOnProvider();
})

When(/^User clicks on settings module on homepage$/,async()=>{
    await LoginPage.clickOnModuleBackButton();
    await LoginPage.clickOnSettingsModule();
})


























    // ------------------------------------------iOS--------------------------------------------------------

    When(/^iOS login to app using email (.*) and password (.*)$/, async (username, password) => {
        await iosLoginPage.login(username, password);
     
    });