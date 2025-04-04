Feature: Test cases for login page

  Scenario Outline: User login to FHDC app as a customer on browser
    When Open web url <url>
    When Web app login using <userA>
    Then Verify that user successfully redirected on homepage
    Examples:
      |url     |userA                    |
      |loginUrl|customerLoginCrendentails|

Scenario Outline: Verify that user is able to close the managing provider form using "Close" button   
  Then Verify that user successfully redirected on homepage
  When User click on "Managing Provider" tab
  Then User should on "Managing Provider" page
  When User click on the "New Managing Provider" button	
  Then "New Managing Provider" form displays
  When User click on the "Close" button
  Then The "New Managing Provider" form should be closed

Scenario Outline: Verify the "Customer" is not able to create "New Managing Provider" and validation displays if any mandatory field is not populated
  Then Verify that user successfully redirected on homepage
  When User click on "Managing Provider" tab
  Then User should on "Managing Provider" page
  When User click on the "New Managing Provider" button	
  Then "New Managing Provider" form displays
  When User fills all the fileds on form except one mandatroy field 
  Then Alert message should displayed below that field