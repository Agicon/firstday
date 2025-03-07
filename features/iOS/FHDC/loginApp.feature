Feature: Test cases for login page

  Scenario Outline: User installe or open the latest build and login to app
    When iOS login to app using email <email> and password <password>
    Then For iOS, verify that user is on homepage
    Examples:
      | app       | email                         | password   |
      | FHDC Beta | testcaregiver5feb@yopmail.com | Qwerty@123 |
