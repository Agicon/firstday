const { Then } = require("@wdio/cucumber-framework");
const { expect, $, browser } = require("@wdio/globals");

const androidPage = require("../pageobjects/Android/androidPage");
import iosLoginPage from "../pageobjects/iOS/loginPage";
import ManagingProvider from "../pageobjects/Web/CustomerAccount/managingProvider";
import TestUtils from "../pageobjects/testUtils";
import customerPage from "../pageobjects/Web/SuperAdmin/customerPage";
const pages = {
  login: androidPage,
};

// ==================================Android===========================================

Then(/^I should see a flash message saying (.*)$/, async (message) => {
  await expect(SecurePage.flashAlert).toBeExisting();
  await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
});

Then(/^Verify that user is on homepage$/, async () => {
  await androidPage.denySavePasswordPopup();
  await androidPage.videoAndPicPermissionPopup.click();
  await androidPage.clickOnRecordAudioPopup();
  await androidPage.deviceLocationPopup.click();
  await androidPage.notificationAlertPermission.click();
  await androidPage.clickOnOkButton();
  await androidPage.clickonbackbutton.click();
  await androidPage.verifyDashboard();
});

Then(/^Verify all the features inside vital signs$/, async () => {
  await androidPage.heartRateIsDisplayed();
  await androidPage.o2SaturationIsDisplayed();
  await androidPage.respiratoryRateDisplayed();
  await androidPage.TemperatureIsDisplayed();
  await androidPage.deviceStatusIsDisplayed();
});

Then(/^Verify all the features inside medical report$/, async () => {
  await androidPage.diagnosisIsDisplayed();
  await androidPage.medicationIsDisplayed();
  await androidPage.resultsIsDisplayed();
  await androidPage.trackerIsDisplayed();
  await androidPage.vaccinationsIsDisplayed();
  await androidPage.mediaIsDisplayed();
  await androidPage.documentsIsDisplayed();
  await androidPage.sendUsresultIsDisplayed();
});

Then(/^Verify all the tabs inside providers module$/, async () => {
  await androidPage.providerTabIsDisplayed();
  await androidPage.appointmentsTabIsDisplayed();
});

Then(/^Verify all the tabs inside settings module$/, async () => {
  await androidPage.myContactInformationIsDisplayed();
  await androidPage.myAccountIsDisplayed();
  await androidPage.myBabysInformationIsDisplayed();
  await androidPage.changeChildIsDisplayed();
  await androidPage.changePasswordIsDisplayed();
  await androidPage.clickOnModuleBackButton();
});

Then(/^Validation message appears (.*)$/, async (message) => {
  await androidPage.verifyMobileValidationMessage(message);
});

Then(/^User is not able to login$/, async () => {
  await androidPage.signInButton.waitForDisplayed({ timeout: 5000 });
  if ((await androidPage.signInButton.isDisplayed()) === true) {
    console.log("User is still on login page");
  } else {
    throw new Error("Login page is not displayed");
  }
});

Then(/^Verify that user is on FHDA moblie provider homepage$/, async () => {
  await androidPage.notificationAlertPermission.click();
  await androidPage.clickOnOkButton();
  await androidPage.clickonbackbutton.click();
  await androidPage.verifyFHDAMobileProviderDashboradIsDisplayed();
});

Then(/^A logout confirmation popup displays$/, async () => {
  if ((await androidPage.noButtonIsDisplayed()) === true) {
    console.log("✅ logout confirmation popup is visible");
  } else {
    throw new Error("❌ Failed to verify logout confirmation popup");
  }
});

Then(/^The logout confirmation popup closes and the provider remains logged in$/, async () => {
  if ((await androidPage.logoutOptionIsDisplayed()) === true) {
    console.log("✅ User is still login in the app");
  } else {
    throw new Error("❌ User has log out even after clicks 'No' button");
  }
});

Then(/^User get logged out from my account and gets navigated to login page$/, async () => {
  await androidPage.signInButton.waitForDisplayed({ timeout: 5000 });
  if ((await androidPage.signInButton.isDisplayed()) === true) {
    console.log("✅ User has successfully logout");
  } else {
    throw new Error("❌User is not able to log out");
  }
});

Then(/^The logout confirmation popup closes and provider remains logged in$/, async () => {
  if ((await androidPage.dashboardIsDisplayed()) === true) {
    console.log("✅ User is still login in the app");
  } else {
    throw new Error("❌ User has log out even after clicks 'No' button");
  }
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

Then(/^The updated Managing provider displays in the "Managing provider list" with updated (.*)$/, async (UpdatedProviderName) => {
  await ManagingProvider.verifyCreatedProvider(UpdatedProviderName);
});

Then(/^Verify inactive provider (.*) has removed from "Managing provider list"$/, async (UpdatedProviderName) => {
  await ManagingProvider.verifyUpdatedStatusProvider(UpdatedProviderName);
});

Then(/^The "Managing Provider" now displayed there in the "Inactive Managing Provider" list (.*)$/, async (UpdatedProviderName) => {
  await ManagingProvider.verifyCreatedProvider(UpdatedProviderName);
});

Then(/^Verify active provider (.*) has removed from "Inactive Managing provider list"$/, async (UpdatedProviderName) => {
  await ManagingProvider.verifyUpdatedStatusProvider(UpdatedProviderName);
});

Then(/^The "Managing Provider" now displayed there in the "Active Managing Provider" list (.*)$/, async (UpdatedProviderName) => {
  await ManagingProvider.verifyCreatedProvider(UpdatedProviderName);
});

Then(/^Move to manage provider window$/, async () => {
  await browser.closeWindow();
  await ManagingProvider.switchToParentTab();
});

//-------------------Supre admin(customer)-----------------------//

Then(/^I should redirect on url (.*)$/, {}, async (url) => {
  var data = TestUtils.getUserCredetials(url);
  await browser.pause(1000);
  var url = data[0];
  console.log("LOGIN PAGE URL:" + url);
  await browser.pause(2000);
  var data = TestUtils.getUserCredetials(url);
  await browser.pause(1000);
  var url = data[0];
  var actUrl = await browser.getUrl();
  if (actUrl.includes(url)) {
    console.log("Page url matched");
  } else {
    throw new Error("Filed to redirect on added url actual url>>" + actUrl + "expected url>>" + url);
  }
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

Then(/^Status should be displayed as (.*)$/, async (text) => {
  await customerPage.verifyCustomerStatus(text);
});

Then(/^I Search data (.*)$/, async (data) => {
  await customerPage.searchData(data);
});
