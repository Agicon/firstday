Feature: Test cases for "Managing Provider" page

  Scenario Outline: Verify the "Customer" is not able to create "New Managing Provider" and validation displays if any mandatory field is not populated and verify that "Close" button is working on "New Managing Provider" form and verify the validation if user add invalid data in "Managing Providing" form.
    When Open web url <url>
    When Web app login using <userA>
    Then Verify that user successfully redirected on homepage
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
      | url      | userA                     | invalidName | invalidEmail  | textInMobileNumberField | invalidMobileNumber | invaliWebsite      |
      | loginUrl | customerLoginCrendentails | 1           | @@@@gmail.com | abcdef                  | 12453               | https://www.@@.com |

  Scenario Outline: Verify the "Customer" is able to create "New Managing Provider" when only the mandatory fields are populated with valid data and also check "Customer" is not able to create "New Managing Provider" with already registered email
    When User click on "Managing Provider" tab
    Then User should on "Managing Provider" page
    Then Search and delete already added provider <validName>
    When User click on the "New Managing Provider" button
    Then "New Managing Provider" form displays
    When User add <validName> in name field
    When User fill unique data in email field
    When I click on the button with text Create
    Then Success message Managing Provider Added Succesfully. Credentials will be sent to an email! appears
    Then a "New Managing Provider" gets created And it displays <validName> in the "Managing Provider" list
    When User use already registered <validName> and email to create new providing manager and click on Create button
    Then validation message Please Enter Unique email. This email is already register with system. appears
    When I click on the button with text Close
    Then The "New Managing Provider" form should be closed

    Examples:
      | validName              |
      | AutomationTestProvider |

  Scenario Outline: Verify the "Customer" is able to create "New Managing Provider" when all the fields are populated with valid data and also Verify "Customer" is not able to update the "Managing Provider" and validation displays if any mandatory field is not populated while updating the customer and 	Verify "Customer" is navigated back to the "Managing Provider " page when clicked on "Back button" displaying on the "Update Managing Provider Details" page and Verify "Customer" is not able to update the "Managing Provider" with invalid details and Verify "Customer" is able to update the "Managing Provider" details
    When User click on "Managing Provider" tab
    Then Search and delete already added provider <validName>
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
    Then Success message Managing Provider Updated Succesfully! appears
    Then The updated Managing provider displays in the "Managing provider list" with updated <updatedName>

    Examples:
      | validName        | validMobile | validWebsite                             | validOfficeNumber | validOfficeInfo | validState | validCity  | validAddress | validZipcode | updatedName             | invalidName | url      | inactiveEmail         | RegisteredAutoProvider          |
      | ManagingProvider | 1234567890  | https://portal.test.firstdayhc.com/login | 1111122222        | IT office       | Punjab     | Chandigarh | Abc 12345    | 00123        | UpdatedManagingProvider | 1           | loginUrl | automationWebProvider | automationProvider(Dont delete) |

  Scenario Outline:  Verify "Customer" is able to change the status of Managing Provider to "Inactive" and Verify "Customer" is able to change the status of Managing Provider to "Active" and Verify a "Managing Provider" with "Inactive" status is not allowed to login on portal
    When User click on "Managing Provider" tab
    When User search the created provider <RegisteredAutoProvider>
    When User click on the link Active
    Then Success message Managing Provider Inactive successfully appears
    Then Verify inactive provider <RegisteredAutoProvider> has removed from "Managing provider list"
    When I click on the button with text Inactive Managing Providers
    Then The "Managing Provider" now displayed there in the "Inactive Managing Provider" list <RegisteredAutoProvider>
    When User click on the link Inactive
    Then Success message Managing Provider Active successfully appears
    Then Verify active provider <RegisteredAutoProvider> has removed from "Inactive Managing provider list"
    When I click on the button with text Active Managing Providers
    Then The "Managing Provider" now displayed there in the "Active Managing Provider" list <RegisteredAutoProvider>

    Examples:
      | url      | inactiveEmail         | RegisteredAutoProvider          |
      | loginUrl | automationWebProvider | automationProvider(Dont delete) |