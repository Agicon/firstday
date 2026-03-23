const BasePage = require("./testBase");
const { remote } = require("webdriverio");
const superAdminPage = require("./superAdminPage");
const customerAccountPage = require("./customerAccountPage");
const assert = require("assert");

class ManagingProviderAccountPage extends BasePage {
  get settingsButton() {
    return $("//a[@title='Notification']");
  }
  get searchField() {
    return $(
      "//*[@id='example_filter']/label/input|//*[@id='respiratory-settings-table_filter']/label/input|//*[@id='example1_filter']/label/input|//*[@id='monitoring-order-table_filter']/label/input|//*[@id='device-brand-table_filter']/label/input|//*[@id='monitoring-orders-table_filter']/label/input|//div[@id='measurement-order-table_filter']//input|//div[@id='measurement-orders-table_filter']//input|//div[@id='nutrition-orders-table_filter']//input"
    );
  }

  get relationshipField() {
    return $("select[id='relationship_type']");
  }

  get updateButton() {
    return $("(//a[@title='View / Update'])[1]|(//a[@title='Edit'])[1]");
  }

  get specialtyField() {
    return $("#provider_specialty");
  }

  get dashboard_AllPatientsButton() {
    return $("(//a[contains(text(),'Dashboard - All Patients')])[2]");
  }

  get deletePatientMessage() {
    return $("//div[contains(text(),'Patient Deleted !!')]");
  }

  get babyFirstNameField() {
    return $("(//input[@id='full_name']|//input[@id='first_name'])[1]");
  }

  get babyLastNameField() {
    return $("(//input[@id='full_name'])[2]|//input[@id='last_name']");
  }

  get birthDateField() {
    return $("#date_of_birth:nth-of-type(1)");
  }

  get birthTimeField() {
    return $("#time_of_birth:nth-of-type(1)");
  }

  get hospitalField() {
    return $("#hospital_id:nth-of-type(1),#hospital");
  }

  get hospitalFieldOnDashboard() {
    return $("#hospital");
  }
  get caregiverField() {
    return $("//span[@class='select2-selection select2-selection--multiple']");
  }

  get weekField() {
    return $("//select[@name='gestational_week']");
  }

  get daysField() {
    return $("//select[@name='gestational_day']");
  }

  get treatmentLocationField() {
    return $("//label[contains(text(),'Hospital / Clinic')]");
  }

  get startServiceDateField() {
    return $("#service_date:nth-of-type(1)");
  }

  get hospitalLocationField() {
    return $("#hospital_location");
  }
  get hospitalRecordNumberField() {
    return $("#hospital_record_number");
  }

  get ECG_MAC_AddressField() {
    return $("#device_1_address");
  }

  get saturation_MAC_AddressField() {
    return $("#device_2_address");
  }

  get temperature_MAC_AddressField() {
    return $("#device_3_address");
  }

  get generateMedicalReportNumberButton() {
    return $("#mrn:nth-of-type(1)");
  }

  get QRCodeImage() {
    return $("//img[@alt='my alt']");
  }

  get dateOfDischargeField() {
    return $("#date_of_discharge:nth-of-type(1)");
  }

  get startDateField() {
    return $("#start_date:nth-of-type(1),#date,#date_time");
  }

  get descriptionField() {
    return $("//textarea[@name='description']|//textarea[@id='comments']");
  }

  get pasteButton() {
    return $("//a[@title='Paste']");
  }

  get cancelButton() {
    return $("//a[@title='Cancel']");
  }

  get okButton() {
    return $("//a[@title='OK']");
  }

  get bodyField() {
    return $(
      "//body[@aria-label='To enrich screen reader interactions, please activate Accessibility in Grammarly extension settings']"
    );
  }

  get iframe() {
    return $("//iframe[@aria-label='Paste Area']");
  }

  get diagnosisField() {
    return $("//select[@name='diagnosis_type_id']");
  }

  get searchFieldUnderPatientForm() {
    return $("(//input[@type='search'])[1]");
  }

  get medicationField() {
    return $("#medication_on:nth-of-type(1)");
  }

  get measurementField() {
    return $("#measurement");
  }

  get frequencyField() {
    return $("#frequency:nth-of-type(1)");
  }

  get intervalField() {
    return $("#interval");
  }

  get additionalInformationField() {
    return $("#additional_information");
  }

  get currentDoseField() {
    return $("#dose");
  }

  get lastAdjustedDateField() {
    return $("#last_adjusted:nth-of-type(1)");
  }

  get dropdownField() {
    return $("#medication_status:nth-of-type(1)");
  }

  get heartRateViewDetail() {
    return $("(//a[@title='View details'])[1]");
  }

  get respiratoryRateViewDetail() {
    return $("(//a[@title='View details'])[2]");
  }

  get O2SaturationViewDetail() {
    return $("(//a[@title='View details'])[3]");
  }

  get temperatureViewDetail() {
    return $("(//a[@title='View details'])[4]");
  }

  get heartRateGraph() {
    return $("#heartRate_graph");
  }

  get respiratoryRateGraph() {
    return $("#respiratoryRate_graph");
  }
  get O2SaturationGraph() {
    return $("#saturationRate_graph");
  }

  get temperatureGraph() {
    return $("#temperature_graph");
  }

  get closeECGpopupButton() {
    return $("(//button[@class='close'])[1]");
  }

  get liveSpO2Graph() {
    return $("//canvas[@id='canvas_spo2']");
  }

  get liveECGgraph() {
    return $("(//canvas[@id='canvas'])[1]");
  }

  get closeSpO2popupButton() {
    return $("(//button[@class='close'])[2]");
  }

  get closeDownloadExcelpopupButton() {
    return $("(//button[@class='close'])[3]");
  }

  get resultsTab() {
    return $("//a[contains(text(),'Results ')]");
  }
  get imaging_OtherButton() {
    return $("(//a[contains(text(),'Other')])[5]");
  }

  get results_OtherButton() {
    return $("(//a[contains(text(),'Other')])[6]");
  }

  get results_OtherLink_OtherProvider() {
    return $("(//a[contains(text(),'Other')])[7]");
  }

  get ordersTab() {
    return $("//a[contains(text(),'Orders')]");
  }

  get chartData() {
    return $("//div[@id='diaperingFilterGraph']|//div[@id='sleepFilterGraph']");
  }

  get nutritionGraph() {
    return $("//div[@class='highcharts-container ']");
  }

  get methodField() {
    return $("#method:nth-of-type(1)");
  }

  get crossButton() {
    return $("(//button[@class='close'])[2]");
  }

  async fillMeasurementField(value) {
    await this.measurementField.selectByVisibleText(value);
  }

  get flowRateField() {
    return $("#flow_rate");
  }

  get oxygenField() {
    return $("#oxygen:nth-of-type(1)");
  }

  get RespiratoryMethodField() {
    return $("//tr[@class='odd']//td[2]");
  }
  get RespiratoryFlowrateField() {
    return $("//tr[@class='odd']//td[3]");
  }
  get RespiratoryAdditionalSettingsField() {
    return $("//tr[@class='odd']//td[4]");
  }
  get RespiratoryOxygenField() {
    return $("//tr[@class='odd']//td[5]");
  }
  get RespiratoryManagingProviderField() {
    return $("//tr[@class='odd']//td[6]");
  }

  get additionalSettingsField() {
    return $("#additional_settings:nth-of-type(1)");
  }

  get endDateField() {
    return $("#end_date:nth-of-type(1)");
  }

  get selectProviderDropdown() {
    return $(
      "//select[@id='provider_id']|//select[@id='providers']|//select[@name='provider_id']"
    );
  }

  get fileData() {
    return $("//img[@class='fancybox-image']");
  }

  get editMediaDescription() {
    return $("//textarea[@id='edit-textarea']");
  }

  get lotNumberField() {
    return $("#lot_number");
  }

  get commentsField() {
    return $(
      "//textarea[@id='comments']|//textarea[@id='Comments']|//input[@id='comments']|//textarea[@id='comment']"
    );
  }

  get vaccineField() {
    return $("#vaccinetype_text:nth-of-type(1)");
  }

  get typeRecord() {
    return $("(//tr[@class='odd'])[2]//td[3]");
  }

  get typeField() {
    return $("#type");
  }

  get actMedia() {
    return $("(//tr[@class='odd'])[2]//td[6]//a");
  }

  get descriptionRecord() {
    return $("(//tr[@class='odd'])[2]//td[4]");
  }

  get actPaperClip() {
    return $("(//tr[@class='odd'])[2]//td[5]//a");
  }

  get otherTypeRecord() {
    return $("//tr[@class='odd']//td[3]");
  }

  get otherResultRecord() {
    return $("//tr[@class='odd']//td[4]");
  }

  get actOther_Paperclip() {
    return $("//tr[@class='odd']//td[5]//a");
  }

  get wbcField() {
    return $("#wbc");
  }

  get hgbField() {
    return $("#hgb");
  }

  get hctField() {
    return $("#hct");
  }

  get pltsField() {
    return $("#plts");
  }

  get reticField() {
    return $("#retic");
  }

  get resultsDateField() {
    return $(
      "//input[@id='date_time']|//input[@id='Date']|//input[@id='date']|//input[@id='appointment_date']"
    );
  }

  get NaField() {
    return $("#Na");
  }

  get KField() {
    return $("#K");
  }

  get ClField() {
    return $("#Cl");
  }

  get Co2Field() {
    return $("#Co2");
  }

  get BunField() {
    return $("#Bun");
  }
  get CrField() {
    return $("#Cr");
  }

  get GluField() {
    return $("#Glu");
  }

  get CaField() {
    return $("#Ca");
  }

  get PhosField() {
    return $("#Phos");
  }

  get MgField() {
    return $("#Mg");
  }

  get TBiliField() {
    return $("#TBili");
  }

  get TBiliCField() {
    return $("#TBiliC");
  }

  get DBiliField() {
    return $("#DBili");
  }

  get AlkPField() {
    return $("#AlkP");
  }

  get TprotField() {
    return $("#Tprot");
  }
  get AlbField() {
    return $("#Alb");
  }

  get AstField() {
    return $("#Ast");
  }

  get AltField() {
    return $("#Alt");
  }

  get GGTField() {
    return $("#GGT");
  }

  get trigField() {
    return $("#Trig");
  }

  get cholesterolField() {
    return $("#Cholesterol");
  }

  get HDLField() {
    return $("#HDL");
  }

  get LDLField() {
    return $("#LDL");
  }
  get TSHField() {
    return $("#tsh");
  }

  get T4Field() {
    return $("#t4");
  }

  get freeT4Field() {
    return $("#free_t4");
  }

  get T3Field() {
    return $("#t3");
  }

  get cortisolField() {
    return $("#cortisol");
  }

  get ACTHField() {
    return $("#acth");
  }

  get PTField() {
    return $("//input[@id='PT']");
  }

  get aPTTField() {
    return $("#aPTT");
  }

  get TTField() {
    return $("#TT");
  }

  get fibrinogenField() {
    return $("#Fibrinogen");
  }
  get titleField() {
    return $("#new_tit_1_result");
  }

  get resultsOtherTypeRecord() {
    return $("//tr[@class='odd']//td[2]");
  }

  get resultsCommentsRecord() {
    return $("//tr[@class='odd']//td[6]");
  }

  get diagnosisCheckbox() {
    return $("(//input[@type='checkbox'])[1]");
  }

  get medicationsCheckbox() {
    return $("(//input[@type='checkbox'])[2]");
  }

  get vaccinationsCheckbox() {
    return $("(//input[@type='checkbox'])[15]");
  }

  get OtherProviderRecordsCheckbox() {
    return $("(//input[@type='checkbox'])[16]");
  }

  get appointmentOrderDropdown() {
    return $("//select[@id='apppoitment_order']");
  }

  get appointmentDateField() {
    return $("#appointment_date");
  }

  get ECGDeviceDropdown() {
    return $("#ecg_brand_id");
  }

  get ECGDurationDropdown() {
    return $("#ecg_duration");
  }

  get O2SaturationDeviceDropdown() {
    return $("//select[@id='spo2_brand_id']");
  }

  get O2SeturationDurationDropdown() {
    return $("//select[@id='spo2_duration']");
  }

  get temperatureDeviceDropdown() {
    return $("#temp_brand_id");
  }

  get temperatureDurationDropdown() {
    return $("#temp_duration");
  }

  get temperatureDurationText() {
    return $("#temp_duration_text");
  }

  get heightInchesField() {
    return $("#height1:nth-of-type(1)");
  }

  get poundField() {
    return $("#weight1:nth-of-type(1)");
  }

  get headInchField() {
    return $("#head1:nth-of-type(1)");
  }

  get weightOunceField() {
    return $("#weight2:nth-of-type(1)");
  }

  get height_cm_Value() {
    return $("(//tr[@class='odd']//td)[5]");
  }

  get heightInchValue() {
    return $("(//tr[@class='odd']//td)[4]");
  }

  get WeightPoundsValue() {
    return $("(//tr[@class='odd']//td)[7]");
  }

  get WeightOunceValue() {
    return $("(//tr[@class='odd']//td)[8]");
  }

  get WeightKgValue() {
    return $("(//tr[@class='odd']//td)[9]");
  }

  get head_cm_Value() {
    return $("(//tr[@class='odd']//td)[12]");
  }
  get head_inch_Value() {
    return $("(//tr[@class='odd']//td)[11]");
  }

  get growthGraph() {
    return $("//div[@class='plot-container plotly']");
  }

  get growthIframe() {
    return $("//iframe[@id='growth_iframe']");
  }

  get weightFrequencyDropdown() {
    return $("//select[@id='weight_frequency']");
  }
  get heightFrequencyDropdown() {
    return $("//select[@id='height_frequency']");
  }
  get headCircumferenceFrequencyDropdown() {
    return $("//select[@id='head_circumference_frequency']");
  }

