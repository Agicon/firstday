Feature: Test cases for login page

  Scenario Outline: User login to app
    When login to app using email <email> and password <password>

    Examples:
     | email                            | password   |
     | testmymanagingprovider7jan@yopmail.com | Qwerty@123 |
