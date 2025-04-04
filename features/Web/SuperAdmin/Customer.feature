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
    When I click on the button with text Close
    Then A "New Customer" form closes

    Examples:
      | url      | userA |
      | loginUrl | admin | 
