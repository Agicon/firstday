Feature: Test cases for the 'Caregiver' ,'Other provider', 'patient' ,'Diagnosis','Respiratory' ,'Medication','Media','Vaccination' and Medical records page

  Scenario Outline: Verify all options and their redirections on dashboard
    Given Open web url <url>
    When Web app login using <userA>
    Then providers/dashboard page displays
    Then It redirects on the Dashboard screen
    Then Table is displaying on screen
    When I hover on the "Dashboard-All Patient" tab
    Then Second index Link text Manage Patients is displaying
    Then Second index Link text My Patient List is displaying
    Then Second index Link text Add A New Patient is displaying
    When I click on the second index link My Patients
    Then mypatients page displays
    Then It redirects on the My Patients screen
    Then Table is displaying on screen
    When I click on the second index link Caregivers
    Then parents page displays
    Then It redirects on the Active Caregivers screen
    Then Table is displaying on screen
    When I click on the second index link Other Providers
    Then manageProviders page displays
    Then It redirects on the Other Providers screen
    Then Table is displaying on screen
    When I hover on the "Dashboard-All Patient" tab
    When I click on the second index link Manage Patients
    Then patients page displays
    Then It redirects on the Active Patients screen
    Then Table is displaying on screen
    When I hover on the "Dashboard-All Patient" tab
    When I click on the second index link My Patient List
    Then assignproviders page displays
    Then It redirects on the Assign Patient screen
    Then Table is displaying on screen
    When I hover on the "Dashboard-All Patient" tab
    When I click on the second index link Add A New Patient
    Then patient/new page displays
    Then It redirects on the Add Patient Details screen
    Then Form is displaying on screen
    When I hover over the "Settings" icon
    Then Link text Logout is displaying
    Then Link text Profile is displaying
    Then Link text Change Password is displaying
    When I click on the link text Profile
    Then profile page displays
    Then It redirects on the Update Profile screen
    Then Form is displaying on screen
    When I hover over the "Settings" icon
    When I click on the link text Change Password
    Then changePassword page displays
    Then Button text Update is displayed on screen
    Then Form is displaying on screen
    Then It redirects on the Change Password screen

    Examples:
      | url      | userA                     |
      | loginUrl | providerLoginCrendentails |

  Scenario Outline: Create a static patient and verify this patient in mobile caregiver app and Verify that validation message is displaying under nutrition screen if the infant weight is not added
    When I hover on the "Dashboard-All Patient" tab
    When I click the <dashboard-ManagePatientsOption> option
    Then Search and delete duplicate user <validName>
    When I hover on the "Dashboard-All Patient" tab
    When I click the <dashboard-AddPatientOption> option
    Then "Add Patient Details" form displays
    When I fill <validName> data in baby first name field
    When I fill <validLastName> data in baby last name field
    When I fill <gender> data in gender field
    When I fill <hospital> data in hospital or office field
    When I fill <caregiver> data in caregiver field
    When I fill <treatmentLocation> data in treatment Location field
    When I click on the button with text Generate Firstday Healthcare Medical Record Number
    Then QR code should be generated and First day Healthcare Medical Record Number should be generated
    When I click on the button with text Save
    Then Success message Patient Added Succesfully! appears
    Then A "New Patient" gets created And it is displayed on the "My Patient list" with <validName> and <validLastName> and <formServices> and <treatment> and <hospitalLocation> and <status>
    When I hover on the "Dashboard-All Patient" tab
    When I click on the second index link My Patient List
    When I populate data <validName> in the "Search" field
    When I click on the link text <validName>
    When Hover over "Orders" tab
    When I click on the link text Nutrition
    Then patient/nutrition page displays
    Then Link text New Nutrition Order is displaying
    When I click on the link text New Nutrition Order
    Then <validation> should be displayed

    Examples:
      | validName         | validLastName | gender | hospital | caregiver                                                  | formServices    | treatmentLocation | status | dashboard-ManagePatientsOption | dashboard-AddPatientOption | treatment | validation                                                                            |
      | Patient_Auto_Test | Ben           | Male   | Default  | Caregiver_auto_test static (caregiverautotest@yopmail.com) | RPM,TELEMED,EMR | Hospital / Clinic | Active | Manage Patients                | Add A New Patient          | Discharge | Weight records are required to add nutrition orders. Please add weight records first. |

  Scenario Outline: Verify all patient options and there redirections on dashboard
    When I hover on the "Dashboard-All Patient" tab
    When I click on the second index link My Patient List
    When I populate data <patientName> in the "Search" field
    When I click on the link text <patientName>
    When I drag chat container banner
    When Click on heart rate view detail link
    Then #heartRate_graph page displays
    Then Heart rate graph is displaying
    When I click on the link Dashboard having third index
    When Click on respiratory rate view detail link
    Then #respiratoryRate_graph page displays
    Then Respiratory rate graph is displaying
    When I click on the link Dashboard having third index
    When Click on O2 saturation view detail link
    Then #saturationRate_graph page displays
    Then O2 saturation graph is displaying
    When I click on the link Dashboard having third index
    When Click on temperature view detail link
    Then #temperature_graph page displays
    Then Temperature graph is displaying
    When I click on the button with text Live ECG
    Then Live ECG graph should displayed
    Then Click on close live ECG popup
    When I click on the button with text Live SpO2
    Then Live SpO2 graph should displayed
    Then Click on close live SpO2 popup
    When I click on the button with text Per Seconds Data
    Then timestreamData page displays
    When I click on the link Dashboard having third index
    When Click on heart rate view detail link
    When I click on the button with text Download Excel
    Then Form is displaying on screen
    Then Click on close download excel button
    When I click on the button with text Alert History
    Then alertHistory page displays
    Then Table is displaying on screen
    When I click on the link Dashboard having third index
    When Click on heart rate view detail link
    When I click on the button with text Alert Settings
    Then alertSetting page displays
    Then Table is displaying on screen
    When I click on the link Dashboard having third index
    When I click on the link text Vital Signs
    Then vitalsigns page displays
    When I click on the link text Medical Record
    Then diagnosis page displays
    Then Table is displaying on screen
    When User click on the button Other Provider under baby dashboard screen
    Then providers page displays
    Then Table is displaying on screen
    When I click on the link text Appointment
    Then appointment page displays
    Then Table is displaying on screen
    When Hover over "Orders" tab
    When I click on the link text Respiratory
    Then respiratorySettings page displays
    Then Table is displaying on screen
    When Hover over "Orders" tab
    When I click on the link text Nutrition
    Then patient/nutrition page displays
    Then Link text New Nutrition Order is displaying

    Examples:
      | patientName       |
      | Patient_Auto_Test |

  Scenario Outline: Verify all patient options and there redirections on dashboard
    When I click on the link text Medical Record
    Then diagnosis page displays
    When I click on the link text Medications
    Then medication page displays
    Then Table is displaying on screen
    When I click on the link text Vaccinations
    Then vaccinations page displays
    Then Table is displaying on screen
    When I click on the link text Media
    Then media page displays
    Then Table is displaying on screen
    When User hover on the Documents tab
    When I click on the link text Hospital Records
    Then hospitalRecords page displays
    Then Table is displaying on screen
    When User hover on the Documents tab
    When I click on the link text Other Providers Records
    Then Table is displaying on screen
    When User hover on the Documents tab
    When I click on the link text Export Records
    Then Form is displaying on screen
    When I hover over the "Results" tab
    Then I should see the following options in the dropdown
      | Laboratory |
      | Imaging    |
      | Other      |
    When Hover over link Laboratory
    Then I should see the following options in the dropdown under dropdown option
      | Laboratory CBC                  |
      | Laboratory Chemistry            |
      | Laboratory Liver Function Tests |
      | Laboratory Lipid Tests          |
      | Laboratory Endocrine            |
      | Laboratory Coagulation          |
      | Laboratory Others               |
    When I click on the link text Laboratory CBC
    Then result/laboratory_cbc page displays
    Then Button text New CBC Result is displayed on screen
    When I hover over the "Results" tab
    When Hover over link Laboratory
    When I click on the link text Laboratory Chemistry
    Then result/laboratory_chemistry page displays
    Then Button text New Chemistry is displayed on screen
    When I hover over the "Results" tab
    When Hover over link Laboratory
    When I click on the link text Laboratory Liver Function Tests
    Then result/laboratory_chemistry/2 page displays
    Then Button text New Liver Function Tests is displayed on screen
    When I hover over the "Results" tab
    When Hover over link Laboratory
    When I click on the link text Laboratory Lipid Tests
    Then result/laboratory_chemistry/3 page displays
    Then Button text New Lipid Tests is displayed on screen
    When I hover over the "Results" tab
    When Hover over link Laboratory
    When I click on the link text Laboratory Endocrine
    Then result/laboratory_endocrine page displays
    Then Button text New Endocrine Result is displayed on screen
    When I hover over the "Results" tab
    When Hover over link Laboratory
    When I click on the link text Laboratory Coagulation
    Then result/laboratory_coagulation page displays
    Then Button text New Coagulation Result is displayed on screen
    When I hover over the "Results" tab
    When Hover over link Laboratory
    When I click on the link text Laboratory Others
    Then result/laboratory_others page displays
    Then Button text New Other Results is displayed on screen
    When I hover over the "Results" tab
    When Hover over link Imaging
    Then Imaging options should be visible in the dropdown under dropdown option
      | XRAY       |
      | CT         |
      | MRI        |
      | Ultrasound |
      | Other      |
    When I click on the link text XRAY
    Then result/imaging_xray page displays
    Then Table is displaying on screen
    When I hover over the "Results" tab
    When Hover over link Imaging
    When I click on the link text Ultrasound
    Then result/imaging_ultrasound page displays
    Then Table is displaying on screen
    When I hover over the "Results" tab
    When Hover over link Imaging
    When I click on the link text CT
    Then result/imaging_ct page displays
    Then Table is displaying on screen
    When I hover over the "Results" tab
    When Hover over link Imaging
    When I click on the link text MRI
    Then result/imaging_mri page displays
    Then Table is displaying on screen
    When I hover over the "Results" tab
    When Hover over link Imaging
    When I click on the imaging>>other button
    Then result/imaging_other page displays
    Then Table is displaying on screen
    When I hover over the "Results" tab
    When I click on the results>>other button
    Then result/other page displays
    Then Table is displaying on screen
    When User hover on the Documents tab
    When I click on the link text Hospital Records
    Then hospitalRecords page displays
    Then Table is displaying on screen
    Then Button text New Hospital Records is displayed on screen
    When User hover on the Documents tab
    When I click on the link text Other Providers Records
    Then patient/otherproviders page displays
    Then Table is displaying on screen
    Then Button text New Other Provider Records is displayed on screen
    When User hover on the Documents tab
    When I click on the link text Export Records
    Then patient/sharerecords page displays
    Then Button text Export is displayed on screen
    When User hover on the Tracker tab
    When I click on the second index link Nutrition
    Then patient/nutrition page displays
    Then Nutrition graph should display on screen
    When User hover on the Tracker tab
    When I click on the link text Growth
    Then patient/growth/ page displays
    Then Button text New Growth Result is displayed on screen
    When User hover on the Tracker tab
    When I click on the link text Diapering
    Then patient/diapering page displays
    Then Chart is displayed on screen
    When User hover on the Tracker tab
    When I click on the link text Sleep
    Then patient/sleep page displays
    Then Chart is displayed on screen

    Examples:
      | patientName       |
      | Patient_Auto_Test |

  Scenario Outline: Verify the "Managing Provider" is able to create "New Caregiver" when all the fields are populated with valid data And 	Verify the "Managing Provider" is able to create "New Caregiver" when only the mandatory fields are populated with valid data and 	Verify the "Managing Provider" is able to create "New Caregiver" when only the mandatory fields are populated with valid data and if any mandatory field is not populated And Verify "Managing Provider is able to "Delete" the "caregiver" when clicked on "Delete" icon
    When I click on the second index link Caregivers
    Then parents page displays
    Then Search and delete duplicate data <validName>
    When I click on the button with text New Caregiver
    Then It redirects on the New Caregiver screen
    When I click on the button with text Create
    Then validation message Please enter first name appears
    Then validation message Please enter last name appears
    Then validation message Please enter email address appears
    Then validation message This field is required. appears
    When User add <invalidData> in name field
    Then validation message Please enter at least 2 characters. appears
    When I fill <invalidData> data in last name field
    Then validation message Please enter at least 2 characters. appears
    When User add <invalidEmail> in email field
    Then validation message Please enter a valid email address. appears
    When User add <invalidData> in mobile number field
    Then validation message Please enter at least 9 digits. appears
    When User add <invalidEmail> in mobile number field
    Then validation message Please enter no more than 13 digits. appears
    When User add <specialCharactors> in mobile number field
    Then validation message Please enter only numbers appears
    When User add <validName> in name field
    When I fill <validLastName> data in last name field
    When I fill valid and unique data in email
    When User add <validMobile> in mobile number field
    When I click on the button with text Create
    Then Success message Caregiver Added Succesfully ! appears
    When I populate data <validName> in the "Search" field
    When I fill fields with <validName> and <validLastName> and <validMobile> but I populate "Email field" with already registered email
    Then validation message This email is already registerd with system please choose different email appears
    When I click on the button with text Close
    When I populate data <validName> in the "Search" field
    When I click On "Delete" icon
    Then Success message Caregivers Deleted !! appears
    Then Deleted record should not be visible in the list
    When I click on the button with text New Caregiver
    Then It redirects on the New Caregiver screen
    When User add <validName> in name field
    When I fill <validLastName> data in last name field
    When User add <validName> in name field
    When I fill valid and unique data in email
    When User add <validMobile> in mobile number field
    When User add <validRelationshipName> in relationship field
    When User add address <validAddress> in caregiver address field
# When I click on the button with text Create
    Then Success message Caregiver Added Succesfully ! appears
    When I populate data <caregiverName> in the "Search" field
    Then Created caregiver should be visible in the list with <caregiverName> and <validMobile> and <validRelationshipName> and <children> and <status>

    Examples:
      | url      | userA                     | validName           | validLastName | validMobile | validRelationshipName | validState | validCity | validAddress     | validZipcode | status | caregiverName               | invalidData | invalidEmail   | specialCharactors |
      | loginUrl | providerLoginCrendentails | Auto_Test_Caregiver | Autonix | 3652700000 | Father | Texas | Fairview | 880 Red Oak Lane | 10001 | Active | Auto_Test_Caregiver Autonix | 1 | #####gmail.com | !@#$%%$#@! |

  Scenario Outline: Verify "Caregiver "Active/Inactive" status
    When I click on the second index link Caregivers
    Then It redirects on the Active Caregivers screen
    When I populate data <validName> in the "Search" field
    When User click on the link Active and yes button
    Then Success message Caregiver Inactive successfully !! appears
    Then Verify, status should be changed and <validName> should not be visible in the list
    When I click on the button with text Inactive Caregivers
    Then It redirects on the Inactive Caregivers screen
    When I populate data <validName> in the "Search" field
    Then Verify <validName> is displayed with <inactiveStatus>
    When User click on the link Inactive and yes button
    Then Success message Caregiver Active successfully appears
    Then Verify, status should be changed and <validName> should not be visible in the list
    When I click on the button with text Active Caregivers
    Then It redirects on the Active Caregivers screen
    When I populate data <validName> in the "Search" field
    Then Verify <validName> is displayed with <status>

    Examples:
      | validName           | status | inactiveStatus |
      | Auto_Test_Caregiver | active | Inactive       |

  Scenario Outline: Verify "Managing Provider" is not able to update the "Caregiver" and validation displays if any mandatory field is not populated while updating the Caregiver And Verify "Managing Provider" is not able to update the "Caregiver" with invalid details And Verify "Managing Provider" is able to update the "Caregiver" details
    When I click on the second index link Caregivers
    Then It redirects on the Active Caregivers screen
    When I populate data <caregiverName> in the "Search" field
    When I click on the "View or Update" option under the "Action" section
    Then It redirects on the Update Caregivers screen
    When I update the "Caregiver" but does not populate one of the mandatory field
    When I click on the button with text Update
    Then validation message Please enter first name appears
    When User add <invalidData> in name field
    Then validation message Please enter at least 2 characters. appears
    When I fill <invalidData> data in last name field
    Then validation message Please enter at least 2 characters. appears
    When User add <invalidEmail> in email field
    When I click on the button with text Update
    Then validation message Please enter a valid email address. appears
    When User add <invalidData> in mobile number field
    When I click on the button with text Update
    Then validation message Please enter at least 8 characters. appears
    When User add <invalidEmail> in mobile number field
    Then validation message Please enter a valid number. appears
    When User add <specialCharactors> in mobile number field
    Then validation message Please enter no more than 16 characters. appears
    When I click on the button with text Update
    When User add <updatedCaregiverName> in name field
    When I fill <updatedLastName> data in last name field
    When I fill valid and unique data in email
    When User add <updatedMobile> in mobile number field
    When User add <updatedRelationshipName> in relationship field
    When User add address <updatedAddress> in caregiver address field
# When I click on the button with text Update
    Then Success message Caregiver details updated ! appears
    When I populate data <updatedCaregiverName> in the "Search" field
    Then Created caregiver should be visible in the list with <updatedCaregiver> and <updatedMobile> and <updatedRelationshipName> and <children> and <status>

    Examples:
      | caregiverName               | invalidData | invalidEmail   | specialCharactors | updatedCaregiverName        | updatedLastName | updatedMobile | updatedRelationshipName | updatedState | updatedCity | updatedAddress       | updatedZipcode | status | updatedCaregiver                    |
      | Auto_Test_Caregiver Autonix | 1 | #####gmail.com | !@#$%%$#@! ^&^&^& | Updated_Auto_Test_Caregiver | Autonix | 2025859010 | Grandparent | Florida | Miami | 8900 Canyon Trail Rd | 00123 | Active | Updated_Auto_Test_Caregiver Autonix |

  Scenario Outline: Verify the "Managing Provider" is able to create "New Caregiver" and verify edit and delete functionality under inactive caregiver screen
    When I populate data <updatedCaregiverName> in the "Search" field
    When User click on the link Active and yes button
    Then Success message Caregiver Inactive successfully !! appears
    Then Verify, status should be changed and <updatedCaregiverName> should not be visible in the list
    When I click on the button with text Inactive Caregivers
    Then It redirects on the Inactive Caregivers screen
    When I populate data <updatedCaregiverName> in the "Search" field
    Then Verify <updatedCaregiverName> is displayed with <inactiveStatus>
    Then Search and delete duplicate data <updatedCaregiverInactiveName>
    When I populate data <updatedCaregiverName> in the "Search" field
    When I click on the "View or Update" option under the "Action" section
    Then It redirects on the Update Caregivers screen
    When I update the "Caregiver" but does not populate one of the mandatory field
    When I click on the button with text Update
    Then validation message Please enter first name appears
    When User add <invalidData> in name field
    Then validation message Please enter at least 2 characters. appears
    When I fill <invalidData> data in last name field
    Then validation message Please enter at least 2 characters. appears
    When User add <invalidEmail> in email field
    When I click on the button with text Update
    Then validation message Please enter a valid email address. appears
    When User add <invalidData> in mobile number field
    When I click on the button with text Update
    Then validation message Please enter at least 8 characters. appears
    When User add <invalidEmail> in mobile number field
    Then validation message Please enter a valid number. appears
    When User add <specialCharactors> in mobile number field
    Then validation message Please enter no more than 16 characters. appears
    When I click on the button with text Update
    When User add <updatedCaregiverInactiveName> in name field
    When I fill <updatedLastName> data in last name field
    When I fill valid and unique data in email
    When User add <updatedMobile> in mobile number field
    When User add <updatedRelationshipName> in relationship field
    When User add address <validAddress> in caregiver address field
