const { $, browser } = require("@wdio/globals");
const BasePage = require("../testBase");
const { remote } = require("webdriverio");
const customerPage = require("../SuperAdmin/customerPage");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ManagingProvider extends BasePage {
  get managingProviderLink() {
    return $("(//a[@title='Managing Providers'])[2]");
  }

  get newManagingProviderButton() {
    return $("//div//button[contains(text(),'New Managing Provider')]");
  }

  get nameField() {
    return $("#mother_first_name");
  }

  get emailField() {
    return $("#mother_email");
  }

  get closeButton() {
    return $("//button[@class='btn btn-default']");
  }

  get mobileNumberField() {
    return $("#mother_mobile_number");
  }

  get websiteField() {
    return $("#website");
  }

  get officeNumberField() {
    return $("#office_number");
  }

  get officeInformation() {
    return $("#office_information");
  }

  get stateField() {
    return $("#state");
  }

  get cityField() {
    return $("#city");
  }

  get addressField() {
    return $("#address");
  }

  get zipCodeField() {
    return $("#zipcode");
  }

  get createButton() {
    return $("#createBtn:nth-child(2)");
  }

  get searchField() {
    return $("input[type='search']");
  }

  get deleteButton() {
    return $("(//a[@title='Delete'])[1]");
  }

  get deleteProviderMessage() {
    return $("//div[contains(text(),'Managing Provider Deleted !!')]");
  }

  get viewOrUpdateButton() {
    return $("(//a[@title='View / Update'])[1]");
  }

  get updateProviderPage() {
    return $("//section[@class='content-header text-center']//h1");
  }

  get backButton() {
    return $("#cancelBtn:nth-child(1)");
  }

  get updatedButton() {
    return $("#updateBtn:nth-child(2)");
  }

  async managingProviderIsDisplayed() {
    await this.managingProviderLink.waitForDisplayed({ timeut: 25000 });
    return await this.managingProviderLink.isDisplayed();
  }

  async clickOnManagingProviderTab() {
    if ((await this.managingProviderIsDisplayed()) === true) {
      await this.managingProviderLink.click();
    } else {
      throw new Error("Managing provider is not displayed on homepage");
    }
  }

  async newManagingProviderButtonIsDisplayed() {
    await this.newManagingProviderButton.waitForDisplayed({ timeout: 35000 });
    return await this.newManagingProviderButton.isDisplayed();
  }

  async clickOnNewManagingProviderButton() {
    if ((await this.newManagingProviderButtonIsDisplayed()) === true) {
      await this.newManagingProviderButton.click();
    } else {
      throw new Error("New Managing Provider Button is not displayed");
    }
  }

  async closeButtonIsDisplayed() {
    await this.closeButton.waitForDisplayed({ timeout: 25000 });
    return await this.closeButton.isDisplayed();
  }

  async clickOnCloseButton() {
    if ((await this.closeButtonIsDisplayed()) === true) {
      await this.closeButton.click();
    } else {
      throw new Error("Close button is not displayed on managing provider form");
    }
  }

  async verifyClosedForm() {
    await this.nameField.waitForDisplayed({ reverse: true, timeout: 20000 });
    if ((await this.nameField.isDisplayed()) === false) {
      console.log("New Managing Provider form has successfully closed");
    } else {
      throw new Error("Managing provider form is still displayed after clicked on the close button");
    }
  }

  async nameFieldIsDisplayed() {
    await this.nameField.waitForDisplayed({ timeout: 25000 });
    return await this.nameField.isDisplayed();
  }

  async fillNameField(Data) {
    await this.nameField.waitForDisplayed({ timeout: 20000 });
    await this.nameField.click();
    await this.nameField.clearValue();
    await this.nameField.setValue(Data);
  }

  async fillEmailField(Data) {
    await this.emailField.waitForDisplayed({ timeout: 20000 });
    await this.emailField.setValue(Data);
  }

  async fillMoblieNumberField(Data) {
    await browser.scroll(0, -200);
    await this.mobileNumberField.waitForDisplayed({ timeout: 20000 });
    await this.mobileNumberField.click();
    await browser.keys(["Control", "a"]);
    await browser.keys(["Delete"]);
    await this.mobileNumberField.setValue(Data);
  }

  async fillWebsiteField(Data) {
    await this.websiteField.waitForDisplayed({ timeout: 20000 });
    await this.websiteField.setValue(Data);
  }

  async fillOfficeNumberField(Data) {
    await browser.scroll(0, -200);
    await this.officeNumberField.waitForDisplayed({ timeout: 20000 });
    await this.officeNumberField.click();
    await browser.keys(["Control", "a"]);
    await browser.keys(["Delete"]);
    await this.officeNumberField.setValue(Data);
  }

  async fillzipCodeField(Data) {
    await this.zipCodeField.waitForDisplayed({ timeout: 20000 });
    await this.zipCodeField.setValue(Data);
  }

  async fillOfficeInformationField(Data) {
    await this.officeInformation.waitForDisplayed({ timeout: 20000 });
    await this.officeInformation.setValue(Data);
  }

  async fillStateField(Data) {
    await this.stateField.waitForDisplayed({ timeout: 20000 });
    await this.stateField.setValue(Data);
  }

  async fillCityField(Data) {
    await this.cityField.waitForDisplayed({ timeout: 20000 });
    await this.cityField.setValue(Data);
  }

  async fillAddressField(Data) {
    await this.addressField.waitForDisplayed({ timeout: 20000 });
    await this.addressField.setValue(Data);
  }

  async verifyCreatedProvider(name) {
    await this.searchField.clearValue();
    await this.searchField.setValue(name);
    await $("(//tr[@class='odd']//td)[2]").click();
    await $("(//tr[@class='odd']//td)[2]").waitForDisplayed({ timeout: 25000 });
    var actualName = await $("(//tr[@class='odd']//td)[2]").getText();
    await expect(actualName).toEqual(name);
  }

  async verifySuccessMessage(text) {
    const messageText = await $("//div[contains(text(),'" + text + "')]");
    await messageText.waitForDisplayed({ timeout: 20000 });
    if ((await messageText.isDisplayed()) === true) {
      console.log("Success message displaying successfully " + text);
    } else {
      throw new Error("Success message is not displaying: " + text);
    }
    await messageText.waitForDisplayed({ reverse: true, timeout: 20000 });
  }

  async searchAndDeleteAddedProvider(text) {
    await this.searchField.clearValue();
    await this.searchField.setValue(text);
    try {
      await $("//td[contains(text(),'" + text + "')]").click();
      await $("//td[contains(text(),'" + text + "')]").waitForDisplayed({ timeout: 25000 });
      await this.deleteButton.waitForDisplayed({ timeout: 20000 });
      await this.deleteButton.click();
      await customerPage.clickOnButtonWithText("Yes");
      await this.deleteProviderMessage.waitForDisplayed({ timeout: 20000 });
      await this.deleteProviderMessage.waitForDisplayed({ reverse: true, timeout: 20000 });
    } catch (error) {}
  }

  async fillEmailFieldWithUniqueEmail() {
    const randomEmail = `user${Date.now()}@example.com`;
    if ((await this.emailField.isDisplayed()) === true) {
      await this.emailField.click();
      await this.emailField.clearValue();
      await this.emailField.setValue(randomEmail);
      console.log("email field is displaying");
    } else {
      throw new Error("email field is not displaying");
    }
  }

  async clickOnViewOrUpdateButton() {
    await this.viewOrUpdateButton.waitForExist({ timeout: 25000 });
    await browser.pause(1000);
    await this.viewOrUpdateButton.click();
  }

  async updateProviderPageIsDisplayed() {
    await this.updateProviderPage.waitForDisplayed({ timeout: 20000 });
    if ((await this.updateProviderPage.isDisplayed()) === true) {
      console.log("User is on update provider page");
    } else {
      throw new Error("Update provider page is not displaying");
    }
  }

  async clickOnBackButton() {
    await this.backButton.waitForDisplayed({ timeout: 20000 });
    await this.backButton.click();
  }

  async clickOnUpdateButton() {
    await this.updatedButton.waitForDisplayed({ timeout: 20000 });
    await this.updatedButton.click();
  }

  async clickOnLink(text) {
    await $("//a[contains(text(),'" + text + "')]").waitForDisplayed({ timeout: 25000 });
    await $("//a[contains(text(),'" + text + "')]").click();
    await customerPage.clickOnButtonWithText("Yes");
  }

  async verifyUpdatedStatusProvider(text) {
    if ((await $("//td[contains(text(),'" + text + "')]").isDisplayed()) === true) {
      throw new Error("❌ Provider is still visible in the list");
    } else {
      console.log("✅ provider has removed from the list");
    }
  }

  async switchToWindowNewTab() {
    var handle = await browser.getWindowHandles();
    console.log("Mutiple Windows handle " + handle);
    try {
      await browser.switchToWindow(handle[1]);
    } catch (error) {}
  }

  async switchToParentTab() {
    var handle = await browser.getWindowHandles();
    console.log("Mutiple Windows handle " + handle);
    await browser.switchToWindow(handle[0]);
  }

  async searchCreatedProvider(text) {
    await this.searchField.clearValue();
    await this.searchField.setValue(text);
    await browser.pause(1000);
    await $("//td[contains(text(),'" + text + "')]").click();
    await $("//td[contains(text(),'" + text + "')]").waitForDisplayed({ timeout: 25000 });
  }
}
module.exports = new ManagingProvider();
