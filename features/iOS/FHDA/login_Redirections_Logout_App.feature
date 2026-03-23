Feature: Provider app Test suit for iOS login all options availability , redirections and logout page for FHDA

  Scenario Outline: User login to Firstday-HC provider app
    When User leave the "Email field" empty And populate the <invalidPassword> "Password field" And click on "Login" button
    Then Validation message appears Please enter an email id
    Then User is not able to login
    When User leave the "Password field" empty And populate the <invalidEmail> "Email field" And click on "Login" button
    Then Validation message appears Password cannot be empty
    Then User is not able to login
    When User enter invalid <invalidEmail> and <invalidPassword> in their respective fields And click on "Login" button
    Then Validation message appears Password must contain at least one lowercase letter
    Then User is not able to login
    When User enter valid <validLoginEmail> and <invalidPassword> in their respective fields And click on "Login" button
    Then Validation message appears Password must contain at least one lowercase letter
    Then User is not able to login
    When iOS login to app using <validLoginEmail>
    Then For iOS, verify that user is on FHDA moblie provider homepage
    Then Verfiy all the modules on provider dashboard
    When I click on All Patients option
    Then I get navigated to ic filter screen
    When I click on My Patients option
    Then I get navigated to ic filter screen
    When I click on Alerts option
    Then I get navigated to All screen
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
    Then I get navigated to Change Password screen
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
    Then I get navigated to YES screen
    Then User use "Back command" to back the screen
    When User navigate to the "Settings" tab
    When User click on the "Logout" option
    Then A logout confirmation popup displays
    When User click on the button with text NO
    Then The logout confirmation popup closes and the provider remains logged in
    When User click on the "Logout" option
    Then A logout confirmation popup displays
    When User click on the button with text YES
    Then User get logged out from my account and gets navigated to login page

    Examples:
      | app       | validLoginEmail           | invalidPassword | invalidEmail       | firstChild |
      | FHDA Beta | providerLoginCrendentails | 123450000       | testuser@gmail.com | Baby 21    |
