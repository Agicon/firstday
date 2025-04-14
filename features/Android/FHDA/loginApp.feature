Feature: Test cases for login page

  Scenario Outline: Verify that login is not allowed with "empty email" field and "empty password" field and "invalid email and password" and "valid email and invalid password" but user is able to login on "Provider" app with valid credentials and Verify the user is not logged out from the "Provider" account if selects 'No" option on the "Logout confirmation" popup and Verify the user is able to logout from "Provider" account
    When User leave the "Email  field" empty And populate the <invalidPassword> "Password field" And click on "Login" button
    Then User is not able to login
    When User leave the "Password field" empty And populate the <invalidEmail> "Email field" And click on "Login" button
    Then User is not able to login
    When User enter invalid <invalidEmail> and <invalidPassword> in their respective fields And click on "Login" button
    Then Validation message appears This Email is not registered with us
    Then User is not able to login
    When User enter valid <validLoginEmail> and <invalidPassword> in their respective fields And click on "Login" button
    Then Validation message appears Email or Password is incorrect
    Then User is not able to login
    When login to app using <validLoginEmail>
    Then Validation message appears Login Success
    Then Verify that user is on FHDA moblie provider homepage
    When User navigate to the "Settings" tab
    When User click on the "Logout" option
    Then A logout confirmation popup displays
    When User click on the button with text No
    Then The logout confirmation popup closes and the provider remains logged in
    When User click on the "Logout" option
    Then A logout confirmation popup displays
    When User click on the button with text Yes
    Then Validation message appears You are Logged out.
    Then User get logged out from my account and gets navigated to login page

    Examples:
      | validLoginEmail | invalidPassword | invalidEmail       |
      | FHDAMobileLogin | 123450000       | testuser@gmail.com |