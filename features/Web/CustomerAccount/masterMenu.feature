Feature: Test suit for "Master Menu" page

  Scenario Outline: Verify the create "New hospital note" functionality using both valid and invalid data also verify search and delete functionality
    When Open web url <url>
    When Web app login using <userA>
    Then Verify that user successfully redirected on homepage
    When I click on the second index link Master
    When I click on the second index link Hospital Note
    Then hospitalNote page displays
    Then Search and delete duplicate data <note>
    When User click on the button text New Hospital Note
    When I click on the button with text Create
    Then validation message Hospiital note is required. appears
    When I fill <note> in hospital note field
    When I click on the button with text Create
    Then Success message Hospital Note Added Succesfully! appears
    When I populate data <note> in the "Search" field
    Then New Hospital note <note> should display under list
    When I click On "Delete" icon
    Then Success message Hospital Note Deleted !! appears

    Examples:
      | note               | url      | userA                     |
      | Auto_Hospital_Note | loginUrl | customerLoginCrendentails |

  Scenario Outline: Verify the create "New hospital note" functionality
    Then Search and delete duplicate data <note>
    When User click on the button text New Hospital Note
    When I click on the button with text Create
    Then validation message Hospiital note is required. appears
    When I fill <note> in hospital note field
    When I click on the button with text Create
    Then Success message Hospital Note Added Succesfully! appears
    When I populate data <note> in the "Search" field
    Then New Hospital note <note> should display under list

    Examples:
      | note               | url      | userA                     |
      | Auto_Hospital_Note | loginUrl | customerLoginCrendentails |

  Scenario Outline: Verify that "Customer" is able to update " Diagnosis Type" details with valid data and Verify "Customer" is able to "Search" Diagnosis Type and Verify "Customer is able to "Delete" the "Diagnosis Type" when clicked on "Delete" icon and Verify that "Customer" is not able to add "New Diagnosis Type" and validation message is displaying if mandatory fields is not populated
    When I click on the second index link Master
    When I click on the second index link Diagnosis Type
    Then diagnosisType page displays
    Then Search and delete duplicate data <suggestedDiagnosisType>
    When I click on the button with text New Diagnosis Type
    Then It redirects on the New Diagnosis Type screen
    When I click on the button with text Create
    Then validation message Please Enter Diagnosis Type appears
    When I fill <specialCharactors> data in more information field
    When I click on the button with text Create
    Then validation message Please enter a valid URL appears
    When I click on the button with text Close
    Then New Diagnosis Type popup should be closed successfully
    When I click on the button with text New Diagnosis Type
    Then It redirects on the New Diagnosis Type screen
    When I add first 4 character <diagnosisType> in "Diagnosis Type" fields on the form
    Then list of diagnosis should appear according to added character
    When I select any "Diagnosis Type" <suggestedDiagnosisType> from the list
    When I fill <moreInformation> data in more information field
    When I click on the button with text Create
    Then Success message Diagnosis Type Added Succesfully! appears
    When I populate data <suggestedDiagnosisType> in the "Search" field
    Then A "New Diagnosis type" gets created and it displays on the "Diagnosis type" list with <suggestedDiagnosisType> and <diagnosisCode> and <moreInformation>
    Then Search and delete duplicate data <updatedsuggestedType>
    When I populate data <suggestedDiagnosisType> in the "Search" field
    When User click on the "View or Update" option under "Action" section
    Then It redirects on the Update Diagnosis Type Detail screen
    When I add first 4 character <updatedDiagnosisType> in "Diagnosis Type" fields on the form
    Then list of diagnosis should appear according to added character
    When I select any "Diagnosis Type" <updatedsuggestedType> from the list
    When I click on the button with text Update
    Then Success message Diagnosis Type Updated Succesfully! appears
    When I populate data <updatedsuggestedType> in the "Search" field
    Then A "New Diagnosis type" gets created and it displays on the "Diagnosis type" list with <updatedsuggestedType> and <updatedDiagnosisCode> and <moreInformation>
    When I populate data <specialCharactors> in the "Search" field
    Then No matching records found should be displayed
    When I populate data <updatedsuggestedType> in the "Search" field

    Examples:
      | url      | userA                     | suggestedDiagnosisType | specialCharactors | updatedDiagnosisType | updatedsuggestedType | moreInformation                          | updatedDiagnosisCode | diagnosisType | diagnosisCode |
      | loginUrl | customerLoginCrendentails | Skin rash              | @@##$%$%%%        | Hair                 | Twisted hair         | https://portal.test.firstdayhc.com/login |             17170005 | Skin          |     271807003 |

  Scenario Outline: Verify that "Customer" is able to create "New Diagnosis Type" populated with valid data and Verify that "Customer " is not able to create "New Diagnosis type" with same name
    When I click on the second index link Master
    When I click on the second index link Diagnosis Type
    Then diagnosisType page displays
    Then Search and delete duplicate data <suggestedDiagnosisType>
    When I click on the button with text New Diagnosis Type
    Then It redirects on the New Diagnosis Type screen
    When I add first 4 character <diagnosisType> in "Diagnosis Type" fields on the form
    Then list of diagnosis should appear according to added character
    When I select any "Diagnosis Type" <suggestedDiagnosisType> from the list
    When I fill <moreInformation> data in more information field
    When I click on the button with text Create
    Then Success message Diagnosis Type Added Succesfully! appears
    When I populate data <suggestedDiagnosisType> in the "Search" field
    Then A "New Diagnosis type" gets created and it displays on the "Diagnosis type" list with <suggestedDiagnosisType> and <diagnosisCode> and <moreInformation>
    When I click on the button with text New Diagnosis Type
    Then It redirects on the New Diagnosis Type screen
    When I add first 4 character <diagnosisType> in "Diagnosis Type" fields on the form
    Then list of diagnosis should appear according to added character
    When I select any "Diagnosis Type" <suggestedDiagnosisType> from the list
    When I click on the button with text Create
    Then validation message Please enter a unique diagnosis type appears
    When I click on the button with text Close

    Examples:
      | diagnosisType | suggestedDiagnosisType | moreInformation                          | diagnosisCode |
      | Skin          | Skin rash              | https://portal.test.firstdayhc.com/login |     271807003 |

  Scenario Outline: Verify that "Customer" is not able to add "New Vaccine Type" and validation message is displaying if mandatory fields is not populated and Verify that "Customer " is able to close "New Vaccine Type" popup by clicking on "Close" button and Verify that "Customer " is not able to create "New Vaccine type" with same name
    When I click on the second index link Master
    When I click on the second index link Vaccine Type
    Then vaccineType page displays
    Then Search and delete duplicate data <vaccineName>
    When User click on the button text New Vaccine Type
    Then It redirects on the New Vaccine Type screen
    When I click on the button with text Create
    Then validation message Please Enter CVX Code appears
    Then validation message Please Enter Name appears
    Then validation message Please Select Status appears
    When I fill <cvxCode> data in cvx code field
    When I fill <vaccineName> data in vaccine Name field
    When I fill <brandName> data in brand Name field
    When I fill <description> data in description field
    When I fill <note> data in note field
    When I fill <status> data in status field
    When I fill <internalID> data in internal ID field
    When I fill <nonVaccine> data in non vaccine field
    When I fill <cvxCode> data in update date field
    When I fill <favourite> data in favourite field
    When I click on the button with text Create
    Then Success message Vaccine Type Added Succesfully! appears
    When I populate data <vaccineName> in the "Search" field
    Then "Vaccine type" details should be visible in the list with <cvxCode> and <brandName> and <vaccineName> and <description> and <note> and <status> and <internalID> and <nonVaccine> and <favourite> and <date>
    When User click on the button text New Vaccine Type
    Then It redirects on the New Vaccine Type screen
    When I fill <cvxCode> data in cvx code field
    When I fill <vaccineName> data in vaccine Name field
    When I fill <status> data in status field
    When I click on the button with text Create
    Then validation message Please Enter a Unique CVX Code appears
    Then validation message Please Enter a Unique Vaccine Name appears
    When I click on the button with text Close
    Then New Vaccine Type popup should be closed successfully

    Examples:
      | url      | userA                     | cvxCode | vaccineName       | brandName  | description                                                             | note                                          | status | nonVaccine | favourite | internalID |
      | loginUrl | customerLoginCrendentails | 12300   | Auto_Test_Vaccine | Healthcare | The Auto_Test_Vaccine vaccine is designed to protect us from the virus. | Consult the doctor before using this vaccine. | Active | True       | Yes       | Test@123   |

  Scenario Outline: Verify "Customer" is able to "Search" "Vaccine Type" with valid data and 	Verify that "Customer" is not able to update " Vaccine Type" details and validation message is displaying if mandatory fields is not populated and Verify that "Customer" is able to update " Vaccine Type" details with valid data and and 	Verify "Customer" is able to "Delete" the "Vaccine Type" when clicked on "Delete" icon
    When I click on the second index link Master
    When I click on the second index link Vaccine Type
    Then vaccineType page displays
    When I populate data <specialCharactors> in the "Search" field
    Then No matching records found should be displayed
    When I populate data <vaccineName> in the "Search" field
    When User click on the "View or Update" option under "Action" section
    Then It redirects on the Update Vaccine Type Detail screen
    When I directly clicking on the "Create" button without filling in any value in the vaccine name and status field
    Then validation message Please Enter CVX Code appears
    Then validation message Please Enter Name appears
    When I fill <updatedCvxCode> data in cvx code field
    When I fill <updatedVaccineName> data in vaccine Name field
    When I fill <updatedBrandName> data in brand Name field
    When I fill <updatedDescription> data in description field
    When I fill <updatedNote> data in note field
    When I fill <updatedStatus> data in status field
    When I fill <updatedInternalID> data in internal ID field
    When I fill <updatedNonVaccine> data in non vaccine field
    When I fill <cvxCode> data in update date field
    When I fill <updatedFavourite> data in favourite field
    When I click on the button with text Update
    Then Success message Vaccine Type Updated Succesfully! appears
    When I populate data <updatedVaccineName> in the "Search" field
    Then "Vaccine type" details should be visible in the list with <updatedCvxCode> and <updatedBrandName> and <updatedVaccineName> and <updatedDescription> and <updatedNote> and <updatedStatus> and <updatedInternalID> and <updatedNonVaccine> and <updatedFavourite> and <date>
    When I populate data <updatedVaccineName> in the "Search" field
    When I click On "Delete" icon
    Then Success message Vaccine Type Deleted !! appears
    Then Deleted record should not be visible in the list

    Examples:
      | specialCharactors | vaccineName       | updatedCvxCode | updatedVaccineName        | updatedBrandName  | updatedDescription                                                              | updatedNote                                          | updatedStatus | updatedInternalID | updatedNonVaccine | updatedFavourite |
      | @@##$%$%%%        | Auto_Test_Vaccine | 98754          | Updated_Auto_Test_Vaccine | updatedHealthcare | The updated Auto_Test_Vaccine vaccine is designed to protect us from the virus. | Do not get vaccinated without consulting the doctor. | Inactive      | @Test12345        | False             | No               |

  Scenario Outline: Verify that "Customer" is able to create "New Vaccine Type" populated with valid data
    When I click on the second index link Master
    When I click on the second index link Vaccine Type
    Then vaccineType page displays
    Then Search and delete duplicate data <vaccineName>
    When User click on the button text New Vaccine Type
    Then It redirects on the New Vaccine Type screen
    When I fill <cvxCode> data in cvx code field
    When I fill <vaccineName> data in vaccine Name field
    When I fill <brandName> data in brand Name field
    When I fill <description> data in description field
    When I fill <note> data in note field
    When I fill <status> data in status field
    When I fill <internalID> data in internal ID field
    When I fill <nonVaccine> data in non vaccine field
    When I fill <cvxCode> data in update date field
    When I fill <favourite> data in favourite field
    When I click on the button with text Create
    Then Success message Vaccine Type Added Succesfully! appears
    When I populate data <vaccineName> in the "Search" field
    Then "Vaccine type" details should be visible in the list with <cvxCode> and <brandName> and <vaccineName> and <description> and <note> and <status> and <internalID> and <nonVaccine> and <favourite> and <date>

    Examples:
      | cvxCode | vaccineName       | brandName  | description                                                             | note                                          | status | nonVaccine | favourite | internalID |
      | 12300   | Auto_Test_Vaccine | Healthcare | The Auto_Test_Vaccine vaccine is designed to protect us from the virus. | Consult the doctor before using this vaccine. | Active | True       | Yes       | Test@123   |
