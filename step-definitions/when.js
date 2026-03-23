const { When } = require("@wdio/cucumber-framework");
const LoginWebPage = require("../pageobjects/Web/loginPage");
const mobileLoginPage = require("../pageobjects/Mobile/loginPage");
import superAdminPage from "../pageobjects/Web/superAdminPage";
const customerAccountPage = require("../pageobjects/Web/customerAccountPage");
import TestUtils from "../pageobjects/testUtils";
const managingProviderAccountPage = require("../pageobjects/Web/managingProviderAccountPage");

const pages = {};

//-------------Web-Super admin--------------//

When(/^Web app login using (.*)$/, async (userName) => {
  await LoginWebPage.login(userName);
});

When(/^I click on the "Customers" tab$/, async () => {
  await superAdminPage.clickOnCustomerLink();
});

When(/^I click on the "New Customer" button$/, async () => {
  await superAdminPage.clickOnNewCustomerButton();
});

When(/^I fill (.*) data in clinic name field$/, async (text) => {
  await superAdminPage.fillClinicNameField(text);
});

When(/^I fill (.*) data in first name field$/, async (text) => {
  await superAdminPage.fillFirstNameField(text);
});

When(/^I fill (.*) data in last name field$/, async (text) => {
  await superAdminPage.fillLastNameField(text);
});
When(/^I fill (.*) data in email field$/, async (text) => {
  await superAdminPage.fillEmailField(text);
});

When(/^I fill (.*) data in phone number field$/, async (text) => {
  await superAdminPage.fillPhoneNumberField(text);
});

When(/^I fill (.*) data in office number field$/, async (text) => {
  await superAdminPage.fillOfficeNumberField(text);
});

When(/^I fill (.*) data in zip code field$/, async (text) => {
  await superAdminPage.fillZipCodeField(text);
});

When(/^I fill (.*) data in number of licence field$/, async (text) => {
  await superAdminPage.fillNumberOfLicenceField(text);
});

When(/^I fill (.*) data in expiry field$/, async (text) => {
  await superAdminPage.fillExpireField(text);
});

When(/^I fill valid date in expiry field$/, async () => {
  await superAdminPage.fillValidExpireField();
});

When(/^I fill valid and unique data in email$/, async () => {
  await superAdminPage.fillEmailFieldWithUniqueData();
});

When(/^I click on the button with text (.*)$/, async (text) => {
  await superAdminPage.clickOnButtonWithText(text);
});

When(/^I fill (.*) data in office information field$/, async (text) => {
  await superAdminPage.fillOfficeInformationField(text);
});

When(/^I fill (.*) data in country field$/, async (text) => {
  await superAdminPage.fillCountryField(text);
});

When(/^I fill (.*) data in state field$/, async (text) => {
  await superAdminPage.fillStateField(text);
});

When(/^I fill (.*) data in city field$/, async (text) => {
  await superAdminPage.fillCityField(text);
});

When(
  /^I populate fields but I populate "Email field" with already registered email$/,
  async () => {
    const actEmail = await $("(//tr[@class='odd']//td)[5]").getText();
    await superAdminPage.clickOnNewCustomerButton();
    await superAdminPage.newCustomerFormIsDisplayed();
    await superAdminPage.fillEmailField(actEmail);
  }
);

When(/^I click on the "View" icon under "Action" column$/, async () => {
  await superAdminPage.clickOnViewIcon();
});

When(/^I click On "Edit" icon$/, async () => {
  await superAdminPage.clickOnEditIcon();
});

When(/^I click On "Delete" icon$/, async () => {
  await superAdminPage.clickOnDeleteIcon();
});

When(
  /^User click on the "Back" button on "update customer" page$/,
  async () => {
    await superAdminPage.clickOnBackButton();
  }
);

When(
  /^I update the "Customer form" but does not populate one of the mandatory field and click on the (.*) button$/,
  async (button) => {
    await superAdminPage.clearClinicNameField();
    await superAdminPage.clickOnButtonWithText(button);
  }
);

When(/^I click on link text (.*)$/, async (text) => {
  await superAdminPage.clickOnLinkText(text);
});

When(/^I hover over the "More" link text$/, async () => {
  await superAdminPage.hoverOverOnMoreLink();
});

When(/^I click on "Vital Type" dropdown$/, async () => {
  await superAdminPage.clickOnVitralDropdown();
});

When(/^Fill (.*) in company name field$/, async (text) => {
  await superAdminPage.fillCompanyNameField(text);
});

When(/^upload file in csv field (.*)$/, async (text) => {
  await superAdminPage.uploadCSVFile(text);
});

// ======================================Web-CoustomerAccount=============================================//

When(/^User click on "Managing Provider" tab$/, async () => {
  await browser.refresh();
  await customerAccountPage.clickOnManagingProviderTab();
});

When(/^User click on the "New Managing Provider" button$/, async () => {
  await customerAccountPage.clickOnNewManagingProviderButton();
});

When(/^User click on the "Close" button$/, async () => {
  await customerAccountPage.clickOnCloseButton();
});

When(/^User add (.*) in name field$/, async (text) => {
  await customerAccountPage.fillNameField(text);
});

When(/^User add (.*) in email field$/, async (text) => {
  await customerAccountPage.fillEmailField(text);
});

When(/^User add (.*) in mobile number field$/, async (text) => {
  await customerAccountPage.fillMoblieNumberField(text);
});

When(/^User add (.*) in website field$/, async (text) => {
  await customerAccountPage.fillWebsiteField(text);
});

When(/^User add (.*) in office number field$/, async (text) => {
  await customerAccountPage.fillOfficeNumberField(text);
});

