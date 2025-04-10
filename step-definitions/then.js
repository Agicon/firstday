const { Then } = require("@wdio/cucumber-framework");
const { expect, $, browser } = require("@wdio/globals");

const LoginPage = require("../pageobjects/Android/loginPage");
import iosLoginPage from "../pageobjects/iOS/loginPage";
import ManagingProvider from "../pageobjects/Web/Provider/managingProvider";
import TestUtils from "../pageobjects/testUtils";
import customerPage from "../pageobjects/Web/SuperAdmin/customerPage";
const pages = {
  login: LoginPage,
};

Then(/^I should see a flash message saying (.*)$/, async (message) => {
  await expect(SecurePage.flashAlert).toBeExisting();
  await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
});

Then(/^Verify that user is on homepage$/, async () => {
  await LoginPage.clickOnFirstChild();
  await LoginPage.denySavePasswordPopup();
  await LoginPage.videoAndPicPermissionPopup.click();
  await LoginPage.clickOnRecordAudioPopup();
  await LoginPage.deviceLocationPopup.click();
  await LoginPage.notificationAlertPermission.click();
  await LoginPage.clickOnOkButton();
  await LoginPage.clickonbackbutton.click();
  await LoginPage.verifyDashboard();
});

Then(/^Verify all the features inside vital signs$/, async () => {
  await LoginPage.heartRateIsDisplayed();
  await LoginPage.o2SaturationIsDisplayed();
  await LoginPage.respiratoryRateDisplayed();
  await LoginPage.TemperatureIsDisplayed();
  await LoginPage.deviceStatusIsDisplayed();
});

Then(/^Verify all the features inside medical report$/, async () => {
  await LoginPage.diagnosisIsDisplayed();
  await LoginPage.medicationIsDisplayed();
  await LoginPage.resultsIsDisplayed();
  await LoginPage.trackerIsDisplayed();
  await LoginPage.vaccinationsIsDisplayed();
  await LoginPage.mediaIsDisplayed();
  await LoginPage.documentsIsDisplayed();
  await LoginPage.sendUsresultIsDisplayed();
});

Then(/^Verify all the tabs inside providers module$/, async () => {
  await LoginPage.providerTabIsDisplayed();
  await LoginPage.appointmentsTabIsDisplayed();
});

Then(/^Verify all the tabs inside settings module$/, async () => {
  await LoginPage.myContactInformationIsDisplayed();
  await LoginPage.myAccountIsDisplayed();
  await LoginPage.myBabysInformationIsDisplayed();
  await LoginPage.changeChildIsDisplayed();
  await LoginPage.changePasswordIsDisplayed();
});

// ---------------------------------------------------iOS-------------------------------------

Then(/^For iOS, verify that user is on homepage$/, async () => {
  await iosLoginPage.clickOnFirstChildOption();
  if ((await iosLoginPage.homepageIsDisplayed()) === true) {
    console.log("User successfully redirected to homepage");
  } else {
    throw new Error("Homepage is not displayed");
  }
});

// ======================================ManagingProvider=============================================

Then(/^Verify that user successfully redirected on homepage$/, async () => {
  if ((await ManagingProvider.managingProviderIsDisplayed()) === true) {
    console.log("User sucessfully redirected to homepage");
  } else {
    throw new Error("Managing providers tab is not displayed on homepage");
  }
});

Then(/^User should on "Managing Provider" page$/, async () => {
  if ((await ManagingProvider.newManagingProviderButtonIsDisplayed()) === true) {
    console.log("User sucessfully redirected to Managing Provider page");
  } else {
    throw new Error("User is not sucessfully redirected to Managing Provider page");
  }
});

Then(/^"New Managing Provider" form displays$/, async () => {
  if ((await ManagingProvider.nameFieldIsDisplayed()) === true) {
    console.log("New managing provider form is successfully opened");
  } else {
    throw new Error("Form is not displayed after clicked on new managing provider ");
  }
});

Then(/^The "New Managing Provider" form should be closed$/, async () => {
  await ManagingProvider.verifyClosedForm();
});

Then(/^User refresh the screen$/, async () => {
  await browser.refresh();
});

Then(/^a "New Managing Provider" gets created And it displays (.*) in the "Managing Provider" list$/, async (registerName) => {
  await ManagingProvider.verifyCreatedProvider(registerName);
});

Then(/^Success message (.*) appears$/, async (Message) => {
  await ManagingProvider.verifySuccessMessage(Message);
});

Then(/^Search and delete already added provider (.*)$/, async (data) => {
  await ManagingProvider.searchAndDeleteAddedProvider(data);
});

Then(/^User should navigate to the "Update Managing Provider Details" page$/, async () => {
  await ManagingProvider.updateProviderPageIsDisplayed();
});

Then(/^User should navigate back to the "Managing Provider" page And the Managing Provider does not get updated (.*)$/, async (providerName) => {
  await ManagingProvider.verifyClosedForm();
  await ManagingProvider.verifyCreatedProvider(providerName);
});

Then(/^User click on the "Update" button$/, async () => {
  await ManagingProvider.clickOnUpdateButton();
});

//-------------------Supre admin(customer)-----------------------//

Then(/^I should redirect on url (.*)$/, {}, async (url) => {
  var data = TestUtils.getUserCredetials(url); //Retrive data from excel
  await browser.pause(1000);
  var url = data[0];
  console.log("LOGIN PAGE URL:" + url);
  await browser.pause(2000);
  var data = TestUtils.getUserCredetials(url); //Retrive data from excel
  await browser.pause(1000);
  var url = data[0];
  var actUrl = await browser.getUrl();
  if (actUrl.includes(url)) {
    console.log("Page url matched");
  } else {
    throw new Error("Filed to redirect on added url actual url>>" + actUrl + "expected url>>" + url);
  }
});

Then(/^Verify all the tabs inside settings module$/, async () => {
  await LoginPage.myContactInformationIsDisplayed();
  await LoginPage.myAccountIsDisplayed();
  await LoginPage.myBabysInformationIsDisplayed();
  await LoginPage.changeChildIsDisplayed();
  await LoginPage.changePasswordIsDisplayed();
});

Then(/^I navigate to the "Customers" page$/, async () => {
  await customerPage.newCustomerButtonIsDisplayed();
});

Then(/^"New customer" form displays$/, async () => {
  await customerPage.newCustomerFormIsDisplayed();
});

Then(/^validation message (.*) appears$/, async (message) => {
  await customerPage.verifyValidationMessage(message);
});

Then(/^A "New Customer" form closes$/, async () => {
  await customerPage.verifyClosedCustomerForm();
});

Then(/^A "New Customer" gets created and it displays clinic name (.*) first name (.*) last name (.*) email and licence number (.*) on the "Customers list"$/, async (clinicName, firstName, lastName, licenceNumber) => {
  await customerPage.verifyNewCreatedClinic(clinicName, firstName, lastName, licenceNumber);
});

Then(/^Search and delete duplicate data (.*)$/, async (data) => {
  await customerPage.searchAndDeleteDuplicateData(data);
});

Then(/^I navigates to the Customer (.*) details page$/, async (name) => {
  await customerPage.verifyCustomerDetailPage(name);
});

