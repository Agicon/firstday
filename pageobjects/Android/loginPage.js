const { $, browser } = require("@wdio/globals");
const { remote } = require("webdriverio");
const BasePage = require("./testBase");
import TestUtils from "../testUtils";


class LoginPage extends BasePage {
  get emailField() {
    return $('//android.widget.EditText[@resource-id="com.app.neonatal.staging:id/ed_login_email"]|//android.widget.EditText[@resource-id="com.firsthc.alert.staging:id/edt_email"]');
  }
  get paswordField() {
    return $('//android.widget.EditText[@resource-id="com.app.neonatal.staging:id/ed_login_pass"]|//android.widget.EditText[@resource-id="com.firsthc.alert.staging:id/edt_password"]');
  }

  get signInWithGoogleButton() {
    return $('//android.widget.Button[@content-desc="Sign in with Google"]');
  }

  get loggedinGoogleAccount() {
    return $('(//android.widget.LinearLayout[@resource-id="com.google.android.gms:id/container"])[1]');
  }

  get signInButton() {
    return $('//android.widget.TextView[@resource-id="com.app.neonatal.staging:id/text"]|//android.widget.TextView[@resource-id="com.firsthc.alert.staging:id/text"]');
  }

  get noThanksButton() {
    return $("//*[@resource-id='android:id/autofill_dialog_no']");
  }

  get firstChild() {
    return $("(//android.widget.RadioButton)[1]");
  }

  get savePasswordOption() {
    return $("//android.widget.Button[@resource-id='android:id/autofill_save_no']");
  }

  get videoAndPicPermissionPopup() {
    return $("//android.widget.Button[@resource-id='com.android.permissioncontroller:id/permission_deny_button']");
  }

  get recordAudioPopup() {
    return $("(//android.widget.Button)[3]");
  }

  get deviceLocationPopup() {
    return $("//android.widget.Button[@resource-id='com.android.permissioncontroller:id/permission_deny_button']");
  }

  get notificationAlertPermission() {
    return $("//android.widget.Button[@resource-id='com.android.permissioncontroller:id/permission_allow_button']");
  }

  get okButton() {
    return $("//android.widget.Button");
  }

  get clickonbackbutton() {
    return $("android.widget.ImageButton");
  }

  get dashboard() {
    return $("(//android.widget.TextView)[1]");
  }

  get vitalSign() {
    return $("(//android.widget.TextView)[2]");
  }

  get medicalRecord() {
    return $("(//android.widget.TextView)[3]");
  }

  get backButton() {
    return $("(//android.widget.ImageView)[1]");
  }

  get diagnosis() {
    return $("(//android.widget.TextView)[3]");
  }

  get medication() {
    return $("(//android.widget.TextView)[4]");
  }

  get results() {
    return $("(//android.widget.TextView)[5]");
  }

  get tracker() {
    return $("(//android.widget.TextView)[6]");
  }

  get vaccinations() {
    return $("(//android.widget.TextView)[7]");
  }

  get media() {
    return $("(//android.widget.TextView)[8]");
  }

  get documents() {
    return $("(//android.widget.TextView)[9]");
  }

  get sendUsresult() {
    return $("(//android.widget.TextView)[10]");
  }

  get provider() {
    return $("(//android.widget.TextView)[4]");
  }

  get providerTab() {
    return $("(//android.widget.TextView)[2]");
  }

  get appointmentsTab() {
    return $("(//android.widget.TextView)[3]");
  }

  get settingsModule() {
    return $("(//android.widget.TextView)[7]");
  }

  get myContactInformation() {
    return $("(//android.widget.TextView)[2]");
  }

  get myAccount() {
    return $("(//android.widget.TextView)[3]");
  }

  get myBabysInformation() {
    return $("(//android.widget.TextView)[4]");
  }

  get changeChild() {
    return $("(//android.widget.TextView)[5]");
  }

  get changePassword() {
    return $("(//android.widget.TextView)[6]");
  }