When(/^User add (.*) in zipcode field$/, async (text) => {
  await customerAccountPage.fillzipCodeField(text);
});

When(/^User add (.*) in office information field$/, async (text) => {
  await customerAccountPage.fillOfficeInformationField(text);
});

When(/^User add (.*) in State field$/, async (text) => {
  await customerAccountPage.fillStateField(text);
});

When(/^User add (.*) in city field$/, async (text) => {
  await customerAccountPage.fillCityField(text);
});

When(/^User add (.*) in address field$/, async (text) => {
  await customerAccountPage.fillAddressField(text);
});
When(/^User search the created provider (.*)$/, async (name) => {
  await customerAccountPage.searchCreatedProvider(name);
});

When(/^User fill unique data in email field$/, async () => {
  await customerAccountPage.fillEmailFieldWithUniqueEmail();
});
When(
  /^User use already registered (.*) and email to create new providing manager and click on (.*) button$/,
  async (name, button) => {
    const actEmail = await $("(//tr[@class='odd']//td)[4]").getText();
    await customerAccountPage.clickOnNewManagingProviderButton();
    await customerAccountPage.nameFieldIsDisplayed();
    await customerAccountPage.fillNameField(name);
    await customerAccountPage.fillEmailField(actEmail);
    await superAdminPage.clickOnButtonWithText(button);
  }
);

When(
  /^User click on the "View or Update" option under "Action" section$/,
  async () => {
    await customerAccountPage.clickOnViewOrUpdateButton();
  }
);

When(
  /^User click on the "Back" button on "Update Managing Provider Details" page$/,
  async () => {
    await customerAccountPage.clickOnBackButton();
  }
);

When(
  /^User update the "Managing Provider form" but does not populate one of the mandatory field$/,
  async () => {
    await customerAccountPage.nameField.waitForDisplayed({ timeout: 20000 });
    await customerAccountPage.nameField.click();
    await customerAccountPage.nameField.clearValue();
  }
);

When(/^User click on the link (.*) and yes button$/, async (link) => {
  await customerAccountPage.clickOnLinkAndYesButton(link);
});

When(/^User click on "Other Provider" tab$/, async () => {
  await customerAccountPage.clickOnOtherProviderTab();
});

When(/^User click on the button text (.*)$/, async (text) => {
  await customerAccountPage.clickOnButtonWithText(text);
});

When(
  /^I use already registered (.*) and email to create (.*) and click on (.*) button$/,
  async (name, text, button) => {
    const actEmail = await $("(//tr[@class='odd']//td)[4]").getText();
    await customerAccountPage.clickOnButtonWithText(text);
    await customerAccountPage.nameFieldIsDisplayed();
    await customerAccountPage.fillNameField(name);
    try {
      await superAdminPage.fillLastNameField(name);
    } catch (error) {}

    await customerAccountPage.fillEmailField(actEmail);
    await superAdminPage.clickOnButtonWithText(button);
  }
);

When(/^User click on "Subadmins" tab$/, async () => {
  await customerAccountPage.clickOnSubadminsTab();
});

When(/^I fill (.*) in hospital note field$/, async (note) => {
  await customerAccountPage.fillHospitalNoteField(note);
});

When(/^I hover over the "Alerts" icon$/, async () => {
  await customerAccountPage.hoverOverAlertsIcon();
});

When(/^I fill (.*) data in cvx code field$/, async (data) => {
  await customerAccountPage.fillCVXCodeField(data);
});

When(/^I fill (.*) data in vaccine Name field$/, async (data) => {
  await customerAccountPage.fillVaccineNameField(data);
});

When(/^I fill (.*) data in brand Name field$/, async (data) => {
  await customerAccountPage.fillBrandNameField(data);
});

When(/^I fill (.*) data in description field$/, async (data) => {
  await customerAccountPage.fillDescriptionField(data);
});

When(/^I fill (.*) data in note field$/, async (data) => {
  await customerAccountPage.fillNoteField(data);
});

When(/^I fill (.*) data in status field$/, async (data) => {
  await customerAccountPage.fillStatusField(data);
});

When(/^I fill (.*) data in internal ID field$/, async (data) => {
  await customerAccountPage.fillInternalIDField(data);
});

When(/^I fill (.*) data in non vaccine field$/, async (data) => {
  await customerAccountPage.fillNonVaccineField(data);
});

When(/^I fill (.*) data in update date field$/, async (data) => {
  await customerAccountPage.fillUpdateDateField(data);
});

When(/^I fill (.*) data in favourite field$/, async (data) => {
  await customerAccountPage.fillFavouriteField(data);
});

//===============================Master_Menu=============================

When(
  /^I add first 4 character (.*) in "Diagnosis Type" fields on the form$/,
  async (type) => {
    await customerAccountPage.fillDiagnosisTypeField(type);
  }
);

When(/^I select any "Diagnosis Type" (.*) from the list$/, async (type) => {
  await customerAccountPage.selectSuggestedDiagnosisType(type);
});

When(/^I fill (.*) data in more information field$/, async (data) => {
  await customerAccountPage.fillMoreInformationField(data);
});

When(
  /^I directly clicking on the "Create" button without filling in any value in the vaccine name and status field$/,
  async () => {
    await customerAccountPage.removefilledFields();
  }
);

//=============================Web-ManagingProviderAccount======================//

When(/^I click on the second index link (.*)$/, async (data) => {
  await managingProviderAccountPage.clickOnSecondIndexLinkText(data);
});

When(
  /^I update the "Caregiver" but does not populate one of the mandatory field$/,
  async () => {
    await managingProviderAccountPage.clearNameField();
  }
);

