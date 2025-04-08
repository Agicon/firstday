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

  Scenario Outline: Verify the "Customer" is able to create "New Managing Provider" when only the mandatory fields are populated with valid data
    Then User refresh the screen
    When User click on the "New Managing Provider" button
    Then "New Managing Provider" form displays
    When User add <validName> in name field
    When User add <validEmail> in email field
    When I click on the button with text Create
    Then Success message Managing Provider Added Succesfully. Credentials will be sent to an email! appears
    Then a "New Managing Provider" gets created And it displays <validName> and <validEmail> in the "Managing Provider" list
    When User click on the "New Managing Provider" button
    Then "New Managing Provider" form displays
    Examples:
      | validName   | validEmail          |
      | NewProvider | Provider1@gmail.com |