  get FHDAMobileProviderDashborad() {
    return $("(//android.widget.TextView)[94]");
  }

  get settingsTab() {
    return $("(//android.widget.TextView)[97]");
  }

  get logoutOption() {
    return $('//android.widget.TextView[@text="Logout"]');
  }

  get noButton() {
    return $('//android.widget.Button[@resource-id="com.firsthc.alert.staging:id/btn_no"]');
  }

  get iAgreeCheckbox() {
    return $("android.widget.CheckBox");
  }

  get openAppButton() {
    return $("android.widget.Button");
  }

  get downloadAppButton() {
    return $("//android.widget.TextView[@resource-id='dev.firebase.appdistribution:id/download_label']");
  }

  get updateAppButton() {
    return $("//android.widget.Button[@resource-id='android:id/button1']");
  }

  async login(userName) {
    var data = TestUtils.getUserCredetials(userName);
    await browser.pause(2000);
    var username = data[0];
    var password = data[1];
    await this.emailField.waitForDisplayed({ timeout: 20000 });
    await this.emailField.click();
    await this.verifyNoThanksPopup();
    await this.emailField.setValue(username);
    await this.paswordField.click();
    await this.paswordField.setValue(password);
    await this.signInButton.click();
  }

  async installBuild(app) {
    await this.signInWithGoogleButton.waitForDisplayed({ timeout: 20000 });
    await this.signInWithGoogleButton.click();
    await this.loggedinGoogleAccount.waitForDisplayed({ timeout: 20000 });
    await this.loggedinGoogleAccount.click();

    await $("//android.widget.TextView[@text='" + app + "']").waitForDisplayed({ timeout: 40000 });
    await $("//android.widget.TextView[@text='" + app + "']").click();
    await browser.pause(5);
    try {
      await this.iAgreeCheckbox.click();
      await this.openAppButton.waitForDisplayed({ timeout: 5000 });
      await this.openAppButton.click();
      await this.downloadAppButton.waitForDisplayed({ timeout: 250000 });
      await this.downloadAppButton.click();
      await this.updateAppButton.waitForDisplayed({ timeout: 90000 });
      await this.updateAppButton.click();
    } catch (error) {}
    await this.openAppButton.waitForDisplayed({ timeout: 90000 });
    await this.openAppButton.click();
    await browser.pause(5);
  }

  async open() {
    await browser.url("https://webdriver.io/");
  }

  async returnText() {
    var actAtt = await this.search.getAttribute("label");
    return actAtt;
  }

  async verifyFirstChild() {
    await this.firstChild.waitForDisplayed({ timeout: 25000 });
    return this.firstChild.isDisplayed();
  }

  async clickOnFirstChild() {
    if ((await this.verifyFirstChild()) === true) {
      await this.firstChild.click();
    } else {
      throw new Error("First child option is not displayed");
    }
  }

  async denySavePasswordPopup() {
    try {
      await this.savePasswordOption.waitForDisplayed({ timeout: 5000 });
      await this.savePasswordOption.click();
    } catch (error) {}
  }

  async clickOnRecordAudioPopup() {
    await this.recordAudioPopup.waitForDisplayed({ timeout: 20000 });
    await this.recordAudioPopup.click();
  }

  async clickOnOkButton() {
    await this.okButton.waitForDisplayed({ timeout: 20000 });
    await this.okButton.click();
  }

  async dashboardIsDisplayed() {
    await this.dashboard.waitForDisplayed({ timeout: 25000 });
    return this.dashboard.isDisplayed();
  }

  async verifyDashboard() {
    if ((await this.dashboardIsDisplayed()) === true) {
      console.log("User successfully redirected to homepage");
    } else {
      throw new Error("Dashboard is not displayed");
    }
  }

  async verifyNoThanksPopup() {
    try {
      await this.noThanksButton.waitForDisplayed({ timeout: 5000 });
      await this.noThanksButton.click();
    } catch (error) {}
  }