When(/^I populate data (.*) in the "Search" field$/, async (text) => {
  await managingProviderAccountPage.fillSearchField(text);
});

When(
  /^I fill fields with (.*) and (.*) and (.*) but I populate "Email field" with already registered email$/,
  async (name, lastName, mobile) => {
    await managingProviderAccountPage.fillAlreadyRegisteredEmail(
      name,
      lastName,
      mobile
    );
  }
);

When(/^User add (.*) in relationship field$/, async (data) => {
  await managingProviderAccountPage.fillRelationshipField(data);
});

When(/^I click on the link text (.*)$/, async (text) => {
  await managingProviderAccountPage.clickOnLinkText(text);
});

When(
  /^I click on the "View or Update" option under the "Action" section$/,
  async () => {
    await managingProviderAccountPage.clickOnUpdateButton();
  }
);

When(
  /^I populate fields (.*) but I populate "Email field" with already registered email$/,
  async (text) => {
    await managingProviderAccountPage.fillAlreadyRegisteredEmailForOtherProvider(
      text
    );
  }
);

When(/^User add (.*) in specialty field$/, async (text) => {
  await managingProviderAccountPage.fillSpecialtyField(text);
});

When(
  /^I login on web portal using invalid credentials (.*) and (.*)$/,
  async (invalidName, invalidPassword) => {
    await LoginWebPage.loginWithInvalidData(invalidName, invalidPassword);
  }
);

When(/^I hover on the "Dashboard-All Patient" tab$/, async () => {
  await managingProviderAccountPage.hoverOnDashboard_AllPatientsButton();
});

When(/^I click the (.*) option$/, async (option) => {
  await managingProviderAccountPage.clickOnAddANewPatientOption(option);
});

When(/^I fill (.*) data in baby first name field$/, async (data) => {
  await managingProviderAccountPage.fillBabyNameField(data);
});

When(/^I fill (.*) data in baby last name field$/, async (data) => {
  await managingProviderAccountPage.fillBabyLastNameField(data);
});

When(/^I fill (.*) data in birth date field$/, async (data) => {
  await managingProviderAccountPage.clickOnBirthDateField(data);
});

When(/^I fill (.*) data in birth time field$/, async (data) => {
  await managingProviderAccountPage.fillBirthTimeField(data);
});

When(/^I fill (.*) data in gender field$/, async (data) => {
  await managingProviderAccountPage.selectBabyGender(data);
});

When(/^I fill (.*) data in hospital or office field$/, async (data) => {
  await managingProviderAccountPage.selecthospital(data);
});

When(
  /^On dashboard fill (.*) data in hospital or office field$/,
  async (data) => {
    await managingProviderAccountPage.selecthospitalOnDashboard(data);
  }
);

When(/^I fill (.*) data in caregiver field$/, async (data) => {
  await managingProviderAccountPage.selectCaregiver(data);
});

When(/^I fill (.*) data in gestational Age week field$/, async (data) => {
  await managingProviderAccountPage.selectWeek(data);
});

When(/^I fill (.*) data in gestational Age days field$/, async (data) => {
  await managingProviderAccountPage.selectDays(data);
});

When(/^I fill (.*) data in treatment Location field$/, async (data) => {
  await managingProviderAccountPage.selectTreatmentLocationField(data);
});

When(/^I fill (.*) data in start service date field$/, async (data) => {
  await managingProviderAccountPage.selectStartServiceDateField(data);
});

When(/^I fill (.*) data in hospital Record Number field$/, async (data) => {
  await managingProviderAccountPage.fillHospitalRecordNumberField(data);
});

When(/^I fill (.*) data in ECG MAC Address field$/, async (data) => {
  await managingProviderAccountPage.fill_ECG_MAC_AddressField(data);
});

When(/^I fill (.*) data in Saturation MAC Address field$/, async (data) => {
  await managingProviderAccountPage.fillSaturation_MAC_AddressField(data);
});

When(/^I fill (.*) data in Temperature MAC Address field$/, async (data) => {
  await managingProviderAccountPage.fillTemperature_MAC_AddressField(data);
});

When(/^I fill (.*) data in hospital Location field$/, async (data) => {
  await managingProviderAccountPage.fillHospitalLocationField(data);
});

When(/^I fill (.*) data in date of hospital Discharge field$/, async (data) => {
  await managingProviderAccountPage.selectDischargeDate(data);
});

When(
  /^I fill (.*) data in treatment Location field under active patients$/,
  async (data) => {
    await managingProviderAccountPage.selectTreatmentLocationOnActivePatient(
      data
    );
  }
);

When(/^I remove required field on patient form$/, async () => {
  await managingProviderAccountPage.removeRequiredField();
});

When(/^I uncheck (.*) checkbox in baby service field$/, async (option) => {
  await managingProviderAccountPage.uncheckServiceCheckbox(option);
});

When(
  /^I select a "Date of hospital Discharge" date Less than or equal to the patient's date of birth$/,
  async () => {
    await managingProviderAccountPage.selectDischargeDate();
  }
);

When(
  /^I select a "Date of hospital Discharge" date greater than or equal to the patient's date of birth$/,
  async () => {
    await managingProviderAccountPage.selectDischagerNextday();
  }
);

When(/^I checkmark the (.*) option$/, async (data) => {
  await managingProviderAccountPage.selectProviderCheckbox(data);
});

When(/^I select date in start Date field$/, async () => {
  await managingProviderAccountPage.fillStartDateField();
});

When(/^I select date in past month$/, async () => {
  await managingProviderAccountPage.fillPastDateInStartDateField();
});

When(/^I fill (.*) data in diagnosis field$/, async (data) => {
  await managingProviderAccountPage.fillDiagnsisField(data);
});

