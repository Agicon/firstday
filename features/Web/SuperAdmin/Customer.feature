Feature: Test cases for super admin customer page

  Scenario Outline: Verify the "Super Admin" is not able to create "New Customer" and validation displays if any mandatory field is not populated and verify the working of close button in popup
    When Open web url <url>
    When Web app login using <userA>
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
      | loginUrl | admin | 0           | Testing   | 9988877665 |
