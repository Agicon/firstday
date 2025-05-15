Feature: Test cases for login page

  Scenario Outline: User install or open the latest build and login to app
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
    Examples:
      | app       | validLoginEmail |
      | FHDC Beta | FHDCMobileLogin |

  
