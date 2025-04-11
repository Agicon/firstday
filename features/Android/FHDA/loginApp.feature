Feature: Test cases for login page

  Scenario Outline: Verify that login is not allowed with "empty email" field and "empty password" field and "invalid email and password" and "valid email and invalid password" but user is able to login on "Provider" app with valid credentials
    When User leave the "Email  field" empty And populate the <invalidPassword> "Password field" And click on "Login" button
    Then User is not able to login
    When User leave the "Password field" empty And populate the <invalidEmail> "Email field" And click on "Login" button
    Then User is not able to login
    When User enter invalid <invalidEmail> and <invalidPassword> in their respective fields And click on "Login" button
    Then User is not able to login
    When User enter valid <validEmail> and <invalidPassword> in their respective fields And click on "Login" button
    Then User is not able to login
    When login to app using <userA>
    Then Verify that user is on FHDA moblie provider homepage
    Examples:
      | userA           | invalidPassword | invalidEmail      | validEmail                             |
      | FHDAMobileLogin | 123450000       | test@@@@gmail.com | testmymanagingprovider7jan@yopmail.com |