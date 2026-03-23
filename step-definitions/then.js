const { Then } = require("@wdio/cucumber-framework");
const LoginWebPage = require("../pageobjects/Web/loginPage");
const mobileLoginPage = require("../pageobjects/Mobile/loginPage");
const superAdminPage = require("../pageobjects/Web/superAdminPage");
const customerAccountPage = require("../pageobjects/Web/customerAccountPage");
const managingProviderAccountPage = require("../pageobjects/Web/managingProviderAccountPage");

//---------------Web-Super Admin----------------------//

Then(/^I navigate to the "Customers" page$/, async () => {
  await superAdminPage.newCustomerButtonIsDisplayed();
});

Then(/^Search and delete duplicate data (.*)$/, async (data) => {
  await superAdminPage.searchAndDeleteDuplicateData(data);
});

Then(/^"New customer" form displays$/, async () => {
  await superAdminPage.newCustomerFormIsDisplayed();
});

Then(
  /^A "New Customer" gets created and it displays clinic name (.*) first name (.*) last name (.*) email and licence number (.*) on the "Customers list"$/,
  async (clinicName, firstName, lastName, licenceNumber) => {
    await superAdminPage.verifyNewCreatedClinic(
      clinicName,
      firstName,
      lastName,
      licenceNumber
    );
  }
);

Then(/^validation message (.*) appears$/, async (message) => {
  await superAdminPage.verifyValidationMessage(message);
});

Then(/^A "New Customer" form closes$/, async () => {
  await superAdminPage.verifyClosedCustomerForm();
});

Then(/^I navigates to the Customer (.*) details page$/, async (name) => {
  await superAdminPage.verifyCustomerDetailPage(name);
});

Then(/^Success message (.*) appears$/, async (Message) => {
  await superAdminPage.verifySuccessMessage(Message);
});

Then(/^Status should be displayed as (.*)$/, async (text) => {
  await superAdminPage.verifyCustomerStatus(text);
});

Then(/^I Search data (.*)$/, async (data) => {
  await superAdminPage.searchData(data);
});

Then(/^Deleted record should not be visible in the list$/, async () => {
  await superAdminPage.verifyDeletedRecord();
});
Then(/^(.*) page displays$/, async (text) => {
  await superAdminPage.verifyPageUrl(text);
});

Then(/^Table is displaying on screen$/, async () => {
  await superAdminPage.tableIsDisplayed();
});

Then(/^Form is displaying on screen$/, async () => {
  await superAdminPage.formIsDisplayed();
});

Then(/^Results are not displayed after delete$/, async () => {
  await superAdminPage.verifyDeletedResult();
});

Then(
  /^Selected page name (.*) is displayed under view screen$/,
  async (page) => {
    await superAdminPage.verifyCMSResultUnderView(page);
  }
);

Then(/^Verify chart on dashboard screen$/, async () => {
  await superAdminPage.verifyDashboardChartIsDisplayed();
});

Then(/^Verify customer dropdown on dashboard screen$/, async () => {
  await superAdminPage.verifyDateRangeDropdownIsDisplayed();
});

Then(/^Verify date range dropdown on dashboard screen$/, async () => {
  await superAdminPage.verifyDashboardChartIsDisplayed();
});

Then(/^Update and verify lat name under My Profile section$/, async () => {
  await superAdminPage.fillRandomNumberInLastNameField();
});

Then(
  /^Verify new device is added with vitral (.*) and company name (.*)$/,
  async (vitral, company) => {
    await superAdminPage.verifyAddedDevice(vitral, company);
  }
);

Then(/^Verify User is able to search data from table$/, async () => {
  await superAdminPage.verifySearchedData();
});

// ======================================Web-CoustomerAccount=============================================//

Then(/^Verify text (.*) is displaying on dashboard$/, async (text) => {
  await customerAccountPage.verifyCustomerDashboardText(text);
});
Then(/^Verify that user successfully redirected on homepage$/, async () => {
  if ((await customerAccountPage.managingProviderIsDisplayed()) === true) {
    console.log("User sucessfully redirected to homepage");
  } else {
    throw new Error("Managing providers tab is not displayed on homepage");
  }
});

Then(/^User should on "Managing Provider" page$/, async () => {
  if (
    (await customerAccountPage.newManagingProviderButtonIsDisplayed()) === true
  ) {
    console.log("User sucessfully redirected to Managing Provider page");
  } else {
    throw new Error(
      "User is not sucessfully redirected to Managing Provider page"
    );
  }
});

Then(/^"New Managing Provider" form displays$/, async () => {
  if ((await customerAccountPage.nameFieldIsDisplayed()) === true) {
    console.log("New managing provider form is successfully opened");
  } else {
    throw new Error(
      "Form is not displayed after clicked on new managing provider "
    );
  }
});