When(/^User fill (.*) data in description field$/, async (data) => {
  await managingProviderAccountPage.fillDescriptionField(data);
});

When(/^I click on the checkbox$/, async () => {
  await managingProviderAccountPage.clickOnCheckbox();
});

When(
  /^I fill data (.*) in search box under patient medical records$/,
  async (image) => {
    await managingProviderAccountPage.fillSearchFieldUnderPatientForm(image);
  }
);

When(/^I hover over the "Settings" icon$/, async () => {
  await managingProviderAccountPage.clickOnSettingsButton();
});

When(/^I fill (.*) data in medication field$/, async (text) => {
  await managingProviderAccountPage.fillMedicationField(text);
});

When(/^I fill (.*) data in current dose field$/, async (text) => {
  await managingProviderAccountPage.fillCurrentDoseField(text);
});

When(/^I fill (.*) data in measurement field$/, async (text) => {
  await managingProviderAccountPage.fillMeasurementField(text);
});

When(/^I fill (.*) data in frequency field$/, async (text) => {
  await managingProviderAccountPage.fillFrequencyField(text);
});

When(/^I fill (.*) data in interval field$/, async (text) => {
  await managingProviderAccountPage.fillIntervalField(text);
});

When(/^I fill (.*) data in additional information field$/, async (text) => {
  await managingProviderAccountPage.fillAdditionalInformationField(text);
});

When(
  /^I update the "Medication" but does not populate one of the mandatory field$/,
  async () => {
    await managingProviderAccountPage.removeDataFromFields();
  }
);

When(/^I select date in Last adjusted date field$/, async () => {
  await managingProviderAccountPage.clickOnLastAdjustedField();
});

When(/^User select the value from the dropdown (.*)$/, async (data) => {
  await managingProviderAccountPage.selectDropdownValue(data);
});

When(/^Click on heart rate view detail link$/, async () => {
  await managingProviderAccountPage.clickOnHeartRateViewDetailsLink();
});

When(/^Click on respiratory rate view detail link$/, async () => {
  await managingProviderAccountPage.clickOnRespiratoryRateViewDetailsLink();
});

When(/^Click on O2 saturation view detail link$/, async () => {
  await managingProviderAccountPage.clickOnO2SaturationViewDetailsLink();
});

When(/^Click on temperature view detail link$/, async () => {
  await managingProviderAccountPage.clickOnTemperatureViewDetailsLink();
});

When(/^I hover over the "Results" tab$/, async () => {
  await managingProviderAccountPage.hoverOverResultsTab();
});

When(/^Hover over link (.*)$/, async (link) => {
  await managingProviderAccountPage.hoverOverOnLink(link);
});

When(/^User hover on the (.*) tab$/, async (data) => {
  await managingProviderAccountPage.hoverOnTab(data);
});

When(/^I click on the imaging>>other button$/, async () => {
  await managingProviderAccountPage.clickOnImaging_Other_Button();
});

When(/^I click on the results>>other button$/, async () => {
  await managingProviderAccountPage.clickOnResults_OtherButton();
});

When(
  /^Under Other provider screen I click on the results>>other link$/,
  async () => {
    await managingProviderAccountPage.clickOnResults_Other_Link_Under_Other_Provider();
  }
);

When(/^I click on the link (.*) having third index$/, async (text) => {
  await managingProviderAccountPage.clickOnThirdIndexLinkText(text);
});

When(
  /^User click on the button (.*) under baby dashboard screen$/,
  async (button) => {
    await managingProviderAccountPage.clickOnButtonUnderBabyDashboard(button);
  }
);

When(/^Hover over "Orders" tab$/, async () => {
  await managingProviderAccountPage.hoverOverOrdersTab();
});

When(/^I drag chat container banner$/, async () => {
  await managingProviderAccountPage.clickOnWelcomeAiMessageButton();
});

When(/^User click on the "Cross" button$/, async () => {
  await managingProviderAccountPage.clickOnCrossButton();
});

When(/^I click on the second index button with text (.*)$/, async (data) => {
  await managingProviderAccountPage.clickOnSecondIndexButtonWithText(data);
});

When(/^I select the option (.*) from method dropdown$/, async (data) => {
  await managingProviderAccountPage.selectValueFromMethodField(data);
});

When(/^I fill (.*) data in flow rate field$/, async (data) => {
  await managingProviderAccountPage.fillFlowRateField(data);
});

When(/^I fill (.*) data in oxygen field$/, async (data) => {
  await managingProviderAccountPage.fillOxygenField(data);
});

When(/^I fill (.*) data in additional settings field$/, async (data) => {
  await managingProviderAccountPage.fillAdditionalSettingsFieldField(data);
});

When(/^I select date in the "End date" field$/, async () => {
  await managingProviderAccountPage.fillEndDateField();
});

When(/^Click on select provider dropdown$/, async () => {
  await managingProviderAccountPage.clickOnSelectProviderDropdown();
});

When(/^User should be able to upload file (.*)$/, async (data) => {
  await managingProviderAccountPage.uploadFiles(data);
});

When(/^User should be able to upload folder (.*)$/, async (data) => {
  await managingProviderAccountPage.uploadFolder(data);
});

When(/^I click on added (.*) from the list$/, async (data) => {
  await managingProviderAccountPage.clickOnAddedFile(data);
});

When(/^I fill (.*) data in edit media description field$/, async (data) => {
  await managingProviderAccountPage.fillEditMediaDescription(data);
});

When(/^I fill (.*) data in lot number field$/, async (data) => {
  await managingProviderAccountPage.fillLotNumberField(data);
});

