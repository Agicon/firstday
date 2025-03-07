Feature: Test cases for login page

  Scenario Outline: User install or open the latest build and login to app
    When login to app using email <email> and password <password>
    Then Verify that user is on homepage
    When Verfiy all modules of Firstday-HC app on homepage
    Examples:
      | app       | email                         | password   |
      | FHDC Beta | testcaregiver5feb@yopmail.com | Qwerty@123 |

  