Then(/^The "New Managing Provider" form should be closed$/, async () => {
  await customerAccountPage.verifyClosedForm();
});

Then(
  /^a "New Managing Provider" gets created And it displays (.*) in the "Managing Provider" list$/,
  async (registerName) => {
    await customerAccountPage.verifyCreatedProvider(registerName);
  }
);

Then(/^Search and delete already added provider (.*)$/, async (data) => {
  await customerAccountPage.searchAndDeleteAddedProvider(data);
});

Then(
  /^User should navigate back to the "Managing Provider" page And the Managing Provider does not get updated (.*)$/,
  async (providerName) => {
    await customerAccountPage.verifyCreatedProvider(providerName);
  }
);

Then(/^User click on the "Update" button$/, async () => {
  await customerAccountPage.clickOnUpdateButton();
});

Then(
  /^User should navigate to the "Update Managing Provider Details" page$/,
  async () => {
    await customerAccountPage.updateProviderPageIsDisplayed();
  }
);

Then(
  /^The updated Managing provider displays in the "Managing provider list" with updated (.*)$/,
  async (UpdatedProviderName) => {
    await customerAccountPage.verifyCreatedProvider(UpdatedProviderName);
  }
);

Then(
  /^Verify provider (.*) has removed from list$/,
  async (UpdatedProviderName) => {
    await customerAccountPage.verifyUpdatedStatusProvider(UpdatedProviderName);
  }
);

Then(
  /^The "Managing Provider" now displayed there in list (.*)$/,
  async (UpdatedProviderName) => {
    await customerAccountPage.verifyCreatedProvider(UpdatedProviderName);
  }
);

Then(
  /^Search and active if provider (.*) is already inactive under (.*) section$/,
  async (providerName, button) => {
    await customerAccountPage.searchAndActive(providerName, button);
  }
);

Then(/^New Hospital note (.*) should display under list$/, async (note) => {
  await customerAccountPage.verifyCreatedHospitalNote(note);
});

Then(/^Second index Link text (.*) is displaying$/, async (text) => {
  await customerAccountPage.secondIndexLinkTextIsDisplayed(text);
});

Then(
  /^list of diagnosis should appear according to added character$/,
  async () => {
    await customerAccountPage.verifyDiagnosisList();
  }
);

Then(
  /^A "New Diagnosis type" gets created and it displays on the "Diagnosis type" list with (.*) and (.*) and (.*)$/,
  async (type, code, moreInfo) => {
    await customerAccountPage.verifyCreatedDiagnosis(type, code, moreInfo);
  }
);

Then(/^(.*) popup should be closed successfully$/, async (text) => {
  await customerAccountPage.verifyClosedPopup(text);
});

Then(
  /^"Vaccine type" details should be visible in the list with (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*)$/,
  async (
    cvxCode,
    brandName,
    vaccineName,
    description,
    note,
    status,
    internalID,
    nonVaccine,
    favourite,
    date
  ) => {
    await customerAccountPage.verifyCreatedVaccine(
      cvxCode,
      brandName,
      vaccineName,
      description,
      note,
      status,
      internalID,
      nonVaccine,
      favourite,
      date
    );
  }
);
// ===============================Web-ManagingProviderAccount======================//

Then(/^I get logged out from my account$/, async () => {
  await LoginWebPage.signInButton.waitForDisplayed({ timeout: 10000 });
  if ((await LoginWebPage.signInButton.isDisplayed()) === true) {
    console.log("✅ User has successfully logout");
  } else {
    throw new Error("❌ Log out button is not working");
  }
});

Then(/^It redirects on the (.*) screen$/, async (text) => {
  await managingProviderAccountPage.screenIsDisplayed(text);
});

Then(/^User refresh page$/, async () => {
  await managingProviderAccountPage.refreshPage();
});

Then(
  /^Created caregiver should be visible in the list with (.*) and (.*) and (.*) and (.*) and (.*)$/,
  async (name, mobile, relationship, children, status) => {
    await managingProviderAccountPage.verifyCreatedCaregiver(
      name,
      mobile,
      relationship,
      children,
      status
    );
  }
);

Then(
  /^Verify, status should be changed and (.*) should not be visible in the list$/,
  async (data) => {
    await managingProviderAccountPage.verifyUserStatus(data);
  }
);

Then(/^Verify (.*) is displayed with (.*)$/, async (data1, data2) => {
  await managingProviderAccountPage.verifyInactiveDetails(data1, data2);
});

Then(
  /^A "Other Provider" gets created and it displays on the "Other Providers" list with (.*) and (.*) and (.*)$/,
  async (specialty, name, status) => {
    await managingProviderAccountPage.verifyCreatedOtherProvider(
      specialty,
      name,
      status
    );
  }
);