When(/^I fill (.*) data in comments field$/, async (data) => {
  await managingProviderAccountPage.fillCommentsField(data);
});

When(/^I fill (.*) data in vaccine field$/, async (data) => {
  await managingProviderAccountPage.fillVaccineField(data);
});

When(/^User select option (.*) in hospital note field$/, async (data) => {
  await managingProviderAccountPage.chooseHospitalFieldOption(data);
});

When(/^I fill (.*) data in type field$/, async (value) => {
  await managingProviderAccountPage.fillTypeField(value);
});

When(/^I clear date filed of report$/, async () => {
  await managingProviderAccountPage.clearReportDateField();
});

When(/^I fill (.*) value in WBC field$/, async (value) => {
  await managingProviderAccountPage.fillWbcField(value);
});

When(/^I fill (.*) value in Hgb field$/, async (value) => {
  await managingProviderAccountPage.fillHgbField(value);
});

When(/^I fill (.*) value in Hct field$/, async (value) => {
  await managingProviderAccountPage.fillHctField(value);
});

When(/^I fill (.*) value in Plts field$/, async (value) => {
  await managingProviderAccountPage.fillPltsField(value);
});

When(/^I fill (.*) value in retic field$/, async (value) => {
  await managingProviderAccountPage.fillReticField(value);
});

When(/^I fill value in Na (.*) field$/, async (data) => {
  await managingProviderAccountPage.fillNaField(data);
});

When(/^I fill value in K (.*) field$/, async (data) => {
  await managingProviderAccountPage.fillKField(data);
});

When(/^I fill value in Cl (.*) field$/, async (data) => {
  await managingProviderAccountPage.fillClField(data);
});

When(/^I fill value in Co2 (.*) field$/, async (data) => {
  await managingProviderAccountPage.fillCo2Field(data);
});

When(/^I fill value in BUN (.*) field$/, async (data) => {
  await managingProviderAccountPage.fillBUNField(data);
});

When(/^I fill value in Cr (.*) field$/, async (data) => {
  await managingProviderAccountPage.fillCrField(data);
});

When(/^I fill value in Glu (.*) field$/, async (data) => {
  await managingProviderAccountPage.fillGluField(data);
});
When(/^I fill value in Ca (.*) field$/, async (data) => {
  await managingProviderAccountPage.fillCaField(data);
});
When(/^I fill value in Phos (.*) field$/, async (data) => {
  await managingProviderAccountPage.fillPhosField(data);
});

When(/^I fill value in Mg (.*) field$/, async (data) => {
  await managingProviderAccountPage.fillMgField(data);
});

When(/^I fill value in TBili (.*) field$/, async (data) => {
  await managingProviderAccountPage.fillTBiliField(data);
});

When(/^I fill value in TBiliC (.*) field$/, async (data) => {
  await managingProviderAccountPage.fillTBiliCField(data);
});

When(/^I fill value in DBili (.*) field$/, async (data) => {
  await managingProviderAccountPage.fillDBiliField(data);
});

When(/^I fill value in AlkP (.*) field$/, async (data) => {
  await managingProviderAccountPage.fillAlkPField(data);
});

When(/^I fill value in Tprot (.*) field$/, async (data) => {
  await managingProviderAccountPage.fillTprotField(data);
});

When(/^I fill value in Alb (.*) field$/, async (data) => {
  await managingProviderAccountPage.fillAlbField(data);
});

When(/^I fill value in Ast (.*) field$/, async (data) => {
  await managingProviderAccountPage.fillAstField(data);
});
When(/^I fill value in Alt (.*) field$/, async (data) => {
  await managingProviderAccountPage.fillAltField(data);
});
When(/^I fill value in GGT (.*) field$/, async (data) => {
  await managingProviderAccountPage.fillGGTField(data);
});

When(/^I fill value in Trig (.*) field$/, async (data) => {
  await managingProviderAccountPage.fillTrigField(data);
});

When(/^I fill value in cholesterol (.*) field$/, async (data) => {
  await managingProviderAccountPage.fillCholesterolField(data);
});

When(/^I fill value in HDL (.*) field$/, async (data) => {
  await managingProviderAccountPage.fillHDLField(data);
});

When(/^I fill value in LDL (.*) field$/, async (data) => {
  await managingProviderAccountPage.fillLDLField(data);
});

When(/^I fill value in TSH (.*) field$/, async (data) => {
  await managingProviderAccountPage.fillTSHField(data);
});

When(/^I fill value in T4 (.*) field$/, async (data) => {
  await managingProviderAccountPage.fillT4Field(data);
});

When(/^I fill value in Free T4 (.*) field$/, async (data) => {
  await managingProviderAccountPage.fillFreeT4Field(data);
});

When(/^I fill value in T3 (.*) field$/, async (data) => {
  await managingProviderAccountPage.fillT3Field(data);
});

When(/^I fill value in Cortisol (.*) field$/, async (data) => {
  await managingProviderAccountPage.fillCortisolField(data);
});

When(/^I fill value in ACTH (.*) field$/, async (data) => {
  await managingProviderAccountPage.fillACTHField(data);
});

When(/^I fill value in PT (.*) field$/, async (data) => {
  await managingProviderAccountPage.fillPTField(data);
});

When(/^I fill value in aPTT (.*) field$/, async (data) => {
  await managingProviderAccountPage.fillaPTTField(data);
});

When(/^I fill value in TT (.*) field$/, async (data) => {
  await managingProviderAccountPage.fillTTField(data);
});

When(/^I fill value in Fibrinogen (.*) field$/, async (data) => {
  await managingProviderAccountPage.fillFibrinogenField(data);
});
When(/^I fill title (.*) in title field field$/, async (value) => {
  await managingProviderAccountPage.fillOtherTitleField(value);
});

