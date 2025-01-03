Feature: The Internet Guinea Pig Website
@mobile
  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    # When I login with <username> and <password>
  #   Then I should see a flash message saying <message>

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
  #     | foobar   | barfoo               | Your username is invalid!      |
#   @web
#   Scenario Outline: As a user, I can log into the secure area
# When I switch to the mobile context
  #   Given I am on the login page
    # When I login with <username> and <password>

#  Scenario: Switch between Web and Mobile Context
    # Given I am on the login page
    # When I switch to the mobile context
    # Then I interact with a mobile element
    # When I switch to the web context
    # Then I interact with a web element