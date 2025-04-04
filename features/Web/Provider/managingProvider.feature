Feature: Test cases for login page

  Scenario Outline: User login to FHDC app as a customer on browser
    When Open web url <url>
    When Web app login using <userA>
    Then Verify that user successfully redirected on homepage
    When User click on "Managing Provider" tab
    Then User should on "Managing Provider" page
    When User click on the "New Managing Provider" button
    Then "New Managing Provider" form displays
    When I click on the button with text Create
    Then validation message Please enter email address appears
    Then validation message Please enter name appears
    When I click on the button with text Close
    Then The "New Managing Provider" form should be closed

    Examples:
      | url      | userA                     |
      | loginUrl | customerLoginCrendentails |