When(/^I checkmark, all the records under export records$/, async () => {
  await managingProviderAccountPage.selectCheckboxUnderExportRecords();
});

When(
  /^Click on "Appointment order" dropdown and select option (.*)$/,
  async (option) => {
    await managingProviderAccountPage.selectAppointmentOrderdropdownOption(
      option
    );
  }
);

When(/^Click on "Appointment date" field$/, async () => {
  await managingProviderAccountPage.clickOnAppointmentDateField();
});

When(/^Click and select next day "Appointment date"$/, async () => {
  await managingProviderAccountPage.selectNextDayInAppointmentDate();
});

When(
  /^I click on ECG device dropdown and select option (.*)$/,
  async (data) => {
    await managingProviderAccountPage.selectECGDeviceDropdownOption(data);
  }
);

When(
  /^I click on ECG duration dropdown and select option (.*)$/,
  async (data) => {
    await managingProviderAccountPage.selectECGDurationDropdownOption(data);
  }
);

When(
  /^I click on O2 saturation device dropdown and select option (.*)$/,
  async (data) => {
    await managingProviderAccountPage.selectO2SaturationDeviceDropdownOption(
      data
    );
  }
);

When(
  /^I click on O2 saturation duration dropdown and select option (.*)$/,
  async (data) => {
    await managingProviderAccountPage.selectO2SaturationDurationDropdownOption(
      data
    );
  }
);

When(
  /^I click on Temperature device dropdown and select option (.*)$/,
  async (data) => {
    await managingProviderAccountPage.selectTemperatureDeviceDropdownOption(
      data
    );
  }
);

When(
  /^I click on Temperature devduration dropdown and select option (.*)$/,
  async (data) => {
    await managingProviderAccountPage.selectTemperatureDurationDropdownOption(
      data
    );
  }
);

When(/^Fill temperature duration field using data (.*)$/, async (data) => {
  await managingProviderAccountPage.fillTemperatureDurationField(data);
});

When(/^I fill (.*) data in "Weight" field$/, async (data) => {
  await managingProviderAccountPage.fillPoundField(data);
});

When(/^I fill (.*) data in "Head Circumference" field$/, async (data) => {
  await managingProviderAccountPage.fillHeadInchField(data);
});

When(/^I fill (.*) data in "Weight Ounce" field$/, async (data) => {
  await managingProviderAccountPage.fillWeightOunceField(data);
});
When(/^I fill (.*) data in "Height" field$/, async (data) => {
  await managingProviderAccountPage.fillHeightField(data);
});

When(/^I remove data from required fields on updation form$/, async () => {
  await managingProviderAccountPage.removeDataFromGrowthFields();
});

When(
  /^I click on weight frequency dropdown and select option (.*)$/,
  async (data) => {
    await browser.pause(2000);
    await managingProviderAccountPage.selectWeightFrequencyOption(data);
  }
);

When(
  /^I click on height frequency dropdown and select option (.*)$/,
  async (data) => {
    await managingProviderAccountPage.selectHeightFrequencyOption(data);
  }
);

When(
  /^I click on head circumference frequency dropdown and select option (.*)$/,
  async (data) => {
    await managingProviderAccountPage.selectHeadFrequencyOption(data);
  }
);

When(/^I click on the breast feeding "Yes" radio button$/, async () => {
  await managingProviderAccountPage.clickOnBreastFeeding_Yes_RadioButton();
});

When(/^User click on the Multiple index "Next" Button$/, async () => {
  await managingProviderAccountPage.multipleIndexNextButton();
});

When(/^I click on the supplement "Yes" radio button$/, async () => {
  await managingProviderAccountPage.clickOnSupplement_Yes_RadioButton();
});

When(/^I click on the supplement "No" radio button$/, async () => {
  await managingProviderAccountPage.clickOnSupplement_No_RadioButton();
});

When(/^I fill (.*) data in "SupplementalGoal" field$/, async (data) => {
  await managingProviderAccountPage.fillSupplementalGoalField(data);
});

When(/^I click on the ad lib "Yes" radio button$/, async () => {
  await managingProviderAccountPage.clickOnAdLib_Yes_RadioButton();
});

When(/^I click on the ad lib "No" radio button$/, async () => {
  await managingProviderAccountPage.clickOnAdLib_No_RadioButton();
});

When(/^I click on the breast feeding "No" radio button$/, async () => {
  await managingProviderAccountPage.clickOnBreastFeeding_No_RadioButton();
});

When(/^I fill (.*) data in "Feeding goal" field$/, async (data) => {
  await managingProviderAccountPage.fillFeedingGoalField(data);
});

When(/^User click on the third index "Next" Button$/, async () => {
  await managingProviderAccountPage.clickOnThirdIndexNextButton();
});

When(/^I click on the feeding ad lib "No" radio button$/, async () => {
  await managingProviderAccountPage.clickOnFeedingAdLib_No_radioButton();
});

When(/^I fill (.*) data in "Formula" field$/, async (data) => {
  await managingProviderAccountPage.fillFormulaField(data);
});

When(/^User click on the fourth index "Next" Button$/, async () => {
  await managingProviderAccountPage.clickOnFourthIndexNextButton();
});

When(/^I fill (.*) data in "Bottle percentage" field$/, async (data) => {
  await managingProviderAccountPage.fillBottlePercentField(data);
});

When(/^User click on the fifth index "Next" Button$/, async () => {
  await managingProviderAccountPage.clickOnFifthIndexNextButton();
});

When(/^I fill (.*) data in "Gavage Duration" field$/, async (data) => {
  await managingProviderAccountPage.fillGavageDurationField(data);
});

