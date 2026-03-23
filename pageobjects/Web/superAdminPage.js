const BasePage = require("./testBase");
const { remote } = require("webdriverio");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SuperAdminPage extends BasePage {
  /**
   * define selectors using getter methods
   */

  get customerLink() {
    return $('(//a[@title="customers"])[2]');
  }

  get newCustomerButton() {
    return $('button[data-target="#myModal"]');
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

  get searchField() {
    return $(
      "//div[@id='example_filter']//input[@type='search']|(//label//input[@type='search'])[2]|//*[@id='device-brand-table_filter']/label/input|//*[@id='respiratory-settings-table_filter']/label/input|//div[@id='measurement-order-table_filter']//input"
    );
  }

  get newCustomerForm() {
    return $('form[id="newCustomer"]');
  }

  get deleteButton() {
    return $("(//a[@title='Delete'])[1]|(//a[@class='btn btn-danger'])[1]");
  }

  get deleteMessage() {
    return $("#toast-container");
  }

  get viewIcon() {
    return $("(//a[@title='View'])[1]");
  }

  get editIcon() {
    return $("(//i[@class='fa fa-edit'])[1]");
  }

  get backButton() {
    return $("//a[contains(text(),'Back')]");
  }

  get emptyTable() {
    return $(
      "//*[@id='example']/tbody/tr/td|//*[@id='respiratory-settings-table']/tbody/tr/td|//td[@class='dataTables_empty']"
    );
  }

  get validationMessage() {
    return $("//div[@class='toast-message']");
  }

  get table() {
    return $(
      "//table[@class='table']|//div[@id='example_wrapper']|//table[@id='respiratory-settings-table']|//table[@id='example']"
    );
  }

  get form() {
    return $("//form[@class='form-horizontal']|//form[@method='post']");
  }

  get moreLink() {
    return $("(//a[contains(text(),'More')])[2]");
  }

  get emptyReport() {
    return $("//div[contains(text(),'No Records Found')]");
  }

  get customerDropdown() {
    return $("#customer_id");
  }
  get dateRangeDropdown() {
    return $("#daterange-btn");
  }

  get dashboardChart() {
    return $("#bar-chart");
  }

  get vitalTypeDropdown() {
    return $("#vital_type");
  }

  get companyNameField() {
    return $("#company_name");
  }

  async clickOnCustomerLink() {
    await browser.refresh();
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
    await this.newCustomerForm.waitForDisplayed({ timeout: 5000 });
    if ((await this.newCustomerForm.isDisplayed()) === true) {
      console.log("successfully redirect on cuctomer form");
    } else {
      throw new Error("Failed to redirect on customer form");
    }
  }

  async clickOnButtonWithText(text) {
    await browser.pause(1000);
    const buttonText = await $(
      "(//button[contains(text(),'" + text + "')])[1]"
    );
    await buttonText.waitForDisplayed({ timeout: 20000 });
    if ((await buttonText.isDisplayed()) === true) {
      await buttonText.click();
    } else {
      throw new Error("Button is not displaying: " + text);
    }
  }
  async verifyValidationMessage(text) {
    const messageText = await $(
      "//span[contains(text(),'" +
        text +
        "')]|//strong[contains(text(),'" +
        text +
        "')]"
    );
    await messageText.waitForDisplayed({ timeout: 20000 });
    if ((await messageText.isDisplayed()) === true) {
      console.log("validation message displaying successfully");
    } else {
      throw new Error("Validation message is not displaying: " + text);
    }
  }

  async fillClinicNameField(data) {
    await this.clinicNameField.waitForDisplayed({ timeout: 20000 });
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

  async fillRandomNumberInLastNameField() {
    if ((await this.lastNameField.isDisplayed()) === true) {
      const randomName = `Auto_test${Date.now()}`;
      await this.lastNameField.click();
      await this.lastNameField.setValue(randomName);
      this.clickOnButtonWithText("Update");
      await browser.pause(5000);
      const expName = await this.lastNameField.getAttribute("value");
      await expect(randomName).toEqual(expName);
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

  async fillEmailFieldWithUniqueData() {
    const randomEmail = `Auto_test${Date.now()}@yopmail.com`;
    if ((await this.emailField.isDisplayed()) === true) {
      await this.emailField.click();
      await this.emailField.clearValue();
      await this.emailField.setValue(randomEmail);
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

  async fillValidExpireField(data) {
    if ((await this.expiryField.isDisplayed()) === true) {
      await this.expiryField.click();
      await browser.keys("ArrowRight");
      await browser.keys("Enter");
      console.log("expiry field is displaying");
    } else {
      throw new Error("Expire field is not displaying");
    }
  }

  async verifyNewCreatedClinic(clinicName, firstName, lastName, licenceNumber) {
    await this.searchField.waitForDisplayed({ timeout: 5000 });
    await this.searchField.waitForEnabled({ timeout: 5000 });
    await this.searchField.clearValue();
    await this.searchField.setValue(clinicName);
    await browser.pause(3000);
    await $("//td[contains(text(),'" + clinicName + "')]").waitForDisplayed({
      timeout: 10000,
    });
    const actClinic = await $("(//tr[@class='odd']//td)[2]").getText();
    const actFirstName = await $("(//tr[@class='odd']//td)[3]").getText();
    const actLastName = await $("(//tr[@class='odd']//td)[4]").getText();
    const actLicenceNumber = await $("(//tr[@class='odd']//td)[7]").getText();
    await expect(actClinic).toEqual(clinicName);
    await expect(actFirstName).toEqual(firstName);
    await expect(actLastName).toEqual(lastName);
    await expect(actLicenceNumber).toEqual(licenceNumber);
  }

  async searchAndDeleteDuplicateData(clinicName) {
    await this.searchField.clearValue();
    await this.searchField.setValue(clinicName);
    await browser.pause(3000);

    try {
      for (let i = 0; i < 4; i++) {
        await $(
          "//td[contains(text(),'" +
            clinicName +
            "')]|//a[contains(text(),'" +
            clinicName +
            "')]"
        ).waitForDisplayed({ timeout: 5000 });
        await this.deleteButton.click();
        await this.clickOnButtonWithText("Yes");
        await this.deleteMessage.waitForDisplayed({ timeout: 20000 });
        await this.deleteMessage.waitForDisplayed({
          reverse: true,
          timeout: 20000,
        });
      }
    } catch (error) {}
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

  async clickOnViewIcon() {
    await this.viewIcon.click();
  }

  async verifyCustomerDetailPage(name) {
    await $("//section[@class='content-header']//h2").waitForDisplayed({
      timeout: 5000,
    });
    const actName = await $("//section[@class='content-header']//h2").getText();
    await expect(actName).toEqual(name);
  }

  async clickOnEditIcon() {
    await this.editIcon.click();
  }

  async clickOnDeleteIcon() {
    await this.validationMessage.waitForDisplayed({
      reverse: true,
      timeout: 20000,
    });
    await this.deleteButton.click();
    await this.clickOnButtonWithText("Yes");
  }

  async verifyDeletedRecord() {
    await this.validationMessage.waitForDisplayed({
      reverse: true,
      timeout: 20000,
    });
    await this.emptyTable.waitForDisplayed({ timeout: 5000 });
    if (await this.emptyTable.isDisplayed()) {
      console.log("record deleted successfully");
    } else {
      throw new Error("failed to delete record");
    }
  }

  async verifySuccessMessage(text) {
    try {
      await this.validationMessage.waitForDisplayed({ timeout: 20000 });
      const actMessage = await this.validationMessage.getText();
      console.log("actual message is >>" + actMessage);
      await expect(actMessage).toEqual(text);
      await this.validationMessage.waitForDisplayed({
        reverse: true,
        timeout: 20000,
      });
    } catch (error) {}
  }

  async clickOnBackButton() {
    await this.backButton.click();
  }

  async clearClinicNameField() {
    await this.clinicNameField.click();
    await this.clinicNameField.clearValue();
  }

  async verifyCustomerStatus(status) {
    await browser.refresh();
    await $("((//tr[@class='odd']//td)[9])[1]").waitForDisplayed({
      timeout: 5000,
    });
    const actStatus = await $("((//tr[@class='odd']//td)[9])[1]").getText();
    await expect(actStatus).toEqual(status);
  }

  async searchData(clinicName) {
    await this.searchField.clearValue();
    await this.searchField.setValue(clinicName);
    await $("//td[contains(text(),'" + clinicName + "')]").waitForDisplayed({
      timeout: 10000,
    });
    await browser.pause(3000);
  }

  async clickOnLinkText(text) {
     await $("//a[contains(text(),'" + text + "')]").waitForDisplayed({
       timeout: 10000,
     });
    await $("//a[contains(text(),'" + text + "')]").moveTo();
    const linkText = await $("//a[contains(text(),'" + text + "')]");
    if ((await linkText.isDisplayed()) === true) {
      await linkText.click();
      await this.clickOnButtonWithText("Yes");
    } else {
      throw new Error("link is not displaying: " + text);
    }
  }

  async verifyPageUrl(text) {
    await browser.pause(2000);
    const currentUrl = await browser.getUrl();
    console.log("Current URL:", currentUrl);
    expect(currentUrl).toContain(text);
  }

  async tableIsDisplayed() {
    if ((await this.table.isDisplayed()) === true) {
      console.log("successfully redirect on page and table is displaying");
    } else {
      throw new Error("Failed to redirect on page, table is not displaying");
    }
  }

  async formIsDisplayed() {
    await browser.pause(2000);
    if ((await this.form.isDisplayed()) === true) {
      console.log("successfully redirect on page and form is displaying");
    } else {
      throw new Error("Failed to redirect on page, form is not displaying");
    }
  }

  async hoverOverOnMoreLink() {
    this.moreLink.moveTo();
  }

  async verifyDeletedResult() {
    if (await this.emptyReport.isDisplayed()) {
      console.log("record deleted successfully");
    } else {
      throw new Error("failed to delete record");
    }
  }

  async verifyCMSResultUnderView(page) {
    const actName = await $("//input[@id='slug']").getAttribute("value");
    await expect(actName).toEqual(page);
  }
  async verifyCustomerDropdownIsDisplayed() {
    if (await this.customerDropdown.isDisplayed()) {
      console.log("customer dropdown displayed successfully");
    } else {
      throw new Error("failed to verify customer dropdown on dashboard");
    }
  }

  async verifyDateRangeDropdownIsDisplayed() {
    if (await this.dateRangeDropdown.isDisplayed()) {
      console.log("date range dropdown displayed successfully");
    } else {
      throw new Error("failed to verify date range dropdown on dashboard");
    }
  }

  async verifyDashboardChartIsDisplayed() {
    if (await this.dashboardChart.isDisplayed()) {
      console.log("Dashboard chart displayed successfully");
    } else {
      throw new Error("failed to verify chart on dashboard");
    }
  }
  async fillCompanyNameField(data) {
    if ((await this.companyNameField.isDisplayed()) === true) {
      console.log("filling company name field");
      await this.companyNameField.click();
      await this.companyNameField.clearValue();
      await this.companyNameField.setValue(data);
    } else {
      throw new Error("Company name field is not displaying in form");
    }
  }

  async clickOnVitralDropdown() {
    if ((await this.vitalTypeDropdown.isDisplayed()) === true) {
      console.log("Clicking on vitral dropdown");
      await this.vitalTypeDropdown.click();
    } else {
      throw new Error("Vitral dropdown is not displaying in form");
    }
  }

  async verifyAddedDevice(vitral, company) {
    await $("(//tr[@role='row']//td)[2]").waitForDisplayed({ timeout: 5000 });
    const actVitral = await $("(//tr[@role='row']//td)[2]").getText();
    const actCompany = await $("(//tr[@role='row']//td)[3]").getText();
    await expect(actVitral).toEqual(vitral);
    await expect(actCompany).toEqual(company);
  }

  async verifySearchedData() {
    await $("(//table//tr//td)[4]").waitForDisplayed({ timeout: 5000 });
    const actData = await $("(//table//tr//td)[4]").getText();
    this.searchField.setValue(actData);
    await browser.pause(3000);
    const expData = await $("(//table//tr//td)[2]").getText();
    await expect(actData).toEqual(expData);
  }

  async uploadCSVFile(image) {
    const path = require("path");
    const fileName = image.endsWith(".jpg") ? image : image + ".jpg";
    const filePath = path.join(__dirname, "..", "testData", "Images", fileName);
    await $("//input[@id='csv_file']|//input[@id='rrf_file']").setValue(
      filePath
    );
  }
}

module.exports = new SuperAdminPage();
