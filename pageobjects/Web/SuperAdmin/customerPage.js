const { $, browser } = require("@wdio/globals");
const BasePage = require("../testBase");
const { remote } = require("webdriverio");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CustomerPage extends BasePage {
  /**
   * define selectors using getter methods
   */

  get customerLink() {
    return $('(//a[@title="customers"])[2]');
  }

  get newCustomerButton() {
    return $('button[data-target="#myModal"]');
  }
  get newCustomerForm() {
    return $('form[id="newCustomer"]');
  }

  get clinicNameField() {
    return $("#clinic_name");
  }

  get firstNameField() {
    return $("#mother_first_name");
  }
  get lastNameField() {
    return $("#mother_last_name");
  }
  get emailField() {
    return $("#mother_email");
  }
  get officeNumberField() {
    return $("#office_number");
  }
  get phoneNumberField() {
    return $("#mother_mobile_number");
  }
  get officeInformationField() {
    return $("#office_information");
  }
  get addressField() {
    return $("#address");
  }
  get countryField() {
    return $("#country");
  }

  get stateField() {
    return $("#state");
  }
  get cityField() {
    return $("#city");
  }
  get zipCodeField() {
    return $("#zipcode");
  }

  get numberOfLicenceField() {
    return $("#no_of_licence");
  }
  get expiryField() {
    return $("#expiry_date");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */

  async clickOnCustomerLink() {
    await this.customerLink.waitForDisplayed({ timeout: 20000 });
    await this.customerLink.click();
  }

  async newCustomerButtonIsDisplayed() {
    if ((await this.newCustomerButton.isDisplayed()) === true) {
      console.log("successfully redirect on cuctomer page");
    } else {
      throw new Error("Failed to redirect on customer page");
    }
  }

  async clickOnNewCustomerButton() {
    if ((await this.newCustomerButton.isDisplayed()) === true) {
      await this.newCustomerButton.click();
      console.log("successfully redirect on cuctomer page");
    } else {
      throw new Error("Failed to redirect on customer page");
    }
  }

  async newCustomerFormIsDisplayed() {
    if ((await this.newCustomerForm.isDisplayed()) === true) {
      console.log("successfully redirect on cuctomer form");
    } else {
      throw new Error("Failed to redirect on customer form");
    }
  }

  async clickOnButtonWithText(text) {
    const buttonText = await $("//button[contains(text(),'" + text + "')]");
    await buttonText.waitForDisplayed({ timeout: 20000 });
    if ((await buttonText.isDisplayed()) === true) {
      await buttonText.click(); // No need for `this.buttonText`
    } else {
      throw new Error("Button is not displaying: " + text);
    }
  }
  async verifyValidationMessage(text) {
    const messageText = await $("//span[contains(text(),'" + text + "')]");
    await messageText.waitForDisplayed({ timeout: 20000 });
    if ((await messageText.isDisplayed()) === true) {
      console.log("validation message displaying successfully");
    } else {
      throw new Error("Validation message is not displaying: " + text);
    }
  }
  async verifyClosedCustomerForm() {
    await this.newCustomerForm.waitForDisplayed({
      reverse: true,
      timeout: 20000,
    });
    if ((await this.newCustomerForm.isDisplayed()) === false) {
      console.log("cuctomer form successfully close");
    } else {
      throw new Error(
        "Failed to close customer form after clicking on close button"
      );
    }
  }

  async fillClinicNameField(data) {
    if ((await this.clinicNameField.isDisplayed()) === true) {
      await this.clinicNameField.click();
      await this.clinicNameField.setValue(data);
      console.log("clinic name field is displaying");
    } else {
      throw new Error("clinic name field is not displaying");
    }
  }

  async fillFirstNameField(data) {
    if ((await this.firstNameField.isDisplayed()) === true) {
      await this.firstNameField.click();
      await this.firstNameField.setValue(data);
      console.log("first name field is displaying");
    } else {
      throw new Error("first name field is not displaying");
    }
  }

  async fillLastNameField(data) {
    if ((await this.lastNameField.isDisplayed()) === true) {
      await this.lastNameField.click();
      await this.lastNameField.setValue(data);
      console.log("last name field is displaying");
    } else {
      throw new Error("last name field is not displaying");
    }
  }

  async fillEmailField(data) {
    if ((await this.emailField.isDisplayed()) === true) {
      await this.emailField.click();
      await this.emailField.clearValue();
      await this.emailField.setValue(data);
      console.log("email field is displaying");
    } else {
      throw new Error("email field is not displaying");
    }
  }

  async fillOfficeNumberField(data) {
    if ((await this.officeNumberField.isDisplayed()) === true) {
      await this.officeNumberField.click();
      await this.phoneNumberField.clearValue();
      await this.officeNumberField.setValue(data);
      console.log("office Number Field is displaying");
    } else {
      throw new Error("office Number Field is not displaying");
    }
  }

  async fillPhoneNumberField(data) {
    if ((await this.phoneNumberField.isDisplayed()) === true) {
      await this.phoneNumberField.click();
      await this.phoneNumberField.clearValue();
      await this.phoneNumberField.setValue(data);
      console.log("phone number field is displaying");
    } else {
      throw new Error("phone number field is not displaying");
    }
  }

  async fillOfficeInformationField(data) {
    if ((await this.officeInformationField.isDisplayed()) === true) {
      await this.officeInformationField.click();
      await this.officeInformationField.setValue(data);
      console.log("Office information field is displaying");
    } else {
      throw new Error("Office information field is not displaying");
    }
  }

  async fillAddressField(data) {
    if ((await this.addressField.isDisplayed()) === true) {
      await this.addressField.click();
      await this.addressField.setValue(data);
      console.log("address field is displaying");
    } else {
      throw new Error("addrress field is not displaying");
    }
  }

  async fillCountryField(data) {
    if ((await this.countryField.isDisplayed()) === true) {
      await this.countryField.click();
      await this.countryField.setValue(data);
      console.log("Country field is displaying");
    } else {
      throw new Error("Country field is not displaying");
    }
  }

  async fillStateField(data) {
    if ((await this.stateField.isDisplayed()) === true) {
      await this.stateField.click();
      await this.stateField.setValue(data);
      console.log("State field is displaying");
    } else {
      throw new Error("State field is not displaying");
    }
  }

  async fillCityField(data) {
    if ((await this.cityField.isDisplayed()) === true) {
      await this.cityField.click();
      await this.cityField.setValue(data);
      console.log("City field is displaying");
    } else {
      throw new Error("City field is not displaying");
    }
  }

  async fillZipCodeField(data) {
    if ((await this.zipCodeField.isDisplayed()) === true) {
      await this.zipCodeField.click();
      await this.zipCodeField.setValue(data);
      console.log("Zip code field is displaying");
    } else {
      throw new Error("Zip code field is not displaying");
    }
  }

  async fillNumberOfLicenceField(data) {
    if ((await this.numberOfLicenceField.isDisplayed()) === true) {
      await this.numberOfLicenceField.click();
      await this.numberOfLicenceField.setValue(data);
      console.log("Numbeer of licence field is displaying");
    } else {
      throw new Error("Zip code field is not displaying");
    }
  }

  async fillExpireField(data) {
    if ((await this.expiryField.isDisplayed()) === true) {
      await this.expiryField.click();
      await browser.keys("Enter");
      console.log("expiry field is displaying");
    } else {
      throw new Error("Expire field is not displaying");
    }
  }
}

module.exports = new CustomerPage();
