Feature: Provide app Test cases for login and logout page and also verify the availability and redirections of menu and settings options

  Scenario Outline: Verify that login is not allowed with "empty email" field and "empty password" field and "invalid email and password" and "valid email and invalid password" but user is able to login on "Provider" app with valid credentials and Verify the user is not logged out from the "Provider" account if selects 'No" option on the "Logout confirmation" popup and Verify the user is able to logout from "Provider" account
    When User leave the "Email field" empty And populate the <invalidPassword> "Password field" And click on "Login" button
    Then User is not able to login
    When User leave the "Password field" empty And populate the <invalidEmail> "Email field" And click on "Login" button
    Then User is not able to login
    When User enter invalid <invalidEmail> and <invalidPassword> in their respective fields And click on "Login" button
    Then Validation message appears Incorrect username or password.
    Then User is not able to login
    When User enter valid <validLoginEmail> and <invalidPassword> in their respective fields And click on "Login" button
    Then Validation message appears Incorrect username or password.
    Then User is not able to login
    When login to app using <validLoginEmail>
    Then Validation message appears Login Success
    Then Verify that user is on FHDA moblie provider homepage
    Then Verfiy all the modules on provider dashboard
    When I click on All Patients option
    Then I get navigated to Search Patient screen
    When I click on My Patients option
    Then I get navigated to Search Patient screen
    When I click on Alerts option
    Then I get navigated to My Patient screen
    When I click on Settings option
    Then Verify all the feautres under settings module for provider app
    Then I get navigated to Audio Alert Setting screen
    When I click on Audio Alert Setting option
    Then I get navigated to Vital Sign Alert screen
    Then I click on the back button
    When I click on My Profile option
    Then I get navigated to My Profile screen
    Then I click on the back button
    When I click on Change Password option
    Then I get navigated to Old Password screen
    Then I click on the back button
    When I click on Contact Us option
    Then I get navigated to Submit screen
    Then I click on the back button
    When I click on Terms & Conditions option
    Then I get navigated to Terms & Conditions screen
    Then I click on the back button
    When I click on Privacy Policy option
    Then I get navigated to Privacy Policy screen
    Then I click on the back button
    When I click on Logout option
    Then I get navigated to Yes screen
    Then Use "Back command" to close the popup
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