  get breastFeeding_Yes_RadioButton() {
    return $("#breastfeedingWorkFlow_yes");
  }

  get breastFeeding_No_RadioButton() {
    return $("#breastfeedingWorkFlow_no");
  }

  get supplement_Yes_RadioButton() {
    return $("#supplementation_required_yes");
  }

  get supplement_No_RadioButton() {
    return $("#supplementation_required_no");
  }

  get supplementalGoalField() {
    return $(
      "(//input[@id='supplemental_goal'])[1]|(//input[@id='supplemental_goal'])[2]"
    );
  }

  get adLib_Yes_RadioButton() {
    return $("(//input[@name='ad_lib_supplemental_goal'])[1]");
  }

  get adLib_Yes_RadioButton_For_NoBreastfeed() {
    return $("(//input[@name='ad_lib_supplemental_goal_no'])[1]");
  }

  get adLib_No_RadioButton() {
    return $("(//input[@name='ad_lib_supplemental_goal'])[2]");
  }

  get feedingGoalField() {
    return $("(//input[@id='supplemental_goal'])[2]");
  }

  get feedingAdLib_No_radioButton() {
    return $("(//input[@name='ad_lib_supplemental_goal_no'])[2]");
  }

  get formulaField() {
    return $("#nutrition_milk_formula:nth-of-type(1)");
  }

  get thirdIndexNextButton() {
    return $("(//button[contains(text(),'Next')])[3]");
  }

  get fourthIndexNextButton() {
    return $("(//button[contains(text(),'Next')])[4]");
  }

  get fifthIndexNextButton() {
    return $("(//button[contains(text(),'Next')])[5]");
  }

  get bottlePercentField() {
    return $("#bottle_percent:nth-of-type(1)");
  }

  get gavageDurationField() {
    return $("#gavage_duration:nth-of-type(1)");
  }

  get createdNutritionTypeData() {
    return $("(//tr[@class='odd']//td)[1]");
  }

  get createdNutritionFrequencyData() {
    return $("(//tr[@class='odd']//td)[2]");
  }

  get nutritionMilkField() {
    return $("#nutrition_milk:nth-of-type(1)");
  }

  get caloriesField() {
    return $("#calories:nth-of-type(1)");
  }

  get nutritionfortificationField() {
    return $("#nutrition_fortification:nth-of-type(1)");
  }

  get nameField() {
    return $("#nutrition_fortification_new:nth-of-type(1)");
  }

  get newFormulaField() {
    return $("//input[@id='nutrition_milk_new']");
  }

  get nutritionViewModeDropdown() {
    return $("//select[@id='nutrition-view-mode']");
  }

  get endDateInputField() {
    return $("//input[@id='weight_end_date']|//input[@id='ecg_end_date']");
  }

  get volumeFilterDropdown() {
    return $("//select[@id='volume_type']");
  }

  get diaperingTypeFilterDropdown() {
    return $("//select[@id='diapering_type']");
  }
  get filterTypeDropdown() {
    return $("//select[@id='filter_type']");
  }

  get addressField() {
    return $("//input[@id='location-input']");
  }

  async clickOnSecondIndexLinkText(text) {
    const linkText = await $("(//a[contains(text(),'" + text + "')])[2]");
    await linkText.waitForClickable({ timeout: 10000 });
    if ((await linkText.isDisplayed()) === true) {
      await linkText.click();
    } else {
      throw new Error("link is not displaying: " + text);
    }
  }

  async screenIsDisplayed(text) {
    await (
      await $(
        "//h1[contains(text(),'" +
          text +
          "')]|//h2[contains(text(),'" +
          text +
          "')]"
      )
    ).waitForDisplayed({ timeout: 10000 });
    if (
      (await $(
        "//h1[contains(text(),'" +
          text +
          "')]|//h2[contains(text(),'" +
          text +
          "')]"
      ).isDisplayed()) === true
    ) {
      console.log("✅ " + text + " Screen is displayed");
    } else {
      throw new Error("❌" + text + " Screen is not displayed");
    }
  }

  async fillSearchField(data) {
    await this.searchField.clearValue();
    await this.searchField.setValue(data);
    await browser.pause(1500);
  }

  async fillAlreadyRegisteredEmail(name, lastName, mobile) {
    const actEmail = await $("(//tr[@class='odd']//td)[3]").getText();
    await $("//button[contains(text(),'New Caregiver')]").click();
    await customerAccountPage.fillNameField(name);
    await superAdminPage.fillLastNameField(lastName);
    await customerAccountPage.fillEmailField(actEmail);
    await customerAccountPage.fillMoblieNumberField(mobile);
    await browser.pause(3000);
    await $("//button[contains(text(),'Create')]").click();
  }

  async fillRelationshipField(Data) {
    await this.relationshipField.waitForDisplayed({ timeout: 20000 });
    await this.relationshipField.click();
    // await this.relationshipField.clearValue();
    // await this.relationshipField.setValue(Data);
    const dataIS=await $("//option[contains(text(),'"+Data+"')]");
    await dataIS.click();
  }

  async verifyCreatedCaregiver(name, mobile, relationship, children, status) {
    const actualName = await $("(//tr[@class='odd']//td)[2]").getText();
    const actualMobile = await $("(//tr[@class='odd']//td)[4]").getText();
    const actualRelationship = await $("(//tr[@class='odd']//td)[5]").getText();
    const actualStatus = await $("(//tr[@class='odd']//td)[7]").getText();
    await expect(actualName).toEqual(name);
    await expect(actualMobile).toEqual(mobile);
    await expect(actualRelationship).toEqual(relationship);
    await expect(actualStatus).toEqual(status);
  }

  async verifyUserStatus(text) {
    if (
      (await $("//a[contains(text(),'" + text + "')]").isDisplayed()) === true
    ) {
      throw new Error("❌ " + text + " is still displayed in the list");
    } else {
      console.log("✅ " + text + " is not displayed in the list");
    }
  }

  async verifyInactiveDetails(value1, value2) {
    await browser.pause(3000);
    const name = await $(
      "//a[contains(text(),'" +
        value1 +
        "')]|//td[contains(text(),'" +
        value1 +
        "')]"
    );
    await name.waitForDisplayed({ timeout: 10000 });
    const status = await $(
      "//a[contains(text(),'" +
        value2 +
        "')]|//button[contains(text(),'" +
        value2 +
        "')]"
    );
    if (
      (await name.isDisplayed()) === true &&
      (await status.isDisplayed()) === true
    ) {
      console.log("✅ Details are matching");
    } else {
      throw new Error("❌ Details are not matching " + value1 + value2);
    }
  }

  async clickOnUpdateButton() {
    await this.updateButton.waitForClickable({ timeout: 15000 });
    await this.updateButton.click();
  }

  async clearNameField() {
    await customerAccountPage.nameField.waitForDisplayed({ timeout: 20000 });
    await customerAccountPage.nameField.click();
    await customerAccountPage.nameField.clearValue();
  }

  async verifyCreatedOtherProvider(specialty, name, status) {
    await $("(//tr[@class='odd']//td)[2]").waitForDisplayed({ timeout: 15000 });
    const actSpecialty = await $("(//tr[@class='odd']//td)[2]").getText();
    const actName = await $("(//tr[@class='odd']//td)[3]").getText();
    const actStatus = await $("(//tr[@class='odd']//td)[6]").getText();
    try {
      expect(actSpecialty).toEqual(specialty);
    } catch (error) {}
    expect(actName).toEqual(name);
    expect(actStatus).toEqual(status);
  }

  async fillAlreadyRegisteredEmailForOtherProvider(name) {
    const actEmail = await $("(//tr[@class='odd']//td)[4]").getText();
    await $("//button[contains(text(),'New Other Provider')]").click();
    await browser.pause(2000);
    await customerAccountPage.fillNameField(name);
    await customerAccountPage.fillEmailField(actEmail);
    await browser.pause(2000);
    await $("//button[contains(text(),'Create')]").click();
    await browser.pause(2000);
  }

  async fillSpecialtyField(data) {
    await this.specialtyField.click;
    await this.specialtyField.clearValue();
    await this.specialtyField.setValue(data);
  }

  async clickOnLinkText(text) {
    const linkText = await $("//a[contains(text(),'" + text + "')]");
    await linkText.waitForDisplayed({ timeout: 15000 });
    if ((await linkText.isDisplayed()) === true) {
      await linkText.click();
    } else {
      throw new Error("link is not displaying: " + text);
    }
  }

  async hoverOnDashboard_AllPatientsButton() {
    await this.dashboard_AllPatientsButton.waitForDisplayed({ timeout: 15000 });
    await this.dashboard_AllPatientsButton.moveTo();
  }

  async clickOnAddANewPatientOption(data) {
    await $("(//a[contains(text(),'" + data + "')])[2]").waitForDisplayed({
      timeout: 15000,
    });
    await $("(//a[contains(text(),'" + data + "')])[2]").click();
  }

