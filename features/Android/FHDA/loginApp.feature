Feature: Test cases for login page

  Scenario Outline: User login to app
    When login to app using email <email> and password <password>
    Then Verify that user is on homepage
    Examples:
     | email                                  | password   |
     | testmymanagingprovider7jan@yopmail.com | Qwerty@123 |
