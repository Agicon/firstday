const { $, browser } = require("@wdio/globals");
const BasePage = require("../testBase");
const { remote } = require("webdriverio");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MangingProvider extends BasePage {
  get managingProviderLink() {
    return $("(//a[@title='Managing Providers'])[2]");
  }

  get newManagingProviderButton() {
    return $("(//div[@class='col-md-3 pr-0'])[2]");
  }

  get nameField() {
    return $("//input[@id='mother_first_name']");
  }

  get emailField() {
    return $("#mother_email");
  }

  get closeButton() {
    return $("//button[@class='btn btn-default']");
  }

  get mobileNumberField() {
    return $("input[id='mother_mobile_number']");
  }

  get websiteField() {
    return $("input[id='website']");
  }

  get officeNumberField() {
    return $("input[id='office_number']");
  }

  get officeInformation() {
    return $("textarea[id='office_information']");
  }

  get stateField() {
    return $("input[id='state']");
  }

  get cityField() {
    return $("input[id='city']");
  }

  get addressField() {
    return $("textarea[id='address']");
  }

  get zipCodeField() {
    return $("input[id='zipcode']");
  }

  get createButton() {
    return $("button[id='createBtn']");
  }

  async managingProviderIsDisplayed() {
    await this.managingProviderLink.waitForDisplayed({ timeut: 25000 });
    return this.managingProviderLink.isDisplayed();
  }

  async clickOnManagingProviderTab() {
    if ((await this.managingProviderIsDisplayed()) === true) {
      await this.managingProviderLink.click();
    } else {
      throw new Error("Managing provider is not displayed on homepage");
    }
  }

  async newManagingProviderButtonIsDisplayed() {
    await this.newManagingProviderButton.waitForDisplayed({ timeout: 25000 });
    return this.newManagingProviderButton.isDisplayed();
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
      throw new Error(
        "Close button is not displayed on managing provider form"
      );
    }
  }

  async verifyClosedForm() {
    await this.nameField.waitForDisplayed({ reverse: true, timeout: 20000 });
    if ((await this.nameField.isDisplayed()) === false) {
      console.log("New Managing Provider form has successfully closed");
    } else {
      throw new Error(
        "Managing provider form is still displayed after clicked on the close button"
      );
    }
  }

  async nameFieldIsDisplayed() {
    await this.nameField.waitForDisplayed({ timeout: 20000 });
    return this.nameField.isDisplayed();
  }

  async fillNameField(Data) {
    await this.nameField.waitForDisplayed({ timeout: 20000 });
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
}
module.exports = new MangingProvider();
