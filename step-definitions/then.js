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

Then(/^Verify that user is on homepage$/, async ()=>{
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

Then(/^Verify all the features inside vital signs$/, async()=>{
   await LoginPage.heartRateIsDisplayed();
   await LoginPage.o2SaturationIsDisplayed();
   await LoginPage.respiratoryRateDisplayed();
   await LoginPage.TemperatureIsDisplayed();
   await LoginPage.deviceStatusIsDisplayed();
})

Then (/^Verify all the features inside medical report$/, async()=>{
   await LoginPage.diagnosisIsDisplayed();
   await LoginPage.medicationIsDisplayed();
   await LoginPage.resultsIsDisplayed();
   await LoginPage.trackerIsDisplayed();
   await LoginPage.vaccinationsIsDisplayed();
   await LoginPage.mediaIsDisplayed();
   await LoginPage.documentsIsDisplayed();
   await LoginPage.sendUsresultIsDisplayed();
})

Then(/^Verify all the tabs inside providers module$/, async()=>{
  await LoginPage.providerTabIsDisplayed();
  await LoginPage.appointmentsTabIsDisplayed();
})

Then(/^Verify all the tabs inside settings module$/, async()=>{
  await LoginPage.myContactInformationIsDisplayed();
  await LoginPage.myAccountIsDisplayed();
  await LoginPage.myBabysInformationIsDisplayed();
  await LoginPage.changeChildIsDisplayed();
  await LoginPage.changePasswordIsDisplayed();
})















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
