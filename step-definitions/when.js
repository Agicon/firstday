const { When } = require("@wdio/cucumber-framework");
const { expect, $, browser } = require("@wdio/globals");
const LoginPage = require("../pageobjects/Android/loginPage");
const LoginWebPage = require("../pageobjects/Web/loginPage");
import iosLoginPage from "../pageobjects/iOS/loginPage";
import ManagingProvider from "../pageobjects/Web/Provider/managingProvider";
import CustomerPage from "../pageobjects/Web/SuperAdmin/customerPage";

const pages = {
  login: LoginPage,
};

When(
  /^login to app using email (.*) and password (.*)$/,
  async (username, password) => {
    await LoginPage.login(username, password);
  }
);

When(/^Open web url (.*)$/, async (url) => {
  await browser.maximizeWindow();
  await LoginWebPage.open(url);
});

When(/^Web app login using (.*)$/, async (userName) => {
  await LoginWebPage.login(userName);
});

When(/^Verfiy all modules of Firstday-HC app on homepage$/, async () => {
  await LoginPage.patientVitalSigns();
  await LoginPage.patientsMedicalRecord();
  await LoginPage.patientsProviders();
  await LoginPage.needHelp();
  await LoginPage.patientsVideoCamera();
  await LoginPage.settings();
});

When(/^User clicks on vital signs module$/, async () => {
  await LoginPage.clickOnPatientsVitalSigns();
});

When(/^User clicks on medical report module$/, async () => {
  await LoginPage.clickOnModuleBackButton();
  await LoginPage.clickOnMedicalReport();
});

When(/^User clicks on providers module on homepage$/, async () => {
  await LoginPage.clickOnModuleBackButton();
  await LoginPage.clickOnProvider();
});

When(/^User clicks on settings module on homepage$/, async () => {
  await LoginPage.clickOnModuleBackButton();
  await LoginPage.clickOnSettingsModule();
});

// ======================================ManagingProvider=============================================

When(/^User click on "Managing Provider" tab$/, async () => {
  await ManagingProvider.clickOnManagingProviderTab();
});

When(/^User click on the "New Managing Provider" button$/, async () => {
  await ManagingProvider.clickOnNewManagingProviderButton();
});

When(/^User click on the "Close" button$/, async () => {
  await ManagingProvider.clickOnCloseButton();
});

When(/^User add (.*) in name field$/, async (text) => {
  await ManagingProvider.fillNameField(text);
});

When(/^User add (.*) in email field$/, async (text) => {
  await ManagingProvider.fillEmailField(text);
});

When(/^User add (.*) in mobile number field$/, async (text) => {
  await ManagingProvider.fillMoblieNumberField(text);
});

When(/^User add (.*) in website field$/, async (text) => {
  await ManagingProvider.fillWebsiteField(text);
});

When(/^User add (.*) in office number field$/, async (text) => {
  await ManagingProvider.fillOfficeNumberField(text);
});

When(/^User add (.*) in zipcode field$/, async (text) => {
  await ManagingProvider.fillzipCodeField(text);
});

When(
  /^User use already registered (.*) and email to create new providing manager and click on (.*) button$/,
  async (name, button) => {
    var actEmail = await $("(//tr[@class='odd']//td)[3]").getText();
    await ManagingProvider.clickOnNewManagingProviderButton();
    await ManagingProvider.nameFieldIsDisplayed();
    await ManagingProvider.fillNameField(name);
    await ManagingProvider.fillEmailField(actEmail);
    await CustomerPage.clickOnButtonWithText(button);
  }
);

When(/^User fill unique data in email field$/, async () => {
  await ManagingProvider.fillEmailFieldWithUniqueEmail();
});

// ------------------------------------------iOS--------------------------------------------------------

When(
  /^iOS login to app using email (.*) and password (.*)$/,
  async (username, password) => {
    await iosLoginPage.login(username, password);
  }
);

//-------------------------Super admin(Customer)-------------------------//

When(/^I click on the "Customers" tab$/, async () => {
  await CustomerPage.clickOnCustomerLink();
});

When(/^I click on the "New Customer" button$/, async () => {
  await CustomerPage.clickOnNewCustomerButton();
});

When(/^I click on the button with text (.*)$/, async (text) => {
  await CustomerPage.clickOnButtonWithText(text);
});

When(/^I fill (.*) data in clinic name field$/, async (text) => {
  await CustomerPage.fillClinicNameField(text);
});

When(/^I fill (.*) data in first name field$/, async (text) => {
  await CustomerPage.fillFirstNameField(text);
});

When(/^I fill (.*) data in last name field$/, async (text) => {
  await CustomerPage.fillLastNameField(text);
});
When(/^I fill (.*) data in email field$/, async (text) => {
  await CustomerPage.fillEmailField(text);
});

When(/^I fill (.*) data in phone number field$/, async (text) => {
  await CustomerPage.fillPhoneNumberField(text);
});

When(/^I fill (.*) data in office number field$/, async (text) => {
  await CustomerPage.fillOfficeNumberField(text);
});

When(/^I fill (.*) data in zip code field$/, async (text) => {
  await CustomerPage.fillZipCodeField(text);
});

When(/^I fill (.*) data in number of licence field$/, async (text) => {
  await CustomerPage.fillNumberOfLicenceField(text);
});

When(/^I fill (.*) data in expiry field$/, async (text) => {
  await CustomerPage.fillExpireField(text);
});

When(/^I fill valid date in expiry field$/, async () => {
  await CustomerPage.fillValidExpireField();
});

When(/^I fill valid and unique data in email$/, async () => {
  await CustomerPage.fillEmailFieldWithUniqueData();
});

When(
  /^I populate fields but I populate "Email field" with already registered email$/,
  async () => {
    var actEmail = await $("(//tr[@class='odd']//td)[5]").getText();
    await CustomerPage.clickOnNewCustomerButton();
    await CustomerPage.newCustomerFormIsDisplayed();
    await CustomerPage.fillEmailField(actEmail);
  }
);

When(/^I fill (.*) data in office information field$/, async (text) => {
  await CustomerPage.fillOfficeInformationField(text);
});

When(/^I fill (.*) data in country field$/, async (text) => {
  await CustomerPage.fillCountryField(text);
});

When(/^I fill (.*) data in state field$/, async (text) => {
  await CustomerPage.fillStateField(text);
});

When(/^I fill (.*) data in city field$/, async (text) => {
  await CustomerPage.fillCityField(text);
});