Then(/^Search and delete duplicate user (.*)$/, async (data) => {
  await managingProviderAccountPage.searchAndDeleteAddedUser(data);
});

Then(/^"Add Patient Details" form displays$/, async () => {
  if (
    (await managingProviderAccountPage.babyFirstNameFieldIsDisplayed()) === true
  ) {
    console.log("✅ Add Patient Details form displays");
  } else {
    throw new Error("❌ Add Patient Details form is not displays");
  }
});

Then(
  /^QR code should be generated and First day Healthcare Medical Record Number should be generated$/,
  async () => {
    await managingProviderAccountPage.QRImageIsDisplayed();
  }
);

Then(
  /^A "New Patient" gets created And it is displayed on the "My Patient list" with (.*) and (.*) and (.*) and (.*) and (.*) and (.*)$/,
  async (firstName, lastName, services, location, hospitalLocation, status) => {
    await managingProviderAccountPage.verifyCreatedPatient(
      firstName,
      lastName,
      services,
      location,
      hospitalLocation,
      status
    );
  }
);

Then(
  /^The results are displayed on the "Active Patient" list as per applied filter$/,
  async () => {
    await managingProviderAccountPage.patientListIsDisplayed();
  }
);

Then(/^(.*) should be displayed$/, async (text) => {
  await managingProviderAccountPage.verifyText(text);
});

Then(
  /^Default values (.*) and (.*) should be displayed in dropdown list$/,
  async (hospital, location) => {
    await managingProviderAccountPage.defaultValuesDisplayed(
      hospital,
      location
    );
  }
);

Then(
  /^Successfully able to "close" the "Update Patient Treatment Details" screen$/,
  async () => {
    await managingProviderAccountPage.verifyPatientTreatmentDetailsPopup();
  }
);

Then(
  /^The (.*) gets assigned to the patient and provider displays in the dedicated slot on the list$/,
  async (data) => {
    await managingProviderAccountPage.verifyAssignedProvider(data);
  }
);

Then(
  /^Diagnosis details should be visible in the list with (.*) and (.*) and (.*)$/,
  async (diagnosisType, description, status) => {
    await managingProviderAccountPage.verifyDiagnosisDetails(
      diagnosisType,
      description,
      status
    );
  }
);

Then(/^Record status should be displayed as (.*)$/, async (data) => {
  await managingProviderAccountPage.verifyRecordStatus(data);
});
Then(
  /^Medication details should be visible in the list with (.*) and (.*) and (.*) and (.*) and (.*) and (.*)$/,
  async (
    medicationName,
    currentDose,
    measurement,
    frequency,
    interval,
    status
  ) => {
    await managingProviderAccountPage.verifyCreatedMedication(
      medicationName,
      currentDose,
      measurement,
      frequency,
      interval,
      status
    );
  }
);

Then(/^Link text (.*) is displaying$/, async (text) => {
  await managingProviderAccountPage.linkTextIsDisplayed(text);
});

Then(/^Heart rate graph is displaying$/, async () => {
  await managingProviderAccountPage.heartRateGraphIsDisplayed();
});

Then(/^Respiratory rate graph is displaying$/, async () => {
  await managingProviderAccountPage.respiratoryGraphIsDisplayed();
});

Then(/^O2 saturation graph is displaying$/, async () => {
  await managingProviderAccountPage.saturationGraphIsDisplayed();
});

Then(/^Temperature graph is displaying$/, async () => {
  await managingProviderAccountPage.temperatureGraphIsDisplayed();
});

Then(/^Live ECG graph should displayed$/, async () => {
  await managingProviderAccountPage.liveECGgraphIsDisplayed();
});
Then(/^Click on close live ECG popup$/, async () => {
  await managingProviderAccountPage.clickOnCloseLiveECGButton();
});

Then(/^Live SpO2 graph should displayed$/, async () => {
  await managingProviderAccountPage.liveSpO2graphIsDisplayed();
});
Then(/^Click on close live SpO2 popup$/, async () => {
  await managingProviderAccountPage.clickOnCloseLiveSpO2Button();
});

Then(/^Button text (.*) is displayed on screen$/, async (text) => {
  await managingProviderAccountPage.buttonTextIsDisplayed(text);
});

Then(/^Chart is displayed on screen$/, async () => {
  await managingProviderAccountPage.chartIsDisplayed();
});

Then(/^Click on close download excel button$/, async () => {
  await managingProviderAccountPage.clickOnCloseDownloadExcelButton();
});

