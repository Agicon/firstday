Feature: Test suit for "Managing Provider","Other provider" and "Sub-Admin" pages

  Scenario Outline: Login as customer and verify the all options redirections
    When Open web url <url>
    When Web app login using <userA>
    Then Verify that user successfully redirected on homepage
    Then It redirects on the Dashboard screen
    Then Verify text No. Of Active Managing Provider is displaying on dashboard
    Then Verify text Electronic medical record is displaying on dashboard
    Then Verify text No. Of Inactive Managing Provider is displaying on dashboard
    Then Verify text No. Of Active Patient : is displaying on dashboard
    Then Verify text Remote patient monitoring is displaying on dashboard
    Then Verify text No. of Caregiver is displaying on dashboard
    Then Verify text No. of Unassigned Patient is displaying on dashboard
    When I click on the second index link Managing Providers
    Then providers page displays
    Then User should on "Managing Provider" page
    Then Table is displaying on screen
    When I click on the second index link Subadmin
    Then subadmin page displays
    Then Table is displaying on screen
    When I click on the second index link Other Providers
    Then manageProviders page displays
    Then Table is displaying on screen
    When I click on the second index link Assign Providers
    Then patients page displays
    Then Table is displaying on screen
    When I hover over the "Alerts" icon
    Then Second index Link text Patient Alerts is displaying
    Then Second index Link text Provider Alerts is displaying
    When I click on the second index link Patient Alerts
    Then alerts page displays
    Then Table is displaying on screen
    When I hover over the "Alerts" icon
    When I click on the second index link Provider Alerts
    Then alerts/provider page displays
    Then Table is displaying on screen
    When I click on the second index link Assign Providers
    Then administrator/patients page displays
    Then Table is displaying on screen
    When I click on the second index link Master
    When I click on the second index link Vaccine Type
    Then vaccineType page displays
    Then Table is displaying on screen
    When I click on the second index link Master
    When I click on the second index link Hospital Note
    Then hospitalNote page displays
    Then Table is displaying on screen
    When I click on the second index link Master
    When I click on the second index link All Patients Alert
    Then administrator/allAlert page displays
    Then Table is displaying on screen
    When I click on the second index link Master
    When I click on the second index link Hospital/Office
    Then administrator/hospital page displays
    Then Table is displaying on screen
    When I click on the second index link Master
    When I click on the second index link Alert Duration
    Then alertDuration page displays
    Then Form is displaying on screen
    When I hover over the "Settings" icon
    Then Link text Logout is displaying
    Then Link text Profile is displaying
    Then Link text Change Password is displaying
    When I click on the link text Profile
    Then profile page displays
    Then It redirects on the Update Profile screen
    # Then Update and verify lat name under My Profile section
    Then Form is displaying on screen
    When I hover over the "Settings" icon
    When I click on the link text Change Password
    Then changePassword page displays
    Then Button text Update is displayed on screen
    Then Form is displaying on screen
    Then It redirects on the Change Password screen

    Examples:
      | url      | userA                     |
      | loginUrl | customerLoginCrendentails |

  Scenario Outline: Verify the "Customer" is not able to create "New Managing Provider" and validation displays if any mandatory field is not populated and verify that "Close" button is working on "New Managing Provider" form and verify the validation if user add invalid data in "Managing Providing" form.
    When User click on "Managing Provider" tab
    Then User should on "Managing Provider" page
    When User click on the "New Managing Provider" button
    Then "New Managing Provider" form displays
    When I click on the button with text Create
    Then validation message Please enter email address appears
    Then validation message Please enter name appears
    When User add <invalidName> in name field
    When I click on the button with text Create
    Then validation message Please enter at least 2 characters. appears
    When I fill <invalidName> data in last name field
    When I click on the button with text Create
    Then validation message Please enter at least 2 characters. appears
    When I fill <validLastName> data in last name field
    When User add <invalidEmail> in email field
    Then validation message Please enter valid email. appears
    When User add <textInMobileNumber> in mobile number field
    When I click on the button with text Create
    Then validation message Please enter only numbers appears
    When User add <invalidMobileNumber> in mobile number field
    Then validation message Please enter at least 10 digits. appears
    When User add <invaliWebsite> in website field
    When I click on the button with text Create
    Then validation message Please enter a valid website URL appears
    When User add <textInMobileNumber> in office number field
    When I click on the button with text Create
    Then validation message Please enter only digits. appears
    When User add <invalidMobileNumber> in office number field
    Then validation message Please enter at least 10 characters. appears
    When User add <invalidName> in zipcode field
    When I click on the button with text Create
    Then validation message Please enter valid zipcode appears
    When I click on the button with text Close
    Then The "New Managing Provider" form should be closed

    Examples:
      | invalidName | invalidEmail  | textInMobileNumberField | invalidMobileNumber | invaliWebsite      | validLastName |
      |           1 | @@@@gmail.com | abcdef                  |               12453 | https://www.@@.com | auto          |

  Scenario Outline: Verify the "Customer" is able to create "New Managing Provider" when only the mandatory fields are populated with valid data and also check "Customer" is not able to create "New Managing Provider" with already registered email
    When User click on "Managing Provider" tab
    Then User should on "Managing Provider" page
    Then Search and delete duplicate data <validName>
    When User click on the "New Managing Provider" button
    Then "New Managing Provider" form displays
    When User add <validName> in name field
    When I fill <validLastName> data in last name field
    When User fill unique data in email field
    When I click on the button with text Create
    Then Success message Managing Provider Added Succesfully. Credentials will be sent to an email! appears
    Then a "New Managing Provider" gets created And it displays <validName> in the "Managing Provider" list
    When User use already registered <validName> and email to create new providing manager and click on Create button
    Then validation message Please Enter Unique email. This email is already register with system. appears
    When I click on the button with text Close
    Then The "New Managing Provider" form should be closed

    Examples:
      | validName                  | validLastName |
      | Auto_Test_ManagingProvider | auto          |

  Scenario Outline: Verify the "Customer" is able to create "New Managing Provider" when all the fields are populated with valid data and also Verify "Customer" is not able to update the "Managing Provider" and validation displays if any mandatory field is not populated while updating the customer and 	Verify "Customer" is navigated back to the "Managing Provider " page when clicked on "Back button" displaying on the "Update Managing Provider Details" page and Verify "Customer" is not able to update the "Managing Provider" with invalid details and Verify "Customer" is able to update the "Managing Provider" details
    When User click on "Managing Provider" tab
    Then Search and delete duplicate data <validName>
    When User click on the "New Managing Provider" button
    Then "New Managing Provider" form displays
    When User add <validName> in name field
    When User fill unique data in email field
    When User add <validMobile> in mobile number field
    When User add <validWebsite> in website field
    When User add <validOfficeNumber> in office number field
    When User add <validOfficeInfo> in office information field
    When User add <validState> in State field
    When User add <validCity> in city field
    When User add <validAddress> in address field
    When User add <validZipcode> in zipcode field
    When I click on the button with text Create
    Then Success message Managing Provider Added Succesfully. Credentials will be sent to an email! appears
    Then a "New Managing Provider" gets created And it displays <validName> in the "Managing Provider" list
    Then Search and delete duplicate data <updatedName>
    When User search the created provider <validName>
    When User click on the "View or Update" option under "Action" section
    Then User should navigate to the "Update Managing Provider Details" page
    When User update the "Managing Provider form" but does not populate one of the mandatory field
    Then User click on the "Update" button
    Then validation message Please enter name appears
    When User add <invalidName> in name field
    Then User click on the "Update" button
    Then validation message Please enter at least 2 characters. appears
    When User add <updatedName> in name field
    When I fill <invalidName> data in last name field
    Then User click on the "Update" button
    Then validation message Please enter at least 2 characters. appears
    When I fill <validLastName> data in last name field
    When User click on the "Back" button on "Update Managing Provider Details" page
    Then User should navigate back to the "Managing Provider" page And the Managing Provider does not get updated <validName>
    When User click on the "View or Update" option under "Action" section
    Then User should navigate to the "Update Managing Provider Details" page
    When User add <updatedName> in name field
    Then User click on the "Update" button
    Then Success message Managing Provider Updated Succesfully! appears
    Then The updated Managing provider displays in the "Managing provider list" with updated <updatedName>
    When I click On "Delete" icon
    Then Success message Managing Provider Deleted !! appears

    Examples:
      | validName                  | validMobile | validWebsite                             | validOfficeNumber | validOfficeInfo | validState | validCity  | validAddress | validZipcode | updatedName                   | invalidName | url      | inactiveEmail         | RegisteredAutoProvider          | validLastName |
      | Auto_Test_ManagingProvider |  1234567890 | https://portal.test.firstdayhc.com/login |        1111122222 | IT office       | Punjab     | Chandigarh | Abc 12345    |        00123 | Updated_Auto_ManagingProvider |           1 | loginUrl | automationWebProvider | automationProvider(Dont delete) | test          |

  Scenario Outline: Verify the "Customer" is able to create "New Managing Provider" and verify edit , search and delete functionalities under "Inactive managin provider screen"
    When User click on "Managing Provider" tab
    Then Search and delete duplicate data <validName>
    When User click on the "New Managing Provider" button
    Then "New Managing Provider" form displays
    When User add <validName> in name field
    When User fill unique data in email field
    When User add <validMobile> in mobile number field
    When User add <validWebsite> in website field
    When User add <validOfficeNumber> in office number field
    When User add <validOfficeInfo> in office information field
    When User add <validState> in State field
    When User add <validCity> in city field
    When User add <validAddress> in address field
    When User add <validZipcode> in zipcode field
    When I click on the button with text Create
    Then Success message Managing Provider Added Succesfully. Credentials will be sent to an email! appears
    Then a "New Managing Provider" gets created And it displays <validName> in the "Managing Provider" list
    When User click on the link Active and yes button
    Then Success message Managing Provider Inactive successfully appears
    Then Verify provider <validName> has removed from list
    When I click on the button with text Inactive Managing Providers
    Then Search and delete duplicate data <updatedName>
    When User search the created provider <validName>
    When User click on the "View or Update" option under "Action" section
    Then User should navigate to the "Update Managing Provider Details" page
    When User update the "Managing Provider form" but does not populate one of the mandatory field
    Then User click on the "Update" button
    Then validation message Please enter name appears
    When User add <invalidName> in name field
    Then User click on the "Update" button
    Then validation message Please enter at least 2 characters. appears
    When User add <updatedName> in name field
    When I fill <invalidName> data in last name field
    Then User click on the "Update" button
    Then validation message Please enter at least 2 characters. appears
    When I fill <validLastName> data in last name field
    When User click on the "Back" button on "Update Managing Provider Details" page
    Then User should navigate back to the "Managing Provider" page And the Managing Provider does not get updated <validName>
    When User click on the "View or Update" option under "Action" section
    Then User should navigate to the "Update Managing Provider Details" page
    When User add <updatedName> in name field
    Then User click on the "Update" button
    Then Success message Managing Provider Updated Succesfully! appears
    When User search the created provider <updatedName>
    Then The updated Managing provider displays in the "Managing provider list" with updated <updatedName>
    When I click On "Delete" icon
    Then Success message Managing Provider Deleted !! appears
    Then Deleted record should not be visible in the list

    Examples:
      | validName                  | validMobile | validWebsite                             | validOfficeNumber | validOfficeInfo | validState | validCity  | validAddress | validZipcode | updatedName                   | invalidName | url      | inactiveEmail         | RegisteredAutoProvider          | validLastName |
      | Auto_Test_ManagingProvider |  1234567890 | https://portal.test.firstdayhc.com/login |        1111122222 | IT office       | Punjab     | Chandigarh | Abc 12345    |        00123 | Updated_Auto_ManagingProvider |           1 | loginUrl | automationWebProvider | automationProvider(Dont delete) | test          |

  Scenario Outline: Verify "Customer" is able to change the status of Managing Provider to "Inactive" and Verify "Customer" is able to change the status of Managing Provider to "Active" and Verify a "Managing Provider" with "Inactive" status is not allowed to login on portal
    When User click on "Managing Provider" tab
    Then Search and active if provider <RegisteredAutoProvider> is already inactive under Inactive Managing Providers section
    When I click on the button with text Active Managing Providers
    When User search the created provider <RegisteredAutoProvider>
    When User click on the link Active and yes button
    Then Success message Managing Provider Inactive successfully appears
    Then Verify provider <RegisteredAutoProvider> has removed from list
    When I click on the button with text Inactive Managing Providers
    Then The "Managing Provider" now displayed there in list <RegisteredAutoProvider>
    When I hover over the "Settings" icon
    When I click on the link text Logout
    Then I get logged out from my account
    When Web app login using <provider>
    Then validation message You are not allow to login. Please contact support team. appears
    When Web app login using <userA>
    Then Verify that user successfully redirected on homepage
    When User click on "Managing Provider" tab
    Then User should on "Managing Provider" page
    When I click on the button with text Inactive Managing Providers
    Then The "Managing Provider" now displayed there in list <RegisteredAutoProvider>
    When User click on the link Inactive and yes button
    Then Success message Managing Provider Active successfully appears
    Then Verify provider <RegisteredAutoProvider> has removed from list
    When I click on the button with text Active Managing Providers
    Then The "Managing Provider" now displayed there in list <RegisteredAutoProvider>
    When I hover over the "Settings" icon
    When I click on the link text Logout
    Then I get logged out from my account
    When Web app login using <provider>
    Then providers/dashboard page displays
    When I hover over the "Settings" icon
    When I click on the link text Logout
    Then I get logged out from my account

    Examples:
      | RegisteredAutoProvider | url      | provider                       | userA                     |
      | managing_auto_provider | loginUrl | managingProviderForStatusCheck | customerLoginCrendentails |
