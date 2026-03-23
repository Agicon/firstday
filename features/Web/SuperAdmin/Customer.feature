Feature: Test suit for create customer page

  Scenario Outline: User logged in and out as admin
    Given Open web url <url>
    When Web app login using <userA>
    When I hover over the "Settings" icon
    When I click on the link text Logout
    Then I get logged out from my account

    Examples:
      | url      | userA |
      | loginUrl | admin |

  Scenario Outline: User logged in as admin and verify all redirection scripts
    Given Open web url <url>
    When Web app login using <userA>
    Then admin/getUserAnalyze page displays
    Then It redirects on the Dashboard screen
    Then Table is displaying on screen
    Then Added data Average Patients is successfully displaying in table
    Then Added data Average Providers is successfully displaying in table
    Then Added data Total New Providers is successfully displaying in table
    Then Added data Total New Patients is successfully displaying in table
    Then Verify chart on dashboard screen
    Then Verify customer dropdown on dashboard screen
    Then Verify date range dropdown on dashboard screen
    When I click on the "Customers" tab
    Then administrator page displays
    Then I navigate to the "Customers" page
    Then Table is displaying on screen
    When I click on the second index link Contact Us
    Then contact_us page displays
    Then It redirects on the Contact Us screen
    Then Table is displaying on screen
    When I click on the second index link CMS
    Then CMS page displays
    Then It redirects on the CMS screen
    Then Table is displaying on screen
    When I click on the second index link Device Management
    Then device page displays
    Then It redirects on the Device Management screen
    When I hover over the "More" link text
    When I click on the second index link Upload LOINC CSV
    Then loinccsv page displays
    Then It redirects on the Upload LOINC CSV screen
    Then Table is displaying on screen
    When I hover over the "More" link text
    When I click on the second index link Upload RxNorm RRF
    Then rxnormRRF page displays
    Then It redirects on the Upload RxNorm RRF screen
    Then Table is displaying on screen
    When I hover over the "Settings" icon
    Then Link text Logout is displaying
    Then Link text Profile is displaying
    Then Link text Change Password is displaying
    When I click on the link text Profile
    Then profile page displays
    Then It redirects on the Update Profile screen
    Then Form is displaying on screen
    Then Button text Update is displayed on screen
    When I hover over the "Settings" icon
    When I click on the link text Change Password
    Then changePassword page displays
    Then Form is displaying on screen
    Then Button text Update is displayed on screen
    Then It redirects on the Change Password screen

    Examples:
      | url      | userA |
      | loginUrl | admin |

  Scenario Outline: Verify the view and search functionality on "LOINC CSV" page
    When I hover over the "More" link text
    When I click on the second index link Upload LOINC CSV
    Then loinccsv page displays
    When I click on the button with text Upload
    Then <validation> should be displayed
    Then Verify User is able to search data from table
    When upload file in csv field <image>
    When I click on the button with text Upload
    Then <wrongFileValidation> should be displayed

    Examples:
      | validation           | image      | wrongFileValidation        |
      | Please Select a File | Picture(2) | Only CSV Files are allowed |

  Scenario Outline: Verify the view and search functionality on "RxNorm RRF" page
    When I hover over the "More" link text
    When I click on the second index link Upload RxNorm RRF
    Then rxnormRRF page displays
    Then It redirects on the Upload RxNorm RRF screen
    When I click on the button with text Upload
    Then <validation> should be displayed
    When upload file in csv field <image>
    When I click on the button with text Upload
    Then <wrongFileValidation> should be displayed

    Examples:
      | validation           | image      | wrongFileValidation        |
      | Please Select a File | Picture(2) | Only RRF Files are allowed |

  Scenario Outline: Verify the view and search functionality on "CMS" page
    When I click on the second index link CMS
    Then CMS page displays
    Then It redirects on the CMS screen
    Then Table is displaying on screen
    Then I Search data <pageName>
    Then Added data <pageName> is successfully displaying in table
    When I click on the "View or Update" option under the "Action" section
    Then Selected page name <pageName> is displayed under view screen
    When I click on the button with text Update
    Then Success message CMS Update Succesfully ! appears

    Examples:
      | pageName |
      | About Us |

  Scenario Outline: Verify the "Super Admin" is not able to create "New Customer" and validation displays if any mandatory field is not populated and verify the working of close button in popup
    When I click on the "Customers" tab
    Then I navigate to the "Customers" page
    When I click on the "New Customer" button
    Then "New customer" form displays
    When I click on the button with text Create
    Then validation message Please enter hospital/clinic name appears
    Then validation message Please enter first name appears
    Then validation message Please enter email address appears
    Then validation message Please enter last name appears
    Then validation message Please enter no of patient licence appears
    Then validation message Please enter service expiry date appears
    When I fill <invalidData> data in clinic name field
    When I click on the button with text Create
    Then validation message Please enter at least 2 characters. appears
    When I fill <validData> data in clinic name field
    When I fill <invalidData> data in first name field
    When I click on the button with text Create
    Then validation message Please enter at least 2 characters. appears
    When I fill <validData> data in first name field
    When I fill <invalidData> data in last name field
    When I click on the button with text Create
    Then validation message Please enter at least 2 characters. appears
    When I fill <validData> data in last name field
    When I fill <invalidData> data in email field
    When I click on the button with text Create
    Then validation message Please enter a valid email address. appears
    When I fill <invalidData> data in phone number field
    When I click on the button with text Create
    Then validation message Please enter at least 10 digits. appears
    When I fill <validData> data in phone number field
    When I click on the button with text Create
    Then validation message Please enter only numbers appears
    When I fill <validPhone> data in phone number field
    When I fill <invalidData> data in office number field
    When I click on the button with text Create
    Then validation message Please enter at least 10 digits. appears
    When I fill <validData> data in office number field
    When I click on the button with text Create
    Then validation message Please enter only numbers appears
    When I fill <validPhone> data in office number field
    When I fill <invalidData> data in zip code field
    When I click on the button with text Create
    Then validation message Please enter valid zipcode appears
    When I fill <invalidData> data in number of licence field
    When I click on the button with text Create
    Then validation message Please enter a value greater than or equal to 1. appears
    When I fill <invalidData> data in expiry field
    When I click on the button with text Create
    Then validation message Expiry date must be greater than today. appears
    When I click on the button with text Close
    Then A "New Customer" form closes

    Examples:
      | url      | userA | invalidData | validData | validPhone |
      | loginUrl | admin | 0           | Testing   | 2026839019 |

  Scenario Outline: Verify the "Super Admin" is able to create "New Customer" when only mandatory fields are populated and check validation when using already registered email
    When I click on the "Customers" tab
    Then I navigate to the "Customers" page
    Then Search and delete duplicate data <validClinicName>
    When I click on the "Customers" tab
    When I click on the "New Customer" button
    Then "New customer" form displays
    When I fill <validClinicName> data in clinic name field
    When I fill <validFirstName> data in first name field
    When I fill <validLastName> data in last name field
    When I fill valid and unique data in email
    When I fill <validNumberOfLicence> data in number of licence field
    When I fill valid date in expiry field
    When I click on the button with text Create
    Then A "New Customer" gets created and it displays clinic name <validClinicName> first name <validFirstName> last name <validLastName> email and licence number <validNumberOfLicence> on the "Customers list"
    When I populate fields but I populate "Email field" with already registered email
    When I fill <validClinicName> data in clinic name field
    When I fill <validFirstName> data in first name field
    When I fill <validLastName> data in last name field
    When I fill <validNumberOfLicence> data in number of licence field
    When I fill valid date in expiry field
    When I click on the button with text Create
    Then validation message This email has already been taken appears
    When I click on the button with text Close

    Examples:
      | validClinicName  | validFirstName | validLastName | validNumberOfLicence |
      | Auto_Test_Clinic | David          | William       | 998                  |

  Scenario Outline: Verify the "Super Admin" is able to create "New Customer" when all the fields are populated,view customer verification
    When I click on the "Customers" tab
    Then I navigate to the "Customers" page
    Then Search and delete duplicate data <validClinicName>
    When I click on the "Customers" tab
    When I click on the "New Customer" button
    Then "New customer" form displays
    When I fill <validClinicName> data in clinic name field
    When I fill <validFirstName> data in first name field
    When I fill <validLastName> data in last name field
    When I fill valid and unique data in email
    When I fill <validPhone> data in phone number field
    When I fill <validPhone> data in office number field
    When I fill <validZip> data in zip code field
    When I fill <validInformation> data in office information field
    When I fill <country> data in country field
    When I fill <state> data in state field
    When I fill <city> data in city field
    When I fill <validNumberOfLicence> data in number of licence field
    When I fill valid date in expiry field
    When I click on the button with text Create
    Then A "New Customer" gets created and it displays clinic name <validClinicName> first name <validFirstName> last name <validLastName> email and licence number <validNumberOfLicence> on the "Customers list"
    When I click on the "View" icon under "Action" column
    Then I navigates to the Customer <validClinicName> details page
    When I click on the "Customers" tab
    Then A "New Customer" gets created and it displays clinic name <validClinicName> first name <validFirstName> last name <validLastName> email and licence number <validNumberOfLicence> on the "Customers list"
    When I click On "Edit" icon
    When I update the "Customer form" but does not populate one of the mandatory field and click on the Update button
    Then validation message Please enter hospital/clinic name appears
    When I fill <invalidData> data in clinic name field
    When I click on the button with text Update
    Then validation message Please enter at least 2 characters. appears
    When User click on the "Back" button on "update customer" page
    Then I navigate to the "Customers" page
    Then A "New Customer" gets created and it displays clinic name <validClinicName> first name <validFirstName> last name <validLastName> email and licence number <validNumberOfLicence> on the "Customers list"
    When I click On "Edit" icon
    When I fill <updatedClinicName> data in clinic name field
    When I fill <updatedFirstName> data in first name field
    When I fill <updatedLastName> data in last name field
    When I fill <validNumberOfLicence> data in number of licence field
    When I click on the button with text Update
    Then Success message Customer Updated Succesfully ! appears
    Then A "New Customer" gets created and it displays clinic name <updatedClinicName> first name <updatedFirstName> last name <updatedLastName> email and licence number <validNumberOfLicence> on the "Customers list"
    When I click On "Delete" icon
    Then Success message Customer Deleted successfully !! appears

    Examples:
      | validClinicName  | validFirstName | validLastName | validNumberOfLicence | validPhone | validZip | validInformation | country | state | city   | invalidData | updatedClinicName     | updatedFirstName      | updatedLastName      |
      | Auto_Test_Clinic | John           | William       | 98                   | 3652984561 | 10001    | I am QA engg.    | India   | New   | tester | 2           | UpdateAutomatedClinic | updatedAutomatedFirst | updatedAutomatedLast |

  Scenario Outline: Verify Super admin is not able to add new device under "Device Management" and verify all validations, also verify User is able to add new device using valid data
    When I click on the second index link Device Management
    Then device page displays
    Then It redirects on the Device Management screen
    Then Search and delete duplicate data <companyName>
    When I click on the button with text Add Device
    Then It redirects on the Add Device screen
    When I click on the button with text Save
    Then validation message Please select vital type. appears
    Then validation message Please enter company name. appears
    When I click on "Vital Type" dropdown
    Then Click on option <vitalType1> from list
    When Fill <companyName> in company name field
    When I click on the button with text Save
    Then Success message Device Added Succesfully appears
    When I populate data <companyName> in the "Search" field
    Then Verify new device is added with vitral <vitalType1> and company name <companyName>

    Examples:
      | vitalType1 | companyName           | vitalType2    | vitalType3  |
      | ECG        | Auto_Company_test_ECG | O2 Saturation | Temperature |

  Scenario Outline: Verify Super admin is not able to Update device under "Device Management" and verify all validations, also verify User is able to Update new device using valid data and verify delete functionality
    When I click on the second index link Device Management
    Then device page displays
    Then It redirects on the Device Management screen
    Then Search and delete duplicate data <updatedCompanyName>
    When I populate data <vitalType1> in the "Search" field
    When I click on the "View or Update" option under the "Action" section
    Then It redirects on the Device Update screen
    When I click on "Vital Type" dropdown
    Then Click on option <vitalDefault> from list
    When I click on the button with text Update
    Then validation message Please select vital type. appears
    When I click on "Vital Type" dropdown
    Then Click on option <vitalType2> from list
    When Fill <updatedCompanyName> in company name field
    When I click on the button with text Update
    When I populate data <updatedCompanyName> in the "Search" field
    Then Verify new device is added with vitral <vitalType2> and company name <updatedCompanyName>
    When I click On "Delete" icon
    Then Deleted record should not be visible in the list

    Examples:
      | vitalType1 | updatedCompanyName     | vitalDefault             | vitalType2  |
      | ECG        | Auto_Company_test_temp | Please select vital type | Temperature |

  Scenario Outline: Verify user is able to add ECG device under Device Management
    Then Search and delete duplicate data <companyName>
    When I click on the button with text Add Device
    Then It redirects on the Add Device screen
    When I click on "Vital Type" dropdown
    Then Click on option <vitalType> from list
    When Fill <companyName> in company name field
    When I click on the button with text Save
    Then Success message Device Added Succesfully appears
    When I populate data <vitalType> in the "Search" field
    Then Verify new device is added with vitral <vitalType> and company name <companyName>

    Examples:
      | vitalType | companyName           |
      | ECG       | Auto_Company_test_ECG |

  Scenario Outline: Verify user is able to add O2 Saturation device under Device Management
    Then Search and delete duplicate data <companyName>
    When I click on the button with text Add Device
    Then It redirects on the Add Device screen
    When I click on "Vital Type" dropdown
    Then Click on option <vitalType> from list
    When Fill <companyName> in company name field
    When I click on the button with text Save
    Then Success message Device Added Succesfully appears
    When I populate data <companyName> in the "Search" field
    Then Verify new device is added with vitral <vitalType> and company name <companyName>

    Examples:
      | vitalType     | companyName          |
      | O2 Saturation | Auto_Company_test_O2 |

  Scenario Outline: Verify user is able to add Temperature device under Device Management
    Then Search and delete duplicate data <companyName>
    When I click on the button with text Add Device
    Then It redirects on the Add Device screen
    When I click on "Vital Type" dropdown
    Then Click on option <vitalType> from list
    When Fill <companyName> in company name field
    When I click on the button with text Save
    Then Success message Device Added Succesfully appears
    When I populate data <companyName> in the "Search" field
    Then Verify new device is added with vitral <vitalType> and company name <companyName>

    Examples:
      | vitalType   | companyName            |
      | Temperature | Auto_Company_test_temp |

  Scenario Outline: Verify the functionality of active and inactive Status
    When I click on the "Customers" tab
    Then I navigate to the "Customers" page
    Then I Search data <validClinicName>
    When I click on link text Active
    Then Status should be displayed as Inactive
    When I hover over the "Settings" icon
    When I click on the link text Logout
    Then I get logged out from my account
    Given Open web url <url>
    When Web app login using <customer>
    Then validation message You are not allow to login. Please contact support team. appears
    Given Open web url <url>
    When Web app login using <userA>
    When I click on the "Customers" tab
    Then I navigate to the "Customers" page
    Then I Search data <validClinicName>
    When I click on link text Inactive
    Then Status should be displayed as Active
    When I hover over the "Settings" icon
    When I click on the link text Logout
    Then I get logged out from my account
    Given Open web url <url>
    When Web app login using <customer>
    Then Verify that user successfully redirected on homepage

    Examples:
      | validClinicName      | url      | userA | customer               |
      | Auto_cust_for_status | loginUrl | admin | customerForStatusCheck |