Then(
  "I should see the following options in the dropdown",
  async (dataTable) => {
    const expectedOptions = dataTable.rawTable.flat();
    const options = await $$('//*[@id="medical-menu"]/nav/ul/li[3]/ul/li/a');
    const dropdownOption = await $(
      '//*[@id="medical-menu"]/nav/ul/li[3]/ul/li/a'
    );
    console.log("Dropdown option:", await dropdownOption.getText());
    console.log("Found options:", options.length);

    if (!Array.isArray(options) || options.length === 0) {
      throw new Error("No options found or options is not an array!");
    }

    const optionTexts = [];
    for (let i = 0; i < options.length; i++) {
      const text = await options[i].getText();
      optionTexts.push(text);
    }
    console.log("Extracted option texts:", optionTexts);
    await expect(optionTexts).toEqual(expectedOptions);
  }
);

Then(
  "I should see the following options in the dropdown under dropdown option",
  async (dataTable) => {
    const expectedOptions = dataTable.rawTable.flat();
    const options = await $$(
      '//*[@id="medical-menu"]/nav/ul/li[3]/ul/li[1]/ul/li/a'
    );
    const dropdownOption = await $(
      '//*[@id="medical-menu"]/nav/ul/li[3]/ul/li[1]/ul/li/a'
    );
    console.log("Dropdown option:", await dropdownOption.getText());
    console.log("Found options:", options.length);

    if (!Array.isArray(options) || options.length === 0) {
      throw new Error("No options found or options is not an array!");
    }

    const optionTexts = [];
    for (let i = 0; i < options.length; i++) {
      const text = await options[i].getText();
      optionTexts.push(text);
    }
    console.log("Extracted option texts:", optionTexts);
    await expect(optionTexts).toEqual(expectedOptions);
  }
);

Then(
  /^Imaging options should be visible in the dropdown under dropdown option$/,
  async (dataTable) => {
    const expectedOptions = dataTable.rawTable.flat();
    const options = await $$('(//ul[@class="dropdown-menu"])[6]//a');
    const dropdownOption = await $('(//ul[@class="dropdown-menu"])[6]//a');
    console.log("Dropdown option:", await dropdownOption.getText());
    console.log("Found options:", options.length);

    if (!Array.isArray(options) || options.length === 0) {
      throw new Error("No options found or options is not an array!");
    }

    const optionTexts = [];
    for (let i = 0; i < options.length; i++) {
      const text = await options[i].getText();
      optionTexts.push(text);
    }
    console.log("Extracted option texts:", optionTexts);
    await expect(optionTexts).toEqual(expectedOptions);
  }
);

Then(/^Nutrition graph should display on screen$/, async () => {
  await managingProviderAccountPage.nutritionGraphIsDisplayed();
});

Then(
  /^Respiratory "Bottle method" details should be visible in the list with (.*) and (.*) and (.*) and (.*)$/,
  async (methodOption, flowRate, oxygen, managingProvider) => {
    await managingProviderAccountPage.VerifyRespiratoryBottleMethodDetails(
      methodOption,
      flowRate,
      oxygen,
      managingProvider
    );
  }
);

Then(
  /^Respiratory "Room Air Concentrator method" details should be visible in the list with (.*) and (.*) and (.*) and (.*)$/,
  async (
    updatedMethodOption,
    updatedFlow,
    additionalSettings,
    managingProvider
  ) => {
    await managingProviderAccountPage.VerifyRespiratoryRoomAirConcentratorMethodDetails(
      updatedMethodOption,
      updatedFlow,
      additionalSettings,
      managingProvider
    );
  }
);

Then(/^Verify that "End date" is visible in the list$/, async () => {
  await managingProviderAccountPage.verifyEndDate();
});

Then(/^Delete duplicate data (.*) from sub tab$/, async (data) => {
  await managingProviderAccountPage.searchAndDeleteAddedUser(data);
});

Then(/^Click on option (.*) from list$/, async (option) => {
  await managingProviderAccountPage.clickOnListOption(option);
});

Then(/^Added record (.*) is displaying in list$/, async (record) => {
  await managingProviderAccountPage.verifyAddedRecord(record);
});

Then(
  /^File details should be visible with (.*) and (.*) and (.*)$/,
  async (image, fileType, description) => {
    await managingProviderAccountPage.verifyFileDetails(
      image,
      fileType,
      description
    );
  }
);

Then(/^The file should get displayed$/, async () => {
  await managingProviderAccountPage.verifyFileIsDisplayed();
});

Then(
  /^Vaccine details should be visible in the list with vaccine name (.*) and brand (.*) and lot number (.*) and comments (.*)$/,
  async (createdVaccineName, brandName, lotNumber, comments) => {
    await managingProviderAccountPage.verifyVaccineDetails(
      createdVaccineName,
      brandName,
      lotNumber,
      comments
    );
  }
);

