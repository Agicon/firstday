Feature: Test cases for login page

  Scenario Outline: User install or open the latest build and login to app
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
    Then Verify that user is on homepage
    When Verfiy all modules of Firstday-HC app on homepage
    When User clicks on vital signs module
    Then Verify all the features inside vital signs
    When User clicks on medical report module
    Then Verify all the features inside medical report
    When User clicks on providers module on homepage
    Then Verify all the tabs inside providers module
    When User clicks on settings module on homepage
    Then Verify all the tabs inside settings module
    When User click on "Hamburger" icon displaying in the top left corner
    When User click on the "Logout" option
    Then A logout confirmation popup displays
    When User click on the button with text NO
    Then The logout confirmation popup closes and provider remains logged in
    When User click on "Hamburger" icon displaying in the top left corner
    When User click on the "Logout" option
    Then A logout confirmation popup displays
    When User click on the button with text YES
    Then User get logged out from my account and gets navigated to login page
    Examples:
      | validLoginEmail | invalidPassword | invalidEmail       |
      | FHDCMobileLogin | 123450000       | testuser@gmail.com |

  