  async patientVitalSigns() {
    const patientVital = await $("(//android.widget.TextView)[2]");
    await patientVital.waitForDisplayed({ timeout: 25000 });
    var actualText = await patientVital.getText();
    var expectedText = "Patient's Vital Signs";
    if (expectedText.includes(actualText)) {
      console.log("First module of app is verified");
    } else {
      console.log("First module is not verified on homepage Expected " + expectedText + " Actual " + actualText);
    }
  }

  async patientVitalIsDisplayed() {
    await this.vitalSign.waitForDisplayed({ timeout: 25000 });
    return await this.vitalSign.isDisplayed();
  }

  async clickOnPatientsVitalSigns() {
    if ((await this.patientVitalIsDisplayed()) === true) {
      await this.vitalSign.click();
    } else {
      throw new Error("Failed to click on patient's vital signs module on homepage");
    }
  }

  async clickOnModuleBackButton() {
    await this.backButton.waitForDisplayed({ timeout: 25000 });
    await this.backButton.click();
  }

  async patientsMedicalRecord() {
    const medicalRecord = await $("(//android.widget.TextView)[3]");
    await medicalRecord.waitForDisplayed({ timeout: 25000 });
    let actualText = await medicalRecord.getText();
    let expectedText = "Patient's Medical Record";
    if (actualText.includes(expectedText)) {
      console.log("Second module of healthcare app is matching");
    } else {
      console.log("Second module is not verified on homepage Expected " + expectedText + " Actual " + actualText);
    }
  }

  async medicalRecordIsDisplayed() {
    await this.medicalRecord.waitForDisplayed({ timeout: 25000 });
    return await this.medicalRecord.isDisplayed();
  }

  async clickOnMedicalReport() {
    if ((await this.medicalRecordIsDisplayed()) === true) {
      await this.medicalRecord.click();
    } else {
      throw new Error("Medical record is not displayed on homepage");
    }
  }

  async patientsProviders() {
    const providers = await $("(//android.widget.TextView)[4]");
    await providers.waitForDisplayed({ timeout: 25000 });
    let actualText = await providers.getText();
    let expectedText = "Patient's Providers";
    if (actualText.includes(expectedText)) {
      console.log("Third module of healthcare app is matching");
    } else {
      console.log("Third module is not verified on homepage Expected " + expectedText + " Actual " + actualText);
    }
  }

  async needHelp() {
    const help = await $("(//android.widget.TextView)[5]");
    await help.waitForDisplayed({ timeout: 25000 });
    let actualText = await help.getText();
    let expectedText = "I need help";
    if (actualText.includes(expectedText)) {
      console.log("Fourth module of healthcare app is matching");
    } else {
      console.log("Fourth module is not verified on homepage Expected " + expectedText + " Actual " + actualText);
    }
  }

  async patientsVideoCamera() {
    const videoCamera = await $("(//android.widget.TextView)[6]");
    await videoCamera.waitForDisplayed({ timeout: 25000 });
    let actualText = await videoCamera.getText();
    let expectedText = "Patient's Video Camera";
    if (actualText.includes(expectedText)) {
      console.log("Fifth module of healthcare app is matching");
    } else {
      console.log("Fifth module is not verified on homepage Expected " + expectedText + " Actual " + actualText);
    }
  }

  async settings() {
    const settings = await $("(//android.widget.TextView)[7]");
    await settings.waitForDisplayed({ timeout: 25000 });
    let actualText = await settings.getText();
    let expectedText = "Settings";
    if (actualText.includes(expectedText)) {
      console.log("Sixth module of healthcare app is matching");
    } else {
      console.log("Sixth module is not verified on homepage Expected " + expectedText + " Actual " + actualText);
    }
  }

  async heartRateIsDisplayed() {
    const heartRate = await $("(//android.widget.TextView)[3]");
    await heartRate.waitForDisplayed({ timeout: 25000 });
    let actualText = await heartRate.getText();
    let expectedText = "Heart Rate";
    if (actualText.includes(expectedText)) {
      console.log("Heart rate is displayed inside patient vital signs");
    } else {
      console.log("Heart rate is not displayed inside patient vital signs " + expectedText + " Actual " + actualText);
    }
  }