Then(
  /^Hospital record should be visible in the list with (.*) and (.*) and (.*)$/,
  async (hospital, hospitalNote, description) => {
    await managingProviderAccountPage.verifyHospitalReocrdsDetails(
      hospital,
      hospitalNote,
      description
    );
  }
);

Then(
  /^(.*) result should be visible in the list with mandatory fields (.*)$/,
  async (imagingOption, type) => {
    await managingProviderAccountPage.verifyImagingRecordsWithMandatoryFields(
      imagingOption,
      type
    );
  }
);

Then(
  /^(.*) result should be visible in the list with all fields (.*) and (.*)$/,
  async (imagingOption, type, description) => {
    await managingProviderAccountPage.verifyImagingRecordsDetailsWithAllFields(
      imagingOption,
      type,
      description
    );
  }
);

Then(
  /^Result of Imaging>>other should be visible in the list with mandatory fields (.*)$/,
  async (type) => {
    await managingProviderAccountPage.verifyImaging_Other_MandatoryRecord(type);
  }
);

Then(
  /^Result of Imaging>>other should be visible in the list with all fields (.*) and (.*)$/,
  async (type, result) => {
    await managingProviderAccountPage.verifyImaging_Other_AllFieldsRecord(
      type,
      result
    );
  }
);

Then(/^Added data (.*) is successfully displaying in table$/, async (data) => {
  await managingProviderAccountPage.verifyDataInTable(data);
});

Then(/^Header (.*) is successfully displaying in table$/, async (data) => {
  await managingProviderAccountPage.verifyTableHeader(data);
});

Then(
  /^Details of results>>other mandatroy fields should be visible in the list with (.*) and (.*) and (.*)$/,
  async (type, description, comments) => {
    await managingProviderAccountPage.verify_Results_other_MandatoryFields(
      type,
      description,
      comments
    );
  }
);

Then(
  /^Details of results>>other module should be visible in the list with all fields (.*) and (.*) and (.*)$/,
  async (type, description, comments) => {
    await managingProviderAccountPage.verify_Results_other_AllFields(
      type,
      description,
      comments
    );
  }
);

Then(/^Added discription (.*) is displaying in table$/, async (data) => {
  await managingProviderAccountPage.verifyPeragraphInTable(data);
});

Then(
  /^Other provider records should be visilbe in the list with (.*) and (.*)$/,
  async (otherProvider, description) => {
    await managingProviderAccountPage.verifyOtherProviderRecords(
      otherProvider,
      description
    );
  }
);

Then(
  /^Added appointment data (.*) and (.*) should display on screen$/,
  async (provider, descriptionData) => {
    await managingProviderAccountPage.verifyAppointment(
      provider,
      descriptionData
    );
  }
);

Then(
  /^Verify appointment provider (.*) should display under dashboard$/,
  async (provider) => {
    await managingProviderAccountPage.verifyAppointmentOnPatientDashboard(
      provider
    );
  }
);

Then(
  /^Added data (.*) and (.*) is successfully displaying in table after save$/,
  async (device, data) => {
    await managingProviderAccountPage.verifyAddedMonitoringData(device, data);
  }
);

Then(
  /^Tracker options should be visible under dropdown$/,
  async (dataTable) => {
    await managingProviderAccountPage.verifyTrackerOptions(dataTable);
  }
);

Then(
  /^Verify multiple same validation messages on popup with text (.*)$/,
  async (text) => {
    await managingProviderAccountPage.verifyMultipleValidationMessages(text);
  }
);

Then(
  /^Growth details should be visible in the list with (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*)$/,
  async (
    heightcm,
    heightInches,
    weightPounds,
    weightOunce,
    weightkg,
    headCircumference_cm,
    headCircumference_inches
  ) => {
    await managingProviderAccountPage.verifyGrowthDetails(
      heightcm,
      heightInches,
      weightPounds,
      weightOunce,
      weightkg,
      headCircumference_cm,
      headCircumference_inches
    );
  }
);

Then(
  /^I navigate to the "Growth" page and the Graph or Chart of added "Growth Results" displays$/,
  async () => {
    await managingProviderAccountPage.verifyGrowthGraph();
  }
);

Then(
  /^Calculate Monthly Height Gain,Average Daily Weight Gain and Monthly Head Circumference Gain$/,
  async () => {
    await managingProviderAccountPage.verifyAverageDailyWeightGain();
    await managingProviderAccountPage.verifyMonthalyHeightGain();
  }
);

Then(/^Edit option is not avaliable on screen$/, async () => {
  managingProviderAccountPage.addOptionNotDisplaying();
});

Then(/^Add new option is not available on screen$/, async () => {
  managingProviderAccountPage.editOptionNotDisplaying();
});

Then(/^Table should contain column name (.*)$/, async (data) => {
  managingProviderAccountPage.verifyColumnNameInTable(data);
});