# When I click on the button with text Update
    Then Success message Caregiver details updated ! appears
    When I click on the button with text Inactive Caregivers
    When I populate data <updatedCaregiverInactiveName> in the "Search" field
    Then Added data <caregiverInactiveName> is successfully displaying in table
    When I click On "Delete" icon
    Then Success message Caregivers Deleted !! appears
    Then Deleted record should not be visible in the list

    Examples:
      | caregiverInactiveName                        | invalidData | invalidEmail   | specialCharactors | updatedCaregiverName        | updatedCaregiverInactiveName         | updatedLastName | updatedMobile | updatedRelationshipName | updatedState | updatedCity | updatedAddress       | updatedZipcode | status | updatedCaregiver                    | inactiveStatus |
      | Updated_Auto_Test_Caregiver_Inactive Autonix | 1 | #####gmail.com | !@#$%%$#@! ^&^&^& | Updated_Auto_Test_Caregiver | Updated_Auto_Test_Caregiver_Inactive | Autonix | 2000859019 | Mother | Florida | Miami | 8900 Canyon Trail Rd | 09123 | Active | Updated_Auto_Test_Caregiver Autonix | Inactive |
# # # //-----------------------Patient-Cases-----------------------------//

  Scenario Outline: User logged in as Provider And Verify the "Managing Provider" is not able to create "New Patient" and verify edit and delete functionality under inactive patient screen
    When I hover on the "Dashboard-All Patient" tab
    When I click the <dashboard-ManagePatientsOption> option
    Then Search and delete duplicate user <validFirstName>
    When I hover on the "Dashboard-All Patient" tab
    When I click the <dashboard-AddPatientOption> option
    Then "Add Patient Details" form displays
    When I fill <validFirstName> data in baby first name field
    When I fill <validLastName> data in baby last name field
    When I fill <startServiceDate> data in birth date field
    When I fill <birthTime> data in birth time field
    When I fill <gender> data in gender field
    When I fill <hospital> data in hospital or office field
    When I fill <caregiver> data in caregiver field
    When I fill <week> data in gestational Age week field
    When I fill <days> data in gestational Age days field
    When I fill <treatmentLocation> data in treatment Location field
    When I fill <startServiceDate> data in start service date field
    When I fill <hospitalLocation> data in hospital Location field
    When I fill <defaultNumber> data in hospital Record Number field
    When I fill <defaultNumber> data in ECG MAC Address field
    When I fill <defaultNumber> data in Saturation MAC Address field
    When I fill <defaultNumber> data in Temperature MAC Address field
    When I click on the button with text Generate Firstday Healthcare Medical Record Number
    Then QR code should be generated and First day Healthcare Medical Record Number should be generated
    When I click on the button with text Save
    Then Success message Patient Added Succesfully! appears
    Then A "New Patient" gets created And it is displayed on the "My Patient list" with <validFirstName> and <validLastName> and <services> and <treatment> and <hospitalLocation> and <status>
    When I hover on the "Dashboard-All Patient" tab
    When I click the <dashboard-ManagePatientsOption> option
    When I populate data <validFirstName> in the "Search" field
    When I click on the link text Active
    Then Are you sure you want to 	inactive Patient ? should be displayed
    When I click on the button with text Yes
    Then Success message Patient inactivated succesfully appears
    Then Verify, status should be changed and <validFirstName> should not be visible in the list
    When I click on the link text Inactive Patients
    Then It redirects on the Inactive Patients screen
    Then Search and delete duplicate user <updatedFirstName>
    When I populate data <validFirstName> in the "Search" field
    When I click on the "View or Update" option under the "Action" section
    Then It redirects on the Update Patient Details screen
    When I remove required field on patient form
    When I click on the button with text Update
    Then validation message Please enter first name. appears
    Then validation message Please enter last name. appears
    When I fill <invalidData> data in baby first name field
    When I fill <invalidData> data in baby last name field
    When I click on the button with text Update
    Then validation message Please enter at least 2 characters. appears
    When I fill <updatedFirstName> data in baby first name field
    When I fill <updatedLastName> data in baby last name field
    When I uncheck <servicesCheckbox> checkbox in baby service field
    When I click on the button with text Update
    Then Success message Patient Updated Succesfully ! appears
    When I click on the link text Inactive Patients
    When I populate data <updatedFirstName> in the "Search" field
    Then Link text <updatedFirstName> is displaying
    Then Link text <validLastName> is displaying
    When I click On "Delete" icon
    Then Success message Patient Deleted !! appears
    Then Deleted record should not be visible in the list

    Examples:
      | url      | userA                     | dashboard-ManagePatientsOption | secondPatientName | invalidData | updatedFirstName   | updatedLastName | updatedHospitalLocation | services        | treatment | status | servicesCheckbox          | inactiveStatus | validFirstName    | dashboard-PatientListOption | primaryProvider        | homeLocation | dashboard-AddPatientOption | validLastName | gender | hospital | formServices    | treatmentHomeLocation | randomText | location | caregiver                                                  | week | days | treatmentLocation | location | startServiceDate | hospitalLocation | defaultNumber | birthTime |
      | loginUrl | providerLoginCrendentails | Manage Patients | QA_Patient | 1 | Updated_QA_Patient | Testman | Lakewood | RPM,TELEMED,EMR | Discharge | Active | Remote patient monitoring | Inactive | Auto_Test_Patient | My Patient List | managing_auto_provider | Home | Add A New Patient | Testman | Female | Default | RPM,TELEMED,EMR | Readmit | @@@@@@ | Hospital | Caregiver_auto_test static (caregiverautotest@yopmail.com) | 40 | 6 | Hospital / Clinic | Hospital | 21/05/2025 | Greenville | 12345678 | 5:00 Am |

  Scenario Outline: User logged in as Provider And Verify the "Managing Provider" is not able to create "New Patient" and validation displays when mandatory field is not populated And Verify the "Managing Provider" is able to create "New Patient " when all the fields are populated with valid data
    When I hover on the "Dashboard-All Patient" tab
    When I click the <dashboard-ManagePatientsOption> option
    Then Search and delete duplicate user <validFirstName>
    When I hover on the "Dashboard-All Patient" tab
    When I click the <dashboard-AddPatientOption> option
    Then "Add Patient Details" form displays
    When I click on the button with text Save
    Then validation message Please enter first name. appears
    Then validation message Please enter last name. appears
    Then validation message Please select Gender. appears
    Then validation message Please select Hospital. appears
    Then validation message Please select treatment location appears
    When I fill <validFirstName> data in baby first name field
    When I fill <validLastName> data in baby last name field
    When I fill <startServiceDate> data in birth date field
    When I fill <birthTime> data in birth time field
    When I fill <gender> data in gender field
    When I fill <hospital> data in hospital or office field
    When I fill <caregiver> data in caregiver field
    When I fill <week> data in gestational Age week field
    When I fill <days> data in gestational Age days field
    When I fill <treatmentLocation> data in treatment Location field
    When I fill <startServiceDate> data in start service date field
    When I fill <hospitalLocation> data in hospital Location field
    When I fill <defaultNumber> data in hospital Record Number field
    When I fill <defaultNumber> data in ECG MAC Address field
    When I fill <defaultNumber> data in Saturation MAC Address field
    When I fill <defaultNumber> data in Temperature MAC Address field
    When I click on the button with text Save
    Then validation message Please Generate MRN Number appears
    When I click on the button with text Generate Firstday Healthcare Medical Record Number
    Then QR code should be generated and First day Healthcare Medical Record Number should be generated
    When I click on the button with text Save
    Then Success message Patient Added Succesfully! appears
    Then A "New Patient" gets created And it is displayed on the "My Patient list" with <validFirstName> and <validLastName> and <services> and <treatment> and <hospitalLocation> and <status>

    Examples:
      | url      | invalidEmail       | invalidPassword | validEmail                   | userA                     | validFirstName    | validLastName | birthTime | defaultNumber | gender | hospital | caregiver                                                  | week | days | treatmentLocation | location | startServiceDate | hospitalLocation | dashboard-AddPatientOption | dashboard-ManagePatientsOption | services        | treatment | status |
      | loginUrl | provider@gmail.com | 261561 | testprovider2may@yopmail.com | providerLoginCrendentails | Auto_Test_Patient | Auto_Johan | 5:00 Am | 12356478 | Male | Default | Caregiver_auto_test static (caregiverautotest@yopmail.com) | 40 | 6 | Hospital / Clinic | Hospital | 21/05/2025 | Greenville | Add A New Patient | Manage Patients | RPM,TELEMED,EMR | Discharge | Active |

  Scenario Outline: Verify the "Managing Provider" is able to create "New patient" when only the mandatory fields are populated with valid data And Verify "Managing Provider" is able to update the "Patient" details And Verify Filters, search features on Active Patient screen And Verify the "Managing Provider" is able to create "New Patient " with "Treatment Location" set as "Home"
    When I hover on the "Dashboard-All Patient" tab
    When I click the <dashboard-ManagePatientsOption> option
    Then It redirects on the Active Patients screen
    Then Search and delete duplicate user <updatedFirstName>
    When I hover on the "Dashboard-All Patient" tab
    When I click the <dashboard-AddPatientOption> option
    When I fill <secondPatientName> data in baby first name field
    When I fill <validLastName> data in baby last name field
    When I fill <gender> data in gender field
    When I fill <hospital> data in hospital or office field
    When I fill <homeLocation> data in treatment Location field
    When I fill <homeLocation> data in date of hospital Discharge field
    When I click on the button with text Generate Firstday Healthcare Medical Record Number
    Then QR code should be generated and First day Healthcare Medical Record Number should be generated
    When I click on the button with text Save
    Then A "New Patient" gets created And it is displayed on the "My Patient list" with <secondPatientName> and <validLastName> and <formServices> and <treatmentHomeLocation> and <hospitalLocation> and <status>
    When I hover on the "Dashboard-All Patient" tab
    When I click the <dashboard-ManagePatientsOption> option
    Then It redirects on the Active Patients screen
    When I populate data <randomText> in the "Search" field
    Then No matching records found should be displayed
    When I click on the button with text Reset
    When I fill <hospital> data in hospital or office field
    When I fill <location> data in treatment Location field under active patients
    Then The results are displayed on the "Active Patient" list as per applied filter
    When I fill <homeLocation> data in treatment Location field under active patients
    Then Verify <secondPatientName> is displayed with <treatmentHomeLocation>
    When I click on the button with text Reset
    Then Default values All Hospital and Both should be displayed in dropdown list
    When I populate data <secondPatientName> in the "Search" field
    When I click on the "View or Update" option under the "Action" section
    Then It redirects on the Update Patient Details screen
    When I click on the button with text Back
    Then It redirects on the Active Patients screen
    When I populate data <secondPatientName> in the "Search" field
    When I click on the "View or Update" option under the "Action" section
    Then It redirects on the Update Patient Details screen
    When I remove required field on patient form
    When I click on the button with text Update
    Then validation message Please enter first name. appears
    Then validation message Please enter last name. appears
    When I fill <invalidData> data in baby first name field
    When I fill <invalidData> data in baby last name field
    When I click on the button with text Update
    Then validation message Please enter at least 2 characters. appears
    When I fill <updatedFirstName> data in baby first name field
    When I fill <updatedLastName> data in baby last name field
    When I uncheck <servicesCheckbox> checkbox in baby service field
    When I click on the button with text Update
    Then Success message Patient Updated Succesfully ! appears
    Then A "New Patient" gets created And it is displayed on the "My Patient list" with <updatedFirstName> and <updatedLastName> and <services> and <treatmentLocation> and <updatedHospitalLocation> and <status>

    Examples:
      | url      | userA                     | dashboard-ManagePatientsOption | secondPatientName | invalidData | updatedFirstName   | updatedLastName | updatedHospitalLocation | services    | treatment | status | servicesCheckbox          | inactiveStatus | treatmentLocation | validFirstName    | dashboard-PatientListOption | primaryProvider        | homeLocation | dashboard-AddPatientOption | validLastName | gender | hospital | formServices    | treatmentHomeLocation | randomText | location |
      | loginUrl | providerLoginCrendentails | Manage Patients | QA_Patient | 1 | Updated_QA_Patient | Testman | Lakewood | TELEMED,EMR | Discharge | Active | Remote patient monitoring | Inactive | Readmit | Auto_Test_Patient | My Patient List | managing_auto_provider | Home | Add A New Patient | Testman | Female | Default | RPM,TELEMED,EMR | Readmit | @@@@@@ | Hospital |

  Scenario Outline: Verify managing provider is able change "Patient's status to "Active/Inactive" status And Verify the "Managing Provider" is able to "Discharge" Patient Successfully And Verify "Managing Provider" is able to "Delete" the "Patient" when clicked on "Delete" icon And "Managing Provider" is able to assign "Primary provider" to the patient
    When I populate data <updatedFirstName> in the "Search" field
    When I click on the link text Active
    Then Are you sure you want to 	inactive Patient ? should be displayed
    When I click on the button with text Yes
    Then Success message Patient inactivated succesfully appears
    Then Verify, status should be changed and <updatedFirstName> should not be visible in the list
    When I click on the link text Inactive Patients
    Then It redirects on the Inactive Patients screen
    When I populate data <updatedFirstName> in the "Search" field
    Then Verify <updatedFirstName> is displayed with <inactiveStatus>
    When I click on the link text Inactive
    Then Are you sure you want to 	active Patient ? should be displayed
    When I click on the button with text Yes
    Then Success message Patient activated succesfully appears
    Then Verify, status should be changed and <updatedFirstName> should not be visible in the list
    When I hover on the "Dashboard-All Patient" tab
    When I click the <dashboard-ManagePatientsOption> option
    Then It redirects on the Active Patients screen
    When I populate data <validFirstName> in the "Search" field
    When I click on the button with text Discharge
    Then It redirects on the Update Patient Treatment Details screen
    When I click on the button with text Close
    Then Successfully able to "close" the "Update Patient Treatment Details" screen
    When I click on the button with text Discharge
    When I select a "Date of hospital Discharge" date greater than or equal to the patient's date of birth
    When I click on the button with text Update
    Then Success message Patient Details Updated Succesfully ! appears
    When I populate data <updatedFirstName> in the "Search" field
    When I click On "Delete" icon
    Then Success message Patient Deleted !! appears
    Then Deleted record should not be visible in the list
    When I populate data <validFirstName> in the "Search" field
    Then Verify <validFirstName> is displayed with <treatmentLocation>
    When I hover on the "Dashboard-All Patient" tab
    When I click the <dashboard-PatientListOption> option
    Then It redirects on the Assign Patient screen
    When I populate data <validFirstName> in the "Search" field
    When I click on the "View or Update" option under the "Action" section
    Then It redirects on the Assign Patient screen
    When I checkmark the <providerOptionCheckbox> option
    When I click on the button with text Assign
    When I populate data <validFirstName> in the "Search" field
    Then The <primaryProvider> gets assigned to the patient and provider displays in the dedicated slot on the list

    Examples:
      | dashboard-ManagePatientsOption | secondPatientName | invalidData | updatedFirstName   | updatedLastName | updatedHospitalLocation | services    | treatment | status | servicesCheckbox          | inactiveStatus | treatmentLocation | validFirstName    | dashboard-PatientListOption | providerOptionCheckbox | primaryProvider        |
      | Manage Patients | QA_Patient | 1 | Updated_QA_Patient | Testman | Lakewood | TELEMED,EMR | Discharge | Active | Remote patient monitoring | Inactive | Readmit | Auto_Test_Patient | My Patient List | Primary Provider | managing_auto_provider |

  Scenario Outline: Create a static patient and verify this patient in mobile caregiver app
    When I hover on the "Dashboard-All Patient" tab
    When I click the <dashboard-ManagePatientsOption> option
    Then Search and delete duplicate user <validName>
    When I hover on the "Dashboard-All Patient" tab
    When I click the <dashboard-AddPatientOption> option
    Then "Add Patient Details" form displays
    When I fill <validName> data in baby first name field
    When I fill <validLastName> data in baby last name field
    When I fill <gender> data in gender field
    When I fill <hospital> data in hospital or office field
    When I fill <caregiver> data in caregiver field
    When I fill <treatmentLocation> data in treatment Location field
    When I click on the button with text Generate Firstday Healthcare Medical Record Number
    Then QR code should be generated and First day Healthcare Medical Record Number should be generated
    When I click on the button with text Save
    Then Success message Patient Added Succesfully! appears
    Then A "New Patient" gets created And it is displayed on the "My Patient list" with <validName> and <validLastName> and <formServices> and <treatment> and <hospitalLocation> and <status>

    Examples:
      | validName         | validLastName | gender | hospital | caregiver                                                  | formServices    | treatmentLocation | status | dashboard-ManagePatientsOption | dashboard-AddPatientOption | treatment |
      | Patient_Auto_Test | Ben           | Male   | Default  | Caregiver_auto_test static (caregiverautotest@yopmail.com) | RPM,TELEMED,EMR | Hospital / Clinic | Active | Manage Patients                | Add A New Patient          | Discharge |

  Scenario Outline: Verify the "Managing Provider" is not able to create "New Other Provider" and validation displays if any mandatory field is not populated and if invalid data is added in mandatory field and 	Verify the "Managing Provider" is able to create "Other Provider" when only the mandatory fields are populated with valid data and 	Verify the "Customer" is not able to create "New Other Provider" with already registered email
    When I click on the second index link Other Providers
    Then It redirects on the Other Providers screen
    Then Search and delete duplicate data <validOtherProviderName>
    When I click on the button with text New Other Provider
    Then It redirects on the New Other Provider screen
    When I click on the button with text Create
    Then validation message Please enter first name appears
    Then validation message Please enter email address appears
    When User add <invalidData> in name field
    Then validation message Please enter at least 2 characters. appears
    When User add <invalidEmail> in email field
    Then validation message Please enter valid email. appears
    When User add <textInMobileNumber> in mobile number field
    When I click on the button with text Create
    Then validation message Please enter only numbers appears
    When User add <invalidMobileNumber> in mobile number field
    Then validation message Please enter at least 10 digits. appears
    When User add <invalidEmail> in website field
    When I click on the button with text Create
    Then validation message Please enter a valid website URL appears
    When User add <textInMobileNumber> in office number field
    When I click on the button with text Create
    When User add <invalidMobileNumber> in office number field
    When User add <invalidData> in zipcode field
    When I click on the button with text Create
    Then validation message Please enter valid zipcode appears
    When I click on the button with text Close
    When I click on the second index link Other Providers
    Then It redirects on the Other Providers screen
    When I click on the button with text New Other Provider
    When User add <validOtherProviderName> in name field
    When I fill valid and unique data in email
    When I click on the button with text Create
    Then Success message Other Provider Added Succesfully. Credentials will be sent to an email ! appears
    When I populate data <validOtherProviderName> in the "Search" field
    Then A "Other Provider" gets created and it displays on the "Other Providers" list with <specialty> and <validOtherProviderName> and <status>
    When I populate fields <validOtherProviderName> but I populate "Email field" with already registered email
    Then validation message Please Enter Unique email. This email is already register with system. appears
    When I click on the button with text Close

    Examples:
      | url      | userA                     | validOtherProviderName   | invalidData | invalidEmail   | status | textInMobileNumber | invalidMobileNumber |
      | loginUrl | providerLoginCrendentails | Auto_Test_Other_Provider | 1 | #####gmail.com | Active | abcdef | 12354 |

  Scenario Outline: Verify "Managing Provider" is not able to update the "Other Provider" with invalid details and 	Verify "Managing Provider" is not able to update the "Other Provider" and validation displays if any mandatory field is not populated while updating the customer and Verify "Managing Provider" is able to update the "Other Provider's" details
    Then Search and delete duplicate data <updatedName>
    When User search the created provider <validOtherProviderName>
    When User click on the "View or Update" option under "Action" section
    Then User should navigate to the "Update Managing Provider Details" page
    When User update the "Managing Provider form" but does not populate one of the mandatory field
    Then User click on the "Update" button
    Then validation message Please enter name appears
    When User add <invalidData> in name field
    Then validation message Please enter at least 2 characters. appears
    When User add <updatedName> in name field
    When User click on the "Back" button on "Update Managing Provider Details" page
    When User click on the "View or Update" option under "Action" section
    Then User should navigate to the "Update Managing Provider Details" page
    When User add <updatedName> in name field
    When User add <updatedSpecialty> in specialty field
    Then User click on the "Update" button
    Then Success message Other Provider Updated Succesfully ! appears
    When I populate data <updatedName> in the "Search" field
    Then A "Other Provider" gets created and it displays on the "Other Providers" list with <specialty> and <updatedName> and <status>
    When I populate data <updatedName> in the "Search" field
    When I click On "Delete" icon
    Then Success message Other Provider Deleted !! appears
    Then Deleted record should not be visible in the list

    Examples:
      | validOtherProviderName   | updatedName                      | updatedSpecialty | invalidData | status |
      | Auto_Test_Other_Provider | Updated_Auto_Test_Other_Provider | Skin | 1 | Active |

  Scenario Outline: Verify the "Managing Provider" is able to create "Other Provider" when all the fields are populated with valid data
    When I click on the second index link Other Providers
    Then It redirects on the Other Providers screen
    Then Search and delete duplicate data <validOtherProviderName>
    When I click on the button with text New Other Provider
    Then It redirects on the New Other Provider screen
    When I click on the button with text Create
    When User add <validOtherProviderName> in name field
    When I fill valid and unique data in email
    When User add <specialty> in specialty field
    When User add <validMobile> in mobile number field
    When User add <validWebsite> in website field
    When User add <validMobile> in office number field
    When User add <validOfficeInfo> in office information field
    When User add <validState> in State field
    When User add <validCity> in city field
    When User add <validAddress> in address field
    When User add <validZipcode> in zipcode field
    When I click on the button with text Create
    When I populate data <validOtherProviderName> in the "Search" field
    Then A "Other Provider" gets created and it displays on the "Other Providers" list with <specialty> and <validOtherProviderName> and <status>

    Examples:
      | validOtherProviderName   | specialty     | validMobile | validWebsite         | validOfficeInfo | validState | validCity   | validAddress            | validZipcode | status |
      | Auto_Test_Other_Provider | pediatricians | 2026839019 | https://webdriver.io | IT Office | Bridgeland | Silverstone | Westwood Park, TX 24680 | 10001 | Active |

  Scenario Outline: Verify "Managing Provider" is able to change the status of Other Provider to "Inactive" and Verify "Customer" is able to change the status of Managing Provider to "Active" and Verify a "Managing Provider" with "Inactive" status is not allowed to login on portal
    When User click on "Other Provider" tab
    When I populate data <validName> in the "Search" field
    Then User refresh page
    When User search the created provider <validName>
    When I click on the link text Active
    When I click on the button with text Yes
    Then Success message Other Provider Inactive Successfully !! appears
    Then Verify, status should be changed and <validName> should not be visible in the list
    When I click on the button with text Inactive Other Providers
    Then It redirects on the Inactive Other Providers screen
    When I populate data <validName> in the "Search" field
    Then Verify <validName> is displayed with <inactiveStatus>
    When I hover over the "Settings" icon
    When I click on the link text Logout
    Then I get logged out from my account
    When Open web url <url>
    When Web app login using <provider>
    Then validation message You are not allow to login. Please contact support team. appears
    When Web app login using <userA>
    Then providers/dashboard page displays
    When I click on the second index link Other Providers
    Then It redirects on the Other Providers screen
    When I click on the button with text Inactive Other Providers
    When I populate data <validName> in the "Search" field
    When I click on the link text Inactive
    When I click on the button with text Yes
    Then Success message Other Provider Active Successfully appears
    Then Verify, status should be changed and <validName> should not be visible in the list
    When I click on the button with text Active Other Providers
    Then The "Managing Provider" now displayed there in list <validName>
    When I hover over the "Settings" icon
    When I click on the link text Logout
    Then I get logged out from my account
    When Open web url <url>
    When Web app login using <provider>
    Then provider/dashboard page displays
    When I hover over the "Settings" icon
    When I click on the link text Logout
    Then I get logged out from my account

    Examples:
      | validName                             | url      | provider                            | userA                     | inactiveStatus |
      | Test_Auto_Other_Provider_For_Provider | loginUrl | otherProviderForProviderStatusCheck | providerLoginCrendentails | Inactive       |