When(/^I fill (.*) data in "Nutrition Milk" field$/, async (data) => {
  await managingProviderAccountPage.fillNutritionMilkField(data);
});

When(/^I fill (.*) data in "Calories" field$/, async (data) => {
  await managingProviderAccountPage.fillCaloriesFieldField(data);
});

When(/^I fill (.*) data in "Nutrition fortification" field$/, async (data) => {
  await managingProviderAccountPage.fillNutritionfortificationField(data);
});

When(/^I fill (.*) data in "Name" field$/, async (data) => {
  await managingProviderAccountPage.fillNameField(data);
});

When(/^I fill formula (.*) data in "New Formula" field$/, async (data) => {
  await managingProviderAccountPage.fillNewFormulaField(data);
});

When(
  /^For No breastfeeding click on the ad lib "Yes" radio button$/,
  async () => {
    await managingProviderAccountPage.clickOnAdLib_Yes_RadioButton_For_NoBreastfeed();
  }
);

When(/^I click on view mode dropdown$/, async () => {
  await managingProviderAccountPage.clickOnNutritionViewModeDropdown();
});

When(
  /^Click on volume filter dropdown and select option (.*)$/,
  async (option) => {
    await managingProviderAccountPage.clickOnVolumeFilterDropdown();
    await managingProviderAccountPage.clickOnListOption(option);
    await browser.pause(3000);
  }
);

When(
  /^Click on diapering type filter dropdown and select option (.*)$/,
  async (option) => {
    await browser.pause(1500);

    await managingProviderAccountPage.clickOnDiaperingTypeFilterDropdown();
    await managingProviderAccountPage.clickOnListOption(option);
    await browser.pause(1500);
  }
);

When(/^User add address (.*) in caregiver address field$/, async (text) => {
  await managingProviderAccountPage.fillAddressField(text);
});
//-------------Mobile-Cases----------//

When(/^login to app using (.*)$/, async (username) => {
  await mobileLoginPage.login(username);
});

When(
  /^User leave the "Email field" empty And populate the (.*) "Password field" And click on "Login" button$/,
  async (password) => {
    await mobileLoginPage.emailField.click();
    await mobileLoginPage.emailField.clearValue();
    await mobileLoginPage.fillPasswordField(password);
    try {
      await driver.hideKeyboard();
    } catch (error) {}

    await mobileLoginPage.signInButton.click();
  }
);

When(
  /^User leave the "Password field" empty And populate the (.*) "Email field" And click on "Login" button$/,
  async (email) => {
    await mobileLoginPage.paswordField.click();
    await mobileLoginPage.paswordField.clearValue();
    await mobileLoginPage.fillEmailField(email);
    try {
      await driver.hideKeyboard();
    } catch (error) {}
    await mobileLoginPage.signInButton.click();
  }
);

When(
  /^User enter invalid (.*) and (.*) in their respective fields And click on "Login" button$/,
  async (email, password) => {
    await mobileLoginPage.fillEmailField(email);
    await mobileLoginPage.fillPasswordField(password);
    try {
      await driver.hideKeyboard();
    } catch (error) {}

    await mobileLoginPage.signInButton.click();
  }
);

When(
  /^User enter valid (.*) and (.*) in their respective fields And click on "Login" button$/,
  async (userName, invalidPassword) => {
    let data = TestUtils.getUserCredetials(userName);
    await browser.pause(2000);
    const username = data[0];
    await mobileLoginPage.fillEmailField(username);
    await mobileLoginPage.fillPasswordField(invalidPassword);
    try {
      await driver.hideKeyboard();
    } catch (error) {}

    await mobileLoginPage.signInButton.click();
  }
);

When(/^User navigate to the "Settings" tab$/, async () => {
  await mobileLoginPage.clickOnSettingsTab();
});

When(/^User click on the "Logout" option$/, async () => {
  await mobileLoginPage.clickOnLogoutOption();
});

When(/^User click on the button with text (.*)$/, async (Button) => {
  await mobileLoginPage.clickOnButtonWithText(Button);
});

When(
  /^User click on "Hamburger" icon displaying in the top left corner$/,
  async () => {
    await mobileLoginPage.clickOnFHDCHamburgerButton();
  }
);

When(/^iOS login to app using (.*)$/, async (username) => {
  await mobileLoginPage.login(username);
});

When(/^Verfiy all modules of Firstday-HC app on homepage$/, async () => {
  await mobileLoginPage.patientVitalSigns();
  await mobileLoginPage.patientsMedicalRecord();
  await mobileLoginPage.patientsProviders();
  await mobileLoginPage.needHelp();
  await mobileLoginPage.patientsVideoCamera();
  await mobileLoginPage.settings();
});

When(/^User clicks on vital signs module$/, async () => {
  await mobileLoginPage.clickOnPatientsVitalSigns();
});

When(/^User clicks on medical report module$/, async () => {
  await mobileLoginPage.clickOnMedicalReport();
});

When(/^I click on (.*) option$/, async (text) => {
  await mobileLoginPage.clickOnOption(text);
});

When(/^User clicks on providers module on homepage$/, async () => {
  await mobileLoginPage.clickOnProvider();
});

When(/^User clicks on settings module on homepage$/, async () => {
  await mobileLoginPage.clickOnSettingsModule();
});

When(/^I click on "Edit" icon from "Profile Picture" section$/, async () => {
  await mobileLoginPage.clickOnEditProfileIcon();
  try {
    await mobileLoginPage.clickOnOkButton();
  } catch (error) {}
});

