const { When } = require("@wdio/cucumber-framework");
const { expect, $, browser } = require("@wdio/globals");
const LoginPage = require("../pageobjects/Android/loginPage");
const LoginWebPage = require("../pageobjects/Web/loginPage");
import iosLoginPage from "../pageobjects/iOS/loginPage";
import ManagingProvider from "../pageobjects/Web/Provider/managingProvider";
import CustomerPage from "../pageobjects/Web/SuperAdmin/customerPage";
import TestUtils from "../pageobjects/testUtils";
const pages = {
  login: LoginPage,
};

// ==================================Android===========================================

When(/^login to app using (.*)$/, async (username) => {
  await LoginPage.login(username);
});

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

When(/^User leave the "Email  field" empty And populate the (.*) "Password field" And click on "Login" button$/, async (password) => {
  await LoginPage.fillPasswordField(password);
  await LoginPage.signInButton.click();
});

When(/^User leave the "Password field" empty And populate the (.*) "Email field" And click on "Login" button$/, async (email) => {
  await LoginPage.paswordField.click();
  await LoginPage.paswordField.clearValue();
  await LoginPage.fillEmailField(email);
  await LoginPage.signInButton.click();
});

When(/^User enter invalid (.*) and (.*) in their respective fields And click on "Login" button$/, async (email, password) => {
  await LoginPage.fillEmailField(email);
  await LoginPage.fillPasswordField(password);
  await LoginPage.signInButton.click();
});

When(/^User enter valid (.*) and (.*) in their respective fields And click on "Login" button$/, async (userName, invalidPassword) => {
  var data = TestUtils.getUserCredetials(userName);
  await browser.pause(2000);
  var username = data[0];
  await LoginPage.fillEmailField(username);
  await LoginPage.fillPasswordField(invalidPassword);
  await LoginPage.signInButton.click();
});

When(/^User navigate to the "Settings" tab$/, async () => {
  await LoginPage.clickOnSettingsTAb();
});

When(/^User click on the "Logout" option$/, async () => {
  await LoginPage.clickOnLogoutOption();
});

When(/^User click on the button with text (.*)$/, async (Button) => {
  await LoginPage.clickOnButtonWithText(Button);
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

When(/^User add (.*) in office information field$/, async (text) => {
  await ManagingProvider.fillOfficeInformationField(text);
});

When(/^User add (.*) in State field$/, async (text) => {
  await ManagingProvider.fillStateField(text);
});

When(/^User add (.*) in city field$/, async (text) => {
  await ManagingProvider.fillCityField(text);
});

When(/^User add (.*) in address field$/, async (text) => {
  await ManagingProvider.fillAddressField(text);
});

When(/^User use already registered (.*) and email to create new providing manager and click on (.*) button$/, async (name, button) => {
  var actEmail = await $("(//tr[@class='odd']//td)[3]").getText();
  await ManagingProvider.clickOnNewManagingProviderButton();
  await ManagingProvider.nameFieldIsDisplayed();
  await ManagingProvider.fillNameField(name);
  await ManagingProvider.fillEmailField(actEmail);
  await CustomerPage.clickOnButtonWithText(button);
});

When(/^User fill unique data in email field$/, async () => {
  await ManagingProvider.fillEmailFieldWithUniqueEmail();
});

When(/^User click on the "View or Update" option under "Action" section$/, async () => {
  await ManagingProvider.clickOnViewOrUpdateButton();
});

When(/^User click on the "Back" button on "Update Managing Provider Details" page$/, async () => {
  await ManagingProvider.clickOnBackButton();
});

When(/^User update the "Managing Provider form" but does not populate one of the mandatory field$/, async () => {
  await ManagingProvider.nameField.waitForDisplayed({ timeout: 20000 });
  await ManagingProvider.nameField.click();
  await ManagingProvider.nameField.clearValue();
});

When(/^User click on the link (.*)$/, async (link) => {
  await ManagingProvider.clickOnLink(link)
});

When(/^In other tab, inactive provider try to login (.*) with (.*) crendetials$/, async (url, userName) => {
  await browser.createWindow("tab");
  await ManagingProvider.switchToWindowNewTab();
  await LoginWebPage.open(url);
  await LoginWebPage.login(userName);
  await this.signInButton.click();
});


// ------------------------------------------iOS--------------------------------------------------------

When(/^iOS login to app using email (.*) and password (.*)$/, async (username, password) => {
  await iosLoginPage.login(username, password);
});

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

When(/^I populate fields but I populate "Email field" with already registered email$/, async () => {
  var actEmail = await $("(//tr[@class='odd']//td)[5]").getText();
  await CustomerPage.clickOnNewCustomerButton();
  await CustomerPage.newCustomerFormIsDisplayed();
  await CustomerPage.fillEmailField(actEmail);
});

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

When(/^I click on the "View" icon under "Action" column$/, async () => {
  await CustomerPage.clickOnViewIcon();
});

When(/^I click On "Edit" icon$/, async () => {
  await CustomerPage.clickOnEditIcon();
});

When(/^User click on the "Back" button on "update customer" page$/, async () => {
  await CustomerPage.clickOnBackButton();
});

When(/^I update the "Customer form" but does not populate one of the mandatory field and click on the (.*) button$/, async (button) => {
  await CustomerPage.clearClinicNameField();
  await CustomerPage.clickOnButtonWithText(button);
});

When(/^I click On "Delete" icon$/, async () => {
  await CustomerPage.clickOnDeleteIcon();
  await CustomerPage.verifyDeletedRecord();
});

When(/^I click on link text (.*)$/, async (text) => {
  await CustomerPage.clickOnLinkText(text);
});