# //-----------------Diagnosis-----------------//

  Scenario Outline: Verify the "Managing Provider" is not able to add "Diagnosis" and validation displays if any mandatory field is not populated and Verify the "Managing Provider" is able to add pre-defined "Diagnosis" for patient's medical record andVerify the "Managing provider" is able to search and delete the "Diagnosis"
    Given Open web url <url>
    When Web app login using <userA>
    Then providers/dashboard page displays
    When I click on the second index link Dashboard - All Patients
    When I populate data <patientName> in the "Search" field
    When I click on the link text <patientName>
    When I click on the link text Medical Record
    When I click on the link text Diagnosis
    When I drag chat container banner
    Then It redirects on the <patientName> screen
    Then Delete duplicate data <diagnosisType> from sub tab
    When I click on the button with text New Diagnosis
    Then It redirects on the New Diagnosis screen
    When I click on the second index button with text Create
    # Then validation message Please enter start date. appears
    Then validation message Please select proper diagnosis type appears
    Then validation message Please enter description. appears
    When I select date in start Date field
    When I fill <diagnosisType> data in diagnosis field
    When User fill <description> data in description field
    When I click on the second index button with text Create
    Then Success message Diagnosis Added Succesfully ! appears
    When I populate data <diagnosisType> in the "Search" field
    Then Diagnosis details should be visible in the list with <diagnosisType> and <description> and <status>
    When I populate data <specialCharactors> in the "Search" field
    Then No matching records found should be displayed
    When I populate data <diagnosisType> in the "Search" field
    When I click on the link text Active
    Then Record status should be displayed as Inactive
    When I click on the link text Inactive
    Then Record status should be displayed as Active
    When I click On "Delete" icon
# Then Deleted record should not be visible in the list

    Examples:
      | url      | userA                     | patientName       | diagnosisType | description                                   | status | image      | specialCharactors |
      | loginUrl | providerLoginCrendentails | Patient_Auto_Test | Skin rash     | Consult the doctor before using this vaccine. | Active | Picture(2) | !@#$%%$#@!        |

  Scenario Outline: Verify the "Managing Provider" is not able to add "Diagnosis"
    When I click on the button with text New Diagnosis
    Then It redirects on the New Diagnosis screen
    When I click on the second index button with text Create
    Then validation message Please select proper diagnosis type appears
    Then validation message Please enter description. appears
    When I select date in start Date field
    When I fill <diagnosisType> data in diagnosis field
    When User fill <description> data in description field
    When I click on the second index button with text Create
    Then Success message Diagnosis Added Succesfully ! appears
    When I populate data <diagnosisType> in the "Search" field
    Then Diagnosis details should be visible in the list with <diagnosisType> and <description> and <status>
    When I populate data <specialCharactors> in the "Search" field
    Then No matching records found should be displayed
    When I populate data <diagnosisType> in the "Search" field

    Examples:
      | url      | userA                     | patientName       | diagnosisType | description                                   | status | image      | specialCharactors |
      | loginUrl | providerLoginCrendentails | Patient_Auto_Test | Skin rash     | Consult the doctor before using this vaccine. | Active | Picture(2) | !@#$%%$#@!        |

  Scenario Outline: Verify the "Managing Provider" is able to update the added "Diagnosis" and Verify the "Managing provider" is able to delete the "Diagnosis"
    When I populate data <diagnosisType> in the "Search" field
    When I click on the "View or Update" option under the "Action" section
    When I fill <updatedDiagnosisType> data in diagnosis field
    When User fill <updatedDescription> data in description field
    When I click on the button with text Update
    Then Success message Diagnosis Updated Succesfully ! appears
    When I populate data <updatedDiagnosisType> in the "Search" field
    Then Diagnosis details should be visible in the list with <updatedDiagnosisType> and <updatedDescription> and <status>

    Examples:
      | diagnosisType | updatedDescription                                     | status | updatedImage | updatedDiagnosisType |
      | Skin rash     | Get a medical consultation before taking this vaccine. | Active | Picture(2)   | Twisted hair         |
# //-----------------Patient-medical-record-Medications-------------------------//

  Scenario Outline: Verify the "Managing Provider" is able to add "Medication" for patient's Medical Record and 	Verify the "Managing Provider" is not able to add "Medications" and validation displays if any mandatory field is not populated
    When I click on the link text Medications
    When I drag chat container banner
    Then Search and delete duplicate data <medicationName>
    When I click on the button with text New Medication
    Then It redirects on the New Medication screen
    When I click on the button with text Create
    Then validation message Please enter medication. appears
    Then validation message Please enter dose. appears
    When I fill <medicationName> data in medication field
    When I fill <currentDose> data in current dose field
    When I fill <measurement> data in measurement field
    When I fill <frequency> data in frequency field
    When I fill <interval> data in interval field
    When I fill <additionalInformation> data in additional information field
    When I select date in start Date field
    When I click on the button with text Create
    Then Success message Medication Added Succesfully ! appears
    When I populate data <specialCharactors> in the "Search" field
    Then No matching records found should be displayed
    When I populate data <medicationName> in the "Search" field
    Then Medication details should be visible in the list with <medicationName> and <currentDose> and <measurement> and <frequency> and <interval> and <status>
    When I click On "Delete" icon
    Then Success message Medication Deleted !! appears
    Then Deleted record should not be visible in the list

    Examples:
      | dashboard-ManagePatientsOption | patientName       | medicationName  | currentDose | measurement | frequency | additionalInformation                         | interval | status | specialCharactors |
      | Manage Patients | Patient_Auto_Test | Auto_Medication | 1 | Teaspoon | Twice | Consult the doctor before using this medicine | Day | Active | !@#$%%$#@! |

  Scenario Outline: Verify the "Managing Provider" is able to add "Medication" for patient's Medical Record
    When I hover on the "Dashboard-All Patient" tab
    When I click the <dashboard-ManagePatientsOption> option
    When I populate data <patientName> in the "Search" field
    When I click on the link text <patientName>
    When I click on the link text Medical Record
    When I click on the link text Medications
    Then Search and delete duplicate data <medicationName>
    When I click on the button with text New Medication
    Then It redirects on the New Medication screen
    When I fill <medicationName> data in medication field
    When I fill <currentDose> data in current dose field
    When I fill <measurement> data in measurement field
    When I fill <frequency> data in frequency field
    When I fill <interval> data in interval field
    When I fill <additionalInformation> data in additional information field
    When I select date in start Date field
    When I click on the button with text Create
    Then Success message Medication Added Succesfully ! appears
    When I populate data <medicationName> in the "Search" field
    Then Medication details should be visible in the list with <medicationName> and <currentDose> and <measurement> and <frequency> and <interval> and <status>

    Examples:
      | url      | userA                     | dashboard-ManagePatientsOption | patientName       | medicationName  | currentDose | measurement | frequency | additionalInformation                         | interval | status |
      | loginUrl | providerLoginCrendentails | Manage Patients | Patient_Auto_Test | Auto_Medication | 1 | Teaspoon | Twice | Consult the doctor before using this medicine | Day | Active |

  Scenario Outline: Verify the "Managing Provider" is able to "View and update" the added "Medications" and Verify the "Managing provider" is able to change the "Medications" status and Verify the "Managing provider" is able to search the "Medications" and 	Verify the "Managing provider" is able to delete the "Medications"
    When I populate data <medicationName> in the "Search" field
    When I click on the "View or Update" option under the "Action" section
    When I update the "Medication" but does not populate one of the mandatory field
    When I click on the button with text Update
    Then validation message Please enter medication. appears
    Then validation message Please enter dose. appears
    When I fill <updatedMedicationName> data in medication field
    When I fill <updateCurrentDose> data in current dose field
    When I fill <updatedMeasurement> data in measurement field
    When I fill <updatedFrequency> data in frequency field
    When I fill <updatedInterval> data in interval field
    When I fill <updatedAdditionalInformation> data in additional information field
    When I select date in start Date field
    When I select date in Last adjusted date field
    When I click on the button with text Update
    Then Success message Medication Updated Succesfully ! appears
    When I populate data <updatedMedicationName> in the "Search" field
    Then Medication details should be visible in the list with <updatedMedicationName> and <updateCurrentDose> and <updatedMeasurement> and <updatedFrequency> and <updatedInterval> and <status>
    When I populate data <updatedMedicationName> in the "Search" field
    When I click on the link text Active
    Then Are you sure you want to change status ? It will end the medication today. should be displayed
    When I click on the button with text Yes
    Then Verify, status should be changed and <updatedMedicationName> should not be visible in the list
    When User select the value from the dropdown Inactive
    Then Verify <updatedMedicationName> is displayed with <inactiveStatus>
    When I click on the link text Inactive
    Then Are you sure you want to change status ? It will start the medication with current date. should be displayed
    When I click on the button with text Yes
    Then Verify, status should be changed and <updatedMedicationName> should not be visible in the list
    When User select the value from the dropdown Active
    Then Verify <updatedMedicationName> is displayed with <status>
    When I populate data <updatedMedicationName> in the "Search" field

    Examples:
      | dashboard-ManagePatientsOption | patientName       | medicationName  | updatedMedicationName  | updateCurrentDose | updatedMeasurement | updatedFrequency | updatedInterval | updatedAdditionalInformation                                   | status | inactiveStatus |
      | Manage Patients | Patient_Auto_Test | Auto_Medication | Update_Auto_Medication | 3 | Milliliter | Three Times | Week | Updated info. => Consult the doctor before using this medicine | Active | Inactive |

  Scenario Outline: Verify that 'Add Respiratory Settings' button is visible when the Respiratory Settings table is empty and Verify that when user does not populate the mandatory fields on 'Add Respiratory Settings' form the validation displays with the fields andVerify that when user populates the mandatory fields on 'Add Respiratory Settings' form with valid data then "Respiratory Settings" gets created and 	Verify that search bar is displaying to search for specific records when user populates the search field then the result displays according to the keyword and Verify that clicking on 'Delete' on a record prompts a confirmation dialog, and upon confirmation, the record is deleted from the table
    When I click on the second index link Dashboard - All Patients
    When I populate data <patientName> in the "Search" field
    When I click on the link text <patientName>
    When Hover over "Orders" tab
    When I click on the link text Respiratory
    Then respiratorySettings page displays
    When I drag chat container banner
    Then Search and delete duplicate data <methodOption>
    When I click on the button with text History Chart
    Then No flow rate data available. should be displayed
    When User click on the "Cross" button
    When I click on the second index button with text Add Respiratory Settings
    Then It redirects on the Respiratory Settings screen
    When I click on the button with text Add Respiratory Settings
    Then validation message Please select a respiratory method. appears
    When I select the option <methodOption> from method dropdown
    When I click on the button with text Add Respiratory Settings
    Then Success message Respiratory Settings Added Successfully! appears
    When I populate data <methodOption> in the "Search" field
    Then Respiratory "Bottle method" details should be visible in the list with <methodOption> and <flowRate> and <oxygen> and <managingProvider>
    When I click on the button with text End Respiratory Settings
    Then Verify that end Respiratory settings button is working as expected
    Then Respiratory End date is successfully displaying in table
    When I click On "Delete" icon
    Then Deleted record should not be visible in the list

    Examples:
      | methodOption | flowRate | oxygen | LessNumber | HigherNumber | managingProvider       | patientName       |
      | Room Air | - |  | 0 | 5000 | managing_auto_provider | Patient_Auto_Test |

  Scenario Outline: Create new respiratiory settings with method "Bottle"
    When I click on the second index button with text Add Respiratory Settings
    Then It redirects on the Respiratory Settings screen
    When I click on the button with text Add Respiratory Settings
    Then validation message Please select a respiratory method. appears
    When I select the option <methodOption> from method dropdown
    When I click on the button with text Add Respiratory Settings
    Then validation message Please enter the flow rate. appears
    Then validation message Please enter the oxygen value. appears
    When I fill <LessNumber> data in flow rate field
    Then validation message Flow rate must be at least 1. appears
    When I fill <LessNumber> data in oxygen field
    Then validation message Oxygen must be at least 21. appears
    When I fill <HigherNumber> data in flow rate field
    Then validation message Flow rate cannot exceed 1000. appears
    When I fill <HigherNumber> data in oxygen field
    Then validation message Oxygen cannot exceed 100. appears
    When I fill <flowRate> data in flow rate field
    When I fill <oxygen> data in oxygen field
    When I click on the button with text Add Respiratory Settings
    Then Success message Respiratory Settings Added Successfully! appears
    When I populate data <methodOption> in the "Search" field
    Then Respiratory "Bottle method" details should be visible in the list with <methodOption> and <flowRate> and <oxygen> and <managingProvider>

    Examples:
      | methodOption | flowRate | oxygen | LessNumber | HigherNumber | managingProvider       | patientName       |
      | Bottle | 5 | 90 | 0 | 5000 | managing_auto_provider | Patient_Auto_Test |

  Scenario Outline: Verify that clicking 'Update Respiratory Settings' opens a form pre-filled with the most recent settings for editing.
    When I populate data <methodOption> in the "Search" field
    Then Respiratory "Bottle method" details should be visible in the list with <methodOption> and <flowRate> and <oxygen> and <managingProvider>
    When I click on the second index button with text Update Respiratory Settings
    Then It redirects on the Respiratory Settings screen
    When I fill <updatedFlow> data in flow rate field
    When I fill <updatedOxygen> data in oxygen field
    When I click on the button with text Update Respiratory Settings
    Then Success message Respiratory Settings Added Successfully! appears
    Then Verify that "End date" is visible in the list

    Examples:
      | methodOption | flowRate | oxygen | managingProvider       | updatedFlow | updatedOxygen |
      | Bottle | 5 | 90 | managing_auto_provider | 10 | 80 |

  Scenario Outline: Verify that user is able to edit the active record by clicking on 'View/Update' option
    When I populate data <methodOption> in the "Search" field
    When I click on the "View or Update" option under the "Action" section
    When I select the option <updatedMethodOption> from method dropdown
    When I fill <updatedFlow> data in flow rate field
    When I fill <additionalSettings> data in additional settings field
    When I select date in the "End date" field
    When I click on the button with text Update
    Then Success message Respiratory Settings Updated Successfully! appears
    When I populate data <updatedMethodOption> in the "Search" field
    Then Respiratory "Room Air Concentrator method" details should be visible in the list with <updatedMethodOption> and <updatedFlow> and <additionalSettings> and <managingProvider>
    When I populate data <updatedMethodOption> in the "Search" field

    Examples:
      | methodOption | updatedMethodOption   | updatedFlow | additionalSettings    | managingProvider       |
      | Bottle | Room Air Concentrator | 10 | Auto test respiratory | managing_auto_provider |

  Scenario Outline: Verify the "Managing Provider" is not able to add "Media" and validation displays if any mandatory field is not populated and Verify the "Managing Provider" is able to add "Media" for patient's medical record and 	Verify the "Managing provider" is able to search the "Media" and 	Verify the "Managing Provider" is able to delete the added "Media"
    When I hover on the "Dashboard-All Patient" tab
    When I click the <dashboard-ManagePatientsOption> option
    When I populate data <patientName> in the "Search" field
    When I click on the link text <patientName>
    When I click on the link text Medical Record
    When I click on the link text Media
    Then media page displays
    Then Table is displaying on screen
    Then Search and delete duplicate data <image>
    When I click on the button with text New Media
    Then It redirects on the New Media screen
    When I click on the button with text Create
    Then validation message The files field is required when single file is not present. appears
    Then validation message The single file field is required when files is not present. appears
    Then validation message The date field is required. appears
    When User should be able to upload file <image>
    When I select date in start Date field
    When I fill <description> data in description field
    When I click on the button with text Create
    Then Success message Media Added Succesfully ! appears
    When I populate data <image> in the "Search" field
    Then File details should be visible with <image> and <fileType> and <description>
    When I populate data <specialCharactors> in the "Search" field
    Then No matching records found should be displayed
    When I populate data <image> in the "Search" field
    When I click on added <image> from the list
    Then The file should get displayed
    When I populate data <image> in the "Search" field
    When I click on the "View or Update" option under the "Action" section
    When I fill <updatedDescription> data in edit media description field
    When I click on the button with text Update
    Then Success message Media Updated Succesfully ! appears
    Then File details should be visible with <image> and <fileType> and <updatedDescription>
    When I populate data <image> in the "Search" field
    When I click On "Delete" icon
    Then Success message Media Deleted !! appears
    Then Deleted record should not be visible in the list

    Examples:
      | image      | fileType | description           | specialCharactors | updatedDescription            | patientName       | dashboard-ManagePatientsOption |
      | Picture(2) | jpg      | Auto Test description | !@#$%%$#@!        | Updated Auto Test description | Patient_Auto_Test | Manage Patients                |

  Scenario Outline: Verify the "Managing Provider" is able to add "Media" for patient's medical record
    When I click on the link text Medical Record
    When I click on the link text Media
    Then Search and delete duplicate data <image>
    When I click on the button with text New Media
    Then It redirects on the New Media screen
    When User should be able to upload file <image>
    When I select date in start Date field
    When I fill <description> data in description field
    When I click on the button with text Create
    Then Success message Media Added Succesfully ! appears
    When I populate data <image> in the "Search" field
    Then File details should be visible with <image> and <fileType> and <description>

    Examples:
      | image      | fileType | description           |
      | Picture(2) | jpg      | Auto Test description |

  Scenario Outline: Verify the "Managing Provider" is able to add folder for "Media" for patient's medical record
    Then Search and delete duplicate data <folderFileType>
    When I click on the button with text New Media
    Then It redirects on the New Media screen
    When User should be able to upload folder <folder>
    When I select date in start Date field
    When I fill <description> data in description field
    When I click on the button with text Create
    Then Success message Media Added Succesfully ! appears
    When I populate data <folderFileType> in the "Search" field
    Then File details should be visible with <folderFileType> and <folderFileType> and <description>
    When I click On "Delete" icon
    Then Success message Media Deleted !! appears
    Then Deleted record should not be visible in the list

    Examples:
      | description           | folder | folderFileType |
      | Discription auto test | Images | Folder         |

  Scenario Outline: Verify the "Managing Provider" is able to delete the added "Vaccination" and Verify the "Managing Provider" is not able to add "Vaccination" and validation displays if any mandatory field is not populated and 	Verify the "Managing Provider" is able to add "Pre defined Vaccination" for patient's medical record
    When I click on the link text Medical Record
    When I click on the link text Vaccinations
    When I click on the button with text New Vaccination
    Then It redirects on the New Vaccination screen
    When I click on the button with text Create
    Then validation message Please select vaccine appears
    When I fill <comments> data in lot number field
    When I click on the button with text Create
    Then validation message Please enter only digits. appears
    When I click on the button with text Close
    When I click on the button with text New Vaccination
    Then It redirects on the New Vaccination screen
    When I fill <vaccineName> data in vaccine field
    When I select date in start Date field
    When I fill <lotNumber> data in lot number field
    When I fill <comments> data in comments field
    When I click on the button with text Create
    Then Success message Vaccinations Added Succesfully ! appears
    Then Vaccine details should be visible in the list with vaccine name <createdVaccineName> and brand <brandName> and lot number <lotNumber> and comments <comments>
    When I click On "Delete" icon
    Then Deleted record should not be visible in the list
    When I click on the button with text New Vaccination
    Then It redirects on the New Vaccination screen
    When I click on the button with text Create
    Then validation message Please select vaccine appears
    When I fill <comments> data in lot number field
    When I click on the button with text Create
    Then validation message Please enter only digits. appears
    When I click on the button with text Close
    When I click on the button with text New Vaccination
    Then It redirects on the New Vaccination screen
    When I fill <vaccineName> data in vaccine field
    When I select date in start Date field
    When I fill <lotNumber> data in lot number field
    When I fill <comments> data in comments field
    When I click on the button with text Create
    Then Success message Vaccinations Added Succesfully ! appears
    Then Vaccine details should be visible in the list with vaccine name <createdVaccineName> and brand <brandName> and lot number <lotNumber> and comments <comments>

    Examples:
      | vaccineName                    | lotNumber | comments                                      | createdVaccineName | brandName  |
      | Auto_Test_Vaccine (Healthcare) | 325698 | Consult the doctor before using this vaccine. | Auto_Test_Vaccine | Healthcare |

  Scenario Outline: Verify the "Managing Provider" is not able to create "New Hospital Records" when mandatory fields are not populated and Verify the "Managing Provider" is able to create "New Hospital Records" when all the fields are populated with valid data
    When I click on the link text Medical Record
    When User hover on the Documents tab
    When I click on the link text Hospital Records
    Then Search and delete duplicate data <hospital>
    When I click on the button with text New Hospital Records
    Then It redirects on the New Hospital Records screen
    When I click on the button with text Create
    Then validation message This field is required. appears
    Then validation message Please select Hospital Note appears
    When I fill <hospital> data in hospital or office field
    When I select date in start Date field
    When User select option <hospitalNote> in hospital note field
    When User should be able to upload file <image>
    When User fill <description> data in description field
    When I click on the button with text Create
    Then Success message Hospital Records Added Succesfully ! appears
