Feature: Test cases for login page

  Scenario Outline: User installe or open the latest build and login to app
    When Open web url <url>
     When Web app login using <userA>

    Examples:
      | url   | userA|
      |loginUrl|admin|
      # | https://portal.test.firstdayhc.com/login | admin@firstdayhc.com|letsdoit@123|
