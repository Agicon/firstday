const { Then } = require('@wdio/cucumber-framework');
const { expect, $, browser } = require('@wdio/globals')

const LoginPage = require('../pageobjects/Android/loginPage');
import iosLoginPage from "../pageobjects/iOS/loginPage";
import TestUtils from "../pageobjects/testUtils";
import customerPage from "../pageobjects/Web/SuperAdmin/customerPage";
const pages = {
  login: LoginPage

}

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
})

Then(/^Verify all the features inside vital signs$/, async () => {
  await LoginPage.heartRateIsDisplayed();
  await LoginPage.o2SaturationIsDisplayed();
  await LoginPage.respiratoryRateDisplayed();
  await LoginPage.TemperatureIsDisplayed();
  await LoginPage.deviceStatusIsDisplayed();
})

Then(/^Verify all the features inside medical report$/, async () => {
  await LoginPage.diagnosisIsDisplayed();
  await LoginPage.medicationIsDisplayed();
  await LoginPage.resultsIsDisplayed();
  await LoginPage.trackerIsDisplayed();
  await LoginPage.vaccinationsIsDisplayed();
  await LoginPage.mediaIsDisplayed();
  await LoginPage.documentsIsDisplayed();
  await LoginPage.sendUsresultIsDisplayed();
})

Then(/^Verify all the tabs inside providers module$/, async () => {
  await LoginPage.providerTabIsDisplayed();
  await LoginPage.appointmentsTabIsDisplayed();
})

Then(/^Verify all the tabs inside settings module$/, async () => {
  await LoginPage.myContactInformationIsDisplayed();
  await LoginPage.myAccountIsDisplayed();
  await LoginPage.myBabysInformationIsDisplayed();
  await LoginPage.changeChildIsDisplayed();
  await LoginPage.changePasswordIsDisplayed();
})

// ---------------------------------------------------iOS-------------------------------------

Then(/^For iOS, verify that user is on homepage$/, async () => {
  await iosLoginPage.clickOnFirstChildOption();
  if (await iosLoginPage.homepageIsDisplayed() === true) {
    console.log("User successfully redirected to homepage")
  }
  else {
    throw new Error("Homepage is not displayed");
  }

})



//-------------------Supre admin(customer)-----------------------//

Then(/^I should redirect on url (.*)$/, {}, async (url) => {
  var data = TestUtils.getUserCredetials(url); //Retrive data from excel
  await browser.pause(1000);
  var url = data[0];
  console.log('LOGIN PAGE URL:' + url);
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
  await customerPage.newCustomerButtonIsDisplayed();
});


Then(/^validation message (.*) appears$/, async (message) => {
  await customerPage.verifyValidationMessage(message);
});

Then(/^A "New Customer" form closes$/, async () => {
  await customerPage.verifyClosedCustomerForm();
});