Then(
  /^Verify user is redirected to (.*) and (.*) is displayed$/,
  async (firstOption, data) => {
    await managingProviderAccountPage.verifyNutritionWorkflow(data);
  }
);

Then(
  /^Every (.*) hours value should displaying as the calculated value using (.*) and (.*)$/,
  async (hrs, supplementalGoal, weightInKg) => {
    await managingProviderAccountPage.calculateBreastFeed(
      hrs,
      supplementalGoal,
      weightInKg
    );
  }
);

Then(
  /^Every (.*) hours value should displaying for No Ad lib as the calculated value using (.*) and (.*) bottles (.*) and (.*)$/,
  async (hrs, supplementalGoal, weightInKg, bottle, gavage) => {
    await managingProviderAccountPage.calculateBreastFeedWithNoAdLib(
      hrs,
      supplementalGoal,
      weightInKg,
      bottle,
      gavage
    );
  }
);

Then(
  /^Selected data Breastfeeding (.*) Supplement (.*) Composition (.*)$/,
  async (Breadstfeeding, suppliment, composition) => {
    await managingProviderAccountPage.verifyNutrition(
      Breadstfeeding,
      suppliment,
      composition
    );
  }
);

Then(
  /^Volume (.*) Feeding goal (.*) Bottel% (.*) Gavage (.*) Ad Lib (.*) is displaying in table$/,
  async (volume, feedingGoal, Bottle, Gavage, AdLib) => {
    await managingProviderAccountPage.verifyNutritionOtherFields(
      volume,
      feedingGoal,
      Bottle,
      Gavage,
      AdLib
    );
  }
);

Then(
  /^Feeding goal (.*) Bottel% (.*) Gavage (.*) Ad Lib (.*) is displaying in table$/,
  async (feedingGoal, Bottle, Gavage, AdLib) => {
    await managingProviderAccountPage.verifyNutritionOtherFieldsExceptVolume(
      feedingGoal,
      Bottle,
      Gavage,
      AdLib
    );
  }
);
Then(
  /^Volume is displaying as the miltiplication of (.*) and (.*)$/,
  async (feedingGoal, weight) => {
    await managingProviderAccountPage.calculateVolumeValue(feedingGoal, weight);
  }
);

Then(/^Fill end date field$/, async () => {
  await managingProviderAccountPage.getCurrentDateTime();
});

Then(/^Verify that restart button is working as expected$/, async () => {
  await managingProviderAccountPage.verifyRestartFunctionality();
});

Then(/^Tracker data (.*) is displaying with graph screen$/, async (min) => {
  await managingProviderAccountPage.verifyTrackerData(min);
});

Then(/^Verify that end nutrition button is working$/, async () => {
  await managingProviderAccountPage.verifyEndNutritionOrderButtonFunctionality();
});

Then(
  /^Verify that end Respiratory settings button is working as expected$/,
  async () => {
    await managingProviderAccountPage.verifyEndRespiratoryButtonFunctionality();
  }
);

Then(/^End date is successfully displaying for nutrition order$/, async () => {
  await managingProviderAccountPage.verifyNutrionEndDate();
});

Then(/^Respiratory End date is successfully displaying in table$/, async () => {
  await managingProviderAccountPage.verifyRespiratoryEndDate();
});

Then(/^Veirfy Todays PMA Age is displaying correct in Card$/, async () => {
  await managingProviderAccountPage.verifyPMAonCard();
});

Then(
  /^Verify Todays Weight and Latest AWDG is displaying correct in card$/,
  async () => {
    await managingProviderAccountPage.verifyWeightAndADWG();
  }
);

Then(
  /^Feeding Goal bottle % and Gavage goal % should display correct in summary card$/,
  async () => {
    await managingProviderAccountPage.verifyFeedingGoalInCard();
    await managingProviderAccountPage.verifyBottlePercentageInCard();
    await managingProviderAccountPage.verifyGavageGoalPercentageInCard();
  }
);

Then(
  /^Calories and acutal feeding goal and actual bottle % and gavage % should displaying as (.*)$/,
  async (value) => {
    await managingProviderAccountPage.verifyCaloriesAndAllActualPercentageValuesInCard(
      value
    );
  }
);

Then(
  /^For Other provider Veirfy Todays PMA Age is displaying correct in Card$/,
  async () => {
    await managingProviderAccountPage.verifyPMAonCardOnOtherProviderScreen();
  }
);

Then(
  /^For Other provider Verify Todays Weight and Latest AWDG is displaying correct in card$/,
  async () => {
    await managingProviderAccountPage.verifyWeightAndADWGforOtherProvider();
  }
);

