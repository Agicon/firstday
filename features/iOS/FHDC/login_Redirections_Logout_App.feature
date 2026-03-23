Feature: Caregiver App Test suit for FHDC login,redirections and logout page

  Scenario Outline: Verify that login is not allowed with "empty email" field and "empty password" field and "invalid email and password" and "valid email and invalid password" but user is able to login on "Caregiver" app with valid credentials, verify all redirections and Verify the user is not logged out from the "Caregiver" account if selects 'No" option on the "Logout confirmation" popup and Verify the user is able to logout from "Caregiver" account

    When User leave the "Email field" empty And populate the <invalidPassword> "Password field" And click on "Login" button
    Then User is not able to login
    When User leave the "Password field" empty And populate the <invalidEmail> "Email field" And click on "Login" button
    Then User is not able to login
    When User enter invalid <invalidEmail> and <invalidPassword> in their respective fields And click on "Login" button
    Then Validation message appears Password must contain at least one lowercase letter
    Then User is not able to login
    When User enter valid <validLoginEmail> and <invalidPassword> in their respective fields And click on "Login" button
    Then Validation message appears Password must contain at least one lowercase letter
    Then User is not able to login
    When iOS login to app using <validLoginEmail>
    Then Select child <firstChild> from the child list
    Then For iOS, verify the homepage
    When User clicks on vital signs module
    Then Verify all the features inside vital signs
    When I click on Heart Rate option
    Then I get navigated to Heart Rate screen
    Then I click on the back button
    When I click on O2 Saturation option
    Then I get navigated to O2 Saturation screen
    Then I click on the back button
    When I click on Respiratory Rate option
    Then I get navigated to Respiratory Rate screen
    Then I click on the back button
    When For ios, user click on the button Temperature
    Then I get navigated to Temperature screen
    Then I click on the back button
    Then User click on the module back button to exit from the module
    When User clicks on medical report module
    Then Verify all the features inside medical report
    When I click on Diagnosis option
    Then I get navigated to Active screen
    Then I click on the back button
    Then User click on the medication tab
    Then I click on the back button
    When I click on Results option
    Then I get navigated to Results screen
    When I click on Laboratory option
    When For ios, click on click to see full graph option
    Then I get navigated to CBC screen
    Then I click on the back button
    When I click on Imaging option
    Then I get navigated to Xray screen
    Then I click on the back button
    When I click on Other option
    Then I get navigated to Other Results screen
    Then I click on the back button
    When I click on Send us a result option
    Then I get navigated to Take Picture screen
    Then User use "Back command" to back the screen
    Then I click on the back button
    When I click on Tracker option
    Then I get navigated to Growth screen
    Then I click on the back button
    When I click on Vaccinations option
    Then I get navigated to Vaccination screen
    Then I click on the back button
    When For ios, user click on the "Media" module
    Then I get navigated to Media screen
    Then I click on the back button
    When I click on Documents option
    Then I get navigated to Documents screen
    When I click on Other Provider Records option
    Then I get navigated to Other Provider Records screen
    Then I click on the back button
    When I click on Hospital Records option
    Then I get navigated to Hospital Records screen
    Then I click on the back button
    When I click on Share Records option
    Then I get navigated to Share Documents screen
    Then User click on the cross button
    When I click on Send Us A Documents option
    Then I get navigated to Send Us A Result screen
    Then User use "Back command" to back the screen
    Then I click on the back button
    When I click on Send us a result option
    Then I get navigated to Take Picture screen
    Then User use "Back command" to back the screen
    Then User click on the module back button to exit from the module
    When User clicks on providers module on homepage
    Then Verify all the tabs inside providers module
    When I click on Appointments option
    Then I get navigated to Create Appointment Reminder screen
    Then User click on the module back button to exit from the module
    When User clicks on settings module on homepage
    Then Verify all the tabs inside settings module
    When I click on Audio Alert Setting option
    Then I get navigated to Vital Sign Alert screen
    Then I click on the back button
    When I click on My Contact Information option
    Then I get navigated to Contact Details screen
    Then I click on the back button
    When I click on My Account option
    Then I get navigated to Account Details screen
    Then I click on the back button
    # When I click on My Baby’s Information option
    # Then I get navigated to Profile Picture screen
    # Then I click on the back button
    When I click on Change Password option
    Then I get navigated to SUBMIT screen
    Then I click on the back button
    # When I click on Change Child option
    # Then I get navigated to Select your child screen
    # Then User use "Back command" to back the screen
    Then I click on the back button
    When User click on "Hamburger" icon displaying in the top left corner
    When User click on the "Logout" option
    Then A logout confirmation popup displays
    When User click on the button with text NO
    Then The logout confirmation popup closes and the provider remains logged in
    When User click on the "Logout" option
    Then A logout confirmation popup displays
    When User click on the button with text YES
    Then User get logged out from my account and gets navigated to login page

    Examples:
      | app       | validLoginEmail | invalidPassword | invalidEmail       | firstChild        |
      | FHDC Beta | FHDCMobileLogin | 123450000       | testuser@gmail.com | Patient_Auto_Test |