# When I populate data <hospital> in the "Search" field
    Then Hospital record should be visible in the list with <hospital> and <hospitalNote> and <description>
    When I click On "Delete" icon
    Then Deleted record should not be visible in the list

    Examples:
      | hospital           | image      | description           | hospitalNote       |
      | Auto_test_hospital | Picture(2) | Auto Test description | Auto_Hospital_Note |

  Scenario Outline: Verify the "Managing Provider" is able to create "New Hospital Records" when all the fields are populated with valid data
    When I click on the button with text New Hospital Records
    Then It redirects on the New Hospital Records screen
    When I fill <hospital> data in hospital or office field
    When I select date in start Date field
    When User select option <hospitalNote> in hospital note field
    When User should be able to upload file <image>
    When User fill <description> data in description field
    When I click on the button with text Create
    Then Success message Hospital Records Added Succesfully ! appears
    Then Hospital record should be visible in the list with <hospital> and <hospitalNote> and <description>

    Examples:
      | hospital           | image      | description           | hospitalNote       |
      | Auto_test_hospital | Picture(2) | Auto Test description | Auto_Hospital_Note |

  Scenario Outline: Verify the "Managing Provider" is able to update "Hospital Records" with valid data and Verify the "Managing Provider" is able to delete "Hospital Records"
    When I click on the "View or Update" option under the "Action" section
    When I fill <UpdatedHospital> data in hospital or office field
    When I select date in start Date field
    When User select option <hospitalNote> in hospital note field
    When User should be able to upload file <updatedImage>
    When User fill <updatedDescription> data in description field
    When I click on the button with text Update
    Then Success message Hospital Record Updated Succesfully ! appears
    Then Hospital record should be visible in the list with <UpdatedHospital> and <hospitalNote> and <updatedDescription>

    Examples:
      | UpdatedHospital | updatedImage | updatedDescription            | hospitalNote       |
      | Default         | Picture(1)   | Updated Auto Test description | Auto_Hospital_Note |

  Scenario Outline: Verify the "Managing Provider" is not able to create "New XRAY Result" when the mandatory fields are not populated and Verify the "Managing Provider" is able to Create "New XRAY Result" when only the mandatory fields are populated with valid data and Verify the "Managing Provider" is able to delete "XRAY Result"
    When I click on the link text Medical Record
    When I hover over the "Results" tab
    Then I should see the following options in the dropdown
      | Laboratory |
      | Imaging    |
      | Other      |
    When Hover over link Imaging
    Then Imaging options should be visible in the dropdown under dropdown option
      | XRAY       |
      | CT         |
      | MRI        |
      | Ultrasound |
      | Other      |
    When I click on the link text XRAY
    When I drag chat container banner
    Then result/imaging_xray page displays
    Then Table is displaying on screen
    Then Search and delete duplicate data <type>
    When I click on the button with text New XRAY Result
    Then It redirects on the New XRAY screen
    When I click on the button with text Create
    Then validation message This field is required. appears
    Then validation message Please select at least one media file. appears
    When I select date in start Date field
    When I fill <type> data in type field
    When I fill data <image> in search box under patient medical records
    When I click on the checkbox
    When I click on the button with text Create
    Then Success message XRAY Result Added Succesfully ! appears
    When I populate data <type> in the "Search" field
    Then <imagingOption> result should be visible in the list with mandatory fields <type>
    When I click On "Delete" icon
    Then Deleted record should not be visible in the list

    Examples:
      | imagingOption | type          | image      |
      | XRAY          | Digital X-ray | Picture(2) |

  Scenario Outline: Verify the "Managing Provider" is able to Create "New XRAY Result" when all the fields are populated with valid data and Verify this created x-ray in mobile caregiver app
    Then Search and delete duplicate data <type>
    When I click on the button with text New XRAY Result
    Then It redirects on the New XRAY screen
    When I select date in start Date field
    When I fill <type> data in type field
    When User should be able to upload file <uploadImage>
    When I fill data <image> in search box under patient medical records
    When I click on the checkbox
    When User fill <result> data in description field
    When I click on the button with text Create
    Then Success message XRAY Result Added Succesfully ! appears
    When I populate data <type> in the "Search" field
    Then <imagingOption> result should be visible in the list with all fields <type> and <result>

    Examples:
      | imagingOption | type          | image      | uploadImage | result                                                  |
      | XRAY          | Digital X-ray | Picture(2) | Picture(1)  | No evidence of disease or injury, Everything is normal. |

  Scenario Outline: Verify the "Managing Provider" is not able to Create "New CT Result" when the mandatory fields are not populated and	Verify the "Managing Provider" is able to Create "New CT Result" when only the mandatory fields are populated with valid data and Verify the "Managing Provider" is able to search "CT Result" andVerify the "Managing Provider" is able to delete "CT Result"
    When I click on the link text Medical Record
    When I hover over the "Results" tab
    Then I should see the following options in the dropdown
      | Laboratory |
      | Imaging    |
      | Other      |
    When Hover over link Imaging
    Then Imaging options should be visible in the dropdown under dropdown option
      | XRAY       |
      | CT         |
      | MRI        |
      | Ultrasound |
      | Other      |
    When I click on the link text CT
    Then Search and delete duplicate data <type>
    When I click on the button with text New CT Result
    Then It redirects on the New CT screen
    When I click on the button with text Create
    Then validation message This field is required. appears
    Then validation message Please select at least one media file. appears
    When I select date in start Date field
    When I fill <type> data in type field
    When I fill data <image> in search box under patient medical records
    When I click on the checkbox
    When I click on the button with text Create
    Then Success message CT Result Added Succesfully ! appears
    When I populate data <type> in the "Search" field
    Then <imagingOption> result should be visible in the list with mandatory fields <type>
    When I click On "Delete" icon
    Then Deleted record should not be visible in the list

    Examples:
      | imagingOption | type       | image      |
      | CT            | Digital CT | Picture(2) |

  Scenario Outline: Verify the "Managing Provider" is able to Create "New CT Result" when all the fields are populated with valid data
    Then Search and delete duplicate data <type>
    When I click on the button with text New CT Result
    Then It redirects on the New CT screen
    When I click on the button with text Create
    When I select date in start Date field
    When I fill <type> data in type field
    When User should be able to upload file <uploadImage>
    When I fill data <image> in search box under patient medical records
    When I click on the checkbox
    When User fill <result> data in description field
    When I click on the button with text Create
    Then Success message CT Result Added Succesfully ! appears
    When I populate data <type> in the "Search" field
    Then <imagingOption> result should be visible in the list with all fields <type> and <result>

    Examples:
      | imagingOption | type       | image      | uploadImage | result                                                  |
      | CT            | Digital CT | Picture(2) | Picture(1)  | No evidence of disease or injury, Everything is normal. |

  Scenario Outline: Verify the "Managing Provider" is not able to create "New MRI Result" when the mandatory fields are not populated and Verify the "Managing Provider" is able to create "New MRI Result" when only the mandatory fields are populated with valid data and Verify the "Managing Provider" is able to search "MRI Result" and Verify the "Managing Provider" is able to delete "MRI Result"
    When I click on the link text Medical Record
    When I hover over the "Results" tab
    Then I should see the following options in the dropdown
      | Laboratory |
      | Imaging    |
      | Other      |
    When Hover over link Imaging
    Then Imaging options should be visible in the dropdown under dropdown option
      | XRAY       |
      | CT         |
      | MRI        |
      | Ultrasound |
      | Other      |
    When I click on the link text MRI
    Then Search and delete duplicate data <type>
    When I click on the button with text New MRI Result
    Then It redirects on the New MRI screen
    When I click on the button with text Create
    Then validation message This field is required. appears
    Then validation message Please select at least one media file. appears
    When I select date in start Date field
    When I fill <type> data in type field
    When I fill data <image> in search box under patient medical records
    When I click on the checkbox
    When I click on the button with text Create
    Then Success message MRI Result Added Succesfully ! appears
    When I populate data <type> in the "Search" field
    Then <imagingOption> result should be visible in the list with mandatory fields <type>
    When I click On "Delete" icon
    Then Deleted record should not be visible in the list

    Examples:
      | imagingOption | type        | image      |
      | MRI           | Digital MRI | Picture(2) |

  Scenario Outline: Verify the "Managing Provider" is able to Create "New MRI Result" when all the fields are populated with valid data
    Then Search and delete duplicate data <type>
    When I click on the button with text New MRI Result
    Then It redirects on the New MRI screen
    When I select date in start Date field
    When I fill <type> data in type field
    When User should be able to upload file <uploadImage>
    When I fill data <image> in search box under patient medical records
    When I click on the checkbox
    When User fill <result> data in description field
    When I click on the button with text Create
    Then Success message CT Result Added Succesfully ! appears
    When I populate data <type> in the "Search" field
    Then <imagingOption> result should be visible in the list with all fields <type> and <result>

    Examples:
      | imagingOption | type        | image      | uploadImage | result                                                  |
      | MRI           | Digital MRI | Picture(2) | Picture(1)  | No evidence of disease or injury, Everything is normal. |

  Scenario Outline: Verify the "Managing Provider" is not able to Create "New Ultrasound Result" when the mandatory fields are not populated and Verify the "Managing Provider" is able to Create "New Ultrasound Result" when only the mandatory fields are populated with valid data and Verify the "Managing Provider" is able to search "Ultrasound Result" and Verify the "Managing Provider" is able to delete "Ultrasound Result"
    When I click on the link text Medical Record
    When I hover over the "Results" tab
    Then I should see the following options in the dropdown
      | Laboratory |
      | Imaging    |
      | Other      |
    When Hover over link Imaging
    Then Imaging options should be visible in the dropdown under dropdown option
      | XRAY       |
      | CT         |
      | MRI        |
      | Ultrasound |
      | Other      |
    When I click on the link text Ultrasound
    Then Search and delete duplicate data <type>
    When I click on the button with text New Ultrasound Result
    Then It redirects on the New Ultrasound screen
    When I click on the button with text Create
    Then validation message This field is required. appears
    Then validation message Please select at least one media file. appears
    When I select date in start Date field
    When I fill <type> data in type field
    When I fill data <image> in search box under patient medical records
    When I click on the checkbox
    When I click on the button with text Create
    Then Success message Ultrasound Result Added Succesfully ! appears
    When I populate data <type> in the "Search" field
    Then <imagingOption> result should be visible in the list with mandatory fields <type>
    When I click On "Delete" icon
    Then Deleted record should not be visible in the list

    Examples:
      | imagingOption | type               | image      |
      | Ultrasound    | Digital Ultrasound | Picture(2) |

  Scenario Outline: Verify the "Managing Provider" is able to Create "New Ultrasound Result" when all the fields are populated with valid data
    Then Search and delete duplicate data <type>
    When I click on the button with text New Ultrasound Result
    Then It redirects on the New Ultrasound screen
    When I select date in start Date field
    When I fill <type> data in type field
    When User should be able to upload file <uploadImage>
    When I fill data <image> in search box under patient medical records
    When I click on the checkbox
    When User fill <result> data in description field
    When I click on the button with text Create
    Then Success message Ultrasound Result Added Succesfully ! appears
    When I populate data <type> in the "Search" field
    Then <imagingOption> result should be visible in the list with all fields <type> and <result>

    Examples:
      | imagingOption | type               | image      | uploadImage | result                                                  |
      | Ultrasound    | Digital Ultrasound | Picture(2) | Picture(1)  | No evidence of disease or injury, Everything is normal. |

  Scenario Outline: Verify the "Managing Provider" is not able to Create "New Imaging Other Result" when the mandatory fields are not populated and Verify the "Managing Provider" is able to Create "New Imaging Other Result" when only the mandatory fields are populated with valid data and Verify the "Managing Provider" is able to search "Imaging Other Result" and Verify the "Managing Provider" is able to delete "Imaging Other Result"
    When I click on the link text Medical Record
    When I hover over the "Results" tab
    Then I should see the following options in the dropdown
      | Laboratory |
      | Imaging    |
      | Other      |
    When Hover over link Imaging
    Then Imaging options should be visible in the dropdown under dropdown option
      | XRAY       |
      | CT         |
      | MRI        |
      | Ultrasound |
      | Other      |
    When I click on the imaging>>other button
    Then Search and delete duplicate data <type>
    When I click on the button with text New Imaging Other Result
    Then It redirects on the New Imaging Other screen
    When I click on the button with text Create
    Then validation message This field is required. appears
    When I select date in start Date field
    When I fill <type> data in type field
    When I click on the button with text Create
    Then Success message Other Result Added Succesfully ! appears
    When I populate data <type> in the "Search" field
    Then Result of Imaging>>other should be visible in the list with mandatory fields <type>
    When I click On "Delete" icon
    Then Deleted record should not be visible in the list

    Examples:
      | type         |
      | Other result |

  Scenario Outline: Verify the "Managing Provider" is able to Create "New Imaging Other Result" when all the fields are populated with valid data
    Then Search and delete duplicate data <type>
    When I click on the button with text New Imaging Other Result
    Then It redirects on the New Imaging Other screen
    When I select date in start Date field
    When I fill <type> data in type field
    When User should be able to upload file <uploadImage>
    When User fill <result> data in description field
    When I click on the button with text Create
    Then Success message Other Result Added Succesfully ! appears
    When I populate data <type> in the "Search" field
    Then Result of Imaging>>other should be visible in the list with all fields <type> and <result>

    Examples:
      | type         | uploadImage | result                                                  |
      | Other result | Picture(1)  | No evidence of disease or injury, Everything is normal. |

  Scenario Outline: Verify the "Managing Provider" is able to Create "New CBC Result" when all the fields are populated with valid data also verify delete record functionality
    When I click on the second index link Dashboard - All Patients
    When I populate data <patientName> in the "Search" field
    When I click on the link text <patientName>
    Then patient/dashboard page displays
    When I click on the link text Medical Record
    Then patient/diagnosis page displays
    When I hover over the "Results" tab
    Then I should see the following options in the dropdown
      | Laboratory |
      | Imaging    |
      | Other      |
    When Hover over link Laboratory
    Then I should see the following options in the dropdown under dropdown option
      | Laboratory CBC                  |
      | Laboratory Chemistry            |
      | Laboratory Liver Function Tests |
      | Laboratory Lipid Tests          |
      | Laboratory Endocrine            |
      | Laboratory Coagulation          |
      | Laboratory Others               |
    When I click on the link text Laboratory CBC
    Then result/laboratory_cbc page displays
    When I click on the button with text New CBC Result
    Then It redirects on the New CBC screen
    When I clear date filed of report
    When I click on the button with text Create
    Then validation message Please enter date & time appears
    When I click on the button with text Close
    When I hover over the "Results" tab
    When Hover over link Laboratory
    When I click on the link text Laboratory CBC
    When I click on the button with text New CBC Result
    Then It redirects on the New CBC screen
    When User should be able to upload file <image>
    When I fill <wbc> value in WBC field
    When I fill <hgb> value in Hgb field
    When I fill <hct> value in Hct field
    When I fill <plts> value in Plts field
    When I fill <retic> value in retic field
    When I fill <comment> data in comments field
    When I click on the button with text Create
    Then Success message CBC Result Added Succesfully ! appears
    Then Added data <wbc> is successfully displaying in table
    Then Added data <hgb> is successfully displaying in table
    Then Added data <hct> is successfully displaying in table
    Then Added data <plts> is successfully displaying in table
    Then Added data <retic> is successfully displaying in table
    Then Added data <comment> is successfully displaying in table
    When I click On "Delete" icon
    Then Results are not displayed after delete

    Examples:
      | patientName       | image      | comment             | wbc | hgb | hct | plts | retic |
      | Patient_Auto_Test | Picture(2) | this is your report | 14 | 8 | 10 | 210 | 11 |

  Scenario Outline: Verify the "Managing Provider" is able to Create "New CBC Result" when all the fields are populated with valid data
    When I click on the second index link Dashboard - All Patients
    When I populate data <patientName> in the "Search" field
    When I click on the link text <patientName>
    Then patient/dashboard page displays
    When I click on the link text Medical Record
    Then patient/diagnosis page displays
    When I hover over the "Results" tab
    Then I should see the following options in the dropdown
      | Laboratory |
      | Imaging    |
      | Other      |
    When Hover over link Laboratory
    Then I should see the following options in the dropdown under dropdown option
      | Laboratory CBC                  |
      | Laboratory Chemistry            |
      | Laboratory Liver Function Tests |
      | Laboratory Lipid Tests          |
      | Laboratory Endocrine            |
      | Laboratory Coagulation          |
      | Laboratory Others               |
    When I click on the link text Laboratory CBC
    Then result/laboratory_cbc page displays
    When I click on the button with text New CBC Result
    Then It redirects on the New CBC screen
    When User should be able to upload file <image>
    When I fill <wbc> value in WBC field
    When I fill <hgb> value in Hgb field
    When I fill <hct> value in Hct field
    When I fill <plts> value in Plts field
    When I fill <retic> value in retic field
    When I fill <comment> data in comments field
    When I click on the button with text Create
    Then Success message CBC Result Added Succesfully ! appears
    Then Added data <wbc> is successfully displaying in table
    Then Added data <hgb> is successfully displaying in table
    Then Added data <hct> is successfully displaying in table
    Then Added data <plts> is successfully displaying in table
    Then Added data <retic> is successfully displaying in table
    Then Added data <comment> is successfully displaying in table

    Examples:
      | patientName       | image      | comment             | wbc | hgb | hct | plts | retic |
      | Patient_Auto_Test | Picture(2) | this is your report | 14 | 8 | 10 | 210 | 11 |

  Scenario Outline: Verify the "Managing Provider" is able to update "CBC Results" with valid and invalid data also verify search functionality
    When I hover over the "Results" tab
    When Hover over link Laboratory
    When I click on the link text Laboratory CBC
    When I click On "Edit" icon
    When I clear date filed of report
    When I click on the button with text Update
    Then validation message Please enter date & time appears
    When I hover over the "Results" tab
    When Hover over link Laboratory
    When I click on the link text Laboratory CBC
    When I click On "Edit" icon
    When I fill <wbc> value in WBC field
    When I fill <hgb> value in Hgb field
    When I fill <hct> value in Hct field
    When I fill <plts> value in Plts field
    When I fill <retic> value in retic field
    When I fill <comment> data in comments field
    When I click on the button with text Update
    Then Success message CBC Result Updated Succesfully ! appears
    Then Added data <wbc> is successfully displaying in table
    Then Added data <hgb> is successfully displaying in table
    Then Added data <hct> is successfully displaying in table
    Then Added data <plts> is successfully displaying in table
    Then Added data <retic> is successfully displaying in table
    Then Added data <comment> is successfully displaying in table
    When I populate data <comment> in the "Search" field

    Examples:
      | patientName       | image      | comment             | wbc | hgb | hct | plts | retic |
      | Patient_Auto_Test | Picture(2) | this is your report | 12 | 7 | 9 | 205 | 10 |

  Scenario Outline: Verify the "Managing Provider" is able to Create "New Chemistry Result" using valid and invalid data also verify the validations and delte functionality
    When I hover over the "Results" tab
    When Hover over link Laboratory
    When I click on the link text Laboratory Chemistry
    Then result/laboratory_chemistry page displays
    Then Button text New Chemistry is displayed on screen
    When I click on the button with text New Chemistry
    When I clear date filed of report
    When I click on the button with text Create
    Then validation message Date is required appears
    When I click on the button with text Close
    When I hover over the "Results" tab
    When Hover over link Laboratory
    When I click on the link text Laboratory Chemistry
    When I click on the button with text New Chemistry
    When I fill value in Na <Na> field
    When I fill value in K <K> field
    When I fill value in Cl <Cl> field
    When I fill value in Co2 <Co2> field
    When I fill value in BUN <BUN> field
    When I fill value in Cr <Cr> field
    When I fill value in Glu <Glu> field
    When I fill value in Ca <Ca> field
    When I fill value in Phos <Phos> field
    When I fill value in Mg <Mg> field
    When User should be able to upload file <uploadImage>
    When I fill <comment> data in comments field
    When I click on the button with text Create
    Then Success message Chemistry Result Added Succesfully ! appears
    Then Added data <Na> is successfully displaying in table
    Then Added data <K> is successfully displaying in table
    Then Added data <Cl> is successfully displaying in table
    Then Added data <Co2> is successfully displaying in table
    Then Added data <BUN> is successfully displaying in table
    Then Added data <Cr> is successfully displaying in table
    Then Added data <Phos> is successfully displaying in table
    Then Added data <Mg> is successfully displaying in table
    When I click On "Delete" icon
    Then Results are not displayed after delete

    Examples:
      | Na  | K   | Cl  | Co2 | BUN | Cr  | Glu | Ca  | Phos | Mg  | uploadImage | comment                        |
      | 139 | 4.2 | 113 | 24 | 15 | 0.9 | 92 | 9.3 | 3.5 | 2.0 | Picture(1) | This is your checmistry report |

  Scenario Outline: Verify the "Managing Provider" is able to Create "New Chemistry Result" using valid data
    When I click on the button with text New Chemistry
    When I fill value in Na <Na> field
    When I fill value in K <K> field
    When I fill value in Cl <Cl> field
    When I fill value in Co2 <Co2> field
    When I fill value in BUN <BUN> field
    When I fill value in Cr <Cr> field
    When I fill value in Glu <Glu> field
    When I fill value in Ca <Ca> field
    When I fill value in Phos <Phos> field
    When I fill value in Mg <Mg> field
    When User should be able to upload file <uploadImage>
    When I fill <comment> data in comments field
    When I click on the button with text Create
    Then Success message Chemistry Result Added Succesfully ! appears
    Then Added data <Na> is successfully displaying in table
    Then Added data <K> is successfully displaying in table
    Then Added data <Cl> is successfully displaying in table
    Then Added data <Co2> is successfully displaying in table
    Then Added data <BUN> is successfully displaying in table
    Then Added data <Cr> is successfully displaying in table
    Then Added data <Phos> is successfully displaying in table
    Then Added data <Mg> is successfully displaying in table

    Examples:
      | Na  | K   | Cl  | Co2 | BUN | Cr  | Glu | Ca  | Phos | Mg  | uploadImage | comment                        |
      | 139 | 4.2 | 113 | 24 | 15 | 0.9 | 92 | 9.3 | 3.5 | 2.0 | Picture(1) | This is your checmistry report |

  Scenario Outline: Verify the "Managing Provider" is able to update "Chemistry Results" with valid and invalid data , also verify search and delete functionality
    When I hover over the "Results" tab
    When Hover over link Laboratory
    When I click on the link text Laboratory Chemistry
    When I click On "Edit" icon
    When I clear date filed of report
    When I click on the button with text Update
    Then validation message Please select date and time appears
    When I click on the link text Back
    When I hover over the "Results" tab
    When Hover over link Laboratory
    When I click on the link text Laboratory Chemistry
    When I click On "Edit" icon
    When I fill value in Na <Na> field
    When I fill value in K <K> field
    When I fill value in Cl <Cl> field
    When I fill value in Co2 <Co2> field
    When I fill value in BUN <BUN> field
    When I fill value in Cr <Cr> field
    When I fill value in Glu <Glu> field
    When I fill value in Ca <Ca> field
    When I fill value in Phos <Phos> field
    When I fill value in Mg <Mg> field
    When I click on the button with text Update
    Then Success message Chemistry Result Updated Succesfully ! appears
    Then Added data <Na> is successfully displaying in table
    Then Added data <K> is successfully displaying in table
    Then Added data <Cl> is successfully displaying in table
    Then Added data <Co2> is successfully displaying in table
    Then Added data <BUN> is successfully displaying in table
    Then Added data <Cr> is successfully displaying in table
    Then Added data <Phos> is successfully displaying in table
    Then Added data <Mg> is successfully displaying in table
    When I populate data <Cl> in the "Search" field
    Then Added data <Cl> is successfully displaying in table

    Examples:
      | Na  | K   | Cl  | Co2 | BUN | Cr  | Glu | Ca  | Phos | Mg  |
      | 140 | 5.2 | 115 | 26 | 20 | 0.8 | 95 | 9.4 | 3.6 | 3.0 |

  Scenario Outline: Verify the "Managing Provider" is able to Create "New Liver Function Tests" using valid and invalid data also verify the validations and verify delete functionality
    When I hover over the "Results" tab
    When Hover over link Laboratory
    When I click on the link text Laboratory Liver Function Tests
    When I click on the button with text New Liver Function Tests
    When I clear date filed of report
    When I click on the button with text Create
    Then validation message Date is required appears
    When I click on the button with text Close
    When I hover over the "Results" tab
    When Hover over link Laboratory
    When I click on the link text Laboratory Liver Function Tests
    When I click on the button with text New Liver Function Tests
    When I fill value in TBili <TBili> field
    When I fill value in TBiliC <invalidTBiliC> field
    When I fill value in DBili <invalidDBili> field
    When I fill value in AlkP <AlkP> field
    When I fill value in Tprot <invalidTprot> field
    When I fill value in Alb <invalidAlb> field
    When I fill value in Ast <invalidAst> field
    When I click on the button with text Create
    Then validation message Please enter a value less than or equal to 15. appears
    Then validation message Please enter a value less than or equal to 5. appears
    Then validation message Please enter a value less than or equal to 9. appears
    Then validation message Please enter a value less than or equal to 7. appears
    Then validation message Please enter a value less than or equal to 60. appears
    When I fill value in Alt <invalidAlt> field
    When I fill value in GGT <GGT> field
    When I click on the button with text Create
    Then validation message Please enter a value less than or equal to 60. appears
    When I fill value in TBiliC <validTBiliC> field
    When I fill value in DBili <validDBili> field
    When I fill value in Tprot <validTprot> field
    When I fill value in Alb <validAlb> field
    When I fill value in Ast <validAst> field
    When I fill value in Alt <validAlt> field
    When User should be able to upload file <uploadImage>
    When I fill <comment> data in comments field
    When I click on the button with text Create
    Then Success message Liver Function Tests Result Added Succesfully ! appears
    Then Added data <TBili> is successfully displaying in table
    Then Added data <AlkP> is successfully displaying in table
    Then Added data <GGT> is successfully displaying in table
    Then Added data <validTBiliC> is successfully displaying in table
    Then Added data <validDBili> is successfully displaying in table
    Then Added data <validTprot> is successfully displaying in table
    Then Added data <validAlb> is successfully displaying in table
    Then Added data <validAst> is successfully displaying in table
    Then Added data <validAlt> is successfully displaying in table
    Then Added data <comment> is successfully displaying in table
    When I click On "Delete" icon
    Then Results are not displayed after delete

    Examples:
      | TBili | invalidTBiliC | invalidDBili | AlkP | invalidTprot | invalidAlb | invalidAst | invalidAlt | GGT | validTBiliC | validDBili | validTprot | validAlb | validAst | validAlt | comment                  | uploadImage |
      | 14 | 52 | 15 | 26 | 20 | 08 | 95 | 94 | 36 | 12 | 01 | 05 | 06 | 50 | 40 | This is the final report | Picture(1) |

  Scenario Outline: Verify the "Managing Provider" is able to Create "New Liver Function Tests" using valid data
    When I click on the button with text New Liver Function Tests
    When I fill value in TBili <TBili> field
    When I fill value in TBiliC <invalidTBiliC> field
    When I fill value in DBili <invalidDBili> field
    When I fill value in AlkP <AlkP> field
    When I fill value in Tprot <invalidTprot> field
    When I fill value in Alb <invalidAlb> field
    When I fill value in Ast <invalidAst> field
    When I click on the button with text Create
    Then validation message Please enter a value less than or equal to 15. appears
    Then validation message Please enter a value less than or equal to 5. appears
    Then validation message Please enter a value less than or equal to 9. appears
    Then validation message Please enter a value less than or equal to 7. appears
    Then validation message Please enter a value less than or equal to 60. appears
    When I fill value in Alt <invalidAlt> field
    When I fill value in GGT <GGT> field
    When I click on the button with text Create
    Then validation message Please enter a value less than or equal to 60. appears
    When I fill value in TBiliC <validTBiliC> field
    When I fill value in DBili <validDBili> field
    When I fill value in Tprot <validTprot> field
    When I fill value in Alb <validAlb> field
    When I fill value in Ast <validAst> field
    When I fill value in Alt <validAlt> field
    When User should be able to upload file <uploadImage>
    When I fill <comment> data in comments field
    When I click on the button with text Create
    Then Success message Liver Function Tests Result Added Succesfully ! appears
    Then Added data <TBili> is successfully displaying in table
    Then Added data <AlkP> is successfully displaying in table
    Then Added data <GGT> is successfully displaying in table
    Then Added data <validTBiliC> is successfully displaying in table
    Then Added data <validDBili> is successfully displaying in table
    Then Added data <validTprot> is successfully displaying in table
    Then Added data <validAlb> is successfully displaying in table
    Then Added data <validAst> is successfully displaying in table
    Then Added data <validAlt> is successfully displaying in table
    Then Added data <comment> is successfully displaying in table

    Examples:
      | TBili | invalidTBiliC | invalidDBili | AlkP | invalidTprot | invalidAlb | invalidAst | invalidAlt | GGT | validTBiliC | validDBili | validTprot | validAlb | validAst | validAlt | comment                  | uploadImage |
      | 14 | 52 | 15 | 26 | 20 | 08 | 95 | 94 | 36 | 12 | 01 | 05 | 06 | 50 | 40 | This is the final report | Picture(1) |

  Scenario Outline: Verify the "Managing Provider" is able to update "Liver Function Tests" with valid and invalid data , also verify search  functionality
    When I click On "Edit" icon
    When I clear date filed of report
    When I click on the button with text Update
    Then validation message Please select date and time appears
    When I click on the link text Back
    When I hover over the "Results" tab
    When Hover over link Laboratory
    When I click on the link text Laboratory Liver Function Tests
    When I click On "Edit" icon
    When I fill value in TBili <TBili> field
    When I fill value in TBiliC <invalidTBiliC> field
    When I fill value in DBili <invalidDBili> field
    When I fill value in AlkP <AlkP> field
    When I fill value in Tprot <invalidTprot> field
    When I fill value in Alb <invalidAlb> field
    When I fill value in Ast <invalidAst> field
    When I click on the button with text Update
    Then validation message Please enter a value less than or equal to 15. appears
    Then validation message Please enter a value less than or equal to 5. appears
    Then validation message Please enter a value less than or equal to 9. appears
    Then validation message Please enter a value less than or equal to 7. appears
    Then validation message Please enter a value less than or equal to 60. appears
    When I fill value in Alt <invalidAlt> field
    When I fill value in GGT <GGT> field
    When I click on the button with text Update
    Then validation message Please enter a value less than or equal to 60. appears
    When I fill value in TBiliC <validTBiliC> field
    When I fill value in DBili <validDBili> field
    When I fill value in Tprot <validTprot> field
    When I fill value in Alb <validAlb> field
    When I fill value in Ast <validAst> field
    When I fill value in Alt <validAlt> field
    When User should be able to upload file <uploadImage>
    When I fill <comment> data in comments field
    When I click on the button with text Update
    Then Success message Liver Function Tests Result Added Succesfully ! appears
    Then Added data <TBili> is successfully displaying in table
    Then Added data <AlkP> is successfully displaying in table
    Then Added data <GGT> is successfully displaying in table
    Then Added data <validTBiliC> is successfully displaying in table
    Then Added data <validDBili> is successfully displaying in table
    Then Added data <validTprot> is successfully displaying in table
    Then Added data <validAlb> is successfully displaying in table
    Then Added data <validAst> is successfully displaying in table
    Then Added data <validAlt> is successfully displaying in table
    Then Added data <comment> is successfully displaying in table
    When I populate data <comment> in the "Search" field
    Then Added data <comment> is successfully displaying in table

    Examples:
      | TBili | invalidTBiliC | invalidDBili | AlkP | invalidTprot | invalidAlb | invalidAst | invalidAlt | GGT | validTBiliC | validDBili | validTprot | validAlb | validAst | validAlt | comment                  | uploadImage |
      | 13 | 52 | 15 | 25 | 20 | 08 | 95 | 94 | 35 | 11 | 02 | 05 | 06 | 50 | 40 | This is the final report | Picture(1) |

  Scenario Outline: Verify the "Managing Provider" is able to Create "New Lipid Tests" using valid and invalid data also verify the validations and delete functionality
    When I hover over the "Results" tab
    When Hover over link Laboratory
    When I click on the link text Laboratory Lipid Tests
    Then result/laboratory_chemistry/3 page displays
    Then Button text New Lipid Tests is displayed on screen
    When I click on the button with text New Lipid Tests
    When I clear date filed of report
    When I click on the button with text Create
    Then validation message Date is required appears
    When I click on the button with text Close
    When I hover over the "Results" tab
    When Hover over link Laboratory
    When I click on the link text Laboratory Lipid Tests
    When I click on the button with text New Lipid Tests
    When I fill value in Trig <invalidTrig> field
    When I fill value in cholesterol <validCholesterol> field
    When I fill value in HDL <invalidHDL> field
    When I fill value in LDL <validLDL> field
    When I click on the button with text Create
    Then validation message Please enter a value greater than or equal to 50. appears
    Then validation message Please enter a value greater than or equal to 20. appears
    When I fill value in Trig <validTrig> field
    When I fill value in cholesterol <invalidCholesterol> field
    When I fill value in HDL <validHDL> field
    When I fill value in LDL <invalidLDL> field
    When I click on the button with text Create
    Then validation message Please enter a value greater than or equal to 50. appears
    Then validation message Please enter a value greater than or equal to 20. appears
    When I fill value in cholesterol <validCholesterol> field
    When I fill value in LDL <validLDL> field
    When User should be able to upload file <uploadImage>
    When I fill <comment> data in comments field
    When I click on the button with text Create
    Then Success message Lipid Tests Result Added Succesfully ! appears
    Then Added data <validTrig> is successfully displaying in table
    Then Added data <validCholesterol> is successfully displaying in table
    Then Added data <validHDL> is successfully displaying in table
    Then Added data <validLDL> is successfully displaying in table
    Then Added data <comment> is successfully displaying in table
    When I click On "Delete" icon
    Then Results are not displayed after delete
    When I click on the button with text New Lipid Tests
    When I fill value in cholesterol <validCholesterol> field
    When I fill value in LDL <validLDL> field
    When I fill value in Trig <validTrig> field
    When I fill value in HDL <validHDL> field
    When I fill value in cholesterol <validCholesterol> field
    When I fill value in LDL <validLDL> field
    When User should be able to upload file <uploadImage>
    When I fill <comment> data in comments field
    When I click on the button with text Create
    Then Success message Lipid Tests Result Added Succesfully ! appears
    Then Added data <validTrig> is successfully displaying in table
    Then Added data <validCholesterol> is successfully displaying in table
    Then Added data <validHDL> is successfully displaying in table
    Then Added data <validLDL> is successfully displaying in table
    Then Added data <comment> is successfully displaying in table

    Examples:
      | validTrig | invalidTrig | invalidCholesterol | validCholesterol | validHDL | invalidHDL | validLDL | invalidLDL | comment                  | uploadImage |
      | 55 | 5 | 15 | 60 | 25 | 08 | 25 | 09 | This is the final report | Picture(1) |

  Scenario Outline: Verify the "Managing Provider" is able to update "Lipid Tests" with valid and invalid data , also verify search functionality
    When I hover over the "Results" tab
    When Hover over link Laboratory
    When I click on the link text Laboratory Lipid Tests
    When I click On "Edit" icon
    When I clear date filed of report
    When I click on the button with text Update
    Then validation message Please select date and time appears
    When I click on the link text Back
    When I hover over the "Results" tab
    When Hover over link Laboratory
    When I click on the link text Laboratory Lipid Tests
    When I click On "Edit" icon
    When I fill value in Trig <invalidTrig> field
    When I fill value in cholesterol <validCholesterol> field
    When I fill value in HDL <invalidHDL> field
    When I fill value in LDL <validLDL> field
    When I click on the button with text Update
    Then validation message Please enter a value greater than or equal to 50. appears
    Then validation message Please enter a value greater than or equal to 20. appears
    When I fill value in Trig <validTrig> field
    When I fill value in cholesterol <invalidCholesterol> field
    When I fill value in HDL <validHDL> field
    When I fill value in LDL <invalidLDL> field
    When I click on the button with text Update
    Then validation message Please enter a value greater than or equal to 50. appears
    Then validation message Please enter a value greater than or equal to 20. appears
    When I fill value in cholesterol <validCholesterol> field
    When I fill value in LDL <validLDL> field
    When User should be able to upload file <uploadImage>
    When I fill <comment> data in comments field
    When I click on the button with text Update
    Then Success message Lipid Tests Result Updated Succesfully ! appears
    Then Added data <validTrig> is successfully displaying in table
    Then Added data <validCholesterol> is successfully displaying in table
    Then Added data <validHDL> is successfully displaying in table
    Then Added data <validLDL> is successfully displaying in table
    Then Added data <comment> is successfully displaying in table
    When I populate data <comment> in the "Search" field
    Then Added data <comment> is successfully displaying in table

    Examples:
      | validTrig | invalidTrig | invalidCholesterol | validCholesterol | validHDL | invalidHDL | validLDL | invalidLDL | comment                    | uploadImage |
      | 60 | 5 | 15 | 54 | 22 | 08 | 21 | 09 | This is the updated report | Picture(1) |

  Scenario Outline: Verify the "Managing Provider" is able to Create "New Laboratory Endocrine Results" using valid and invalid data also verify the validations and verify delete functionality
    When I hover over the "Results" tab
    When Hover over link Laboratory
    When I click on the link text Laboratory Endocrine
    Then laboratory_endocrine page displays
    Then Button text New Endocrine Result is displayed on screen
    When I click on the button with text New Endocrine Result
    When I clear date filed of report
    When I click on the button with text Create
    Then validation message Please enter date & time appears
    When I click on the button with text Close
    When I hover over the "Results" tab
    When Hover over link Laboratory
    When I click on the link text Laboratory Endocrine
    When I click on the button with text New Endocrine Result
    When I fill value in TSH <invalidTSH> field
    When I fill value in T4 <invalidT4> field
    When I fill value in Free T4 <invalidFreeT4> field
    When I fill value in T3 <invalidT3> field
    When I fill value in Cortisol <invalidCortisol> field
    When I click on the button with text Create
    Then validation message Please enter a value less than or equal to 6. appears
    Then validation message Please enter a value less than or equal to 15. appears
    Then validation message Please enter a value less than or equal to 3. appears
    Then validation message Please enter a value less than or equal to 250. appears
    Then validation message Please enter a value less than or equal to 50. appears
    When I fill value in TSH <validTSH> field
    When I fill value in T4 <validT4> field
    When I fill value in Free T4 <validFreeT4> field
    When I fill value in T3 <validT3> field
    When I fill value in Cortisol <validCortisol> field
    When I fill value in ACTH <invalidACTH> field
    When I click on the button with text Create
    Then validation message Please enter a value less than or equal to 50. appears
    When I fill value in ACTH <validACTH> field
    When User should be able to upload file <uploadImage>
    When I fill <comment> data in comments field
    When I click on the button with text Create
    Then Success message Laboratory Endocrine Added Succesfully ! appears
    Then Added data <validTSH> is successfully displaying in table
    Then Added data <validT4> is successfully displaying in table
    Then Added data <validFreeT4> is successfully displaying in table
    Then Added data <validT3> is successfully displaying in table
    Then Added data <validCortisol> is successfully displaying in table
    Then Added data <validACTH> is successfully displaying in table
    Then Added data <comment> is successfully displaying in table
    When I click On "Delete" icon
    Then Results are not displayed after delete

    Examples:
      | validTSH | invalidTSH | validT4 | invalidT4 | validFreeT4 | invalidFreeT4 | validT3 | invalidT3 | validCortisol | invalidCortisol | validACTH | invalidACTH | comment                  | uploadImage |
      | 05 | 10 | 12 | 28 | 03 | 50 | 199 | 300 | 47 | 57 | 42 | 55 | This is the final report | Picture(1) |

  Scenario Outline: Crated new Laboratory Endocrine using valid data functionality
    When I hover over the "Results" tab
    When Hover over link Laboratory
    When I click on the link text Laboratory Endocrine
    Then laboratory_endocrine page displays
    Then Button text New Endocrine Result is displayed on screen
    When I click on the button with text New Endocrine Result
    When I fill value in TSH <validTSH> field
    When I fill value in T4 <validT4> field
    When I fill value in Free T4 <validFreeT4> field
    When I fill value in T3 <validT3> field
    When I fill value in Cortisol <validCortisol> field
    When I fill value in ACTH <validACTH> field
    When User should be able to upload file <uploadImage>
    When I fill <comment> data in comments field
    When I click on the button with text Create
    Then Success message Laboratory Endocrine Added Succesfully ! appears
    Then Added data <validTSH> is successfully displaying in table
    Then Added data <validT4> is successfully displaying in table
    Then Added data <validFreeT4> is successfully displaying in table
    Then Added data <validT3> is successfully displaying in table
    Then Added data <validCortisol> is successfully displaying in table
    Then Added data <validACTH> is successfully displaying in table
    Then Added data <comment> is successfully displaying in table

    Examples:
      | validTSH | validT4 | validFreeT4 | validT3 | validCortisol | validACTH | comment                  | uploadImage |
      | 05 | 12 | 03 | 199 | 47 | 42 | This is the final report | Picture(1) |

  Scenario Outline: Verify the "Managing Provider" is able to update "New Laboratory Endocrine Results" with valid and invalid data , also verify search functionality
    When I hover over the "Results" tab
    When Hover over link Laboratory
    When I click on the link text Laboratory Endocrine
    When I click On "Edit" icon
    When I clear date filed of report
    When I click on the button with text Update
    Then validation message Please enter date & time appears
    When I click on the link text Back
    When I hover over the "Results" tab
    When Hover over link Laboratory
    When I click on the link text Laboratory Endocrine
    When I click On "Edit" icon
    When I fill value in TSH <invalidTSH> field
    When I fill value in T4 <invalidT4> field
    When I fill value in Free T4 <invalidFreeT4> field
    When I fill value in T3 <invalidT3> field
    When I fill value in Cortisol <invalidCortisol> field
    When I click on the button with text Update
    Then validation message Please enter a value less than or equal to 6. appears
    Then validation message Please enter a value less than or equal to 15. appears
    Then validation message Please enter a value less than or equal to 3. appears
    Then validation message Please enter a value less than or equal to 250. appears
    Then validation message Please enter a value less than or equal to 50. appears
    When I fill value in TSH <validTSH> field
    When I fill value in T4 <validT4> field
    When I fill value in Free T4 <validFreeT4> field
    When I fill value in T3 <validT3> field
    When I fill value in Cortisol <validCortisol> field
    When I fill value in ACTH <invalidACTH> field
    When I click on the button with text Update
    Then validation message Please enter a value less than or equal to 50. appears
    When I fill value in ACTH <validACTH> field
    When User should be able to upload file <uploadImage>
    When I fill <comment> data in comments field
    When I click on the button with text Update
    Then Success message Laboratory Endocrine Updated Succesfully ! appears
    Then Added data <validTSH> is successfully displaying in table
    Then Added data <validT4> is successfully displaying in table
    Then Added data <validFreeT4> is successfully displaying in table
    Then Added data <validT3> is successfully displaying in table
    Then Added data <validCortisol> is successfully displaying in table
    Then Added data <validACTH> is successfully displaying in table
    Then Added data <comment> is successfully displaying in table

    Examples:
      | validTSH | invalidTSH | validT4 | invalidT4 | validFreeT4 | invalidFreeT4 | validT3 | invalidT3 | validCortisol | invalidCortisol | validACTH | invalidACTH | comment                  | uploadImage |
      | 03 | 11 | 13 | 29 | 01 | 55 | 198 | 300 | 46 | 57 | 41 | 55 | This is the final report | Picture(1) |

  Scenario Outline: Verify the "Managing Provider" is able to Create "New Laboratory Coagulation Results" using valid and invalid data also verify the validations and delete functionality
    When I hover over the "Results" tab
    When Hover over link Laboratory
    When I click on the link text Laboratory Coagulation
    Then laboratory_coagulation page displays
    Then Button text New Coagulation Result is displayed on screen
    When I click on the button with text New Coagulation Result
    When I clear date filed of report
    When I click on the button with text Create
    Then validation message Please enter date & time appears
    When I click on the button with text Close
    When I hover over the "Results" tab
    When Hover over link Laboratory
    When I click on the link text Laboratory Coagulation
    When I click on the button with text New Coagulation Result
    When I fill value in PT <invalidPT> field
    When I click on the button with text Create
    Then validation message Please enter a value less than or equal to 15. appears
    When I fill value in PT <validPT> field
    When I fill value in aPTT <invalidaPTT> field
    When I click on the button with text Create
    Then validation message Please enter a value less than or equal to 15. appears
    When I fill value in aPTT <validaPTT> field
    When I fill value in TT <invalidTT> field
    When I fill value in Fibrinogen <invalidFibrinogen> field
    When I click on the button with text Create
    Then validation message Please enter a value less than or equal to 25. appears
    Then validation message Please enter a value less than or equal to 250. appears
    When I fill value in TT <validTT> field
    When I fill value in Fibrinogen <validFibrinogen> field
    When I click on the button with text Create
    Then Success message Laboratory Coagulation Added Succesfully ! appears
    Then Added data <validPT> is successfully displaying in table
    Then Added data <validaPTT> is successfully displaying in table
    Then Added data <validTT> is successfully displaying in table
    Then Added data <validFibrinogen> is successfully displaying in table
    When I click On "Delete" icon
    Then Results are not displayed after delete

    Examples:
      | validPT | invalidPT | validaPTT | invalidaPTT | validaTT | validTT | invalidTT | validFibrinogen | invalidFibrinogen | comment                  | uploadImage |
      | 14 | 25 | 13 | 28 | 19 | 19 | 50 | 198 | 800 | This is the final report | Picture(1) |

  Scenario Outline: Crated new Laboratory Coagulation using valid data
    When I hover over the "Results" tab
    When Hover over link Laboratory
    When I click on the link text Laboratory Coagulation
    Then laboratory_coagulation page displays
    Then Button text New Coagulation Result is displayed on screen
    When I click on the button with text New Coagulation Result
    When I fill value in PT <validPT> field
    When I fill value in aPTT <validaPTT> field
    When I fill value in TT <validTT> field
    When I fill value in Fibrinogen <validFibrinogen> field
    When User should be able to upload file <uploadImage>
    When I fill <comment> data in comments field
    When I click on the button with text Create
    Then Success message Laboratory Coagulation Added Succesfully ! appears
    Then Added data <validPT> is successfully displaying in table
    Then Added data <validaPTT> is successfully displaying in table
    Then Added data <validTT> is successfully displaying in table
    Then Added data <validFibrinogen> is successfully displaying in table
    Then Added data <comment> is successfully displaying in table

    Examples:
      | validPT | validaPTT | validTT | validFibrinogen | comment                  | uploadImage |
      | 12 | 11 | 19 | 197 | This is the final report | Picture(1) |

  Scenario Outline: Verify the "Managing Provider" is able to update "New Laboratory Coagulation Results" with valid and invalid data , also verify search functionality
    When I hover over the "Results" tab
    When Hover over link Laboratory
    When I click on the link text Laboratory Coagulation
    When I click On "Edit" icon
    When I clear date filed of report
    When I click on the button with text Update
    Then validation message Please enter date & time appears
    When I click on the link text Back
    When I hover over the "Results" tab
    When Hover over link Laboratory
    When I click on the link text Laboratory Coagulation
    When I click On "Edit" icon
    When I fill value in PT <invalidPT> field
    When I click on the button with text Update
    Then validation message Please enter a value less than or equal to 15. appears
    When I fill value in PT <validPT> field
    When I fill value in aPTT <invalidaPTT> field
    When I click on the button with text Update
    Then validation message Please enter a value less than or equal to 15. appears
    When I fill value in aPTT <validaPTT> field
    When I fill value in TT <invalidTT> field
    When I fill value in Fibrinogen <invalidFibrinogen> field
    When I click on the button with text Update
    Then validation message Please enter a value less than or equal to 25. appears
    Then validation message Please enter a value less than or equal to 250. appears
    When I fill value in TT <validTT> field
    When I fill value in Fibrinogen <validFibrinogen> field
    When I click on the button with text Update
    Then Success message Laboratory Coagulation Updated Succesfully ! appears
    Then Added data <validPT> is successfully displaying in table
    Then Added data <validaPTT> is successfully displaying in table
    Then Added data <validTT> is successfully displaying in table
    Then Added data <validFibrinogen> is successfully displaying in table
    Then Added data <comment> is successfully displaying in table

    Examples:
      | validPT | invalidPT | validaPTT | invalidaPTT | validTT | invalidTT | validFibrinogen | invalidFibrinogen | comment                  | uploadImage |
      | 12 | 25 | 11 | 29 | 19 | 50 | 197 | 800 | This is the final report | Picture(1) |

  Scenario Outline: Verify the "Managing Provider" is able to Create "New Laboratory Other Results" using valid and invalid data also verify the validations and delete functionality
    When I hover over the "Results" tab
    When Hover over link Laboratory
    When I click on the link text Laboratory Others
    Then laboratory_others page displays
    Then Button text New Other Result is displayed on screen
    When I click on the button with text New Other Result
    When I clear date filed of report
    When I click on the button with text Create
    Then validation message Please enter date & time appears
    When I click on the button with text Close
    When I hover over the "Results" tab
    When Hover over link Laboratory
    When I click on the link text Laboratory Others
    When I click on the button with text New Other Result
    When I click on the button with text Add More
    When User should be able to upload file <uploadImage>
    When I fill <comment> data in comments field
    When I fill title <title> in title field field
    When I click on the button with text Create
    Then Success message Laboratory Other Added Succesfully ! appears
    Then Added data <comment> is successfully displaying in table
    When I click On "Delete" icon
    Then Results are not displayed after delete

    Examples:
      | comment                  | uploadImage | title             |
      | This is the final report | Picture(1)  | this is new title |

  Scenario Outline: Crated new Laboratory Others using valid data
    When I hover over the "Results" tab
    When Hover over link Laboratory
    When I click on the link text Laboratory Others
    Then laboratory_others page displays
    Then Button text New Other Result is displayed on screen
    When I click on the button with text New Other Result
    When I click on the button with text Add More
    When User should be able to upload file <uploadImage>
    When I fill <comment> data in comments field
    When I fill title <title> in title field field
    When I click on the button with text Create
    Then Success message Laboratory Other Added Succesfully ! appears
    Then Added data <comment> is successfully displaying in table

    Examples:
      | title     | comment                  | uploadImage |
      | new title | This is the final report | Picture(1)  |

  Scenario Outline: Verify the "Managing Provider" is able to update "New Laboratory Other Results" with valid and invalid data , also verify search functionality
    When I hover over the "Results" tab
    When Hover over link Laboratory
    When I click on the link text Laboratory Others
    When I click On "Edit" icon
    When I fill <comment> data in comments field
    When I click on the button with text Update
    Then Success message Others Result Updated Succesfully ! appears
    Then Added data <comment> is successfully displaying in table

    Examples:
      | comment                    | uploadImage |
      | This is the updated report | Picture(1)  |

  Scenario Outline: Verify the "Managing Provider" is not able to Create "New Other Result" when the mandatory fields are not populated and Verify the "Managing Provider" is able to Create "New Other Result" when only the mandatory fields are populated with valid data and Verify the "Managing Provider" is able to search and delete "Other Result"
    When I click on the link text Medical Record
    When I hover over the "Results" tab
    Then I should see the following options in the dropdown
      | Laboratory |
      | Imaging    |
      | Other      |
    When I click on the results>>other button
    Then Search and delete duplicate data <type>
    When I click on the button with text New Other Result
    Then It redirects on the New Other Result screen
    When I click on the button with text Create
    Then validation message Please enter type. appears
    Then validation message Please enter description. appears
    Then validation message Please enter comments appears
    When I fill <type> data in type field
    When I select date in start Date field
    When User fill <description> data in description field
    When I fill <comments> data in comments field
    When I click on the button with text Create
    Then Success message Other Result Added Succesfully ! appears
    When I populate data <type> in the "Search" field
    Then Details of results>>other mandatroy fields should be visible in the list with <type> and <description> and <comments>
    When I click On "Delete" icon
    Then Deleted record should not be visible in the list

    Examples:
      | type              | description           | comments                                                |
      | Auto Other result | Auto test description | No evidence of disease or injury, Everything is normal. |

  Scenario Outline: Verify the "Managing Provider" is able to Create "New Other Result" when all the fields are populated with valid data
    Then Search and delete duplicate data <type>
    When I click on the button with text New Other Result
    Then It redirects on the New Other Result screen
    When I fill <type> data in type field
    When User fill <description> data in description field
    When User should be able to upload file <uploadImage>
    When I fill <comments> data in comments field
    When I click on the button with text Create
    Then Success message Other Result Added Succesfully ! appears
    When I populate data <type> in the "Search" field
    Then Details of results>>other module should be visible in the list with all fields <type> and <description> and <comments>

    Examples:
      | type              | description           | comments                                                | uploadImage |
      | Auto Other result | Auto test description | No evidence of disease or injury, Everything is normal. | Picture(1)  |

  Scenario Outline: Verify the "Managing Provider" is able to update "Other Result" with valid data and Verify the "Managing Provider" is able to search "Other Result"
    When I populate data <type> in the "Search" field
    When I click on the "View or Update" option under the "Action" section
    When I fill <updatedType> data in type field
    When User fill <updatedDescription> data in description field
    When User should be able to upload file <uploadImage>
    When I fill <updatedComments> data in comments field
    When I click on the button with text Update
    Then Success message Other Result update Succesfully ! appears
    When I populate data <updatedType> in the "Search" field
    Then Details of results>>other module should be visible in the list with all fields <updatedType> and <updatedDescription> and <updatedComments>
    When I populate data <updatedType> in the "Search" field

    Examples:
      | type              | updatedType               | updatedDescription    | updatedComments       | uploadImage |
      | Auto Other result | Updated Auto Other result | Results>>othermodules | Everything is normal. | Picture(1)  |

  Scenario Outline: Verify the functionality of "Assign other provider" using both valid and invalid data and also verify the search and delete functionality
    When I hover on the "Dashboard-All Patient" tab
    When I click the <dashboard-ManagePatientsOption> option
    When I populate data <patientName> in the "Search" field
    When I click on the link text <patientName>
    When User click on the button Other Provider under baby dashboard screen
    Then Search and delete duplicate data <otherProvider>
    When User click on the button text Assign Other Provider
    When I click on the button with text Assign
    Then validation message Please select other provider. appears
    When Click on select provider dropdown
    Then Click on option <otherProvider> from list
    When I click on the button with text Assign
    Then Success message Providers Assign Succesfully appears
    When I populate data <otherProvider> in the "Search" field
    Then Added record <otherProvider> is displaying in list
    When I click On "Delete" icon
    Then Success message Provider Remove Succesfully appears
    Then Deleted record should not be visible in the list
    When User click on the button text Assign Other Provider
    When Click on select provider dropdown
    Then Click on option <otherProvider> from list
    When I click on the button with text Assign
    Then Success message Providers Assign Succesfully appears

    Examples:
      | url      | userA                     | dashboard-ManagePatientsOption | patientName       | otherProvider                         |
      | loginUrl | providerLoginCrendentails | Manage Patients                | Patient_Auto_Test | Test_Auto_Other_Provider_For_Provider |

  Scenario Outline: Verify the "Managing Provider" is not able to create "New Other Provider Records" when mandatory fields are not populated and	Verify the "Managing Provider" is able to create "New Other Provider Records" when all the fields are populated with valid data andVerify the "Managing Provider" is able to search "Other Provider Records" and Verify the "Managing Provider" is able to delete "Other Provider Records"
    When I click on the link text Medical Record
    When User hover on the Documents tab
    When I click on the link text Other Providers Records
    Then Search and delete duplicate data <otherProvider>
    When I click on the button with text New Other Provider Records
    Then It redirects on the New Other Provider Records screen
    When I click on the button with text Create
    Then validation message Please select other provider. appears
    Then validation message Please enter description. appears
    When Click on select provider dropdown
    Then Click on option <otherProvider> from list
    When I select date in start Date field
    When User should be able to upload file <image>
    When User fill <description> data in description field
    When I click on the button with text Create
    Then Success message Other Provider Record Added Succesfully ! appears
    When I populate data <otherProvider> in the "Search" field
    Then Other provider records should be visilbe in the list with <otherProvider> and <description>
    When I click On "Delete" icon
    Then Deleted record should not be visible in the list

    Examples:
      | otherProvider                         | image      | description                          |
      | Test_Auto_Other_Provider_For_Provider | Picture(1) | Auto Test other provider description |

  Scenario Outline: Verify the "Managing Provider" is able to create "New Other Provider Records" when all the fields are populated with valid data
    Then Search and delete duplicate data <otherProvider>
    When I click on the button with text New Other Provider Records
    Then It redirects on the New Other Provider Records screen
    When Click on select provider dropdown
    Then Click on option <otherProvider> from list
    When I select date in start Date field
    When User should be able to upload file <image>
    When User fill <description> data in description field
    When I click on the button with text Create
    Then Success message Other Provider Record Added Succesfully ! appears
    When I populate data <otherProvider> in the "Search" field
    Then Other provider records should be visilbe in the list with <otherProvider> and <description>
    When I click on the "View or Update" option under the "Action" section
    When User fill <updatedDescription> data in description field
    When I click on the button with text Update
    When I populate data <otherProvider> in the "Search" field
    Then Other provider records should be visilbe in the list with <otherProvider> and <updatedDescription>

    Examples:
      | otherProvider                         | image      | description                          | updatedDescription  |
      | Test_Auto_Other_Provider_For_Provider | Picture(1) | Auto Test other provider description | updated description |

  Scenario Outline: Verify the "Managing Provider" is able to export the added records
    When I click on the link text Medical Record
    When User hover on the Documents tab
    When I click on the link text Export Records
    When I checkmark, all the records under export records
    When I click on the button with text Export

  Scenario Outline: Verify the "Managing provider" is not able to create new Appointment when mandatory fields are empty or when added invalid data and verify search and delete functionalities
    When I click on the link text Appointment
    Then appointment page displays
    Then Table is displaying on screen
    When Click on "Appointment order" dropdown and select option <options>
    Then Search and delete duplicate data <otherProvider>
    When I click on the button with text New Appointment
    When I clear date filed of report
    When I click on the button with text Create
    Then validation message Please select provider. appears
    Then validation message Please enter start date. appears
    When I click on the button with text Close
    When I click on the link text Appointment
    When I click on the button with text New Appointment
    When Click on select provider dropdown
    Then Click on option <otherProvider> from list
    When Click on "Appointment date" field
    When User fill <description> data in description field
    When I click on the button with text Create
    Then Success message Appointment Added Succesfully ! appears
    When Click on "Appointment order" dropdown and select option <options>
    When I populate data <otherProvider> in the "Search" field
    Then Added appointment data <otherProvider> and <description> should display on screen
    When I click On "Delete" icon
    Then Deleted record should not be visible in the list

    Examples:
      | otherProvider                         | description                 | options |
      | Test_Auto_Other_Provider_For_Provider | Description for appointment | All     |

  Scenario Outline: Verify the "Managing provider" is able to create new Appointment
    When I click on the link text Appointment
    Then appointment page displays
    Then Table is displaying on screen
    When Click on "Appointment order" dropdown and select option <options>
    Then Search and delete duplicate data <otherProvider>
    When I click on the button with text New Appointment
    When Click on select provider dropdown
    Then Click on option <otherProvider> from list
    When Click on "Appointment date" field
    When User fill <description> data in description field
    When I click on the button with text Create
    Then Success message Appointment Added Succesfully ! appears
    When Click on "Appointment order" dropdown and select option <options>
    When I populate data <otherProvider> in the "Search" field
    Then Added appointment data <otherProvider> and <description> should display on screen

    Examples:
      | otherProvider                         | description                 | options |
      | Test_Auto_Other_Provider_For_Provider | Description for appointment | All     |

  Scenario Outline: Verify the "Managing provider" is able to update new Appointment
    When I populate data <otherProvider> in the "Search" field
    When I click on the "View or Update" option under the "Action" section
    When I clear date filed of report
    When Click on select provider dropdown
    Then Click on option <invalidOtherProvider> from list
    When I click on the button with text Update
    Then validation message This field is required. appears
    Then validation message Please enter start date. appears
    When Click on select provider dropdown
    Then Click on option <otherProvider> from list
    When Click on "Appointment date" field
    When User fill <description> data in description field
    When I click on the button with text Update
    Then Success message Appointment Updated Succesfully ! appears
    When Click on "Appointment order" dropdown and select option <options>
    When I populate data <otherProvider> in the "Search" field
    Then Added appointment data <otherProvider> and <description> should display on screen

    Examples:
      | otherProvider                         | description                         | options | invalidOtherProvider |
      | Test_Auto_Other_Provider_For_Provider | Updated Description for appointment | All     | Select Provider      |

  Scenario Outline: Verify the "Managing provider" is able to create new upcomming Appointment and verify appointments on patient dashboard
    When Click on "Appointment order" dropdown and select option <options>
    Then Search and delete duplicate data <otherProvider>
    When I click on the button with text New Appointment
    When Click on select provider dropdown
    Then Click on option <otherProvider> from list
    When Click and select next day "Appointment date"
    When User fill <description> data in description field
    When I click on the button with text Create
    Then Success message Appointment Added Succesfully ! appears
    When Click on "Appointment order" dropdown and select option <options>
    When I populate data <description> in the "Search" field
    Then Added appointment data <otherProvider> and <description> should display on screen
    When I click on the link Dashboard having third index
    Then Verify appointment provider <otherProvider> should display under dashboard

    Examples:
      | otherProvider                         | description                          | options   |
      | Test_Auto_Other_Provider_For_Provider | Description for next day appointment | Upcomming |

  Scenario Outline: Verify that 'Add Monitoring' button is visible when the Monitoring table is empty and Verify that when user does not populate the mandatory fields on 'Add Monitoring' form the validation displays with the fields andVerify that when user populates the mandatory fields on 'Add Monitoring' form with valid data then "Monitoring" gets created and 	Verify that search bar is displaying to search for specific records when user populates the search field then the result displays according to the keyword
    When I click on the second index link Dashboard - All Patients
    When I populate data <patientName> in the "Search" field
    When I click on the link text <patientName>
    When Hover over "Orders" tab
    When I click on the link text Monitoring
    Then monitoring-orders page displays
    Then Table should contain column name Start Date
    Then Table should contain column name ECG
    Then Table should contain column name ECG End Date
    Then Table should contain column name O2 Saturation
    Then Table should contain column name Temperature
    Then Table should contain column name Temperature Saturation End Date
    Then Table should contain column name Action
    When I click on the button with text Add Monitoring Order
    Then It redirects on the Monitoring Order screen
    When I click on the button with text Save
    Then Please fill both device and duration for at least one section (ECG, O2 Saturation, or Temperature). should be displayed
    When I click on ECG device dropdown and select option <device_ECG>
    When I click on ECG duration dropdown and select option <ECGduration>
    When I click on O2 saturation device dropdown and select option <device_O2>
    When I click on O2 saturation duration dropdown and select option <O2SaturationDuration>
    When I click on Temperature device dropdown and select option <device_temp>
    When I click on Temperature devduration dropdown and select option <temperatureDuration>
    When I click on the button with text Save
    Then validation message Please enter Temperature duration details. appears
    When Fill temperature duration field using data <temperatureText>
    When I click on the button with text Save
    Then Added data <device_ECG> and <ECGduration> is successfully displaying in table after save
    Then Added data <device_O2> and <O2SaturationDuration> is successfully displaying in table after save
    Then Added data <device_temp> and <temperatureText> is successfully displaying in table after save
    When I click on the link text Update Monitoring Order
    Then Fill end date field
    When I click on the button with text Update
    When I click on the link text Update Monitoring Order
    When I click on the button with text Restart Monitoring
    Then Verify that restart button is working as expected
    When I click on the button with text Update

    Examples:
      | patientName       | device_ECG            | device_temp            | device_O2            | ECGduration       | O2SaturationDuration | temperatureDuration | temperatureText            |
      | Patient_Auto_Test | Auto_Company_test_ECG | Auto_Company_test_temp | Auto_Company_test_O2 | Continuous (24/7) | Overnight            | Custom Duration     | Temperature duration is 10 |

  Scenario Outline: Verify user is able to updated and delete new monitoring
    When I click on the link text Update Monitoring Order
    When I click on ECG duration dropdown and select option <ECGduration>
    When I click on O2 saturation duration dropdown and select option <O2SaturationDuration>
    When I click on the button with text Update
    Then Added data <device_O2> and <O2SaturationDuration> is successfully displaying in table after save
    Then Added data <device_temp> and <temperatureText> is successfully displaying in table after save

    Examples:
      | patientName       | device_ECG            | device_temp            | device_O2            | ECGduration | O2SaturationDuration | temperatureDuration | temperatureText            |
      | Patient_Auto_Test | Auto_Company_test_ECG | Auto_Company_test_temp | Auto_Company_test_O2 | Overnight   | Continuous (24/7)    | Custom Duration     | Temperature duration is 10 |

  Scenario Outline: Verify user is able to Create new monitoring
    When I click on the link text Update Monitoring Order
    Then It redirects on the Monitoring Order screen
    When I click on ECG device dropdown and select option <device_ECG>
    When I click on ECG duration dropdown and select option <ECGduration>
    When I click on O2 saturation device dropdown and select option <device_O2>
    When I click on O2 saturation duration dropdown and select option <O2SaturationDuration>
    When I click on Temperature device dropdown and select option <device_temp>
    When I click on Temperature devduration dropdown and select option <temperatureDuration>
    When Fill temperature duration field using data <temperatureText>
    When I click on the button with text Update
    Then Added data <device_ECG> and <ECGduration> is successfully displaying in table after save
    Then Added data <device_O2> and <O2SaturationDuration> is successfully displaying in table after save
    Then Added data <device_temp> and <temperatureText> is successfully displaying in table after save

    Examples:
      | patientName       | device_ECG            | device_temp            | device_O2            | ECGduration       | O2SaturationDuration | temperatureDuration | temperatureText            |
      | Patient_Auto_Test | Auto_Company_test_ECG | Auto_Company_test_temp | Auto_Company_test_O2 | Continuous (24/7) | Overnight            | Custom Duration     | Temperature duration is 10 |

  Scenario Outline: Verify the "Managing Provider" is not able to add "Growth" tracking and validation displays if any mandatory field is not populated and Verify the "Managing Provider" is able to create "Growth" tracking for patient's Medical Record and Verify the "Managing provider" is able to search the "Growth Results"
    When I click on the link text Medical Record
    When Hover over link Tracker
    Then Tracker options should be visible under dropdown
      | Growth    |
      | Nutrition |
      | Diapering |
      | Sleep     |
    When I click on the link text Growth
    When I drag chat container banner
    When I click on the button with text Growth Results
    Then Search and delete duplicate data <heightInches>
    When Hover over link Tracker
    When I click on the link text Growth
    When I click on the button with text New Growth Result
    Then It redirects on the New Growth Result screen
    When I click on the button with text Create
    Then validation message Please enter at least one value for Height, Weight, or Head Circumference appears
    Then Verify multiple same validation messages on popup with text Please enter at least one value for Height, Weight, or Head Circumference
    When I select date in start Date field
    When I fill <heightInches> data in "Height" field
    When I fill <weightPounds> data in "Weight" field
    When I fill <weightPounds> data in "Weight Ounce" field
    When I fill <headCircumference_inches> data in "Head Circumference" field
    When I click on the button with text Create
    Then Success message Growth Result Added Succesfully ! appears
    When I click on the button with text Growth Results
    When I populate data <heightInches> in the "Search" field
    Then Growth details should be visible in the list with <heightcm> and <heightInches> and <weightPounds> and <weightPounds> and <weightkg> and <headCircumference_cm> and <headCircumference_inches>
    When I populate data <specialCharactors> in the "Search" field
    Then No matching records found should be displayed

    Examples:
      | heightInches | weightPounds | headCircumference_inches | heightcm | weightkg | headCircumference_cm | specialCharactors |
      | 24 | 8 | 14 | 60.96 | 3.86 | 35.56 | !@#$%%$#@! |

  Scenario Outline: Verify the "Managing Provider" is able to "View and update" the added "Growth" Result and Verify the "Managing provider" is able to delete the "Growth Results"
    When I populate data <heightInches> in the "Search" field
    When I click on the "View or Update" option under the "Action" section
    When I remove data from required fields on updation form
    When I click on the button with text Update
    Then validation message Please enter at least one value for Height, Weight, or Head Circumference appears
    When I fill <updatedHeightInch> data in "Height" field
    When I fill <updatedWeight> data in "Weight" field
    When I fill <updatedWeight> data in "Weight Ounce" field
    When I fill <updatedHeadCircumference_inches> data in "Head Circumference" field
    When I click on the button with text Update
    Then Success message Updated Succesfully ! appears
    When I populate data <updatedHeightInch> in the "Search" field
    Then Growth details should be visible in the list with <updatedHeightcm> and <updatedHeightInch> and <updatedWeight> and <updatedWeight> and <updatedWeightkg> and <updatedHeadCircumference_cm> and <updatedHeadCircumference_inches>
    When I click On "Delete" icon
    Then Deleted record should not be visible in the list

    Examples:
      | heightInches | updatedHeightInch | updatedWeight | updatedHeadCircumference_inches | updatedHeightcm | updatedWeightkg | updatedHeadCircumference_cm |
      | 24 | 22 | 7 | 12 | 55.88 | 3.37 | 30.48 |

  Scenario Outline: Verify the "Managing Provider" is able to create "Growth" tracking for patient's Medical Record and verify this created record in mobile app
    When Hover over link Tracker
    When I click on the link text Growth
    When I drag chat container banner
    When I click on the button with text Growth Results
    Then Search and delete duplicate data <heightInches>
    When Hover over link Tracker
    When I click on the link text Growth
    When I click on the button with text New Growth Result
    Then It redirects on the New Growth Result screen
    When I select date in start Date field
    When I fill <heightInches> data in "Height" field
    When I fill <weightPounds> data in "Weight" field
    When I fill <weightPounds> data in "Weight Ounce" field
    When I fill <headCircumference_inches> data in "Head Circumference" field
    When I click on the button with text Create
    Then Success message Growth Result Added Succesfully ! appears
    When I click on the button with text Growth Results
    When I populate data <heightInches> in the "Search" field
    Then Growth details should be visible in the list with <heightcm> and <heightInches> and <weightPounds> and <weightPounds> and <weightkg> and <headCircumference_cm> and <headCircumference_inches>

    Examples:
      | heightInches | weightPounds | headCircumference_inches | heightcm | weightkg | headCircumference_cm |
      | 24 | 8 | 14 | 60.96 | 3.86 | 35.56 |

  Scenario Outline: Verify the "Managing Provider" is able to create "Growth" tracking for patient's Medical Record with past date, 	Verify that Average Daily Weight Gain", "Monthly Head Circumference Gain" and "Monthly Height Gain"
    When Hover over link Tracker
    When I click on the link text Growth
    When I drag chat container banner
    When I click on the button with text Growth Results
    When Hover over link Tracker
    When I click on the link text Growth
    When I click on the button with text New Growth Result
    Then It redirects on the New Growth Result screen
    When I select date in past month
    When I fill <heightInches> data in "Height" field
    When I fill <weightPounds> data in "Weight" field
    When I fill <weightPounds> data in "Weight Ounce" field
    When I fill <headCircumference_inches> data in "Head Circumference" field
    When I click on the button with text Create
    Then Success message Growth Result Added Succesfully ! appears
    When I click on the button with text Growth Results
    When I populate data <heightInches> in the "Search" field
    Then Growth details should be visible in the list with <heightcm> and <heightInches> and <weightPounds> and <weightPounds> and <weightkg> and <headCircumference_cm> and <headCircumference_inches>
    Then Calculate Monthly Height Gain,Average Daily Weight Gain and Monthly Head Circumference Gain

    Examples:
      | heightInches | weightPounds | headCircumference_inches | heightcm | weightkg | headCircumference_cm |
      | 26 | 7 | 13 | 66.04 | 3.37 | 33.02 |

  Scenario Outline: Verify User is not able to add measurements when mandatory fields are empty and also able to add ,verify records added by adding one field and two fields
    When I click on the second index link Dashboard - All Patients
    When I populate data <patientName> in the "Search" field
    When I click on the link text <patientName>
    When Hover over "Orders" tab
    When I click on the link text Measurement
    Then measurement-orders page displays
    When I click on the button with text Add Measurement Order
    When I click on the button with text Save
    Then At least one section must be filled. should be displayed
    When I click on weight frequency dropdown and select option <weightFrequency>
    When I click on the button with text Save
    Then Success message Measurement Order Added Successfully! appears
    Then Added data <weightFrequency> is successfully displaying in table
    When I click on the link text Update Measurement Order
    When I click on weight frequency dropdown and select option <weightFrequency>
    When I click on height frequency dropdown and select option <heightFrequency>
    When I click on the button with text Update
    Then Success message Measurement Order Added Successfully! appears
    Then Added data <weightFrequency> is successfully displaying in table
    Then Added data <heightFrequency> is successfully displaying in table
    When I click on the link text Update Measurement Order
    Then Fill end date field
    When I click on the button with text Update
    When I click on the link text Update Measurement Order
    When I click on the button with text Restart Measurement
    Then Verify that restart button is working as expected
    When I click on the button with text Update

    Examples:
      | patientName       | weightFrequency | heightFrequency |
      | Patient_Auto_Test | Daily           | Monthly         |

  Scenario Outline: Verify User is able to add , verify search and edit records added by adding all three fields
    When Hover over "Orders" tab
    When I click on the link text Measurement
    Then measurement-orders page displays
    When I click on the link text Update Measurement Order
    When I click on weight frequency dropdown and select option <weightFrequency>
    When I click on height frequency dropdown and select option <heightFrequency>
    When I click on head circumference frequency dropdown and select option <headFrequency>
    When I click on the button with text Update
    Then Success message Measurement Order update Successfully! appears
    Then Added data <heightFrequency> is successfully displaying in table
    Then Added data <headFrequency> is successfully displaying in table