Then(
  /^Verify that correct actual data is displaying for gola bottle and gavage when number of days are (.*) and calories when one ounce value is (.*) and calories is (.*)$/,
  async (day, data, calories) => {
    await managingProviderAccountPage.verifyActualDataForNutrition(
      day,
      data,
      calories
    );
  }
);

Then(
  /^Calories results should displaying in summary tab when one ounce value is (.*) and calories is (.*)$/,
  async (data, calories) => {
    await managingProviderAccountPage.verifyAverageCalories(data, calories);
  }
);

//--------------Mobile-Cases------------------------//

Then(/^Validation message appears (.*)$/, async (message) => {
  await mobileLoginPage.verifyMobileValidationMessage(message);
});

Then(/^Verify that user is on FHDA moblie provider homepage$/, async () => {
  await mobileLoginPage.denySavePasswordPopup();
  await mobileLoginPage.notificationAlertPermission.click();
  await mobileLoginPage.clickOnOkButton();
  await mobileLoginPage.clickonbackbutton.click();
  await mobileLoginPage.verifyFHDAMobileProviderDashboradIsDisplayed();
});

Then(/^Verify that user is on homepage$/, async () => {
  await mobileLoginPage.denySavePasswordPopup();
  await mobileLoginPage.videoAndPicPermissionPopup.click();
  await mobileLoginPage.clickOnRecordAudioPopup();
  await mobileLoginPage.deviceLocationPopup.click();
  await mobileLoginPage.notificationAlertPermission.click();
  await mobileLoginPage.clickOnOkButton();
  await mobileLoginPage.clickonbackbutton.click();
  await mobileLoginPage.verifyDashboard();
});

Then(/^Download app from link$/, async () => {
  await mobileLoginPage.downloadApp();
});

Then(/^User is not able to login$/, async () => {
  await mobileLoginPage.signInButton.waitForDisplayed({ timeout: 5000 });
  if ((await mobileLoginPage.signInButton.isDisplayed()) === true) {
    console.log("User is still on login page");
  } else {
    throw new Error("Login page is not displayed");
  }
});

Then(/^A logout confirmation popup displays$/, async () => {
  if ((await mobileLoginPage.noButtonIsDisplayed()) === true) {
    console.log("✅ logout confirmation popup is visible");
  } else {
    throw new Error("❌ Failed to verify logout confirmation popup");
  }
});

Then(
  /^The logout confirmation popup closes and the provider remains logged in$/,
  async () => {
    if ((await mobileLoginPage.logoutOptionIsDisplayed()) === true) {
      console.log("✅ User is still login in the app");
    } else {
      throw new Error("❌ User has log out even after clicks 'No' button");
    }
  }
);

Then(
  /^User get logged out from my account and gets navigated to login page$/,
  async () => {
    await mobileLoginPage.signInButton.waitForDisplayed({ timeout: 5000 });
    if ((await mobileLoginPage.signInButton.isDisplayed()) === true) {
      console.log("✅ User has successfully logout");
    } else {
      throw new Error("❌User is not able to log out");
    }
  }
);

Then(
  /^For iOS, verify that user is on FHDA moblie provider homepage$/,
  async () => {
    await mobileLoginPage.clickOnNotificationButton();
    if ((await mobileLoginPage.iOShomepageIsDisplayed()) === true) {
      console.log("User successfully redirected to homepage");
    } else {
      throw new Error("Homepage is not displayed");
    }
  }
);

Then(/^For iOS, verify the homepage$/, async () => {
  if ((await mobileLoginPage.iOShomepageIsDisplayed()) === true) {
    console.log("User successfully redirected to homepage");
  } else {
    throw new Error("Homepage is not displayed");
  }
});

Then(/^For iOS, select child (.*) from the child list$/, async (data) => {
  await mobileLoginPage.selectChildOption(data);
});

Then(/^Select child (.*) from the child list$/, async (data) => {
  await mobileLoginPage.selectChildOption(data);
});

Then(/^Verify all the features inside vital signs$/, async () => {
  await mobileLoginPage.heartRateIsDisplayed();
  await mobileLoginPage.o2SaturationIsDisplayed();
  await mobileLoginPage.respiratoryRateDisplayed();
  await mobileLoginPage.TemperatureIsDisplayed();
  await mobileLoginPage.deviceStatusIsDisplayed();
});

Then(/^I get navigated to (.*) screen$/, async (text) => {
  await mobileLoginPage.verifyScreenIsDisplayed(text);
});

Then(/^I click on the back button$/, async () => {
  await mobileLoginPage.clickOnBackButton();
});
Then(/^Verify all the features inside medical report$/, async () => {
  await mobileLoginPage.diagnosisIsDisplayed();
  await mobileLoginPage.medicationIsDisplayed();
  await mobileLoginPage.resultsIsDisplayed();
  await mobileLoginPage.trackerIsDisplayed();
  await mobileLoginPage.vaccinationsIsDisplayed();
  await mobileLoginPage.iOSClickHoldScrollDownMethod();
  await mobileLoginPage.mediaIsDisplayed();
  await mobileLoginPage.documentsIsDisplayed();
  await mobileLoginPage.sendUsresultIsDisplayed();
  await mobileLoginPage.iOSClickHoldScrollUpMethod();
});