  async o2SaturationIsDisplayed() {
    const o2Saturation = await $("(//android.widget.TextView)[5]");
    await o2Saturation.waitForDisplayed({ timeout: 25000 });
    let actualText = await o2Saturation.getText();
    let expectedText = "O2 Saturation";
    if (actualText.includes(expectedText)) {
      console.log("O2 Saturation is displayed inside patient vital signs");
    } else {
      console.log("O2 Saturation is not displayed inside patient vital signs " + expectedText + " Actual " + actualText);
    }
  }

  async respiratoryRateDisplayed() {
    const respiratoryRate = await $("(//android.widget.TextView)[7]");
    await respiratoryRate.waitForDisplayed({ timeout: 25000 });
    let actualText = await respiratoryRate.getText();
    let expectedText = "Respiratory Rate";
    if (actualText.includes(expectedText)) {
      console.log("Respiratory Rate is displayed inside patient vital signs");
    } else {
      console.log("Respiratory Rate is not displayed inside patient vital signs " + expectedText + " Actual " + actualText);
    }
  }

  async TemperatureIsDisplayed() {
    const Temp = await $("(//android.widget.TextView)[9]");
    await Temp.waitForDisplayed({ timeout: 25000 });
    let actualText = await Temp.getText();
    let expectedText = "Temperature";
    if (actualText.includes(expectedText)) {
      console.log("Temperature is displayed inside patient vital signs");
    } else {
      console.log("Temperature is not displayed inside patient vital signs " + expectedText + " Actual " + actualText);
    }
  }

  async deviceStatusIsDisplayed() {
    const status = await $("(//android.widget.TextView)[9]");
    await status.waitForDisplayed({ timeout: 25000 });
    let actualText = await status.getText();
    let expectedText = "Device Status";
    if (actualText.includes(expectedText)) {
      console.log("Device Status is displayed inside patient vital signs");
    } else {
      console.log("Device Status is not displayed inside patient vital signs " + expectedText + " Actual " + actualText);
    }
  }

  async diagnosisIsDisplayed() {
    await this.diagnosis.waitForDisplayed({ timeout: 25000 });
    return await this.diagnosis.isDisplayed();
  }

  async medicationIsDisplayed() {
    await this.medication.waitForDisplayed({ timeout: 25000 });
    return await this.medication.isDisplayed();
  }

  async resultsIsDisplayed() {
    await this.results.waitForDisplayed({ timeout: 25000 });
    return await this.results.isDisplayed();
  }

  async trackerIsDisplayed() {
    await this.tracker.waitForDisplayed({ timeout: 25000 });
    return await this.tracker.isDisplayed();
  }

  async vaccinationsIsDisplayed() {
    await this.vaccinations.waitForDisplayed({ timeout: 25000 });
    return await this.vaccinations.isDisplayed();
  }

  async mediaIsDisplayed() {
    await this.media.waitForDisplayed({ timeout: 25000 });
    return await this.media.isDisplayed();
  }

  async documentsIsDisplayed() {
    await this.documents.waitForDisplayed({ timeout: 25000 });
    return await this.documents.isDisplayed();
  }

  async sendUsresultIsDisplayed() {
    await this.sendUsresult.scrollIntoView();
    await this.sendUsresult.waitForDisplayed({ timeout: 25000 });
    return await this.sendUsresult.isDisplayed();
  }

  async providerIsDisplayed() {
    await this.provider.waitForDisplayed({ timeout: 25000 });
    return await this.provider.isDisplayed();
  }

  async clickOnProvider() {
    if ((await this.providerIsDisplayed()) === true) {
      await this.provider.click();
    } else {
      throw new Error("Provider module is not displayed");
    }
  }

  async providerTabIsDisplayed() {
    await this.providerTab.waitForDisplayed({ timeout: 25000 });
    return await this.providerTab.isDisplayed();
  }

