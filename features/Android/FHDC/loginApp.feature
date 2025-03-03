Feature: Test cases for login page

  Scenario Outline: User installe or open the latest build and login to app
    When login to app using email <email> and password <password>

    Examples:
      | app   | email                            | password   |
      | FHDC Beta | testmycaregiver2jan4@yopmail.com | Qwerty@123 |