Then(/^Verify all the tabs inside providers module$/, async () => {
  await mobileLoginPage.providerTabIsDisplayed();
  await mobileLoginPage.appointmentsTabIsDisplayed();
});

Then(/^User click on the medication tab$/, async () => {
  await mobileLoginPage.clickOnMedicationTab();
});

Then(/^Verify all the tabs inside settings module$/, async () => {
  await mobileLoginPage.myContactInformationIsDisplayed();
  await mobileLoginPage.myAccountIsDisplayed();
  await mobileLoginPage.myBabysInformationIsDisplayed();
  try {
    await mobileLoginPage.changeChildIsDisplayed();
  } catch (error) {}

  await mobileLoginPage.changePasswordIsDisplayed();
});

Then(
  /^The logout confirmation popup closes and provider remains logged in$/,
  async () => {
    if ((await mobileLoginPage.dashboardIsDisplayed()) === true) {
      console.log("✅ User is still login in the app");
    } else {
      throw new Error("❌ User has log out even after clicks 'No' button");
    }
  }
);
Then(/^User click on allow permission button$/, async () => {
  try {
    await mobileLoginPage.ClickOnNotificationAlertPermission();
  } catch (error) {}
});

Then(/^Verfiy all the modules on provider dashboard$/, async () => {
  await mobileLoginPage.verifyProviderDashboard();
});

Then(
  /^Verify all the feautres under settings module for provider app$/,
  async () => {
    await mobileLoginPage.verifyProviderSettingsModule();
  }
);

Then(/^User use "Back command" to back the screen$/, async () => {
  await driver.execute("mobile: swipe", {
    direction: "right",
  });
});

Then(
  /^The selected image (.*) should get updated and displays on "Caregiver's" main screen of the app$/,
  async (pic) => {
    await mobileLoginPage.uploadFileImage(pic);
  }
);

Then(/^User click on the cross button$/, async () => {
  await mobileLoginPage.clickOnCrossButton();
});

Then(
  /^User click on the module back button to exit from the module$/,
  async () => {
    await mobileLoginPage.clickOnModuleBackButton();
  }
);

Then(/^Use "Back command" to close the popup$/, async () => {
  await browser.back();
});

Then(
  /^For android device, verify all the features inside medical report$/,
  async () => {
    await mobileLoginPage.diagnosisIsDisplayed();
    await mobileLoginPage.medicationIsDisplayed();
    await mobileLoginPage.resultsIsDisplayed();
    await mobileLoginPage.trackerIsDisplayed();
    await mobileLoginPage.vaccinationsIsDisplayed();
    await mobileLoginPage.mediaIsDisplayed();
    await mobileLoginPage.documentsIsDisplayed();
    await mobileLoginPage.sendUsresultIsDisplayed();
  }
);

Then(
  /^Details of medication should be visible in the list with (.*) and (.*) and (.*) and (.*)$/,
  async (medicationName, currentDose_And_measurement, frequency, interval) => {
    await mobileLoginPage.verifyMobileMedicationDetails(
      medicationName,
      currentDose_And_measurement,
      frequency,
      interval
    );
  }
);

Then(
  /^Added record data (.*) text is displaying on mobile screen$/,
  async (data) => {
    await mobileLoginPage.verifyText(data);
  }
);

Then(/^Result chart shuld display on screen$/, async () => {
  await mobileLoginPage.laboratoryChartIsDisplayed();
});

Then(
  /^Added mobile growth details should be visible with Height inch (.*) and Weight Pound (.*) and Weight Ounce (.*) and Head Circumference (.*)$/,
  async (heightInch, weightPound, weightOunce, headCircumference) => {
    await mobileLoginPage.verifyMobileGrowthDetails(
      heightInch,
      weightPound,
      weightOunce,
      headCircumference
    );
  }
);

Then(/^Deleted mobile record should not be visible in the list$/, async () => {
  await mobileLoginPage.verifyDeletedMobileRecord();
});

Then(
  /^Added nutrition data (.*) should displaying after save$/,
  async (data) => {
    await mobileLoginPage.verifyNutritionData(data);
  }
);

Then(/^Added sleep data (.*) should displaying after save$/, async (data) => {
  await mobileLoginPage.verifySleepData(data);
});

Then(/^Enter value (.*) in name filed$/, async (data) => {
  await mobileLoginPage.fillEnterNameField(data);
});