When(/^For ios, user click on the button Temperature$/, async () => {
  await mobileLoginPage.clickOnTemperatureModule();
});
When(/^For ios, user click on the “Media” module$/, async () => {
  await mobileLoginPage.clickOnMediaModule();
});

When(/^I click on drop down arrow and select option (.*)$/, async (data) => {
  await mobileLoginPage.clickOnDropDownArrow();
  await mobileLoginPage.selectDropDownOption(data);
});

When(/^For ios, user click on the "Media" module$/, async () => {
  await mobileLoginPage.clickOnMediaTab();
});

When(/^For ios, user click on the Results module$/, async () => {
  await mobileLoginPage.clickOniOSResultsTab();
});

When(/^For ios, click on click to see full graph option$/, async () => {
  await mobileLoginPage.clickOnclickToSeeFullGraphOption();
});
When(/^For ios, select liver function tests option$/, async () => {
  await mobileLoginPage.clickOnDropDownArrow();
  await mobileLoginPage.selectIosLiverFuntionTestOption();
});

When(/^For ios, select Lipid tests option$/, async () => {
  await mobileLoginPage.clickOnDropDownArrow();
  await mobileLoginPage.selectIosLipidTestOption();
});

When(/^I fill subject (.*) in from$/, async (data) => {
  await mobileLoginPage.fillSubjectFiled(data);
});

When(/^I fill description (.*) in the from$/, async (data) => {
  await mobileLoginPage.fillDecriptionFiled(data);
});

When(/^I fill (.*) data in "Note" field$/, async (data) => {
  await mobileLoginPage.fillNoteField(data);
});

When(/^User click on the right arrow button$/, async () => {
  await mobileLoginPage.clickOnRightArrowButton();
});

When(/^I fill (.*) data in "Diaper Weight" field$/, async (data) => {
  await mobileLoginPage.fillDiaperWeightField(data);
});

When(/^I fill (.*) data in "Minutes" field$/, async (data) => {
  await mobileLoginPage.fillMinutesField(data);
});

When(/^I fill (.*) data in mobile "Height Inch" field$/, async (data) => {
  await mobileLoginPage.fillHeightInchField(data);
});

When(/^I fill (.*) data in mobile "Weight Pound" field$/, async (data) => {
  await mobileLoginPage.fillWeightPoundField(data);
});

When(/^I fill (.*) data in mobile "Weight Ounce" field$/, async (data) => {
  await mobileLoginPage.fillWeightOunceField(data);
});

When(
  /^I fill (.*) data in mobile "Head Circumference" field$/,
  async (data) => {
    await mobileLoginPage.fillHeadCircumferenceField(data);
  }
);

When(/^Delete the mobile record using "Delete" button$/, async () => {
  await mobileLoginPage.deleteRecord();
});

When(/^User selects date in "Date" field$/, async () => {
  await mobileLoginPage.selectDate();
});

When(/^User click on the form "OK" button$/, async () => {
  await mobileLoginPage.clickOnFormOKButton();
});

When(/^I fill (.*) data in "Select Milk" field$/, async (data) => {
  await mobileLoginPage.fillSelectMilkField(data);
});

When(/^I fill (.*) data in "Bottle Volumn" field$/, async (data) => {
  await mobileLoginPage.fillBottleVolumnField(data);
});

When(/^I fill (.*) data in "Select Fortification" field$/, async (data) => {
  await mobileLoginPage.fillSelectFortificationField(data);
});

When(/^I fill (.*) data in mobile "Calories" field$/, async (data) => {
  await mobileLoginPage.fillCaloriesField(data);
});

When(/^Click on link text (.*)$/, async (data) => {
  await mobileLoginPage.clickOnLinkText(data);
});

When(/^I Click on radio button (.*)$/, async (data) => {
  await mobileLoginPage.clickOnRedioButton(data);
});

When(/^I Click on select milk field$/, async () => {
  await mobileLoginPage.clickOnSelectMilkField();
});

When(/^I click on Select Fortification filed$/, async () => {
  await mobileLoginPage.clickOnSelectFortificationField();
});

When(/^For ios user click on the (.*) button$/, async (text) => {
  await mobileLoginPage.clickOnIosButton(text);
});

When(/^I fill (.*) data in "Select Milk" field for ios$/, async (data) => {
  await mobileLoginPage.fillIosSelectMilkField(data);
});

When(/^For ios I fill (.*) data in "Minutes" field$/, async (data) => {
  await mobileLoginPage.fillIosMilkMinutesField(data);
});

When(/^For ios I fill (.*) data in "Select Milk" field$/, async (data) => {
  await mobileLoginPage.fillIosSelectMilkField(data);
});

When(
  /^For ios I fill (.*) data in "Select Fortification" field$/,
  async (data) => {
    await mobileLoginPage.fillIosSelectFortificationField(data);
  }
);

When(/^I fill (.*) data in mobile "Calories" field for ios$/, async (data) => {
  await mobileLoginPage.fillIosCaloriesField(data);
});

When(/^For ios, when user click on (.*) option$/, async (text) => {
  await mobileLoginPage.clickOnIosOption(text);
});

When(/^User click on the ios button with second index (.*)$/, async (text) => {
  await mobileLoginPage.clickOnSecondIndexIosButton(text);
});

When(/^For iOS user click on diapering option$/, async () => {
  await mobileLoginPage.iOSClickHoldScrollToRightCorner();
});

When(/^User selects past date in "Date" field for mobile$/, async () => {
  await mobileLoginPage.selectPastDate();
});
When(/^scrol to option$/, async () => {
  await mobileLoginPage.scrollElement();
});

When(/^Add past moth in iOS$/, async () => {
  await mobileLoginPage.fillIosPastMonthField();
});