# //---------------------Other Provider------------------//

  Scenario Outline: Verify the "Customer" is not able to create "New Other Provider" and validation displays if any mandatory field is not populated and verify that "Close" button is working on "New Other Provider" form and verify the validation if user add invalid data in "Other Providing" form.
    When Web app login using <userA>
    Then Verify that user successfully redirected on homepage
    When User click on "Other Provider" tab
    When User click on the button text New Other Provider
    Then "New Managing Provider" form displays
    When I click on the button with text Create
    Then validation message Please enter email address appears
    Then validation message Please enter name appears
    When User add <invalidName> in name field
    When I click on the button with text Create
    Then validation message Please enter at least 2 characters. appears
    When User add <invalidEmail> in email field
    Then validation message Please enter valid email. appears
    When User add <textInMobileNumber> in mobile number field
    When I click on the button with text Create
    Then validation message Please enter only numbers appears
    When User add <invalidMobileNumber> in mobile number field
    Then validation message Please enter at least 10 digits. appears
    When User add <invaliWebsite> in website field
    When I click on the button with text Create
    Then validation message Please enter a valid website URL appears
    When User add <textInMobileNumber> in office number field
    When I click on the button with text Create
    When User add <invalidMobileNumber> in office number field
    When User add <invalidName> in zipcode field
    When I click on the button with text Create
    Then validation message Please enter valid zipcode appears
    When I click on the button with text Close

    Examples:
      | url      | userA                     | invalidName | invalidEmail  | textInMobileNumber | textInMobileNumberField | invalidMobileNumber | invaliWebsite      |
      | loginUrl | customerLoginCrendentails |           1 | @@@@gmail.com | auto               | abcdef                  |               12453 | https://www.@@.com |

  Scenario Outline: Verify the "Customer" is able to create "New Other Provider" when only the mandatory fields are populated with valid data and also check "Customer" is not able to create "New Managing Provider" with already registered email
    When User click on "Other Provider" tab
    Then Search and delete duplicate data <validName>
    When User click on the button text New Other Provider
    Then "New Managing Provider" form displays
    When User add <validName> in name field
    When User fill unique data in email field
    When I click on the button with text Create
    Then Success message Other Provider Added Succesfully. Credentials will be sent to an email! appears
    Then a "New Managing Provider" gets created And it displays <validName> in the "Managing Provider" list
    When I use already registered <validName> and email to create New Other Provider and click on Create button
    Then validation message Please Enter Unique email. This email is already register with system. appears
    When I click on the button with text Close
    Then The "New Managing Provider" form should be closed

    Examples:
      | validName           |
      | Auto_Test_CustOther |

  Scenario Outline: Verify the "Customer" is able to create "New Other Provider" when all the fields are populated with valid data and also Verify "Customer" is not able to update the "Managing Provider" and validation displays if any mandatory field is not populated while updating the customer and 	Verify "Customer" is navigated back to the "Managing Provider " page when clicked on "Back button" displaying on the "Update Managing Provider Details" page and Verify "Customer" is not able to update the "Managing Provider" with invalid details and Verify "Customer" is able to update the "Managing Provider" details
    Then User refresh page
    When User click on "Other Provider" tab
    Then Search and delete duplicate data <validName>
    When User click on the button text New Other Provider
    When User add <validName> in name field
    When User fill unique data in email field
    When User add <validMobile> in mobile number field
    When User add <validWebsite> in website field
    When User add <validOfficeNumber> in office number field
    When User add <validOfficeInfo> in office information field
    When User add <validState> in State field
    When User add <validCity> in city field
    When User add <validAddress> in address field
    When User add <validZipcode> in zipcode field
    When I click on the button with text Create
    Then Success message Other Provider Added Succesfully. Credentials will be sent to an email! appears
    Then a "New Managing Provider" gets created And it displays <validName> in the "Managing Provider" list
    Then Search and delete duplicate data <updatedName>
    When User search the created provider <validName>
    When User click on the "View or Update" option under "Action" section
    Then User should navigate to the "Update Managing Provider Details" page
    When User update the "Managing Provider form" but does not populate one of the mandatory field
    Then User click on the "Update" button
    Then validation message Please enter name appears
    When User add <invalidName> in name field
    Then User click on the "Update" button
    Then validation message Please enter at least 2 characters. appears
    When User add <updatedName> in name field
    When User click on the "Back" button on "Update Managing Provider Details" page
    Then User should navigate back to the "Managing Provider" page And the Managing Provider does not get updated <validName>
    When User click on the "View or Update" option under "Action" section
    Then User should navigate to the "Update Managing Provider Details" page
    When User add <updatedName> in name field
    Then User click on the "Update" button
    Then Success message Other Provider Updated Succesfully! appears
    Then The updated Managing provider displays in the "Managing provider list" with updated <updatedName>
    When I click On "Delete" icon
    Then Success message Other Provider Deleted !! appears

    Examples:
      | validName           | validMobile | validWebsite                             | validOfficeNumber | validOfficeInfo | validState | validCity  | validAddress | validZipcode | updatedName                | invalidName | url      | inactiveEmail         | RegisteredAutoProvider          |
      | Auto_Test_CustOther |  1234567890 | https://portal.test.firstdayhc.com/login |        1111122222 | IT office       | Punjab     | Chandigarh | Abc 12345    |        00123 | Updated_Aut0_OtherProvider |           1 | loginUrl | automationWebProvider | automationProvider(Dont delete) |

  Scenario Outline: Verify "Customer" is able to change the status of Other Provider to "Inactive" and Verify "Customer" is able to change the status of Managing Provider to "Active" and Verify a "Managing Provider" with "Inactive" status is not allowed to login on portal
    When User click on "Other Provider" tab
    Then Search and active if provider <validName> is already inactive under Inactive Other Providers section
    When I click on the button with text Active Other Providers
    When User search the created provider <validName>
    Then User refresh page
    When User search the created provider <validName>
    When User click on the link Active and yes button
    Then Success message Other Provider Inactive Successfully !! appears
    Then Verify provider <validName> has removed from list
    When I click on the button with text Inactive Other Providers
    Then The "Managing Provider" now displayed there in list <validName>
    When I hover over the "Settings" icon
    When I click on the link text Logout
    Then I get logged out from my account
    When Web app login using <provider>
    Then validation message You are not allow to login. Please contact support team. appears
    When Web app login using <userA>
    Then Verify that user successfully redirected on homepage
    When User click on "Other Provider" tab
    When I click on the button with text Inactive Other Providers
    Then The "Managing Provider" now displayed there in list <validName>
    When User click on the link Inactive and yes button
    Then Success message Other Provider Active Successfully appears
    Then Verify provider <validName> has removed from list
    When I click on the button with text Active Other Providers
    Then The "Managing Provider" now displayed there in list <validName>
    When I hover over the "Settings" icon
    When I click on the link text Logout
    Then I get logged out from my account
    When Web app login using <provider>
    Then provider/dashboard page displays
    When I hover over the "Settings" icon
    Then Link text Logout is displaying
    Then Link text My Appointments is displaying
    Then Link text Profile is displaying
    Then Link text Change Password is displaying
    When I click on the link text My Appointments
    Then my-appointments page displays
    Then It redirects on the My Appointments screen
    When I hover over the "Settings" icon
    When I click on the link text Profile
    Then profile page displays
    Then Form is displaying on screen
    When I hover over the "Settings" icon
    When I click on the link text Change Password
    Then change-password page displays
    Then Form is displaying on screen
    Then It redirects on the Change Password screen

    Examples:
      | validName           | url      | provider                    | userA                     |
      | other_auto_provider | loginUrl | otherProviderForStatusCheck | customerLoginCrendentails |