  async searchAndDeleteAddedUser(text) {
    await this.searchField.clearValue();
    await this.searchField.setValue(text);
    try {
      for (let i = 1; i < 4; i++) {
        await $("(//tr[@class='odd']//td)[4]").click();
        await $("//a[contains(text(),'" + text + "')]").waitForDisplayed({
          timeout: 10000,
        });
        await superAdminPage.deleteButton.click();
        await superAdminPage.clickOnButtonWithText("Yes");
        await this.deletePatientMessage.waitForDisplayed({ timeout: 20000 });
        await this.deletePatientMessage.waitForDisplayed({
          reverse: true,
          timeout: 20000,
        });
      }
    } catch (error) {}
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
        await this.deleteMessage.waitForDisplayed({
          reverse: true,
          timeout: 20000,
        });
      }
    } catch (error) {}
  }

  async babyFirstNameFieldIsDisplayed() {
    await this.babyFirstNameField.waitForDisplayed({ timeout: 20000 });
    return await this.babyFirstNameField.isDisplayed();
  }

  async QRImageIsDisplayed() {
    await this.QRCodeImage.waitForDisplayed({ timeout: 10000 });
    if ((await this.QRCodeImage.isDisplayed()) === true) {
      console.log("✅ QR image is successfully generated");
    } else {
      throw new Error("❌ QR image is not displayed");
    }
  }

  async verifyCreatedPatient(
    name,
    lastName,
    services,
    location,
    hospitalLocation,
    status
  ) {
    await this.searchField.clearValue();
    await this.searchField.setValue(name);
    await browser.pause(2000);
    await $("(//tr[@class='odd']//td)[2]").waitForDisplayed({ timeout: 15000 });
    const actualName = await $("(//tr[@class='odd']//td)[2]").getText();
    const actualLastName = await $("(//tr[@class='odd']//td)[3]").getText();
    const actualServices = await $("(//tr[@class='odd']//td)[4]").getText();
    const actualLocation = await $("(//tr[@class='odd']//td)[5]").getText();
    const actualHospitalLocation = await $(
      "(//tr[@class='odd']//td)[6]"
    ).getText();
    const actualStatus = await $("(//tr[@class='odd']//td)[7]").getText();
    await expect(actualName).toEqual(name);
    await expect(actualLastName).toEqual(lastName);
    await expect(actualServices).toEqual(services);
    await expect(actualLocation).toEqual(location);
    try {
      await expect(actualHospitalLocation).toEqual(hospitalLocation);
    } catch (error) {}
    await expect(actualStatus).toEqual(status);
  }

  async fillBabyNameField(text) {
    await this.babyFirstNameField.waitForDisplayed({ timeout: 15000 });
    await this.babyFirstNameField.clearValue();
    await this.babyFirstNameField.setValue(text);
  }

  async fillBabyLastNameField(text) {
    await this.babyLastNameField.waitForDisplayed({ timeout: 15000 });
    await this.babyLastNameField.clearValue();
    await this.babyLastNameField.setValue(text);
  }

  async clickOnBirthDateField() {
    await this.birthDateField.waitForDisplayed({ timeout: 15000 });
    await this.birthDateField.click();
    await browser.keys("Enter");
  }

  async fillBirthTimeField(text) {
    await this.birthTimeField.waitForDisplayed({ timeout: 15000 });
    await browser.pause(1000);
    await this.birthTimeField.setValue(text);
    await browser.pause(1000);
  }

  async selectBabyGender(text) {
    await browser.pause(1000);
    await $(
      "//input[@id='gender' and contains(following-sibling::text(), '" +
        text +
        "')]"
    ).waitForDisplayed({ timeout: 5000 });
    await $(
      "//input[@id='gender' and contains(following-sibling::text(), '" +
        text +
        "')]"
    ).click();
    await browser.pause(1000);
  }

  async selecthospital(text) {
    await this.hospitalField.waitForDisplayed({ timeout: 15000 });
    await this.hospitalField.click();
    await $("//option[contains(text(),'" + text + "')]").click();
  }

  async selecthospitalOnDashboard(text) {
    await this.hospitalFieldOnDashboard.waitForDisplayed({ timeout: 15000 });
    await this.hospitalFieldOnDashboard.click();
    await $("(//option[contains(text(),'" + text + "')])[2]").click();
  }

  async selectCaregiver(text) {
    await this.caregiverField.waitForDisplayed({ timeout: 15000 });
    await this.caregiverField.click();
    await $("//li[contains(text(),'" + text + "')]").waitForDisplayed({
      timeout: 15000,
    });
    await $("//li[contains(text(),'" + text + "')]").click();
  }

  async selectWeek(text) {
    await this.weekField.waitForDisplayed({ timeout: 15000 });
    await this.weekField.click();
    await $("//option[contains(text(),'" + text + "')]").click();
  }
  async selectDays(text) {
    await this.daysField.waitForDisplayed({ timeout: 15000 });
    await this.daysField.click();
    await $("(//option[contains(text(),'" + text + "')])[7]").click();
  }

  async selectTreatmentLocationOnActivePatient(text) {
    await browser.pause(2000);
    await $("#patient_treatment_location:nth-of-type(1)").waitForDisplayed({
      timeout: 5000,
    });
    await $("#patient_treatment_location:nth-of-type(1)").click();
    await browser.pause(2000);
    await $(
      "(//option[normalize-space(text())='" +
        text.trim() +
        "'])[2] | //option[normalize-space(text())='" +
        text.trim() +
        "']"
    ).click();
    await browser.pause(2000);
  }

  async selectTreatmentLocationField(text) {
    await $("//label[contains(text(),'" + text + "')]").waitForDisplayed({
      timeout: 15000,
    });
    await $("//label[contains(text(),'" + text + "')]").click();
  }

  async selectStartServiceDateField() {
    await this.startServiceDateField.waitForDisplayed({ timeout: 15000 });
    await this.startServiceDateField.click();
  }

  async fillHospitalLocationField(text) {
    await this.hospitalLocationField.waitForDisplayed({ timeout: 15000 });
    await this.hospitalLocationField.clearValue();
    await this.hospitalLocationField.setValue(text);
  }

  async fillHospitalRecordNumberField(text) {
    await this.hospitalRecordNumberField.waitForDisplayed({ timeout: 15000 });
    await this.hospitalRecordNumberField.setValue(text);
  }

  async fill_ECG_MAC_AddressField(text) {
    await this.ECG_MAC_AddressField.waitForDisplayed({ timeout: 15000 });
    await this.ECG_MAC_AddressField.setValue(text);
  }

  async fillSaturation_MAC_AddressField(text) {
    await this.saturation_MAC_AddressField.waitForDisplayed({ timeout: 15000 });
    await this.saturation_MAC_AddressField.setValue(text);
  }

  async fillTemperature_MAC_AddressField(text) {
    await this.temperature_MAC_AddressField.waitForDisplayed({
      timeout: 15000,
    });
    await this.temperature_MAC_AddressField.setValue(text);
    await browser.pause(3000);
  }

  async selectDischagerNextday() {
    await this.dateOfDischargeField.waitForDisplayed({ timeout: 10000 });
    await this.dateOfDischargeField.click();
    await browser.keys("ArrowRight");
    await browser.keys("Enter");
  }

  async removeRequiredField() {
    await this.babyFirstNameField.waitForDisplayed({ timeout: 20000 });
    await this.babyFirstNameField.clearValue();
    await this.babyLastNameField.waitForDisplayed({ timeout: 15000 });
    await this.babyLastNameField.clearValue();
  }

  async uncheckServiceCheckbox(text) {
    await $("//label[contains(text(),'" + text + "')]").waitForDisplayed({
      timeout: 10000,
    });
    await $("//label[contains(text(),'" + text + "')]").click();
  }

  async patientListIsDisplayed() {
    await $("(//tr[@class='odd']//td)[2]").waitForDisplayed({ timeout: 15000 });
    if ((await $("(//tr[@class='odd']//td)[2]").isDisplayed()) === true) {
      console.log("✅ Patient is displayed after the applied dropdown values");
    } else {
      throw new Error(
        "❌ Patient is not displayed after the applied dropdown values"
      );
    }
  }

  async verifyText(data) {
    const Text = await $(
      "//td[contains(text(),'" +
        data +
        "')]|//div[contains(text(),'" +
        data +
        "')]"
    );
    await Text.click();
    await Text.waitForDisplayed({ timeout: 20000 });
    if ((await Text.isDisplayed()) === true) {
      console.log(" ✅ Text ==> " + data + " is displayed");
    } else {
      throw new Error("❌ Text ==> " + data + " is not displayed");
    }
  }

  async selectDischargeDate() {
    await this.dateOfDischargeField.waitForDisplayed({ timeout: 10000 });
    await this.dateOfDischargeField.click();
    await browser.keys("Enter");
  }

  async defaultValuesDisplayed(expHospital, expLocation) {
    let defaultHospital = await $("(//select[@id='hospital']//option)[1]");
    let actualDefaultHospital = await defaultHospital.getText();

    let defaultLocation = await $(
      "(//select[@id='patient_treatment_location']//option)[1]"
    );
    let actualDefaultLocation = await defaultLocation.getText();
    await expect(actualDefaultHospital).toEqual(expHospital);
    await expect(actualDefaultLocation).toEqual(expLocation);
  }

  async verifyPatientTreatmentDetailsPopup() {
    await (
      await $("//h2[contains(text(),'Update Patient Treatment Details')]")
    ).waitForDisplayed({ reverse: true, timeout: 7000 });
    if (
      (await $(
        "//h2[contains(text(),'Update Patient Treatment Details')]"
      ).isDisplayed()) === true
    ) {
      throw new Error("❌ Patient treatment details popup is still displayed");
    } else {
      console.log("✅ Patient treatment details popup is not displayed");
    }
  }

  async verifyAssignedProvider(text) {
    const provider = await $("(//tr[@class='odd']//td)[4]");
    await provider.waitForDisplayed({ timeout: 10000 });
    const actProvider = await provider.getText();
    expect(actProvider).toEqual(text);
  }

  async selectProviderCheckbox(option) {
    await $(
      "//input[@type='checkbox' and contains(following-sibling::text(),'" +
        option +
        "')]"
    ).waitForDisplayed({ timeout: 10000 });
    await browser.pause(1000);
    (
      await $(
        "//input[@type='checkbox' and contains(following-sibling::text(),'" +
          option +
          "')]"
      )
    ).click();
  }

  async fillStartDateField() {
    await this.startDateField.click();
    try {
      await $("//button[contains(text(),'Apply')]").click();
    } catch (error) {}
    await browser.keys("Enter");
  }

  async fillPastDateInStartDateField() {
    await this.startDateField.click();
    // Get today's date dynamically
    const today = new Date();
    // Clone to avoid modifying original
    const lastMonthDate = new Date(today);
    lastMonthDate.setMonth(today.getMonth() - 1);
    const day = String(lastMonthDate.getDate()).padStart(2, "0");
    const month = String(lastMonthDate.getMonth() + 1).padStart(2, "0");
    const year = lastMonthDate.getFullYear();
    // Format as DD/MM/YYYY
    const formattedDate = `${day}/${month}/${year}`;
    console.log("Date isss>>" + formattedDate);
    await browser.keys("Enter");
    const dateInput = await $("//input[@id='date']");
    await browser.keys(["Control", "a"]);
    await browser.keys(["Delete"]);
    await browser.pause(1000);
    // Set the formatted date
    await dateInput.setValue(formattedDate);
    await browser.pause(1000);
    await browser.keys("Enter");
  }

  async fillDiagnsisField(value) {
    await this.diagnosisField.selectByVisibleText(value);
  }

  async fillDescriptionField(value) {
    const js = "arguments[0].style = 'visible'";
    await browser.pause(3000);
    await browser.execute(js, await this.descriptionField);
    await this.descriptionField.waitForDisplayed({ timeout: 20000 });
    await this.descriptionField.setValue(value);
    await browser.keys(["Control", "a"]);
    await browser.keys(["Control", "c"]);
    await this.pasteButton.waitForDisplayed({ timeout: 15000 });
    await this.pasteButton.click();
    await this.cancelButton.waitForDisplayed({ timeout: 15000 });
    await this.cancelButton.click();
    await browser.keys(["Control", "a"]);
    await browser.keys(["Delete"]);
    await this.pasteButton.waitForDisplayed({ timeout: 15000 });
    await this.pasteButton.click();
    await browser.pause(1000);
    await browser.keys(["Control", "v"]);
    await browser.switchToFrame(null);
    await this.okButton.waitForDisplayed({ timeout: 15000 });
    await this.okButton.click();
  }

  async clickOnCheckbox() {
    await $("//input[@type='checkbox']").waitForDisplayed({ timeout: 15000 });
    await $("//input[@type='checkbox']").click();
  }

  async verifyDiagnosisDetails(diagnosisType, description, status) {
    const dia = await $("(//tr[@class='odd'])[2]//td[2]");
    await dia.waitForDisplayed({ timeout: 15000 });
    const actDiagnosisType = await dia.getText();
    const actDescription = await $("(//tr[@class='odd'])[2]//td[4]").getText();
    const actStatus = await $("(//tr[@class='odd'])[2]//td[8]").getText();
    expect(actDiagnosisType).toEqual(diagnosisType);
    expect(actDescription).toEqual(description);
    expect(actStatus).toEqual(status);
  }

  async verifyRecordStatus(status) {
    await $("//a[contains(text(),'" + status + "')]").waitForDisplayed({
      timeout: 15000,
    });
    const actStatus = await $("(//tr[@class='odd']//td)[9]").getText();
    await expect(actStatus).toEqual(status);
  }
  async fillSearchFieldUnderPatientForm(value) {
    await this.searchFieldUnderPatientForm.waitForDisplayed({ timeout: 15000 });
    await this.searchFieldUnderPatientForm.setValue(value);
  }

  async settigsButtonIsDisplayed() {
    await this.settingsButton.waitForDisplayed({ timeout: 20000 });
    return await this.settingsButton.isDisplayed();
  }

  async clickOnSettingsButton() {
    if ((await this.settigsButtonIsDisplayed()) === true) {
      await this.settingsButton.click();
    } else {
      throw new Error("❌ Settings button is not displayed on homepage");
    }
  }

  async refreshPage() {
    await browser.refresh();
  }

  async fillMedicationField(value) {
    await this.medicationField.waitForDisplayed({ timeout: 15000 });
    await this.medicationField.clearValue();
    await this.medicationField.setValue(value);
  }

  async fillCurrentDoseField(value) {
    await this.currentDoseField.clearValue();
    await this.currentDoseField.setValue(value);
  }

  async fillFrequencyField(value) {
    await this.frequencyField.selectByVisibleText(value);
  }

  async fillIntervalField(value) {
    await this.intervalField.selectByVisibleText(value);
  }

  async fillAdditionalInformationField(value) {
    await this.additionalInformationField.clearValue();
    await this.additionalInformationField.setValue(value);
  }

  async verifyCreatedMedication(
    medicationName,
    currentDose,
    measurement,
    frequency,
    interval,
    status
  ) {
    await $("(//tr[@class='odd']//td)[2]").waitForDisplayed({ timeout: 15000 });
    const actMedication = await $("(//tr[@class='odd']//td)[2]").getText();
    const actDose = await $("(//tr[@class='odd']//td)[3]").getText();
    const actMeasurement = await $("(//tr[@class='odd']//td)[4]").getText();
    const actFrequency = await $("(//tr[@class='odd']//td)[5]").getText();
    const actInterval = await $("(//tr[@class='odd']//td)[6]").getText();
    const actStatus = await $("(//tr[@class='odd']//td)[10]").getText();

    expect(actMedication).toEqual(medicationName);
    expect(actDose).toEqual(currentDose);
    expect(actMeasurement).toEqual(measurement);
    expect(actFrequency).toEqual(frequency);
    expect(actInterval).toEqual(interval);
    expect(actStatus).toEqual(status);
  }

  async removeDataFromFields() {
    await this.medicationField.clearValue();
    await this.currentDoseField.clearValue();
  }

  async clickOnLastAdjustedField() {
    await this.lastAdjustedDateField.click();
  }

  async selectDropdownValue(option) {
    await this.dropdownField.waitForDisplayed({ timeout: 15000 });
    await this.dropdownField.click();
    await $("//option[contains(text(),'" + option + "')]").click();
  }
  async linkTextIsDisplayed(text) {
    const linkText = await $("//a[contains(text(),'" + text + "')]");
    await linkText.waitForClickable({ timeout: 15000 });
    if ((await linkText.isDisplayed()) === true) {
      console.log(" link displayed");
    } else {
      throw new Error("link is not displaying: " + text);
    }
  }

  async clickOnHeartRateViewDetailsLink(option) {
    if ((await this.heartRateViewDetail.isDisplayed()) === true) {
      console.log(" link displayed");
      await this.heartRateViewDetail.click();
    } else {
      throw new Error("link is not displaying: " + option);
    }
  }

  async clickOnRespiratoryRateViewDetailsLink(option) {
    if ((await this.respiratoryRateViewDetail.isDisplayed()) === true) {
      console.log(" link displayed");
      await this.respiratoryRateViewDetail.click();
    } else {
      throw new Error("link is not displaying: " + option);
    }
  }

  async clickOnO2SaturationViewDetailsLink(option) {
    if ((await this.O2SaturationViewDetail.isDisplayed()) === true) {
      console.log(" link displayed");
      await this.O2SaturationViewDetail.click();
    } else {
      throw new Error("link is not displaying: " + option);
    }
  }

  async clickOnTemperatureViewDetailsLink(option) {
    if ((await this.temperatureViewDetail.isDisplayed()) === true) {
      console.log(" link displayed");
      await this.temperatureViewDetail.click();
    } else {
      throw new Error("link is not displaying: " + option);
    }
  }

  async heartRateGraphIsDisplayed() {
    if ((await this.heartRateGraph.isDisplayed()) === true) {
      console.log("Graph displayed");
    } else {
      throw new Error("Heart rate graph is not displayed");
    }
  }

  async respiratoryGraphIsDisplayed() {
    if ((await this.respiratoryRateGraph.isDisplayed()) === true) {
      console.log("Graph displayed");
    } else {
      throw new Error("Respiratory rate graph is not displayed");
    }
  }

  async saturationGraphIsDisplayed() {
    if ((await this.O2SaturationGraph.isDisplayed()) === true) {
      console.log("Graph displayed");
    } else {
      throw new Error("O2 saturation graph is not displayed");
    }
  }

  async temperatureGraphIsDisplayed() {
    if ((await this.temperatureGraph.isDisplayed()) === true) {
      console.log("Graph displayed");
    } else {
      throw new Error("Temperature graph is not displayed");
    }
  }

  async buttonTextIsDisplayed(text) {
    const buttonText = await $("(//button[contains(text(),'" + text + "')])");
    if ((await buttonText.isDisplayed()) === true) {
      console.log("Button displaying successfully");
    } else {
      throw new Error(
        "Failed to redirect on page because button is not displayed>>" + text
      );
    }
  }

  async chartIsDisplayed() {
    await this.chartData.waitForDisplayed({ timeout: 5000 });
    if ((await this.chartData.isDisplayed()) === true) {
      console.log("Chart is displaying successfully");
    } else {
      throw new Error("Chart is not displayed");
    }
  }
  async hoverOverResultsTab() {
    await this.resultsTab.waitForDisplayed({ timeout: 15000 });
    await (await this.resultsTab).moveTo();
  }

  async hoverOverOnLink(link) {
    const linkText = await $("(//a[contains(text(),'" + link + "')])[1]");
    await linkText.waitForDisplayed({ timeout: 15000 });
    await (await linkText).moveTo();
  }
  async hoverOnTab(Tab) {
    await $("//a[contains(text(),'" + Tab + "')]").waitForDisplayed({
      timeout: 15000,
    });
    await $("//a[contains(text(),'" + Tab + "')]").moveTo();
  }

  async clickOnImaging_Other_Button() {
    await this.imaging_OtherButton.waitForDisplayed({ timeout: 15000 });
    await this.imaging_OtherButton.click();
  }

  async clickOnResults_OtherButton() {
    await this.results_OtherButton.waitForDisplayed({ timeout: 15000 });
    await this.results_OtherButton.click();
  }

  async clickOnResults_Other_Link_Under_Other_Provider() {
    await this.results_OtherLink_OtherProvider.waitForDisplayed({
      timeout: 15000,
    });
    await this.results_OtherLink_OtherProvider.click();
  }

  async clickOnThirdIndexLinkText(text) {
    const linkText = await $("(//a[contains(text(),'" + text + "')])[3]");
    await linkText.waitForClickable({ timeout: 10000 });
    if ((await linkText.isDisplayed()) === true) {
      await linkText.click();
    } else {
      throw new Error("link is not displaying: " + text);
    }
  }

  async clickOnCloseDownloadExcelButton() {
    if ((await this.closeDownloadExcelpopupButton.isDisplayed()) === true) {
      await this.closeDownloadExcelpopupButton.click();
    } else {
      throw new Error("close download excel popup button is not displayed");
    }
  }

  async clickOnButtonUnderBabyDashboard(option) {
    const listOption = await $(
      "//ul[@class='nav navbar-nav']//a[contains(text(),'" + option + "')]"
    );
    await listOption.waitForDisplayed({ timeout: 15000 });
    await listOption.click();
  }

  async liveECGgraphIsDisplayed() {
    await this.liveECGgraph.waitForDisplayed({ timeout: 8000 });
    if ((await this.liveECGgraph.isDisplayed()) === true) {
      console.log("Live ECG graph is displaying successfully");
    } else {
      throw new Error("Live ECG graph is not displayed");
    }
  }

  async hoverOverOrdersTab() {
    await this.ordersTab.moveTo();
  }

  async clickOnCloseLiveECGButton() {
    if ((await this.closeECGpopupButton.isDisplayed()) === true) {
      await this.closeECGpopupButton.click();
    } else {
      throw new Error("close live ecg popup button is not displayed");
    }
  }

  async liveSpO2graphIsDisplayed() {
    await this.liveSpO2Graph.waitForDisplayed({ timeout: 3000 });
    if ((await this.liveSpO2Graph.isDisplayed()) === true) {
      console.log("Live SpO2 graph is displaying successfully");
    } else {
      throw new Error("Live SpO2 graph is not displayed");
    }
  }

  async clickOnCloseLiveSpO2Button() {
    if ((await this.closeSpO2popupButton.isDisplayed()) === true) {
      await this.closeSpO2popupButton.click();
    } else {
      throw new Error("close live SpO2 popup button is not displayed");
    }
  }

  async nutritionGraphIsDisplayed() {
    await this.nutritionGraph.waitForDisplayed({ timeout: 3000 });
    if ((await this.nutritionGraph.isDisplayed()) === true) {
      console.log("Nutrition graph is displaying");
    } else {
      throw new Error("Nutrition graph is not displaying");
    }
  }

  async clickOnWelcomeAiMessageButton() {
    try {
      const dragElement = await $('//div[@title="Drag"]');
      await dragElement.waitForDisplayed({ timeout: 15000 });
      const targetElement = await $("(//section[@class='content']//img)[1]");
      await targetElement.waitForDisplayed({ timeout: 15000 });
      await dragElement.dragAndDrop(targetElement);
    } catch (error) {}
  }

  async clickOnSecondIndexButtonWithText(text) {
    const buttonText = await $(
      "(//button[contains(text(),'" + text + "')])[2]"
    );
    await buttonText.waitForDisplayed({ timeout: 20000 });
    if ((await buttonText.isDisplayed()) === true) {
      await buttonText.click();
    } else {
      throw new Error("❌ Button is not displaying: " + text);
    }
  }

  async selectValueFromMethodField(option) {
    await this.methodField.waitForDisplayed({ timeout: 15000 });
    await this.methodField.click();
    await $("//option[normalize-space(text()) = '" + option + "']").click();
  }

  async clickOnCrossButton() {
    await this.crossButton.waitForDisplayed({ timeout: 15000 });
    await this.crossButton.click();
  }

  async fillFlowRateField(value) {
    await this.flowRateField.waitForDisplayed({ timeout: 15000 });
    await this.flowRateField.setValue(value);
  }

  async fillOxygenField(value) {
    await this.oxygenField.waitForDisplayed({ timeout: 15000 });
    await this.oxygenField.setValue(value);
  }

  async VerifyRespiratoryBottleMethodDetails(
    methodOption,
    flowRate,
    oxygen,
    managingProvider
  ) {
    await this.RespiratoryMethodField.waitForDisplayed({ timeout: 15000 });
    const actMethod = await this.RespiratoryMethodField.getText();
    const actFlowrate = await this.RespiratoryFlowrateField.getText();
    const actOxygen = await this.RespiratoryOxygenField.getText();
    const actManagingProviderField =
      await this.RespiratoryManagingProviderField.getText();
    await expect(actMethod).toEqual(methodOption);
    await expect(actFlowrate).toEqual(flowRate);
    await expect(actOxygen).toEqual(oxygen);
    await expect(actManagingProviderField).toEqual(managingProvider);
  }

  async fillAdditionalSettingsFieldField(value) {
    await this.additionalSettingsField.waitForDisplayed({ timeout: 15000 });
    await this.additionalSettingsField.setValue(value);
  }

  async fillEndDateField() {
    await this.endDateField.waitForDisplayed({ timeout: 15000 });
    await this.endDateField.click();
    await browser.keys("ArrowRight");
    await browser.keys("Enter");
  }

  async VerifyRespiratoryRoomAirConcentratorMethodDetails(
    updatedMethodOption,
    updatedFlow,
    additionalSettings,
    managingProvider
  ) {
    await this.RespiratoryMethodField.waitForDisplayed({ timeout: 15000 });
    const actMethod = await this.RespiratoryMethodField.getText();
    const actFlowrate = await this.RespiratoryFlowrateField.getText();
    const actAdditionalSettings =
      await this.RespiratoryAdditionalSettingsField.getText();
    const actManagingProviderField =
      await this.RespiratoryManagingProviderField.getText();
    await expect(actMethod).toEqual(updatedMethodOption);
    await expect(actFlowrate).toEqual(updatedFlow);
    await expect(actAdditionalSettings).toEqual(additionalSettings);
    await expect(actManagingProviderField).toEqual(managingProvider);
  }

  async verifyEndDate() {
    const date = await $("(//tr[@class='even']//td)[8]");
    await date.waitForDisplayed({ timeout: 15000 });
    const EndDate = await date.getText();
    const datePart = EndDate.slice(0, 11);
    const actEndDate = await $(
      "(//td[contains(text(),'" + datePart + "')])[3]"
    );

    if ((await actEndDate.isDisplayed()) === true) {
      const actEndDateText = await actEndDate.getText();
      const endDate = actEndDateText.slice(0, 11);
      console.log(
        "✅ " +
          " <<< " +
          endDate +
          " >>> " +
          " End date is displayed in the list"
      );
    } else {
      throw new Error("❌ End date is not diplayed in the list");
    }
  }

  async clickOnSelectProviderDropdown() {
    await this.selectProviderDropdown.waitForDisplayed({ timeout: 20000 });
    await this.selectProviderDropdown.click();
  }

  async clickOnListOption(option) {
    const listOption = await $("//option[contains(text(),'" + option + "')]");
    await listOption.click();
  }

  async verifyAddedRecord(record) {
    const actualRecord = await $("(//tr[@class='odd']//td)[2]").getText();
    await expect(actualRecord).toEqual(record);
  }

  async uploadFiles(image) {
    const path = require("path");
    const fileName = image.endsWith(".jpg") ? image : image + ".jpg";
    const filePath = path.join(__dirname, "..", "testData", "Images", fileName);
    await $("#single_file,#doc").setValue(filePath);
  }

  async uploadFolder(folder) {
    const path = require("path");
    const filePath = path.join(__dirname, "..", "testData", folder);
    await $("#files").setValue(filePath);
  }

  async verifyFileDetails(image, fileType, description) {
    const file = await $("//tr[@class='odd']//td[2]");
    await file.waitForDisplayed({ timeout: 15000 });

    const files = await file.getText();
    const actFileName = await files.replace(".jpg", "");
    const actFileType = await $("//tr[@class='odd']//td[3]").getText();
    const actDescription = await $("//tr[@class='odd']//td[4]//span").getText();

    await expect(actFileName).toEqual(image);
    await expect(actFileType).toEqual(fileType);
    await expect(actDescription).toEqual(description);
  }

  async clickOnAddedFile(value) {
    await $("//a[contains(text(),'" + value + "')]").waitForDisplayed({
      timeout: 15000,
    });
    await $("//a[contains(text(),'" + value + "')]").click();
  }

  async verifyFileIsDisplayed() {
    await this.fileData.waitForDisplayed({ timeout: 30000 });
    if ((await this.fileData.isDisplayed()) === true) {
      console.log("✅ File is displayed");
    } else {
      throw new Error("❌ File is not displayed");
    }
    const cancelButton = await $(
      "//button[@class='fancybox-button fancybox-button--close']"
    );
    await cancelButton.moveTo();
    await cancelButton.click();
  }

  async fillEditMediaDescription(value) {
    await this.editMediaDescription.waitForDisplayed({ timeout: 15000 });
    await this.editMediaDescription.setValue(value);
  }

  async fillLotNumberField(value) {
    await this.lotNumberField.clearValue();
    await this.lotNumberField.setValue(value);
  }

  async fillCommentsField(value) {
    await this.commentsField.clearValue();
    await this.commentsField.setValue(value);
  }

  async fillVaccineField(value) {
    await this.vaccineField.clearValue();
    await this.vaccineField.setValue(value);
    for (let i = 0; i <= 12; i++) {
      await this.vaccineField.click();
      await browser.keys("Backspace");
    }
    await $("//div[contains(text(),'" + value + "')]").waitForDisplayed({
      timeout: 10000,
    });
    await $("//div[contains(text(),'" + value + "')]").click();
  }

  async verifyVaccineDetails(
    createdVaccineName,
    brandName,
    lotNumber,
    comments
  ) {
    await $("(//table[@id='example']//td//b)[1]").waitForDisplayed({
      timeout: 15000,
    });
    const actVaccineName = await $(
      "(//table[@id='example']//td//b)[1]"
    ).getText();
    const actBrandName = await $("(//table[@id='example']//td)[2]").getText();
    const actLotNumber = await $("//table[@id='example']//td[3]").getText();
    const actComments = await $("//table[@id='example']//td[3]").getText();
    await expect(actVaccineName).toEqual(createdVaccineName);
    await expect(actBrandName).toEqual(brandName);
    if (actLotNumber.includes(lotNumber) && actComments.includes(comments)) {
      console.log("✅ Details are matching");
    } else {
      throw new Error("❌ Details are not matching");
    }
  }

  async chooseHospitalFieldOption(value) {
    await customerAccountPage.hospitalNoteField.waitForDisplayed({
      timeout: 15000,
    });
    await customerAccountPage.hospitalNoteField.click();
    await $("//option[contains(text(),'" + value + "')]").click();
  }

  async verifyHospitalReocrdsDetails(hospital, hospitalNote, description) {
    await $("//tr[@class='odd']//td[2]").waitForDisplayed({ timeout: 15000 });
    const actHospital = await $("//tr[@class='odd']//td[2]").getText();
    const actHospitalNote = await $("(//tr[@class='odd']//td)[3]").getText();
    const actDescription = await $("(//tr[@class='odd']//td)[6]").getText();

    expect(actHospital).toEqual(hospital);
    expect(actHospitalNote).toEqual(hospitalNote);
    try {
      expect(actDescription).toEqual(description);
    } catch (error) {}
  }

  async verifyImagingRecordsWithMandatoryFields(imagingOption, type) {
    await this.typeRecord.waitForDisplayed({ timeout: 15000 });
    const actType = await this.typeRecord.getText();
    await expect(actType).toEqual(type);

    if ((await this.actMedia.isDisplayed()) === true) {
      console.log("✅ Details are matching");
    } else {
      throw new Error("❌ Details are not matching");
    }
  }
  async fillTypeField(value) {
    await this.typeField.setValue(value);
  }

  async verifyImagingRecordsDetailsWithAllFields(
    imagingOption,
    type,
    description
  ) {
    await this.typeRecord.waitForDisplayed({ timeout: 15000 });
    const actType = await this.typeRecord.getText();
    const actDescription = await this.descriptionRecord.getText();
    await expect(actType).toEqual(type);
    await expect(actDescription).toEqual(description);

    if (
      (await this.actPaperClip.isDisplayed()) === true &&
      (await this.actMedia.isDisplayed()) === true
    ) {
      console.log("✅ Details are matching");
    } else {
      throw new Error("❌ Details are not matching");
    }
  }

  async verifyImaging_Other_MandatoryRecord(type) {
    const actType = await this.otherTypeRecord.getText();
    await expect(actType).toEqual(type);
  }

  async verifyImaging_Other_AllFieldsRecord(type, result) {
    await this.otherTypeRecord.waitForDisplayed({ timeout: 15000 });
    const actType = await this.otherTypeRecord.getText();
    const actResult = await this.otherResultRecord.getText();
    await expect(actType).toEqual(type);
    await expect(actResult).toEqual(result);
    if ((await this.actOther_Paperclip.isDisplayed()) === true) {
      console.log("✅ Details are matching");
    } else {
      throw new Error("❌ Details are not matching");
    }
  }

  async verifyDataInTable(data) {
    await browser.pause(1500);
    const addedData = await $(
      "(//td[normalize-space(text())='" +
        data +
        "'])[1]|(//span[normalize-space(text())='" +
        data +
        "'])[1]"
    );
    const actData = await addedData.getText();
    console.log("Added data is:>>" + actData);
    await expect(actData).toEqual(data);
  }

  async verifyPeragraphInTable(data) {
    const addedData = await $("//p[contains(text(),'" + data + "')]");
    const actData = await addedData.getText();
    console.log("Added data is:>>" + actData);
    await expect(actData).toEqual(data);
  }

  async verifyTableHeader(data) {
    const addedData = await $("//th[contains(text(),'" + data + "')]");
    const actData = await addedData.getText();
    console.log("Added data is:>>" + actData);
    await expect(actData).toEqual(data);
  }

  async fillWbcField(value) {
    await this.wbcField.clearValue();
    await this.wbcField.setValue(value);
  }

  async fillHgbField(value) {
    await this.hgbField.clearValue();
    await this.hgbField.setValue(value);
  }
  async fillHctField(value) {
    await this.hctField.clearValue();
    await this.hctField.setValue(value);
  }
  async fillPltsField(value) {
    await this.pltsField.clearValue();
    await this.pltsField.setValue(value);
  }

  async fillReticField(value) {
    await this.reticField.clearValue();
    await this.reticField.setValue(value);
  }

  async clearReportDateField() {
    await this.resultsDateField.clearValue();
  }

  async fillNaField(data) {
    await browser.pause(3000);
    await this.NaField.waitForDisplayed({ timeout: 5000 });
    if ((await this.NaField.isDisplayed()) === true) {
      await this.NaField.clearValue();
      await this.NaField.setValue(data);
      console.log("field displaying successfully");
    } else {
      throw new Error("Na field is not displayed");
    }
  }

  async fillKField(data) {
    await this.KField.waitForDisplayed({ timeout: 5000 });
    if ((await this.KField.isDisplayed()) === true) {
      await this.KField.clearValue();
      await this.KField.setValue(data);
      console.log("field displaying successfully");
    } else {
      throw new Error("K field is not displayed");
    }
  }

  async fillClField(data) {
    await this.ClField.waitForDisplayed({ timeout: 5000 });
    if ((await this.ClField.isDisplayed()) === true) {
      await this.ClField.clearValue();
      await this.ClField.setValue(data);
      console.log("field displaying successfully");
    } else {
      throw new Error("Cl field is not displayed");
    }
  }

  async fillCo2Field(data) {
    await this.Co2Field.waitForDisplayed({ timeout: 5000 });
    if ((await this.Co2Field.isDisplayed()) === true) {
      await this.Co2Field.clearValue();
      await this.Co2Field.setValue(data);
      console.log("field displaying successfully");
    } else {
      throw new Error("Co2 field is not displayed");
    }
  }

  async fillBUNField(data) {
    await this.BunField.waitForDisplayed({ timeout: 5000 });
    if ((await this.BunField.isDisplayed()) === true) {
      await this.BunField.clearValue();
      await this.BunField.setValue(data);
      console.log("field displaying successfully");
    } else {
      throw new Error("BUN field is not displayed");
    }
  }

  async fillCrField(data) {
    await this.CrField.waitForDisplayed({ timeout: 5000 });
    if ((await this.CrField.isDisplayed()) === true) {
      await this.CrField.clearValue();
      await this.CrField.setValue(data);
      console.log("field displaying successfully");
    } else {
      throw new Error("Cr field is not displayed");
    }
  }

  async fillGluField(data) {
    await this.GluField.waitForDisplayed({ timeout: 5000 });
    if ((await this.GluField.isDisplayed()) === true) {
      await this.GluField.clearValue();
      await this.GluField.setValue(data);
      console.log("field displaying successfully");
    } else {
      throw new Error("Glu field is not displayed");
    }
  }

  async fillCaField(data) {
    await this.CaField.waitForDisplayed({ timeout: 5000 });
    if ((await this.CaField.isDisplayed()) === true) {
      await this.CaField.clearValue();
      await this.CaField.setValue(data);
      console.log("field displaying successfully");
    } else {
      throw new Error("Ca field is not displayed");
    }
  }

  async fillPhosField(data) {
    await this.PhosField.waitForDisplayed({ timeout: 5000 });
    if ((await this.PhosField.isDisplayed()) === true) {
      await this.PhosField.clearValue();
      await this.PhosField.setValue(data);
      console.log("field displaying successfully");
    } else {
      throw new Error("Phos field is not displayed");
    }
  }

  async fillMgField(data) {
    await this.MgField.waitForDisplayed({ timeout: 5000 });
    if ((await this.MgField.isDisplayed()) === true) {
      await this.MgField.clearValue();
      await this.MgField.setValue(data);
      console.log("field displaying successfully");
    } else {
      throw new Error("Mg field is not displayed");
    }
  }

  async fillTBiliField(data) {
    await browser.pause(3000);
    await this.TBiliField.waitForDisplayed({ timeout: 5000 });
    if ((await this.TBiliField.isDisplayed()) === true) {
      await this.TBiliField.clearValue();
      await this.TBiliField.setValue(data);
      console.log("field displaying successfully");
    } else {
      throw new Error("TBili field is not displayed");
    }
  }

  async fillTBiliCField(data) {
    await this.TBiliCField.waitForDisplayed({ timeout: 5000 });
    if ((await this.TBiliCField.isDisplayed()) === true) {
      await this.TBiliCField.clearValue();
      await this.TBiliCField.setValue(data);
      console.log("field displaying successfully");
    } else {
      throw new Error("TBiliC Field is not displayed");
    }
  }

  async fillDBiliField(data) {
    await this.DBiliField.waitForDisplayed({ timeout: 5000 });
    if ((await this.DBiliField.isDisplayed()) === true) {
      await this.DBiliField.clearValue();
      await this.DBiliField.setValue(data);
      console.log("field displaying successfully");
    } else {
      throw new Error("DBili field is not displayed");
    }
  }

  async fillAlkPField(data) {
    await this.AlkPField.waitForDisplayed({ timeout: 5000 });
    if ((await this.AlkPField.isDisplayed()) === true) {
      await this.AlkPField.clearValue();
      await this.AlkPField.setValue(data);
      console.log("field displaying successfully");
    } else {
      throw new Error("AlkP field is not displayed");
    }
  }

  async fillTprotField(data) {
    await this.TprotField.waitForDisplayed({ timeout: 5000 });
    if ((await this.TprotField.isDisplayed()) === true) {
      await this.TprotField.clearValue();
      await this.TprotField.setValue(data);
      console.log("field displaying successfully");
    } else {
      throw new Error("Tprot field is not displayed");
    }
  }

  async fillAlbField(data) {
    await this.AlbField.waitForDisplayed({ timeout: 5000 });
    if ((await this.AlbField.isDisplayed()) === true) {
      await this.AlbField.clearValue();
      await this.AlbField.setValue(data);
      console.log("field displaying successfully");
    } else {
      throw new Error("Alb field is not displayed");
    }
  }

  async fillAstField(data) {
    await this.AstField.waitForDisplayed({ timeout: 5000 });
    if ((await this.AstField.isDisplayed()) === true) {
      await this.AstField.clearValue();
      await this.AstField.setValue(data);
      console.log("field displaying successfully");
    } else {
      throw new Error("Ast field is not displayed");
    }
  }

  async fillAltField(data) {
    await this.AltField.waitForDisplayed({ timeout: 5000 });
    if ((await this.AltField.isDisplayed()) === true) {
      await this.AltField.clearValue();
      await this.AltField.setValue(data);
      console.log("field displaying successfully");
    } else {
      throw new Error("Alt field is not displayed");
    }
  }

  async fillGGTField(data) {
    await this.GGTField.waitForDisplayed({ timeout: 5000 });
    if ((await this.GGTField.isDisplayed()) === true) {
      await this.GGTField.clearValue();
      await this.GGTField.setValue(data);
      console.log("field displaying successfully");
    } else {
      throw new Error("GGT field is not displayed");
    }
  }

  async fillTrigField(data) {
    await this.trigField.waitForDisplayed({ timeout: 5000 });
    if ((await this.trigField.isDisplayed()) === true) {
      await this.trigField.clearValue();
      await this.trigField.setValue(data);
      console.log("field displaying successfully");
    } else {
      throw new Error("Trig field is not displayed");
    }
  }

  async fillCholesterolField(data) {
    await this.cholesterolField.waitForDisplayed({ timeout: 5000 });
    if ((await this.cholesterolField.isDisplayed()) === true) {
      await this.cholesterolField.clearValue();
      await this.cholesterolField.setValue(data);
      console.log("field displaying successfully");
    } else {
      throw new Error("cholesterol Field is not displayed");
    }
  }

  async fillHDLField(data) {
    await this.HDLField.waitForDisplayed({ timeout: 5000 });
    if ((await this.HDLField.isDisplayed()) === true) {
      await this.HDLField.clearValue();
      await this.HDLField.setValue(data);
      console.log("field displaying successfully");
    } else {
      throw new Error("HDL field is not displayed");
    }
  }

  async fillLDLField(data) {
    await this.LDLField.waitForDisplayed({ timeout: 5000 });
    if ((await this.LDLField.isDisplayed()) === true) {
      await this.LDLField.clearValue();
      await this.LDLField.setValue(data);
      console.log("field displaying successfully");
    } else {
      throw new Error("LDL field is not displayed");
    }
  }
  async fillTSHField(data) {
    await this.TSHField.waitForDisplayed({ timeout: 5000 });
    if ((await this.TSHField.isDisplayed()) === true) {
      await this.TSHField.clearValue();
      await this.TSHField.setValue(data);
      console.log("field displaying successfully");
    } else {
      throw new Error("TSH field is not displayed");
    }
  }

  async fillT4Field(data) {
    await this.T4Field.waitForDisplayed({ timeout: 5000 });
    if ((await this.T4Field.isDisplayed()) === true) {
      await this.T4Field.clearValue();
      await this.T4Field.setValue(data);
      console.log("field displaying successfully");
    } else {
      throw new Error("T4 field is not displayed");
    }
  }

  async fillFreeT4Field(data) {
    if ((await this.freeT4Field.isDisplayed()) === true) {
      await this.freeT4Field.clearValue();
      await this.freeT4Field.setValue(data);
      console.log("field displaying successfully");
    } else {
      throw new Error("Free T4 field is not displayed");
    }
  }

  async fillT3Field(data) {
    if ((await this.T3Field.isDisplayed()) === true) {
      await this.T3Field.clearValue();
      await this.T3Field.setValue(data);
      console.log("field displaying successfully");
    } else {
      throw new Error("T3 field is not displayed");
    }
  }

  async fillCortisolField(data) {
    if ((await this.cortisolField.isDisplayed()) === true) {
      await this.cortisolField.clearValue();
      await this.cortisolField.setValue(data);
      console.log("field displaying successfully");
    } else {
      throw new Error("cortisol Field is not displayed");
    }
  }

  async fillACTHField(data) {
    if ((await this.ACTHField.isDisplayed()) === true) {
      await this.ACTHField.clearValue();
      await this.ACTHField.setValue(data);
      console.log("field displaying successfully");
    } else {
      throw new Error("ACTH Field is not displayed");
    }
  }

  async fillPTField(data) {
    await browser.pause(300);
    await this.PTField.waitForDisplayed({ timeout: 3000 });
    if ((await this.PTField.isDisplayed()) === true) {
      await this.PTField.clearValue();
      await this.PTField.setValue(data);
      console.log("field displaying successfully");
    } else {
      throw new Error("PT Field is not displayed");
    }
  }

  async fillaPTTField(data) {
    if ((await this.aPTTField.isDisplayed()) === true) {
      await this.aPTTField.clearValue();
      await this.aPTTField.setValue(data);
      console.log("field displaying successfully");
    } else {
      throw new Error("aPTT Field is not displayed");
    }
  }

  async fillTTField(data) {
    if ((await this.TTField.isDisplayed()) === true) {
      await this.TTField.clearValue();
      await this.TTField.setValue(data);
      console.log("field displaying successfully");
    } else {
      throw new Error("TT Field is not displayed");
    }
  }

  async fillFibrinogenField(data) {
    if ((await this.fibrinogenField.isDisplayed()) === true) {
      await this.fibrinogenField.clearValue();
      await this.fibrinogenField.setValue(data);
      console.log("field displaying successfully");
    } else {
      throw new Error("fibrinogen Field is not displayed");
    }
  }

  async fillOtherTitleField(data) {
    if ((await this.titleField.isDisplayed()) === true) {
      console.log("filling Title field");
      await this.titleField.click();
      await this.titleField.clearValue();
      await this.titleField.setValue(data);
    } else {
      throw new Error("Title field is not displaying in form");
    }
  }

  async verify_Results_other_MandatoryFields(type, result, comments) {
    await this.resultsOtherTypeRecord.waitForDisplayed({ timeout: 15000 });
    const actType = await this.resultsOtherTypeRecord.getText();
    const actResult = await this.otherResultRecord.getText();
    const actComments = await this.resultsCommentsRecord.getText();
    await expect(actType).toEqual(type);
    await expect(actResult).toEqual(result);
    await expect(actComments).toEqual(comments);
  }

  async verify_Results_other_AllFields(type, result, comments) {
    await this.resultsOtherTypeRecord.waitForDisplayed({ timeout: 15000 });
    const actType = await this.resultsOtherTypeRecord.getText();
    const actResult = await this.otherResultRecord.getText();
    const actComments = await this.resultsCommentsRecord.getText();
    await expect(actType).toEqual(type);
    await expect(actResult).toEqual(result);
    await expect(actComments).toEqual(comments);
    if ((await this.actOther_Paperclip.isDisplayed()) === true) {
      console.log("✅ Details are matching");
    } else {
      throw new Error("❌ Details are not matching");
    }
  }
  async verifyOtherProviderRecords(otherProvider, description) {
    const actOtherProvider = await $("(//tr[@class='odd']//td)[2]").getText();
    const actDescription = await $("(//tr[@class='odd']//td)[4]").getText();
    await expect(actOtherProvider).toEqual(otherProvider);
    await expect(actDescription).toEqual(description);
    const doc = await $("(//tr[@class='odd']//td)[5]//a");
    if ((await doc.isDisplayed()) === true) {
      console.log(" ✅ Added image is displayed");
    } else {
      throw new Error("❌ Added image is not displayed");
    }
  }
  async selectCheckboxUnderExportRecords() {
    await this.diagnosisCheckbox.waitForDisplayed({ timeout: 15000 });
    await this.diagnosisCheckbox.click();
    await this.medicationsCheckbox.click();
    await this.vaccinationsCheckbox.click();
    await this.OtherProviderRecordsCheckbox.click();
  }

  async verifyAppointment(provider, description) {
    await $("(//tr[@class='odd']//td)[2]").waitForDisplayed({ timeout: 15000 });
    const actualName = await $("(//tr[@class='odd']//td)[2]").getText();
    const actualDescription = await $("(//tr[@class='odd']//td)[4]").getText();

    await expect(actualName).toEqual(provider);
    await expect(actualDescription).toEqual(description);
  }

  async selectAppointmentOrderdropdownOption(option) {
    await this.appointmentOrderDropdown.waitForClickable({ timeout: 3000 });
    const listOption = await $(
      "//option[normalize-space(text())='" + option + "']"
    );
    await listOption.click();
  }

  async selectNextDayInAppointmentDate() {
    await this.appointmentDateField.waitForDisplayed({ timeout: 15000 });
    await this.appointmentDateField.click();
    await browser.keys("ArrowRight");
    await browser.keys("Enter");
  }

  async clickOnAppointmentDateField() {
    await this.appointmentDateField.waitForDisplayed({ timeout: 15000 });
    await this.appointmentDateField.click();
    await browser.keys("Enter");
  }
  async verifyAppointmentOnPatientDashboard(provider) {
    await $(
      "((//div[@class='appoitnments_right'])[1]//span)[1]"
    ).waitForDisplayed({ timeout: 15000 });
    const actualLastAppointment = await $(
      "((//div[@class='appoitnments_right'])[1]//span)[1]"
    ).getText();
    const actualNextAppointment = await $(
      "((//div[@class='appoitnments_right'])[2]//span)[1]"
    ).getText();

    await expect(actualLastAppointment).toEqual(provider);
    await expect(actualNextAppointment).toEqual(provider);
  }

  async selectECGDeviceDropdownOption(data) {
    if ((await this.ECGDeviceDropdown.isDisplayed()) === true) {
      await this.ECGDeviceDropdown.click();
      await browser.pause(500);
      await (await $("(//option[contains(text(),'" + data + "')])[1]")).click();
      console.log("ECG Device Dropdown is displaying successfully");
    } else {
      throw new Error("ECG Device Dropdown is not displayed");
    }
  }

  async selectECGDurationDropdownOption(data) {
    if ((await this.ECGDurationDropdown.isDisplayed()) === true) {
      await this.ECGDurationDropdown.click();
      await browser.pause(500);
      await (await $("(//option[contains(text(),'" + data + "')])[1]")).click();
      console.log("ECG Duration Dropdown is displaying successfully");
    } else {
      throw new Error("ECG Duration Dropdown is not displayed");
    }
  }

  async selectO2SaturationDeviceDropdownOption(data) {
    if ((await this.O2SaturationDeviceDropdown.isDisplayed()) === true) {
      await this.O2SaturationDeviceDropdown.click();
      await browser.pause(500);
      await (await $("(//option[contains(text(),'" + data + "')])[1]")).click();

      console.log("O2 Saturation Device Dropdown is displaying successfully");
    } else {
      throw new Error("O2 Saturation Device Dropdown is not displayed");
    }
  }

  async selectO2SaturationDurationDropdownOption(data) {
    if ((await this.O2SeturationDurationDropdown.isDisplayed()) === true) {
      await this.O2SeturationDurationDropdown.click();
      await browser.pause(500);
      await (await $("(//option[contains(text(),'" + data + "')])[2]")).click();
      await browser.pause(500);
      console.log("O2 Saturation Duration Dropdown is displaying successfully");
    } else {
      throw new Error("O2 Saturation Duration Dropdown is not displayed");
    }
  }

  async selectTemperatureDeviceDropdownOption(data) {
    if ((await this.temperatureDeviceDropdown.isDisplayed()) === true) {
      await this.temperatureDeviceDropdown.click();
      await browser.pause(1500);
      await (await $("(//option[contains(text(),'" + data + "')])[1]")).click();
      console.log("Temperature Device Dropdown is displaying successfully");
    } else {
      throw new Error("Temperature Device Dropdown is not displayed");
    }
  }

  async selectTemperatureDurationDropdownOption(data) {
    if ((await this.temperatureDurationDropdown.isDisplayed()) === true) {
      await this.temperatureDurationDropdown.click();
      await (await $("(//option[contains(text(),'" + data + "')])[3]")).click();
      console.log("Temperature Duration Dropdown is displaying successfully");
    } else {
      throw new Error("Temperature Duration Dropdown is not displayed");
    }
  }

  async fillTemperatureDurationField(data) {
    if ((await this.temperatureDurationText.isDisplayed()) === true) {
      await this.temperatureDurationText.clearValue();
      await this.temperatureDurationText.setValue(data);
      console.log("field displaying successfully");
    } else {
      throw new Error("temperature duration text Field is not displayed");
    }
  }

  async verifyAddedMonitoringData(Device, data) {
    await browser.pause(1000);
    const MonitoringData = await $(
      "//span[text()='" + Device + "']/following::span[text()='" + data + "']"
    );
    await MonitoringData.waitForDisplayed({ timeout: 5000 });
    if (await MonitoringData.isDisplayed()) {
      console.log("Temperature Duration Dropdown is displaying successfully");
    } else {
      throw new Error("Temperature Duration Dropdown is not displayed");
    }
  }

  async verifyTrackerOptions(dataTable) {
    const expectedOptions = dataTable.rawTable.flat();
    const options = await $$('(//ul[@class="dropdown-menu"])[7]//a');
    const dropdownOption = await $('(//ul[@class="dropdown-menu"])[7]//a');
    console.log("Dropdown option:", await dropdownOption.getText());
    console.log("Found options:", options.length);

    if (!Array.isArray(options) || options.length === 0) {
      throw new Error("No options found or options is not an array!");
    }

    const optionTexts = [];

    for (const option of options) {
      const text = await option.getText();
      optionTexts.push(text);
    }

    console.log("Extracted option texts:", optionTexts);
    await expect(optionTexts).toEqual(expectedOptions);
  }

  async verifyMultipleValidationMessages(message) {
    const secondValidation = await $(
      "(//span[@class='help-block alert alert-danger'])[2]"
    ).getText();
    const ThirdValidation = await $(
      "(//span[@class='help-block alert alert-danger'])[3]"
    ).getText();

    await expect(secondValidation).toEqual(message);
    await expect(ThirdValidation).toEqual(message);
  }

  async fillHeightField(Data) {
    await this.heightInchesField.waitForDisplayed({ timeout: 15000 });
    await this.heightInchesField.setValue(Data);
  }

  async fillPoundField(Data) {
    await this.poundField.waitForDisplayed({ timeout: 15000 });
    await this.poundField.setValue(Data);
  }

  async fillHeadInchField(Data) {
    await this.headInchField.waitForDisplayed({ timeout: 15000 });
    await this.headInchField.setValue(Data);
  }

  async fillWeightOunceField(Data) {
    await this.weightOunceField.waitForDisplayed({ timeout: 15000 });
    await this.weightOunceField.setValue(Data);
  }

  async verifyGrowthDetails(
    heightcm,
    heightInches,
    weightPounds,
    weightOunce,
    weightkg,
    headCircumference_cm,
    headCircumference_inches
  ) {
    await this.height_cm_Value.waitForDisplayed({ timeout: 15000 });
    const actHeightCm = await this.height_cm_Value.getText();
    const heightInch = await this.heightInchValue.getText();
    const actHeightInch = heightInch.replace(".00", "");
    const WeightPound = await this.WeightPoundsValue.getText();
    const actWeightPound = WeightPound.replace(".00", "");
    const WeightOunce = await this.WeightOunceValue.getText();
    const actWeightOunce = WeightOunce.replace(".00", "");
    const actWeightKg = await this.WeightKgValue.getText();
    const actHeadCm = await this.head_cm_Value.getText();
    const HeadInch = await this.head_inch_Value.getText();
    const actHeadInch = HeadInch.replace(".00", "");

    await expect(actHeightCm).toEqual(heightcm);
    await expect(actHeightInch).toEqual(heightInches);
    await expect(actWeightPound).toEqual(weightPounds);
    await expect(actWeightOunce).toEqual(weightOunce);
    await expect(actWeightKg).toEqual(weightkg);
    await expect(actHeadCm).toEqual(headCircumference_cm);
    await expect(actHeadInch).toEqual(headCircumference_inches);
  }

  async removeDataFromGrowthFields() {
    await this.heightInchesField.waitForDisplayed({ timeout: 15000 });
    await this.heightInchesField.clearValue();
    await this.poundField.clearValue();
    await this.weightOunceField.clearValue();
    await this.headInchField.clearValue();
  }

  async verifyGrowthGraph() {
    await browser.pause(300);
    (await this.growthIframe).waitForExist({ timeout: 15000 });
    console.log("Iframe swithced");
    await browser.switchToFrame(await this.growthIframe);
    await this.growthGraph.waitForDisplayed({ timeout: 20000 });
    if ((await this.growthGraph).isDisplayed() === true) {
      console.log("✅ Growth graph is visible on screen");
    } else {
      throw new Error("❌ Failed to verify growth graph");
    }
    await browser.switchToFrame(Null);
  }

  async verifyAverageDailyWeightGain() {
    await browser.refresh();
    // Sample text from UI
    const displayedText = await $("(//tr[@class='even']//td)[10]").getText();

    // Extract numeric value and days from the text
    const displayedValue = parseFloat(displayedText.match(/[\d.]+/)[0]);
    const days = parseInt(displayedText.match(/in last (\d+) days/)[1]);

    // Known weights
    const initialWeightKg = await $("(//tr[@class='odd']//td)[9]").getText();
    const finalWeightKg = await $("(//tr[@class='even']//td)[9]").getText();

    // Convert weight difference to grams
    const weightGainGrams = (finalWeightKg - initialWeightKg) * 1000;

    // Apply the formula
    const calculatedValue = weightGainGrams / finalWeightKg / days;

    // Allow small tolerance for float comparison
    const tolerance = 0.01;

    console.log(`Displayed Value: ${displayedValue}`);
    console.log(`Calculated Value: ${calculatedValue.toFixed(2)}`);

    // Assertion
    assert.ok(
      Math.abs(Math.abs(calculatedValue) - Math.abs(displayedValue)) <=
        tolerance,
      `Mismatch! Expected approx ${displayedValue}, but got ${calculatedValue.toFixed(
        2
      )}`
    );

    console.log(
      "✅ Average daily weight gain is correctly calculated and matches the displayed value."
    );
  }

  async verifyMonthalyHeightGain() {
    const displayedText = await $("(//tr[@class='even']//td)[6]").getText();

    // Extract numeric value from the text
    const displayedValue = parseFloat(displayedText.match(/-?[\d.]+/)[0]);

    // Known heights (in cm)
    const initialHeight = await $("(//tr[@class='odd']//td)[5]").getText();
    const finalHeight = await $("(//tr[@class='even']//td)[5]").getText();

    // Apply the formula
    const calculatedValue = finalHeight - initialHeight;

    // Allow small tolerance for float comparison
    const tolerance = 0.01;

    console.log(`Displayed Value: ${displayedValue}`);
    console.log(`Calculated Value: ${calculatedValue.toFixed(2)}`);

    // Assertion
    assert.ok(
      Math.abs(Math.abs(calculatedValue) - Math.abs(displayedValue)) <=
        tolerance,
      `Mismatch! Expected approx ${displayedValue}, but got ${calculatedValue.toFixed(
        2
      )}`
    );

    console.log(
      "✅ Monthly height gain is correctly calculated and matches the displayed value."
    );
  }

  async verifyMonthlyHeadCircumferenceGain() {
    // Text from the UI
    const displayedText = await $("(//tr[@class='even']//td)[13]").getText();
    // Extract numeric value from text
    const displayedValue = parseFloat(displayedText.match(/-?[\d.]+/)[0]);

    // Head circumference values (in cm)
    const initialCircumference = await $(
      "(//tr[@class='odd']//td)[12]"
    ).getText();
    const finalCircumference = await $(
      "(//tr[@class='even']//td)[12]"
    ).getText();

    // Calculate head circumference gain
    const calculatedValue = finalCircumference - initialCircumference;

    // Tolerance for float comparison
    const tolerance = 0.01;

    console.log(`Displayed Value: ${displayedValue}`);
    console.log(`Calculated Value: ${calculatedValue.toFixed(2)}`);

    // Assertion
    assert.ok(
      Math.abs(Math.abs(calculatedValue) - Math.abs(displayedValue)) <=
        tolerance,
      `Mismatch! Expected approx ${displayedValue}, but got ${calculatedValue.toFixed(
        2
      )}`
    );

    console.log(
      "✅ Monthly head circumference gain is correctly calculated and matches the displayed value."
    );
  }

  async addOptionNotDisplaying() {
    const addNewButton = await $("//button[@data-target='#myModal']");
    if (addNewButton.isDisplayed() === true) {
      throw new Error("Other provider is able to add new record");
    } else {
      console.log("Add option is not displaying on screen");
    }
  }

  async editOptionNotDisplaying() {
    if (await this.updateButton.isDisplayed()) {
      throw new Error("Other provider is able to edit record");
    } else {
      console.log("Edit option is not displaying on screen");
    }
  }

  async selectWeightFrequencyOption(data) {
    this.weightFrequencyDropdown.click();
    const OptionData = await $(
      "(//option[contains(text(),'" + data + "')])[1]"
    );
    OptionData.click();
  }

  async selectHeightFrequencyOption(data) {
    this.heightFrequencyDropdown.click();
    const OptionData = await $(
      "(//option[contains(text(),'" + data + "')])[2]"
    );
    OptionData.click();
  }

  async selectHeadFrequencyOption(data) {
    this.headCircumferenceFrequencyDropdown.click();
    const OptionData = await $(
      "(//option[contains(text(),'" + data + "')])[3]"
    );
    OptionData.click();
  }

  async verifyColumnNameInTable(data) {
    const columnName = await $("(//th[contains(text(),'" + data + "')])[1]");
    if (columnName.isDisplayed() === true) {
      throw new Error("Column name is not displaying>>" + data);
    } else {
      console.log("column is displaying on screen");
    }
  }

  async verifyNutritionWorkflow(data) {
    const verifyworkflowpage = await $(
      "//label[contains(text(),'" +
        data +
        "')]|//div[contains(text(),'" +
        data +
        "')]|//button[contains(text(),'" +
        data +
        "')]"
    );
    await verifyworkflowpage.waitForDisplayed({ timeout: 15000 });
    if ((await verifyworkflowpage.isDisplayed()) === true) {
      console.log("✅ " + data + " page is displayed");
    } else {
      throw new Error("❌ " + data + " page is not displayed ");
    }
  }

  async verifyNutritionOrderBottleFeed(
    updatedNutritionRecord,
    updatedNutritionFrequency,
    nutritionMilk,
    fortificationName,
    calories,
    volumeMLs
  ) {
    await this.createdNutritionTypeData.waitForDisplayed({ timeout: 15000 });
    const actUpdatedNutritionType =
      await this.createdNutritionTypeData.getText();
    const actUpdatedFrequencyType =
      await this.createdNutritionFrequencyData.getText();

    await expect(actUpdatedNutritionType).toEqual(updatedNutritionRecord);
    await expect(actUpdatedFrequencyType).toEqual(updatedNutritionFrequency);
  }

  async clickOnBreastFeeding_Yes_RadioButton() {
    await this.breastFeeding_Yes_RadioButton.waitForDisplayed({
      timeout: 15000,
    });
    await this.breastFeeding_Yes_RadioButton.click();
  }

  async clickOnBreastFeeding_No_RadioButton() {
    await this.breastFeeding_No_RadioButton.waitForDisplayed({
      timeout: 15000,
    });
    await this.breastFeeding_No_RadioButton.click();
  }

  async multipleIndexNextButton() {
    const buttons = await $(
      "(//button[contains(text(),'Next')])[2]|(//button[contains(text(),'Next')])[4]|(//button[contains(text(),'Next')])[5]"
    );
    await buttons.waitForDisplayed({ timeout: 10000 });
    await buttons.click();
  }

  async clickOnSupplement_Yes_RadioButton() {
    await this.supplement_Yes_RadioButton.waitForDisplayed({ timeout: 15000 });
    await this.supplement_Yes_RadioButton.click();
  }

  async clickOnSupplement_No_RadioButton() {
    await this.supplement_No_RadioButton.waitForDisplayed({ timeout: 15000 });
    await this.supplement_No_RadioButton.click();
  }

  async fillSupplementalGoalField(Data) {
    await this.supplementalGoalField.waitForDisplayed({ timeout: 15000 });
    await this.supplementalGoalField.click();
    await this.supplementalGoalField.setValue(Data);
  }

  async clickOnAdLib_Yes_RadioButton() {
    await this.adLib_Yes_RadioButton.waitForDisplayed({ timeout: 15000 });
    await this.adLib_Yes_RadioButton.click();
  }

  async clickOnAdLib_Yes_RadioButton_For_NoBreastfeed() {
    await this.adLib_Yes_RadioButton_For_NoBreastfeed.waitForDisplayed({
      timeout: 15000,
    });
    await this.adLib_Yes_RadioButton_For_NoBreastfeed.click();
  }

  async clickOnAdLib_No_RadioButton() {
    await this.adLib_No_RadioButton.waitForDisplayed({ timeout: 15000 });
    await this.adLib_No_RadioButton.click();
  }

  async fillFeedingGoalField(Data) {
    await this.feedingGoalField.waitForDisplayed({ timeout: 15000 });
    await this.feedingGoalField.click();
    await this.feedingGoalField.setValue(Data);
  }

  async clickOnFeedingAdLib_No_radioButton() {
    await this.feedingAdLib_No_radioButton.waitForDisplayed({ timeout: 15000 });
    await this.feedingAdLib_No_radioButton.click();
  }

  async clickOnThirdIndexNextButton() {
    await this.thirdIndexNextButton.waitForDisplayed({ timeout: 15000 });
    await this.thirdIndexNextButton.click();
  }

  async fillFormulaField(Data) {
    await this.formulaField.waitForDisplayed({ timeout: 15000 });
    await this.formulaField.click();
    await browser.pause(1000);
    await this.formulaField.selectByVisibleText(Data);
    await browser.pause(1000);
  }

  async clickOnFourthIndexNextButton() {
    await this.fourthIndexNextButton.waitForDisplayed({ timeout: 15000 });
    await this.fourthIndexNextButton.click();
  }

  async fillBottlePercentField(Data) {
    await this.bottlePercentField.waitForDisplayed({ timeout: 15000 });
    await this.bottlePercentField.click();
    await this.bottlePercentField.setValue(Data);
  }

  async clickOnFifthIndexNextButton() {
    await this.fifthIndexNextButton.waitForDisplayed({ timeout: 15000 });
    await this.fifthIndexNextButton.click();
  }

  async fillGavageDurationField(Data) {
    await this.gavageDurationField.waitForDisplayed({ timeout: 15000 });
    await this.gavageDurationField.click();
    await this.gavageDurationField.selectByVisibleText(Data);
  }

  async verifyNutritionGraph(nutritionType, data) {
    await browser.pause(3000);
    const addedData = await $("(//*[contains(text(),'" + data + "')])[3]");
    const actData = await addedData.getText();
    console.log("✅ Added " + nutritionType + " data is:>> " + actData);
    await expect(actData).toEqual(data);
  }

  async fillNutritionMilkField(Data) {
    await this.nutritionMilkField.waitForDisplayed({ timeout: 15000 });
    await this.nutritionMilkField.click();
    await this.nutritionMilkField.selectByVisibleText(Data);
  }

  async fillCaloriesFieldField(Data) {
    await this.caloriesField.waitForDisplayed({ timeout: 15000 });
    await this.caloriesField.click();
    await this.caloriesField.selectByVisibleText(Data);
  }

  async fillNutritionfortificationField(Data) {
    await this.nutritionfortificationField.waitForDisplayed({ timeout: 15000 });
    await this.nutritionfortificationField.click();
    await this.nutritionfortificationField.selectByVisibleText(Data);
  }

  async fillNameField(Data) {
    await this.nameField.waitForDisplayed({ timeout: 15000 });
    await this.nameField.click();
    await this.nameField.setValue(Data);
  }

  async fillNewFormulaField(Data) {
    await this.newFormulaField.waitForDisplayed({ timeout: 15000 });
    await this.newFormulaField.click();
    await this.newFormulaField.setValue(Data);
  }

  async calculateBreastFeed(hrs, supplementalGoal, weightInKg) {
    const totalValue = supplementalGoal * weightInKg;
    console.log("total value is >>" + totalValue);
    const actTime = 24 / hrs;
    console.log("total time is >>" + actTime);
    const result1 = totalValue / actTime;
    const result = Math.round(result1 * 100) / 100;
    console.log("total result is >>" + result);
    const elementIs = await $("//li[contains(text(),'" + result + "')]");
    if ((await elementIs.isDisplayed()) === true) {
      console.log("✅ " + result + " page is displayed");
    } else {
      throw new Error("❌ " + result + " is not displayed for hours>>" + hrs);
    }
  }

  async calculateBreastFeedWithNoAdLib(
    hrs,
    supplementalGoal,
    weightInKg,
    bottle,
    gavage
  ) {
    const totalValue = supplementalGoal * weightInKg;
    console.log("total value is >>" + totalValue);
    const actTime = 24 / hrs;
    console.log("total time is >>" + actTime);
    const result1 = totalValue / actTime;
    const result = Math.round(result1 * 100) / 100;
    console.log("total result is >>" + result);
    const actResultWithNoAdLib1 = (result / 100) * bottle;
    const actResultWithNoAdLib = Math.round(actResultWithNoAdLib1 * 100) / 100;
    const elementIs = await $(
      "//li[contains(text(),'" +
        actResultWithNoAdLib +
        "ml bottle + " +
        actResultWithNoAdLib +
        "')]"
    );
    if ((await elementIs.isDisplayed()) === true) {
      console.log("✅ " + result + " page is displayed");
    } else {
      throw new Error("❌ " + result + " is not displayed for hours>>" + hrs);
    }
    const gavageValue = gavage.replace("minutes", "");
    console.log("Hrs. are>>" + hrs);
    let num = parseInt(hrs, 10);
    let index;

    if (num === 3) {
      index = 1;
    } else if (num === 4) {
      index = 2;
    } else {
      index = null; // Handle undefined cases for hrs not being 3 or 4
    }
    // If index is null, throw an error
    if (index === null) {
      throw new Error(
        "❌ Invalid hours passed. Only 3 or 4 are valid values for hours."
      );
    }

    // Construct the XPath selector dynamically with correct index
    const gavageIs = await $(
      `(//li[contains(text(),'${gavageValue}minutes')])[${index}]`
    );

    if ((await gavageIs.isDisplayed()) === true) {
      console.log("✅ " + result + " page is displayed");
    } else {
      throw new Error(
        "❌ " + gavageValue + " is not displayed for hours>>" + hrs
      );
    }
  }

  async verifyNutrition(Breastfeeding, suppliment, composition) {
    const act_Breadstfeeding = await $(
      "((//tr[@role='row'])[2]//td)[2]"
    ).getText();
    const act_suppliment = await $("((//tr[@role='row'])[2]//td)[3]").getText();
    const act_composition = await $(
      "((//tr[@role='row'])[2]//td)[4]"
    ).getText();

    await expect(act_Breadstfeeding).toEqual(Breastfeeding);
    await expect(act_suppliment).toEqual(suppliment);
    await expect(act_composition).toContain(composition);
  }

  async verifyNutritionOtherFields(volume, feedingGoal, Bottle, Gavage, AdLib) {
    const act_volume = await $("((//tr[@role='row'])[2]//td)[5]").getText();
    const act_feedingGoal = await $(
      "((//tr[@role='row'])[2]//td)[6]"
    ).getText();
    const act_Bottle = await $("((//tr[@role='row'])[2]//td)[8]").getText();
    const act_Gavage = await $("((//tr[@role='row'])[2]//td)[9]").getText();
    const act_AdLib = await $("((//tr[@role='row'])[2]//td)[10]").getText();

    await expect(act_volume).toEqual(volume);
    await expect(act_feedingGoal).toEqual(feedingGoal);
    await expect(act_Bottle).toEqual(Bottle);
    await expect(act_Gavage).toEqual(Gavage);
    await expect(act_AdLib).toEqual(AdLib);
  }

  async verifyNutritionOtherFieldsExceptVolume(
    feedingGoal,
    Bottle,
    Gavage,
    AdLib
  ) {
    const act_feedingGoal = await $(
      "((//tr[@role='row'])[2]//td)[6]"
    ).getText();
    const act_Bottle = await $("((//tr[@role='row'])[2]//td)[8]").getText();
    const act_Gavage = await $("((//tr[@role='row'])[2]//td)[9]").getText();
    const act_AdLib = await $("((//tr[@role='row'])[2]//td)[10]").getText();

    await expect(act_feedingGoal).toEqual(feedingGoal);
    await expect(act_Bottle).toEqual(Bottle);
    await expect(act_Gavage).toEqual(Gavage);
    await expect(act_AdLib).toEqual(AdLib);
  }

  async calculateVolumeValue(feedingGoal, weight) {
    const expVolume = feedingGoal * weight;
    const elementIs = await $(
      "(//td[contains(text(),'" + expVolume + "')])[1]"
    );
    if ((await elementIs.isDisplayed()) === true) {
      console.log("✅ " + expVolume + " volume is displayed");
    } else {
      throw new Error("❌ " + expVolume + " volume is not displayed for");
    }
  }

  async clickOnNutritionViewModeDropdown() {
    await this.nutritionViewModeDropdown.waitForDisplayed({ timeout: 300 });
    await this.nutritionViewModeDropdown.click();
  }

  async getCurrentDateTime() {
    const date = new Date();

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const day = String(date.getDate()).padStart(2, "0");
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    const endtime = `${day}-${month}-${year} ${hours}:${minutes}`;
    console.log("End time is>>" + endtime);
    this.endDateInputField.click();
    this.endDateInputField.setValue(endtime);
    await browser.keys("Enter");
  }
  async verifyRestartFunctionality() {
    await this.endDateInputField.waitForDisplayed({
      timeout: 3000,
      reverse: true,
    });
    console.log("✅ Restart option is working as expected");
  }

  async clickOnVolumeFilterDropdown() {
    await browser.pause(2000);
    await this.volumeFilterDropdown.click();
    await browser.pause(2000);
  }

  async clickOnDiaperingTypeFilterDropdown() {
    await browser.pause(1500);
    await this.diaperingTypeFilterDropdown.click();
    await browser.pause(1500);
  }

  async clickOnFilterTypeDropdown() {
    await browser.pause(1500);
    await this.filterTypeDropdown.click();
    await browser.pause(1500);
  }
  async verifyTrackerData(text) {
    if (
      (await $("//p[contains(text(),'" + text + "')]").isDisplayed()) === true
    ) {
      console.log("✅ " + text + " is displayed in the list");
    } else {
      throw new Error(
        "❌ " + text + " is not displayed in the data added from mobile"
      );
    }
  }

  async fillAddressField(Data) {
    await this.addressField.waitForDisplayed({ timeout: 20000 });
    await this.addressField.setValue(Data);
    await browser.pause(5000);
    await browser.keys(["ArrowDown"]);
    await browser.pause(2000);
    await browser.keys("Enter");
    await browser.pause(2000);
  }

  async verifyNutrionEndDate() {
    const date = await $("(//tr[@class='even']//td)[10]");
    await date.waitForDisplayed({ timeout: 15000 });
    const EndDate = await date.getText();
    const datePart = EndDate.slice(0, 11);
    const actEndDate = await $(
      "(//td[contains(text(),'" + datePart + "')])[2]"
    );
    if ((await actEndDate.isDisplayed()) === true) {
      const actEndDateText = await actEndDate.getText();
      const endDate = actEndDateText.slice(0, 11);
      console.log(
        "✅ " +
          " <<< " +
          endDate +
          " >>> " +
          " End date is displayed in the list"
      );
    } else {
      throw new Error("❌ End date is not diplayed in the list");
    }
  }

  async verifyRespiratoryEndDate() {
    const date = await $("(//tr[@role='row']//td)[7]");
    await date.waitForDisplayed({ timeout: 15000 });
    const EndDate = await date.getText();
    const datePart = EndDate.slice(0, 11);
    const actEndDate = await $(
      "(//td[contains(text(),'" + datePart + "')])[2]"
    );
    if ((await actEndDate.isDisplayed()) === true) {
      const actEndDateText = await actEndDate.getText();
      const endDate = actEndDateText.slice(0, 11);
      console.log(
        "✅ " +
          " <<< " +
          endDate +
          " >>> " +
          " End date is displayed in the list"
      );
    } else {
      throw new Error("❌ End date is not diplayed in the list");
    }
  }
  async verifyEndNutritionOrderButtonFunctionality() {
    await browser.pause(3000);
    if (
      (await $(
        "(//div[@class='newCard-card isCardActive'])[2]"
      ).isDisplayed()) === true
    ) {
      throw new Error(
        "❌ End nutriotion button is not working , still displaying lastest nutrition order summary card"
      );
    } else {
      console.log("✅ End nutrition order button is working fine");
    }
  }

  async verifyEndRespiratoryButtonFunctionality() {
    await browser.pause(3000);
    if (
      (await $("//button[@id='end-respiratory-settings']").isDisplayed()) ===
      true
    ) {
      throw new Error(
        "❌ End respiratory button is not working , still displaying end respiratory button"
      );
    } else {
      console.log("✅ End respiratory button is working fine");
    }
  }
  async verifyPMAonCard() {
    const actualPMA = await $(
      "//div[@class='patient_detail_inner']//p//b[4]"
    ).getText();
    this.hoverOverOrdersTab();
    this.clickOnLinkText("Nutrition");
    await browser.pause(3000);
    const expectedPMA = await $(
      "((//div[@class='newCard-card isCardActive'])[1]//span[@class='newCard-value'])[2]"
    ).getText();
    await expect(actualPMA).toEqual(expectedPMA);
  }

  async verifyWeightAndADWG() {
    const actualWeight1 = await $(
      "((//div[@class='newCard-card isCardActive'])[1]//span[@class='newCard-value'])[1]"
    ).getText();
    const actualADWG1 = await $(
      "((//div[@class='newCard-card isCardActive'])[1]//span[@class='newCard-value'])[3]"
    ).getText();
    const actualWeight = actualWeight1.slice(0, -3);
    console.log("This is the weight >>" + actualWeight);
    const actualADWG = actualADWG1.slice(0, -9);
    this.clickOnLinkText("Medical Record");
    this.hoverOverOnLink("Tracker");
    this.hoverOverOrdersTab();
    this.clickOnLinkText("Growth");
    await superAdminPage.clickOnButtonWithText("Growth Results");
    this.fillSearchField(actualWeight);
    await browser.pause(3000);
    const expWeight = await $("((//tr)[2]//td)[9]").getText();
    const expADWG1 = await $("((//tr)[2]//td)[10]").getText();
    await expect(actualWeight).toEqual(expWeight);
    await expect(expADWG1).toContain(actualADWG);
  }

  async verifyFeedingGoalInCard() {
    const actualValue = await $(
      "(//div[@class='newCard-card isCardActive'])[2]//tr[1]//td[2]"
    ).getText();

    const expValue1 = await $("((//tr[@role='row'])[2]//td)[6]").getText();
    const expValue2 = expValue1.replace(/\s+/g, "");
    const expValue = expValue2.replace("-", "0%");
    await expect(actualValue).toEqual(expValue);
  }

  async verifyBottlePercentageInCard() {
    const actualValue = await $(
      "(//div[@class='newCard-card isCardActive'])[2]//tr[1]//td[3]"
    ).getText();

    const expValue1 = await $("((//tr[@role='row'])[2]//td)[8]").getText();
    const expValue2 = expValue1.replace(/\s+/g, "");
    const expValue = expValue2.replace("-", "0%");
    await expect(actualValue).toEqual(expValue);
  }

  async verifyGavageGoalPercentageInCard() {
    const actualValue = await $(
      "(//div[@class='newCard-card isCardActive'])[2]//tr[1]//td[4]"
    ).getText();

    const expValue1 = await $("((//tr[@role='row'])[2]//td)[9]").getText();
    const expValue2 = expValue1.replace(/\s+/g, "");
    const expValue = expValue2.replace("-", "0%");

    await expect(actualValue).toEqual(expValue);
  }

  async verifyCaloriesAndAllActualPercentageValuesInCard(value) {
    const actualCalories = await $(
      "((//div[@class='newCard-card isCardActive'])[1]//span[@class='newCard-value'])[4]",
    ).getText();

    // const actualFeedingGoal = await $(
    //   "(//div[@class='newCard-card isCardActive'])[2]//tr[1]//td[2]",
    // ).getText();

    // const actualBottle = await $(
    //   "(//div[@class='newCard-card isCardActive'])[2]//tr[1]//td[3]",
    // ).getText();

    // const actualGavage = await $(
    //   "(//div[@class='newCard-card isCardActive'])[2]//tr[1]//td[4]",
    // ).getText();

    await expect(actualCalories).toContain(value);
    // await expect(actualFeedingGoal).toContain(value);
    // await expect(actualBottle).toContain(value);
    // await expect(actualGavage).toContain(value);
  }
  async verifyPMAonCardOnOtherProviderScreen() {
    const actualPMA = await $(
      "//div[@class='patient_detail_inner']//p//b[4]"
    ).getText();
    this.clickOnSecondIndexLinkText("Order");
    this.clickOnThirdIndexLinkText("Nutrition");
    await browser.pause(2000);
    const expectedPMA = await $(
      "((//div[@class='newCard-card isCardActive'])[1]//span[@class='newCard-value'])[2]"
    ).getText();
    await expect(actualPMA).toEqual(expectedPMA);
  }

  async verifyWeightAndADWGforOtherProvider() {
    const actualWeight1 = await $(
      "((//div[@class='newCard-card isCardActive'])[1]//span[@class='newCard-value'])[1]"
    ).getText();
    const actualADWG1 = await $(
      "((//div[@class='newCard-card isCardActive'])[1]//span[@class='newCard-value'])[3]"
    ).getText();
    const actualWeight = actualWeight1.slice(0, -3);
    console.log("This is the weight >>" + actualWeight);
    const actualADWG = actualADWG1.slice(0, actualADWG1.indexOf(" "));
    this.clickOnSecondIndexLinkText("Tracker");
    this.clickOnSecondIndexLinkText("Growth");
    await superAdminPage.clickOnButtonWithText("Growth Results");
    this.fillSearchField(actualWeight);
    await browser.pause(3000);
    const expWeight = await $("((//tr)[3]//td)[9]").getText();
    const expADWG1 = await $("((//tr)[3]//td)[10]").getText();
    await expect(actualWeight).toEqual(expWeight);
    await expect(expADWG1).toContain(actualADWG);
  }

  async verifyActualDataForNutrition(day, data, calories) {
    this.clickOnVolumeFilterDropdown();
    this.clickOnListOption("Bottle Feeding");
    await browser.pause(1000);
    const text = await $(
      '//div[@id="nutritionFilterSummery"]//p[contains(., "Average Total Volume Per Day :")]'
    ).getText();
    const number = text.match(/\d+(\.\d+)?/)[0];
    console.log("Number isss>>" + number);
    const totalBottleValue = parseInt(number);

    this.clickOnVolumeFilterDropdown();
    this.clickOnListOption("Gavage Feeding");
    await browser.pause(1000);
    const text1 = await $(
      '//div[@id="nutritionFilterSummery"]//p[contains(., "Average Total Volume Per Day :")]'
    ).getText();
    const number1 = text1.match(/\d+(\.\d+)?/)[0];
    console.log("Number isss>>" + number1);
    const totalGavageValue = parseInt(number1);

    this.clickOnVolumeFilterDropdown();
    this.clickOnListOption("Bottle & Gavage Feeding");
    await browser.pause(1000);
    const text2 = await $(
      '//div[@id="nutritionFilterSummery"]//p[contains(., "Average Total Volume Per Day :")]'
    ).getText();
    const number2 = text2.match(/\d+(\.\d+)?/)[0];
    console.log("Number isss>>" + number2);
    const totalVolume = parseInt(number2);

    const BottleActualresult = (totalBottleValue / totalVolume) * 100;

    const GavageActualresult = (totalGavageValue / totalVolume) * 100;
    console.log("Final result is>>" + BottleActualresult);
    this.hoverOverOrdersTab();
    this.clickOnLinkText("Nutrition");
    await browser.pause(3000);
    const actualWeight = await $("((//tr[@role='row'])[2]//td)[11]").getText();
    const FeedingActualresult = totalVolume / actualWeight / day;
    const BottleExpectedresult = await $(
      "(//div[@class='newCard-card isCardActive'])[2]//tr[1]//td[3]"
    ).getText();
    const GavageExpectedresult = await $(
      "(//div[@class='newCard-card isCardActive'])[2]//tr[1]//td[4]"
    ).getText();

    const FeedingGoalExpectedresult = await $(
      "(//div[@class='newCard-card isCardActive'])[2]//tr[1]//td[2]"
    ).getText();

    const expectedNumber = parseFloat(BottleExpectedresult.replace("%", ""));
    const expectedGavageNumber = parseFloat(
      GavageExpectedresult.replace("%", "")
    );
    const expectedFeeding = parseFloat(
      FeedingGoalExpectedresult.replace("%", "")
    );

    const actOunces = totalVolume / data;
    const actCalories = actOunces * calories;
    const actValue = actCalories / actualWeight;
    const actCaloriesKG = actValue / 4;
    console.log("Actual calories are>>" + actCaloriesKG);

    const CaloriesExpectedresult = await $(
      "((//div[@class='newCard-card isCardActive'])[1]//span[@class='newCard-value'])[4]"
    ).getText();

    const expectedCalories = parseFloat(
      CaloriesExpectedresult.replace("%", "")
    );

    console.log("Expected calories are>>" + expectedCalories);

    await expect(BottleActualresult).toEqual(expectedNumber);
    await expect(Math.round(GavageActualresult)).toEqual(expectedGavageNumber);
    await expect(Number(FeedingActualresult.toFixed(1))).toEqual(
      expectedFeeding
    );
  }
}
module.exports = new ManagingProviderAccountPage();