# Then Added data <weightFrequency> is successfully displaying in table
    When I click on the link text Update Measurement Order
    When I click on weight frequency dropdown and select option <updatedWeightFrequency>
    When I click on height frequency dropdown and select option <updatedHeightFrequency>
    When I click on head circumference frequency dropdown and select option <updatedHeadFrequency>
    When I click on the button with text Update
    Then Added data <updatedHeightFrequency> is successfully displaying in table
# Then Added data <updatedHeadFrequency> is successfully displaying in table

    Examples:
      | patientName       | weightFrequency | heightFrequency | headFrequency | updatedHeadFrequency | updatedHeightFrequency | updatedWeightFrequency |
      | Patient_Auto_Test | Daily           | Weekly          | Monthly       | Daily                | Monthly                | Weekly                 |

  Scenario Outline: Verify the "Managing Provider" is not able to add "Nutrition order" and validation displays if any mandatory field is not populated and Verify that if the 'Managing Provider' selects the 'Yes' radio button only, the nutrition order should be created and Verify that the "History Chart" displays informative message if there is no "Nutrion order" created
    When Hover over "Orders" tab
    When I click on the link text Nutrition
    Then patient/nutrition page displays
    Then Link text New Nutrition Order is displaying
    When I click on the button with text Chart
    Then No data available. should be displayed
    Then User refresh page
    When I click on the link text New Nutrition Order
    Then Verify user is redirected to <firstOption> and Baby breastfeeding consistently? is displayed
    When I click on the button with text Next
    Then validation message Please select if the baby is breastfeeding consistently. appears
    When I click on the breast feeding "Yes" radio button
    When I click on the button with text Next
    Then Verify user is redirected to <secondOption> and Do you want baby to supplement after breastfeeding? is displayed
    When User click on the Multiple index "Next" Button
    Then validation message Please select if you want baby to supplement after breastfeeding. appears
    When I click on the supplement "Yes" radio button
    When User click on the Multiple index "Next" Button
    Then validation message Please enter the minimum mL/kg/day supplemental goal. appears
    Then validation message Please select if the infant is feeding ad lib. appears
    When I fill <invalidSupplementalGoal> data in "SupplementalGoal" field
    Then validation message Supplemental goal must be at least 1. appears
    When I fill <invalidMaxSupplementalGoal> data in "SupplementalGoal" field
    Then validation message Supplemental goal cannot be greater than 1000. appears
    When I fill <supplementalGoal> data in "SupplementalGoal" field
    When I click on the ad lib "Yes" radio button
    When User click on the Multiple index "Next" Button
    Then Verify user is redirected to <thirdOption> and Add Nutrition Entry is displayed
    When I click on the button with text Add Nutrition Entry
    Then It redirects on the New Nutrition Order screen
    When I fill <milkField> data in "Nutrition Milk" field
    When I fill <fortificationField> data in "Nutrition fortification" field
    When I fill <fortificationName> data in "Name" field
    When I fill <calories> data in "Calories" field
    When I click on the button with text Add
    Then Added data <milkField> is successfully displaying in table
    Then Added data <formula> is successfully displaying in table
    Then Added data <fortificationName> is successfully displaying in table
    Then Added data <calories> is successfully displaying in table
    When I click on the button with text Add Nutrition Entry
    When I fill <secondMilkType> data in "Nutrition Milk" field
    When I fill <fortificationField> data in "Nutrition fortification" field
    When I fill <fortificationName> data in "Name" field
    When I fill <calories> data in "Calories" field
    When I click on the button with text Add
    Then Added data <secondMilkType> is successfully displaying in table
    Then Added data <formula> is successfully displaying in table
    Then Added data <fortificationName> is successfully displaying in table
    Then Added data <calories> is successfully displaying in table
    When I click on the button with text Add Nutrition Entry
    When I fill <thirdMilkType> data in "Nutrition Milk" field
    When I fill New Formula data in "Formula" field
    When I fill formula <formula> data in "New Formula" field
    When I fill <calories> data in "Calories" field
    When I click on the button with text Add
    Then Added data <thirdMilkType> is successfully displaying in table
    Then Added data <formula> is successfully displaying in table
    Then Added data <calories> is successfully displaying in table
    When User click on the fourth index "Next" Button
    Then Every 3 hours value should displaying as the calculated value using <supplementalGoal> and <weightInKg>
    Then Every 4 hours value should displaying as the calculated value using <supplementalGoal> and <weightInKg>
    When I click on the button with text Update
    # When I populate data 100% in the "Search" field
    Then Selected data Breastfeeding Yes Supplement Yes Composition <calories>
    # Then Volume - Feeding goal - Bottel% 100 % Gavage - Ad Lib Yes is displaying in table
    Then Volume is displaying as the miltiplication of <supplementalGoal> and <weightInKg>
    When I click on the link Dashboard having third index
    Then Veirfy Todays PMA Age is displaying correct in Card
    Then Verify Todays Weight and Latest AWDG is displaying correct in card
    When Hover over "Orders" tab
    When I click on the link text Nutrition
    Then Feeding Goal bottle % and Gavage goal % should display correct in summary card
    Then Calories and acutal feeding goal and actual bottle % and gavage % should displaying as <value>

    Examples:
      | firstOption   | secondOption | feedingGoal | thirdOption | milkField   | fortificationField | fortificationName | calories | formula   | secondMilkType | thirdMilkType | fourthOption  | invalidBottlePercentage | validBottlePercentage | fifthOption | gavageDuration | invalidSupplementalGoal | supplementalGoal | invalidMaxSupplementalGoal | weightInKg | value |
      | Breastfeeding | Feeding Goal | 40 | Composition | Mother Milk | Other | Auto test | 30 | Auto test | Donor Milk | Formula | Bottle/Gavage | 0 | 90 | Summary | 30 minutes | 0 | 25 | 5000 | 3.86 | 0 |

  Scenario Outline: Verify the "Managing Provider" is able to add "Nutrition order" when selecting "No" ad lib option for brestfeeding workflow.
    Then User refresh page
    When Hover over "Orders" tab
    When I click on the link text Nutrition
    Then patient/nutrition page displays
    Then Link text New Nutrition Order is displaying
    When I click on the link text New Nutrition Order
    Then Verify user is redirected to <firstOption> and Baby breastfeeding consistently? is displayed
    When I click on the button with text Next
    Then validation message Please select if the baby is breastfeeding consistently. appears
    When I click on the breast feeding "Yes" radio button
    When I click on the button with text Next
    Then Verify user is redirected to <secondOption> and Do you want baby to supplement after breastfeeding? is displayed
    When User click on the Multiple index "Next" Button
    Then validation message Please select if you want baby to supplement after breastfeeding. appears
    When I click on the supplement "Yes" radio button
    When I fill <supplementalGoal> data in "SupplementalGoal" field
    When I click on the ad lib "No" radio button
    When User click on the Multiple index "Next" Button
    Then Verify user is redirected to <thirdOption> and Add Nutrition Entry is displayed
    When I click on the button with text Add Nutrition Entry
    Then It redirects on the New Nutrition Order screen
    When I fill <milkField> data in "Nutrition Milk" field
    When I fill <fortificationField> data in "Nutrition fortification" field
    When I fill <fortificationName> data in "Name" field
    When I fill <calories> data in "Calories" field
    When I click on the button with text Add
    Then Added data <milkField> is successfully displaying in table
    Then Added data <formula> is successfully displaying in table
    Then Added data <fortificationName> is successfully displaying in table
    Then Added data <calories> is successfully displaying in table
    When I click on the button with text Add Nutrition Entry
    When I fill <secondMilkType> data in "Nutrition Milk" field
    When I fill <fortificationField> data in "Nutrition fortification" field
    When I fill <fortificationName> data in "Name" field
    When I fill <calories> data in "Calories" field
    When I click on the button with text Add
    Then Added data <secondMilkType> is successfully displaying in table
    Then Added data <formula> is successfully displaying in table
    Then Added data <fortificationName> is successfully displaying in table
    Then Added data <calories> is successfully displaying in table
    When I click on the button with text Add Nutrition Entry
    When I fill <thirdMilkType> data in "Nutrition Milk" field
    When I fill New Formula data in "Formula" field
    When I fill formula <formula> data in "New Formula" field
    When I fill <calories> data in "Calories" field
    When I click on the button with text Add
    Then Added data <thirdMilkType> is successfully displaying in table
    Then Added data <formula> is successfully displaying in table
    Then Added data <calories> is successfully displaying in table
    When User click on the fourth index "Next" Button
    Then Verify user is redirected to <fourthOption> and What percent of feedings will be by bottle and gavage? is displayed
    When I fill <invalidBottlePercentage> data in "Bottle percentage" field
    When User click on the fifth index "Next" Button
    Then validation message Please select a gavage duration. appears
    When I fill <validBottlePercentage> data in "Bottle percentage" field
    When I fill <gavageDuration> data in "Gavage Duration" field
    When User click on the fifth index "Next" Button
    Then Every 3 hours value should displaying for No Ad lib as the calculated value using <supplementalGoal> and <weightInKg> bottles <validBottlePercentage> and <gavageDuration>
    Then Every 4 hours value should displaying for No Ad lib as the calculated value using <supplementalGoal> and <weightInKg> bottles <validBottlePercentage> and <gavageDuration>
    When I click on the button with text Update
    # When I populate data <validBottlePercentage>% in the "Search" field
    Then Selected data Breastfeeding Yes Supplement Yes Composition <calories>
    Then Feeding goal <supplementalGoal> Bottel% <validBottlePercentage> % Gavage 50% Ad Lib No is displaying in table
    Then Volume is displaying as the miltiplication of <supplementalGoal> and <weightInKg>
    Then Feeding Goal bottle % and Gavage goal % should display correct in summary card
    Then Calories and acutal feeding goal and actual bottle % and gavage % should displaying as <value>

    Examples:
      | firstOption   | secondOption | feedingGoal | thirdOption | milkField   | fortificationField | fortificationName | calories | formula   | secondMilkType | thirdMilkType | fourthOption  | invalidBottlePercentage | validBottlePercentage | fifthOption | gavageDuration | invalidSupplementalGoal | supplementalGoal | invalidMaxSupplementalGoal | weightInKg | volumeValue | value |
      | Breastfeeding | Feeding Goal | 40 | Composition | Mother Milk | Other | Auto test | 30 | Auto test | Donor Milk | Formula | Bottle/Gavage | 0 | 50 | Summary | 30 minutes | 0 | 25 | 5000 | 3.86 | 96.5 | 0 |

  Scenario Outline: Verify the "Managing Provider" is able to add "Nutrition order" when selecting "No" option in supplement after breastfeeding?for brestfeeding workflow..
    When Hover over "Orders" tab
    When I click on the link text Nutrition
    Then patient/nutrition page displays
    Then Link text New Nutrition Order is displaying
    When I click on the link text New Nutrition Order
    Then Verify user is redirected to <firstOption> and Baby breastfeeding consistently? is displayed
    When I click on the button with text Next
    Then validation message Please select if the baby is breastfeeding consistently. appears
    When I click on the breast feeding "Yes" radio button
    When I click on the button with text Next
    Then Verify user is redirected to <secondOption> and Do you want baby to supplement after breastfeeding? is displayed
    When User click on the Multiple index "Next" Button
    Then validation message Please select if you want baby to supplement after breastfeeding. appears
    When I click on the supplement "No" radio button
    When User click on the Multiple index "Next" Button
    Then Verify user is redirected to <fifthOption> and Doctor wants you to breastfeed on demand is displayed
    When I click on the button with text Update
    Then Selected data Breastfeeding Yes Supplement No Composition -
    Then Volume - Feeding goal - Bottel% - Gavage - Ad Lib Yes is displaying in table
    When I click on the button with text End Nutrition Order
    When I click on the button with text Yes
    Then Verify that end nutrition button is working
    Then End date is successfully displaying for nutrition order

    Examples:
      | fifthOption | firstOption   | secondOption |
      | Summary     | Breastfeeding | Feeding Goal |

  Scenario Outline: Verify that if the 'Managing Provider' selects the 'No' radio button only for Breastfeeding, the nutrition order should be created.
    When Hover over "Orders" tab
    When I click on the link text Nutrition
    Then patient/nutrition page displays
    Then Link text New Nutrition Order is displaying
    When I click on the link text New Nutrition Order
    Then Verify user is redirected to <firstOption> and Baby breastfeeding consistently? is displayed
    When I click on the breast feeding "No" radio button
    When I click on the button with text Next
    Then Verify user is redirected to <secondOption> and Desired total mL/kg/day feeding goal is displayed
    When I fill <feedingGoal> data in "Feeding goal" field
    When I click on the feeding ad lib "No" radio button
    When User click on the third index "Next" Button
    Then Verify user is redirected to <thirdOption> and Add Nutrition Entry is displayed
    When I click on the button with text Add Nutrition Entry
    Then It redirects on the New Nutrition Order screen
    When I fill <milkField> data in "Nutrition Milk" field
    When I fill <fortificationField> data in "Nutrition fortification" field
    When I fill <fortificationName> data in "Name" field
    When I fill <calories> data in "Calories" field
    When I click on the button with text Add
    Then Added data <milkField> is successfully displaying in table
    Then Added data <formula> is successfully displaying in table
    Then Added data <fortificationName> is successfully displaying in table
    Then Added data <calories> is successfully displaying in table
    When I click on the button with text Add Nutrition Entry
    When I fill <secondMilkType> data in "Nutrition Milk" field
    When I fill <fortificationField> data in "Nutrition fortification" field
    When I fill <fortificationName> data in "Name" field
    When I fill <calories> data in "Calories" field
    When I click on the button with text Add
    Then Added data <secondMilkType> is successfully displaying in table
    Then Added data <formula> is successfully displaying in table
    Then Added data <fortificationName> is successfully displaying in table
    Then Added data <calories> is successfully displaying in table
    When I click on the button with text Add Nutrition Entry
    When I fill <thirdMilkType> data in "Nutrition Milk" field
    When I fill <formula> data in "Formula" field
    When I fill <calories> data in "Calories" field
    When I click on the button with text Add
    Then Added data <thirdMilkType> is successfully displaying in table
    Then Added data <formula> is successfully displaying in table
    Then Added data <calories> is successfully displaying in table
    When User click on the fourth index "Next" Button
    Then Verify user is redirected to <fourthOption> and What percent of feedings will be by bottle and gavage? is displayed
    When I fill <invalidBottlePercentage> data in "Bottle percentage" field
    When User click on the fifth index "Next" Button
    Then validation message Please select a gavage duration. appears
    When I fill <validBottlePercentage> data in "Bottle percentage" field
    When I fill <gavageDuration> data in "Gavage Duration" field
    When User click on the fifth index "Next" Button
    Then Verify user is redirected to <fifthOption> and Doctor wants you to feed your infant with is displayed
    Then Every 3 hours value should displaying for No Ad lib as the calculated value using <feedingGoal> and <weightInKg> bottles <validBottlePercentage> and <gavageDuration>
    Then Every 4 hours value should displaying for No Ad lib as the calculated value using <feedingGoal> and <weightInKg> bottles <validBottlePercentage> and <gavageDuration>
    When I click on the button with text Update
    Then Selected data Breastfeeding No Supplement No Composition <calories>
    Then Feeding goal <feedingGoal> Bottel% <validBottlePercentage> % Gavage 50% Ad Lib No is displaying in table
    Then Volume is displaying as the miltiplication of <feedingGoal> and <weightInKg>
    Then Feeding Goal bottle % and Gavage goal % should display correct in summary card
    Then Calories and acutal feeding goal and actual bottle % and gavage % should displaying as <value>

    Examples:
      | firstOption   | secondOption | feedingGoal | thirdOption | milkField   | fortificationField | fortificationName | calories | formula   | secondMilkType | thirdMilkType | fourthOption  | invalidBottlePercentage | validBottlePercentage | fifthOption | gavageDuration | weightInKg | volumeValue | value |
      | Breastfeeding | Feeding Goal | 40 | Composition | Mother Milk | Other | Auto test | 30 | Auto test | Donor Milk | Formula | Bottle/Gavage | 0 | 50 | Summary | 30 minutes | 3.86 | 154.4 | 0 |

  Scenario Outline: Verify that if the 'Managing Provider' selects the 'No' radio button only for Breastfeeding but selects "Yes" option for ad lib, the nutrition order should be created.
    When Hover over "Orders" tab
    When I click on the link text Nutrition
    Then patient/nutrition page displays
    Then Link text New Nutrition Order is displaying
    Then Table should contain column name Start Date
    Then Table should contain column name Breastfeeding
    Then Table should contain column name Supplement
    Then Table should contain column name Composition
    Then Table should contain column name Volume (mL)
    Then Table should contain column name Feeding Goal (mL/kg)
    Then Table should contain column name Bottle %
    Then Table should contain column name Gavage %
    Then Table should contain column name Ad Lib
    When I click on the link text New Nutrition Order
    Then Verify user is redirected to <firstOption> and Baby breastfeeding consistently? is displayed
    When I click on the breast feeding "No" radio button
    When I click on the button with text Next
    Then Verify user is redirected to <secondOption> and Desired total mL/kg/day feeding goal is displayed
    When I fill <feedingGoal> data in "Feeding goal" field
    When For No breastfeeding click on the ad lib "Yes" radio button
    When User click on the third index "Next" Button
    Then Verify user is redirected to <thirdOption> and Add Nutrition Entry is displayed
    When I click on the button with text Add Nutrition Entry
    Then It redirects on the New Nutrition Order screen
    When I fill <milkField> data in "Nutrition Milk" field
    When I fill <fortificationField> data in "Nutrition fortification" field
    When I fill <fortificationName> data in "Name" field
    When I fill <calories> data in "Calories" field
    When I click on the button with text Add
    Then Added data <milkField> is successfully displaying in table
    Then Added data <formula> is successfully displaying in table
    Then Added data <fortificationName> is successfully displaying in table
    Then Added data <calories> is successfully displaying in table
    When I click on the button with text Add Nutrition Entry
    When I fill <secondMilkType> data in "Nutrition Milk" field
    When I fill <fortificationField> data in "Nutrition fortification" field
    When I fill <fortificationName> data in "Name" field
    When I fill <calories> data in "Calories" field
    When I click on the button with text Add
    Then Added data <secondMilkType> is successfully displaying in table
    Then Added data <formula> is successfully displaying in table
    Then Added data <fortificationName> is successfully displaying in table
    Then Added data <calories> is successfully displaying in table
    When I click on the button with text Add Nutrition Entry
    When I fill <thirdMilkType> data in "Nutrition Milk" field
    When I fill <formula> data in "Formula" field
    When I fill <calories> data in "Calories" field
    When I click on the button with text Add
    Then Added data <thirdMilkType> is successfully displaying in table
    Then Added data <formula> is successfully displaying in table
    Then Added data <calories> is successfully displaying in table
    When User click on the fourth index "Next" Button
    Then Every 3 hours value should displaying as the calculated value using <feedingGoal> and <weightInKg>
    Then Every 4 hours value should displaying as the calculated value using <feedingGoal> and <weightInKg>
    When I click on the button with text Update
    Then Selected data Breastfeeding No Supplement No Composition <calories>
    Then Volume is displaying as the miltiplication of <feedingGoal> and <weightInKg>
    When I click on the button with text Chart
    Then Nutrition graph should display on screen
    Then User refresh page
    Then Table should contain column name Start Date
    Then Table should contain column name Breastfeeding
    Then Table should contain column name Supplement
    Then Table should contain column name Composition
    Then Table should contain column name Volume (mL)
    Then Table should contain column name Feeding Goal (mL/kg)
    Then Table should contain column name Bottle %
    Then Table should contain column name Gavage %
    Then Table should contain column name Ad Lib
    Then Table should contain column name Weight (kg)
    Then Table should contain column name Average Intake (mL)

    Examples:
      | firstOption   | secondOption | feedingGoal | thirdOption | milkField   | fortificationField | fortificationName | calories | formula   | secondMilkType | thirdMilkType | fourthOption  | invalidBottlePercentage | validBottlePercentage | fifthOption | gavageDuration | weightInKg | volumeValue | mode        |
      | Breastfeeding | Feeding Goal | 40 | Composition | Mother Milk | Other | Auto test | 30 | Auto test | Donor Milk | Formula | Bottle/Gavage | 0 | 50 | Summary | 30 minutes | 3.86 | 154.4 | Review view |

  Scenario Outline: Verify the "Managing Provider" dashboard filters
    When I click on the second index link Dashboard - All Patients
    When I populate data <randomText> in the "Search" field
    Then No matching records found should be displayed
    When I click on the button with text Reset
    When On dashboard fill <hospital> data in hospital or office field
    When I fill <location> data in treatment Location field under active patients
    Then The results are displayed on the "Active Patient" list as per applied filter
    When I fill <homeLocation> data in treatment Location field under active patients
    Then Link text <patient> is displaying
    When I click on the button with text Reset
    Then Default values All Hospital and Both should be displayed in dropdown list
    When I hover over the "Settings" icon
    When I click on the link text Logout
    Then I get logged out from my account

    Examples:
      | url      | userA                     | patient               | secondPatientName | invalidData | updatedFirstName   | updatedLastName | updatedHospitalLocation | services    | treatment | status | servicesCheckbox          | inactiveStatus | treatmentLocation | validFirstName    | dashboard-PatientListOption | primaryProvider        | homeLocation | dashboard-AddPatientOption | validLastName | gender | hospital | formServices    | treatmentHomeLocation | randomText | location |
      | loginUrl | providerLoginCrendentails | Patient_Auto_Test Ben | QA_Patient | 1 | Updated_QA_Patient | Testman | Lakewood | TELEMED,EMR | Discharge | Active | Remote patient monitoring | Inactive | Readmit | Auto_Test_Patient | My Patient List | managing_auto_provider | Hospital | Add A New Patient | Testman | Female | Default | RPM,TELEMED,EMR | Readmit | @@@@@@ | Hospital |