  async appointmentsTabIsDisplayed() {
    await this.appointmentsTab.waitForDisplayed({ timeout: 25000 });
    return await this.appointmentsTab.isDisplayed();
  }

  async settingsModuleIsDisplayed() {
    await this.settingsModule.waitForDisplayed({ timeout: 25000 });
    return await this.settingsModule.isDisplayed();
  }

  async clickOnSettingsModule() {
    if ((await this.settingsModuleIsDisplayed()) === true) {
      await this.settingsModule.click();
    }
  }

  async myContactInformationIsDisplayed() {
    await this.myContactInformation.waitForDisplayed({ timeout: 25000 });
    return await this.myContactInformation.isDisplayed();
  }

  async myAccountIsDisplayed() {
    await this.myAccount.waitForDisplayed({ timeout: 25000 });
    return await this.myAccount.isDisplayed();
  }

  async myBabysInformationIsDisplayed() {
    await this.myBabysInformation.waitForDisplayed({ timeout: 25000 });
    return await this.myBabysInformation.isDisplayed();
  }

  async changeChildIsDisplayed() {
    await this.changeChild.waitForDisplayed({ timeout: 25000 });
    return await this.changeChild.isDisplayed();
  }

  async changePasswordIsDisplayed() {
    await this.changePassword.waitForDisplayed({ timeout: 25000 });
    return await this.changePassword.isDisplayed();
  }

  async fillEmailField(email) {
    await this.emailField.click();
    await this.verifyNoThanksPopup();
    await this.emailField.clearValue();
    await this.emailField.setValue(email);
  }

  async fillPasswordField(password) {
    await this.paswordField.click();
    await this.verifyNoThanksPopup();
    await this.paswordField.clearValue();
    await this.paswordField.setValue(password);
    await this.paswordField.click();
  }

  async FHDAMobileProviderDashboradIsDisplayed() {
    await this.FHDAMobileProviderDashborad.waitForDisplayed({ timeout: 20000 });
    return await this.FHDAMobileProviderDashborad.isDisplayed();
  }

  async verifyFHDAMobileProviderDashboradIsDisplayed() {
    if ((await this.FHDAMobileProviderDashboradIsDisplayed()) === true) {
      console.log("User is successfully redirected to homepage");
    } else {
      throw new Error("Failed to redirect on dashboard");
    }
  }

  async settingsTAbIsDisplayed() {
    await this.settingsTab.waitForDisplayed({ timeout: 20000 });
    return await this.settingsTab.isDisplayed();
  }

  async clickOnSettingsTAb() {
    if ((await this.settingsTAbIsDisplayed()) === true) {
      await this.settingsTab.click();
    } else {
      throw new Error("❌ Failed to click on settings tab");
    }
  }

  async logoutOptionIsDisplayed() {
    await this.logoutOption.waitForDisplayed({ timeout: 20000 });
    return await this.logoutOption.isDisplayed();
  }

  async clickOnLogoutOption() {
    if ((await this.logoutOptionIsDisplayed()) === true) {
      await this.logoutOption.click();
    } else {
      throw new Error("❌ logout option is not visible");
    }
  }

  async noButtonIsDisplayed() {
    await this.noButton.waitForDisplayed({ timeout: 20000 });
    return await this.noButton.isDisplayed();
  }

  async clickOnButtonWithText(text) {
    const buttonText = await $("//android.widget.Button[contains(@text,'" + text + "')]");
    await buttonText.waitForDisplayed({ timeout: 20000 });
    if ((await buttonText.isDisplayed()) === true) {
      await buttonText.click();
    } else {
      throw new Error("❌ Button is not displaying: " + text);
    }
  }

  async verifyMobileValidationMessage(text) {
    const messageText1 = await $("//android.widget.Toast");
    var actualMessage = await messageText1.getText();
    await expect(actualMessage).toEqual(text);
  }
}
module.exports = new LoginPage();