# //-----------------------------Subadmin------------------------//

  Scenario Outline: Verify that user is able to logged in as sub admin and also verify the availability and redirection of all options
    When I hover over the "Settings" icon
    When I click on the link text Logout
    Then I get logged out from my account
    When Web app login using <credentials>
    Then It redirects on the Dashboard screen
    Then subadmin/dashboard page displays
    When I click on the second index link Managing Providers
    Then providers page displays
    Then User should on "Managing Provider" page
    Then Table is displaying on screen
    When I click on the second index link Hospital/Office
    Then hospital page displays
    Then Table is displaying on screen
    When I click on the second index link Vaccine Type
    Then vaccineType page displays
    Then Table is displaying on screen
    When I click on the second index link Diagnosis Type
    Then diagnosisType page displays
    Then Table is displaying on screen
    When I click on the second index link Hospital Note
    Then hospitalNote page displays
    Then Table is displaying on screen
    When I click on the second index link Master
    Then Second index Link text All Patients Alert is displaying
    When I click on the second index link All Patients Alert
    Then allAlert page displays
    Then It redirects on the All Patients Alert screen
    Then Table is displaying on screen
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
    Then Form is displaying on screen
    Then It redirects on the Change Password screen

    Examples:
      | credentials  |
      | subuserAdmin |

  Scenario Outline: Verify the "Customer" is not able to create "New Sub-Admin" and validation displays if any mandatory field is not populated and verify the validation if user add invalid data in form.
    When I hover over the "Settings" icon
    When I click on the link text Logout
    Then I get logged out from my account
    When Web app login using <userA>
    Then Verify that user successfully redirected on homepage
    When User click on "Subadmins" tab
    Then /administrator/subadmin page displays
    Then Search and delete duplicate data <validName>
    When User click on the button text New Subadmin
    Then "New Managing Provider" form displays
    When I click on the button with text Create
    Then validation message Please enter email address appears
    Then validation message Please enter first name appears
    Then validation message Please enter last name appears
    When User add <invalidEmail> in email field
    Then validation message Please enter valid email. appears
    When User add <invalidName> in zipcode field
    When I click on the button with text Create
    Then validation message Please enter valid zipcode appears
    When I click on the button with text Close

    Examples:
      | url      | userA                     | invalidName | invalidEmail  | validName           |
      | loginUrl | customerLoginCrendentails |           1 | @@@@gmail.com | other_auto_provider |

  Scenario Outline: Verify the functionality of add new subadmins
    When User click on "Subadmins" tab
    Then /administrator/subadmin page displays
    Then Search and delete duplicate data <validName>
    When User click on the button text New Subadmin
    Then "New Managing Provider" form displays
    When User add <validName> in name field
    When I fill <validLastName> data in last name field
    When User fill unique data in email field
    When User add <validMobile> in mobile number field
    When User add <validOfficeNumber> in office number field
    When User add <validOfficeInfo> in office information field
    When User add <validState> in State field
    When User add <validCity> in city field
    When User add <validAddress> in address field
    When User add <validZipcode> in zipcode field
    When I click on the button with text Create
    Then Success message Subadmin Added Succesfully. Credentials will be sent to an email! appears

    Examples:
      | validName          | validMobile | validOfficeNumber | validOfficeInfo | validState | validCity  | validAddress | validZipcode | updatedName           | invalidName | url      | inactiveEmail         | validLastName |
      | Auto_Test_SubAdmin |  1234567890 |        1111122222 | IT office       | Punjab     | Chandigarh | Abc 12345    |        00123 | Updated_Aut0_Subadmin |           1 | loginUrl | automationWebProvider | Auto          |

  Scenario Outline: Verify the "Customer" is able to create "New subadmin" when only the mandatory fields are populated with valid data and also check "Customer" is not able to create "New Subadmin" with already registered email
    When User click on "Subadmins" tab
    Then Search and delete duplicate data <validName>
    When User click on the button text New Subadmin
    Then "New Managing Provider" form displays
    When User add <validName> in name field
    When I fill <validLastName> data in last name field
    When User fill unique data in email field
    When I click on the button with text Create
    Then Success message Subadmin Added Succesfully. Credentials will be sent to an email! appears
    Then User refresh page
    Then a "New Managing Provider" gets created And it displays <validName> in the "Managing Provider" list
    When I use already registered <validName> and email to create New Subadmin and click on Create button
    Then validation message Please Enter Unique email. This email is already register with system. appears
    When I click on the button with text Close

    Examples:
      | validName          | validLastName |
      | Auto_Test_SubAdmin | auto          |

  Scenario Outline: Verify the "Customer" is able to create "New Subadmins" when all the fields are populated with valid data and also Verify update subadmin with both valid and invalid data and verify delete subadmin functionality
    When User click on "Subadmins" tab
    Then Search and delete duplicate data <validName>
    When User click on the button text New Subadmin
    Then "New Managing Provider" form displays
    When User add <validName> in name field
    When I fill <validLastName> data in last name field
    When User fill unique data in email field
    When User add <validMobile> in mobile number field
    When User add <validOfficeNumber> in office number field
    When User add <validOfficeInfo> in office information field
    When User add <validState> in State field
    When User add <validCity> in city field
    When User add <validAddress> in address field
    When User add <validZipcode> in zipcode field
    When I click on the button with text Create
    Then Success message Subadmin Added Succesfully. Credentials will be sent to an email! appears
    Then a "New Managing Provider" gets created And it displays <validName> in the "Managing Provider" list
    Then Search and delete duplicate data <updatedName>
    When User search the created provider <validName>
    When User click on the "View or Update" option under "Action" section
    Then User should navigate to the "Update Managing Provider Details" page
    When User update the "Managing Provider form" but does not populate one of the mandatory field
    Then User click on the "Update" button
    Then validation message Subadmin first name is required appears
    When User add <updatedName> in name field
    Then User click on the "Update" button
    Then Success message Subadmin Updated Succesfully! appears
    Then The updated Managing provider displays in the "Managing provider list" with updated <updatedName>
    When I click On "Delete" icon
    Then Success message Subadmin Deleted successfully !! appears
    Then Deleted record should not be visible in the list

    Examples:
      | validName          | validLastName | validMobile | validOfficeNumber | validOfficeInfo | validState | validCity  | validAddress | validZipcode | updatedName           | invalidName | url      | inactiveEmail         | RegisteredAutoProvider          |
      | Auto_Test_SubAdmin | auto          |  1234567890 |        1111122222 | IT office       | Punjab     | Chandigarh | Abc 12345    |        00123 | Updated_Aut0_Subadmin |           1 | loginUrl | automationWebProvider | automationProvider(Dont delete) |
